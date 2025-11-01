import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// GET all tasks
export async function GET() {
  try {
    const tasks = db.prepare(`
      SELECT * FROM tasks ORDER BY updated_at DESC
    `).all();

    const tasksWithSessions = tasks.map((task: any) => {
      const sessions = db.prepare(`
        SELECT * FROM sessions WHERE task_id = ? ORDER BY start DESC
      `).all(task.id);

      return {
        id: task.id,
        name: task.name,
        description: task.description,
        color: task.color,
        totalTime: task.total_time,
        isActive: Boolean(task.is_active),
        startTime: task.start_time,
        lastActive: task.last_active,
        sessions: sessions.map((s: any) => ({
          start: s.start,
          end: s.end,
          duration: s.duration
        }))
      };
    });

    return NextResponse.json({ tasks: tasksWithSessions });
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

// POST create new task
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, description, color } = body;
    const now = Date.now();

    db.prepare(`
      INSERT INTO tasks (id, name, description, color, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(id, name, description || '', color, now, now);

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}
