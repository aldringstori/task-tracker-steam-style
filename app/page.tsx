'use client';

import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import LibraryView from './components/LibraryView';
import ProfileView from './components/ProfileView';
import TaskModal from './components/TaskModal';
import { Task } from './types';
import { calculateProfileStats, getAchievements } from './lib/utils';

type ViewType = 'library' | 'profile';

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [currentView, setCurrentView] = useState<ViewType>('library');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    // Load tasks from localStorage
    const saved = localStorage.getItem('steamTaskTracker');
    if (saved) {
      try {
        const data = JSON.parse(saved);
        const loadedTasks = (data.tasks || []).map((task: Task) => ({
          ...task,
          isActive: false, // Stop all tasks on page load
        }));
        setTasks(loadedTasks);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      // Save tasks to localStorage
      localStorage.setItem('steamTaskTracker', JSON.stringify({ tasks }));
    }
  }, [tasks, mounted]);

  // Timer effect
  useEffect(() => {
    const activeTask = tasks.find((t) => t.isActive);

    if (activeTask) {
      // Start timer
      timerIntervalRef.current = setInterval(() => {
        setTasks((prevTasks) =>
          prevTasks.map((task) => {
            if (task.id === activeTask.id && task.isActive && task.startTime) {
              const currentTime = Math.floor((Date.now() - task.startTime) / 1000);
              return task;
            }
            return task;
          })
        );
      }, 1000);
    } else {
      // Clear timer
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }

    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
      }
    };
  }, [tasks]);

  const handleAddTask = (name: string, description: string, color: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      description,
      color,
      totalTime: 0,
      isActive: false,
      startTime: null,
      lastActive: null,
      sessions: [],
    };

    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
    setSelectedTask(newTask);
  };

  const handlePlayTask = (task: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => {
        if (t.id === task.id) {
          if (t.isActive) {
            // Stop task
            const sessionDuration = Math.floor((Date.now() - (t.startTime || Date.now())) / 1000);
            return {
              ...t,
              isActive: false,
              totalTime: t.totalTime + sessionDuration,
              lastActive: Date.now(),
              startTime: null,
              sessions: [
                ...t.sessions,
                {
                  start: t.startTime || Date.now(),
                  end: Date.now(),
                  duration: sessionDuration,
                },
              ],
            };
          } else {
            // Start task
            return {
              ...t,
              isActive: true,
              startTime: Date.now(),
            };
          }
        } else if (t.isActive) {
          // Stop other active tasks
          const sessionDuration = Math.floor((Date.now() - (t.startTime || Date.now())) / 1000);
          return {
            ...t,
            isActive: false,
            totalTime: t.totalTime + sessionDuration,
            lastActive: Date.now(),
            startTime: null,
            sessions: [
              ...t.sessions,
              {
                start: t.startTime || Date.now(),
                end: Date.now(),
                duration: sessionDuration,
              },
            ],
          };
        }
        return t;
      })
    );

    // Update selected task
    if (selectedTask?.id === task.id) {
      setSelectedTask((prev) => {
        if (!prev) return null;
        const updatedTask = tasks.find((t) => t.id === task.id);
        return updatedTask || prev;
      });
    }
  };

  const handleExportData = () => {
    const data = {
      tasks,
      exportDate: new Date().toISOString(),
      stats: calculateProfileStats(tasks),
    };

    const dataStr = JSON.stringify(data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `task-tracker-export-${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    alert('Data exported successfully!');
  };

  const handleClearData = () => {
    if (confirm('Are you sure you want to clear ALL data? This cannot be undone!')) {
      if (confirm('This will delete all tasks and statistics. Are you absolutely sure?')) {
        // Stop all active tasks
        setTasks([]);
        setSelectedTask(null);
        localStorage.removeItem('steamTaskTracker');
        alert('All data has been cleared.');
      }
    }
  };

  const stats = calculateProfileStats(tasks);
  const achievements = getAchievements(stats);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <div className="steam-container bg-[#1b2838] min-h-screen">
      <Header stats={stats} onExportData={handleExportData} onClearData={handleClearData} />

      {/* View Switcher (Hidden, controlled by navigation) */}
      <div className="bg-[#16212d] border-b border-black">
        <div className="max-w-7xl mx-auto px-4 py-2 flex gap-4">
          <button
            onClick={() => setCurrentView('library')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              currentView === 'library'
                ? 'bg-primary/20 text-primary'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Library
          </button>
          <button
            onClick={() => setCurrentView('profile')}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              currentView === 'profile'
                ? 'bg-primary/20 text-primary'
                : 'text-slate-400 hover:text-white hover:bg-slate-700/50'
            }`}
          >
            Profile
          </button>
        </div>
      </div>

      {/* Render Current View */}
      {currentView === 'library' ? (
        <LibraryView
          tasks={tasks}
          selectedTask={selectedTask}
          onSelectTask={setSelectedTask}
          onAddTask={() => setIsModalOpen(true)}
          onPlayTask={handlePlayTask}
        />
      ) : (
        <ProfileView
          stats={stats}
          achievements={achievements}
          onNavigateToLibrary={() => setCurrentView('library')}
        />
      )}

      {/* Task Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddTask}
      />
    </div>
  );
}
