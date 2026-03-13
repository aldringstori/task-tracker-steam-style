import Database from 'better-sqlite3';
import path from 'path';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

const isBuild = process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD;
const dbPath = isBuild ? ':memory:' : path.join(process.cwd(), 'data', 'tasks.db');

// Ensure data directory exists only at runtime.
if (!isBuild) {
  // Local import keeps the build phase light.
  const fs = require('fs');
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

const db = new Database(dbPath, { timeout: 5000 });

// Enable WAL mode for better concurrent access
db.pragma('journal_mode = WAL');
db.pragma('busy_timeout = 5000');

// Initialize database schema
db.exec(`
  CREATE TABLE IF NOT EXISTS tasks (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT,
    color TEXT NOT NULL,
    total_time INTEGER DEFAULT 0,
    is_active INTEGER DEFAULT 0,
    start_time INTEGER,
    last_active INTEGER,
    created_at INTEGER NOT NULL,
    updated_at INTEGER NOT NULL
  );

  CREATE TABLE IF NOT EXISTS sessions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task_id TEXT NOT NULL,
    start INTEGER NOT NULL,
    end INTEGER NOT NULL,
    duration INTEGER NOT NULL,
    created_at INTEGER NOT NULL,
    FOREIGN KEY (task_id) REFERENCES tasks(id) ON DELETE CASCADE
  );

  CREATE INDEX IF NOT EXISTS idx_sessions_task_id ON sessions(task_id);
  CREATE INDEX IF NOT EXISTS idx_sessions_start ON sessions(start);
`);

export default db;
