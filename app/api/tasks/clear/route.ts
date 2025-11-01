import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function POST() {
  try {
    // Delete all sessions and tasks
    db.prepare('DELETE FROM sessions').run();
    db.prepare('DELETE FROM tasks').run();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error clearing data:', error);
    return NextResponse.json({ error: 'Failed to clear data' }, { status: 500 });
  }
}
