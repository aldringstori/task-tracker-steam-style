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

  // Load tasks from API
  useEffect(() => {
    setMounted(true);
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data.tasks || []);
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

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

  const handleAddTask = async (name: string, description: string, color: string) => {
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

    try {
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        await fetchTasks(); // Refresh tasks from API
        setIsModalOpen(false);
        setSelectedTask(newTask);
      }
    } catch (error) {
      console.error('Error adding task:', error);
      alert('Failed to create task');
    }
  };

  const handlePlayTask = async (task: Task) => {
    try {
      if (task.isActive) {
        // Stop task
        const response = await fetch(`/api/tasks/${task.id}/stop`, {
          method: 'POST',
        });

        if (response.ok) {
          await fetchTasks(); // Refresh tasks from API
        }
      } else {
        // Start task (will auto-stop other active tasks)
        const response = await fetch(`/api/tasks/${task.id}/start`, {
          method: 'POST',
        });

        if (response.ok) {
          await fetchTasks(); // Refresh tasks from API
        }
      }

      // Update selected task
      if (selectedTask?.id === task.id) {
        const updatedTask = tasks.find((t) => t.id === task.id);
        if (updatedTask) {
          setSelectedTask(updatedTask);
        }
      }
    } catch (error) {
      console.error('Error toggling task:', error);
      alert('Failed to toggle task');
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

  const handleClearData = async () => {
    if (confirm('Are you sure you want to clear ALL data? This cannot be undone!')) {
      if (confirm('This will delete all tasks and statistics. Are you absolutely sure?')) {
        try {
          const response = await fetch('/api/tasks/clear', {
            method: 'POST',
          });

          if (response.ok) {
            setTasks([]);
            setSelectedTask(null);
            alert('All data has been cleared.');
          }
        } catch (error) {
          console.error('Error clearing data:', error);
          alert('Failed to clear data');
        }
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
