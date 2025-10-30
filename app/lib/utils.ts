import { Task, ProfileStats, Achievement } from '../types';

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours === 0 && minutes === 0) {
    return '< 1 minute';
  } else if (hours === 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`;
  } else {
    const hourStr = `${hours} hour${hours !== 1 ? 's' : ''}`;
    if (minutes > 0) {
      return `${hourStr}, ${minutes} min`;
    }
    return hourStr;
  }
};

export const formatTimeHMS = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
};

export const formatTimeShort = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (hours >= 1) {
    return `${hours}h`;
  } else if (minutes >= 1) {
    return `${minutes}m`;
  } else {
    return '< 1m';
  }
};

export const formatDate = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) {
    return 'Just now';
  } else if (minutes < 60) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
  } else if (days < 7) {
    return `${days} day${days !== 1 ? 's' : ''} ago`;
  } else {
    return date.toLocaleDateString();
  }
};

export const calculateProfileStats = (tasks: Task[]): ProfileStats => {
  const totalTasks = tasks.length;
  const totalTime = tasks.reduce((sum, task) => sum + task.totalTime, 0);
  const totalSessions = tasks.reduce((sum, task) => sum + (task.sessions?.length || 0), 0);
  const avgSession = totalSessions > 0 ? Math.floor(totalTime / totalSessions) : 0;

  // Calculate level and XP
  const hoursTracked = Math.floor(totalTime / 3600);
  const level = Math.min(Math.floor(hoursTracked / 2) + Math.floor(totalTasks / 5) + 1, 100);
  const xp = (hoursTracked * 10) + (totalTasks * 25);

  return {
    totalTasks,
    totalTime,
    totalSessions,
    avgSession,
    level,
    xp
  };
};

export const getAchievements = (stats: ProfileStats): Achievement[] => {
  return [
    {
      id: 'first_task',
      name: 'First Steps',
      icon: '🎯',
      description: 'Create your first task',
      unlocked: stats.totalTasks >= 1
    },
    {
      id: 'task_collector',
      name: 'Collector',
      icon: '📚',
      description: 'Create 10 tasks',
      unlocked: stats.totalTasks >= 10
    },
    {
      id: 'first_hour',
      name: 'Getting Started',
      icon: '⏰',
      description: 'Track 1 hour of work',
      unlocked: stats.totalTime >= 3600
    },
    {
      id: 'dedicated',
      name: 'Dedicated',
      icon: '💪',
      description: 'Track 10 hours of work',
      unlocked: stats.totalTime >= 36000
    },
    {
      id: 'marathon',
      name: 'Marathon',
      icon: '🏃',
      description: 'Track 50 hours of work',
      unlocked: stats.totalTime >= 180000
    },
    {
      id: 'century',
      name: 'Century',
      icon: '💯',
      description: 'Track 100 hours of work',
      unlocked: stats.totalTime >= 360000
    },
    {
      id: 'session_starter',
      name: 'Session Pro',
      icon: '🎮',
      description: 'Complete 25 sessions',
      unlocked: stats.totalSessions >= 25
    },
    {
      id: 'consistency',
      name: 'Consistent',
      icon: '📈',
      description: 'Complete 100 sessions',
      unlocked: stats.totalSessions >= 100
    }
  ];
};

export const darkenColor = (color: string, percent: number): string => {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = (num >> 8 & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;

  return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
    (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
    (B < 255 ? B < 1 ? 0 : B : 255))
    .toString(16).slice(1);
};
