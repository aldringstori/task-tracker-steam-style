import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const now = Date.now();

    // Stop any currently active task
    const activeTasks = db.prepare('SELECT id, start_time FROM tasks WHERE is_active = 1').all() as any[];

    for (const activeTask of activeTasks) {
      if (activeTask.start_time) {
        const duration = Math.floor((now - activeTask.start_time) / 1000);

        // Save session
        db.prepare(`
          INSERT INTO sessions (task_id, start, end, duration, created_at)
          VALUES (?, ?, ?, ?, ?)
        `).run(activeTask.id, activeTask.start_time, now, duration, now);

        // Update task total time
        db.prepare(`
          UPDATE tasks
          SET total_time = total_time + ?,
              is_active = 0,
              start_time = NULL,
              last_active = ?,
              updated_at = ?
          WHERE id = ?
        `).run(duration, now, now, activeTask.id);
      }
    }

    // Start the requested task
    db.prepare(`
      UPDATE tasks
      SET is_active = 1,
          start_time = ?,
          last_active = ?,
          updated_at = ?
      WHERE id = ?
    `).run(now, now, now, params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error starting task:', error);
    return NextResponse.json({ error: 'Failed to start task' }, { status: 500 });
  }
}
