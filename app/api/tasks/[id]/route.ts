import { NextRequest, NextResponse } from 'next/server';
import db from '@/lib/db';

// PUT update task
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { name, description, color } = body;
    const now = Date.now();

    db.prepare(`
      UPDATE tasks
      SET name = ?, description = ?, color = ?, updated_at = ?
      WHERE id = ?
    `).run(name, description || '', color, now, params.id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json({ error: 'Failed to update task' }, { status: 500 });
  }
}

// DELETE task
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Sessions will be deleted automatically due to CASCADE
    db.prepare('DELETE FROM tasks WHERE id = ?').run(params.id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json({ error: 'Failed to delete task' }, { status: 500 });
  }
}
