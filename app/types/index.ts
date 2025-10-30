export interface Task {
  id: string;
  name: string;
  description: string;
  color: string;
  totalTime: number;
  isActive: boolean;
  startTime: number | null;
  lastActive: number | null;
  sessions: Session[];
}

export interface Session {
  start: number;
  end: number;
  duration: number;
}

export interface Achievement {
  id: string;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
}

export interface ProfileStats {
  totalTasks: number;
  totalTime: number;
  totalSessions: number;
  avgSession: number;
  level: number;
  xp: number;
}
