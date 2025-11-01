import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const now = Date.now();

    // Get the task
    const task = db.prepare('SELECT * FROM tasks WHERE id = ?').get(params.id) as any;

    if (!task || !task.is_active || !task.start_time) {
      return NextResponse.json({ error: 'Task is not active' }, { status: 400 });
    }

    const duration = Math.floor((now - task.start_time) / 1000);

    // Save session
    db.prepare(`
      INSERT INTO sessions (task_id, start, end, duration, created_at)
      VALUES (?, ?, ?, ?, ?)
    `).run(params.id, task.start_time, now, duration, now);

    // Update task
    db.prepare(`
      UPDATE tasks
      SET total_time = total_time + ?,
          is_active = 0,
          start_time = NULL,
          last_active = ?,
          updated_at = ?
      WHERE id = ?
    `).run(duration, now, now, params.id);

    return NextResponse.json({ success: true, duration });
  } catch (error) {
    console.error('Error stopping task:', error);
    return NextResponse.json({ error: 'Failed to stop task' }, { status: 500 });
  }
}
