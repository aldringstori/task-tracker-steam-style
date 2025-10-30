'use client';

import { Task } from '../types';
import { formatTime } from '../lib/utils';

interface LibraryViewProps {
  tasks: Task[];
  selectedTask: Task | null;
  onSelectTask: (task: Task) => void;
  onAddTask: () => void;
  onPlayTask: (task: Task) => void;
}

export default function LibraryView({
  tasks,
  selectedTask,
  onSelectTask,
  onAddTask,
  onPlayTask
}: LibraryViewProps) {
  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-[#16212d] p-3 flex flex-col">
        <div className="flex items-center gap-3 p-2 mb-4">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            U
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-medium leading-normal">Username</h1>
            <p className="text-green-400 text-sm font-normal leading-normal">Online</p>
          </div>
        </div>
        <div className="mb-4">
          <label className="flex flex-col min-w-40 h-11 w-full">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-[#9cabba] flex border-none bg-[#2a3a4a] items-center justify-center pl-3 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border-none bg-[#2a3a4a] focus:border-none h-full placeholder:text-[#9cabba] px-4 rounded-l-none border-l-0 pl-2 text-sm font-normal leading-normal"
                placeholder="Search Tasks"
                value=""
              />
            </div>
          </label>
        </div>
        <nav className="flex-grow overflow-y-auto">
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary" href="#">
              <span className="material-symbols-outlined">gamepad</span>
              <p className="text-sm font-medium leading-normal">All Tasks</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">schedule</span>
              <p className="text-sm font-medium leading-normal">Recently Played</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">download_done</span>
              <p className="text-sm font-medium leading-normal">Installed</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">favorite</span>
              <p className="text-sm font-medium leading-normal">Favorites</p>
            </a>
            <p className="text-xs text-slate-500 uppercase font-bold mt-4 mb-2 px-3">Genres</p>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">bolt</span>
              <p className="text-sm font-medium leading-normal">Action</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">explore</span>
              <p className="text-sm font-medium leading-normal">Adventure</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">swords</span>
              <p className="text-sm font-medium leading-normal">RPG</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">castle</span>
              <p className="text-sm font-medium leading-normal">Strategy</p>
            </a>
          </div>
        </nav>
        <div className="mt-auto">
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </a>
            <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10" href="#">
              <span className="material-symbols-outlined">help</span>
              <p className="text-sm font-medium leading-normal">Help</p>
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 grid grid-cols-12 gap-6 overflow-y-auto">
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 flex flex-col gap-6">
          {/* Header Image */}
          {selectedTask ? (
            <div
              className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-xl min-h-80 shadow-2xl"
              style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 40%), linear-gradient(135deg, ${selectedTask.color} 0%, ${selectedTask.color}dd 100%)`
              }}
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between p-6 gap-4">
                <p className="text-white tracking-light text-4xl font-bold leading-tight">{selectedTask.name}</p>
                <button
                  onClick={() => onPlayTask(selectedTask)}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white gap-2 pl-5 text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
                >
                  <span className="material-symbols-outlined text-white">
                    {selectedTask.isActive ? 'pause_circle' : 'play_circle'}
                  </span>
                  <span className="truncate">{selectedTask.isActive ? 'Stop' : 'Play'}</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-cover bg-center flex flex-col justify-center items-center overflow-hidden rounded-xl min-h-80 shadow-2xl bg-[#1b2838]">
              <p className="text-white text-4xl font-bold mb-4">No Task Selected</p>
              <p className="text-slate-400 mb-6">Select a task or create a new one</p>
              <button
                onClick={onAddTask}
                className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white gap-2 text-base font-bold leading-normal hover:bg-primary/90 transition-colors"
              >
                <span className="truncate">Create Your First Task</span>
              </button>
            </div>
          )}

          {/* Section Header */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] pt-5">Activity Feed</h2>

          {/* Activity Feed Cards */}
          <div className="flex flex-col gap-4">
            {selectedTask?.sessions.slice(-3).reverse().map((session, index) => (
              <div key={index} className="bg-[#1b2838] p-4 rounded-lg flex gap-4 items-start hover:bg-[#202f40] transition-colors">
                <div
                  className="w-40 h-24 rounded-md flex-shrink-0 flex items-center justify-center text-white font-bold text-3xl"
                  style={{ backgroundColor: selectedTask.color }}
                >
                  {selectedTask.name.charAt(0).toUpperCase()}
                </div>
                <div className="flex flex-col">
                  <p className="text-xs text-slate-400 mb-1">{new Date(session.start).toLocaleDateString()}</p>
                  <h3 className="font-bold text-lg text-white">Work Session</h3>
                  <p className="text-sm text-slate-300 mt-1">Duration: {formatTime(session.duration)}</p>
                </div>
              </div>
            ))}
            {(!selectedTask || selectedTask.sessions.length === 0) && (
              <div className="bg-[#1b2838] p-8 rounded-lg text-center">
                <p className="text-slate-400">No activity yet. Start working on a task!</p>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col gap-6">
          {/* Controller Support */}
          <div className="bg-[#1b2838] p-4 rounded-lg">
            <h3 className="text-white font-bold mb-3">Timer Status</h3>
            <div className="flex items-center gap-3 bg-primary/20 p-3 rounded-md">
              <span className="material-symbols-outlined text-primary">timer</span>
              <div className="flex flex-col">
                <p className="text-white font-medium">{selectedTask?.isActive ? 'Active' : 'Inactive'}</p>
                <p className="text-slate-400 text-xs">{selectedTask?.isActive ? 'Tracking time...' : 'Click PLAY to start'}</p>
              </div>
            </div>
          </div>

          {/* Achievements Panel */}
          <div className="bg-[#1b2838] p-4 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-white font-bold">Your Tasks</h3>
              <button
                onClick={onAddTask}
                className="text-sm text-primary hover:text-primary/80 font-bold"
              >
                + ADD
              </button>
            </div>
            <div className="flex flex-col gap-3 max-h-96 overflow-y-auto">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  onClick={() => onSelectTask(task)}
                  className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors ${
                    selectedTask?.id === task.id ? 'bg-primary/20' : 'hover:bg-slate-700/50'
                  }`}
                >
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ backgroundColor: task.color }}
                  ></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-white text-sm truncate">{task.name}</p>
                    <p className="text-xs text-slate-400">{formatTime(task.totalTime)}</p>
                  </div>
                  {task.isActive && (
                    <span className="material-symbols-outlined text-primary text-sm">play_circle</span>
                  )}
                </div>
              ))}
              {tasks.length === 0 && (
                <p className="text-slate-400 text-sm text-center py-4">No tasks yet</p>
              )}
            </div>
          </div>

          {/* Friend Activity */}
          <div className="bg-[#1b2838] p-4 rounded-lg">
            <h3 className="text-white font-bold mb-3">Today&apos;s Stats</h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Tasks Worked</span>
                <span className="text-white font-bold">{tasks.filter(t => t.totalTime > 0).length}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Total Time</span>
                <span className="text-white font-bold">{formatTime(tasks.reduce((sum, t) => sum + t.totalTime, 0))}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 text-sm">Active Task</span>
                <span className="text-white font-bold truncate ml-2">{tasks.find(t => t.isActive)?.name || 'None'}</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
