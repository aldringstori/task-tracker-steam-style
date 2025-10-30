'use client';

import { ProfileStats, Achievement } from '../types';
import { formatTimeShort } from '../lib/utils';

interface ProfileViewProps {
  stats: ProfileStats;
  achievements: Achievement[];
  onNavigateToLibrary: () => void;
}

export default function ProfileView({ stats, achievements, onNavigateToLibrary }: ProfileViewProps) {
  const unlockedAchievements = achievements.filter(a => a.unlocked);

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="flex h-full min-h-screen w-full">
        {/* SideNavBar */}
        <aside className="flex w-64 flex-col bg-[#1B1D20] p-4 text-white">
          <div className="flex h-full flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  V
                </div>
                <div className="flex flex-col">
                  <h1 className="text-white text-base font-medium leading-normal font-display">Vapor</h1>
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal font-display">Gaming Platform</p>
                </div>
              </div>
              <nav className="mt-4 flex flex-col gap-2">
                <a
                  onClick={onNavigateToLibrary}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white cursor-pointer"
                >
                  <span className="material-symbols-outlined text-2xl">home</span>
                  <p className="text-sm font-medium leading-normal font-display">Home</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white" href="#">
                  <span className="material-symbols-outlined text-2xl">storefront</span>
                  <p className="text-sm font-medium leading-normal font-display">Store</p>
                </a>
                <a
                  onClick={onNavigateToLibrary}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white cursor-pointer"
                >
                  <span className="material-symbols-outlined text-2xl">sports_esports</span>
                  <p className="text-sm font-medium leading-normal font-display">Library</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white" href="#">
                  <span className="material-symbols-outlined text-2xl">groups</span>
                  <p className="text-sm font-medium leading-normal font-display">Community</p>
                </a>
                <a className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-white" href="#">
                  <span className="material-symbols-outlined text-2xl">person</span>
                  <p className="text-sm font-medium leading-normal font-display">Profile</p>
                </a>
              </nav>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] font-display hover:bg-primary/90">
              <span className="truncate">Download App</span>
            </button>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto bg-[#1B1D20]">
          <div className="mx-auto max-w-7xl p-6 lg:p-8">
            {/* ProfileHeader */}
            <div className="flex w-full flex-col gap-4 rounded-lg bg-[#2A2C30] p-6 @container md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full h-32 w-32 border-4 border-primary bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold">
                    U
                  </div>
                  <div className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#2A2C30] bg-green-500"></div>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-[#F0F0F0] text-3xl font-bold leading-tight tracking-[-0.015em] font-display">CyberWarrior_99</p>
                  <p className="text-[#A0A0A0] text-lg font-normal leading-normal font-display">Level {stats.level}</p>
                  <p className="text-green-400 text-base font-normal leading-normal font-display">Online</p>
                </div>
              </div>
              <div className="flex w-full max-w-[480px] gap-3 @[480px]:w-auto">
                <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#3b4754] text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#4a5868] font-display @[480px]:flex-auto">
                  <span className="truncate">Edit Profile</span>
                </button>
                <button className="flex flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 font-display @[480px]:flex-auto">
                  <span className="truncate">Add Friend</span>
                </button>
              </div>
            </div>

            {/* ProfileStats */}
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex min-w-[120px] flex-1 basis-auto flex-col gap-2 rounded-lg bg-[#2A2C30] p-4 items-start">
                <p className="text-[#F0F0F0] tracking-light text-3xl font-bold leading-tight font-display">{stats.totalTasks}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal font-display">Tasks</p>
                </div>
              </div>
              <div className="flex min-w-[120px] flex-1 basis-auto flex-col gap-2 rounded-lg bg-[#2A2C30] p-4 items-start">
                <p className="text-[#F0F0F0] tracking-light text-3xl font-bold leading-tight font-display">{unlockedAchievements.length}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal font-display">Achievements</p>
                </div>
              </div>
              <div className="flex min-w-[120px] flex-1 basis-auto flex-col gap-2 rounded-lg bg-[#2A2C30] p-4 items-start">
                <p className="text-[#F0F0F0] tracking-light text-3xl font-bold leading-tight font-display">{stats.totalSessions}</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal font-display">Sessions</p>
                </div>
              </div>
              <div className="flex min-w-[120px] flex-1 basis-auto flex-col gap-2 rounded-lg bg-[#2A2C30] p-4 items-start">
                <p className="text-[#F0F0F0] tracking-light text-3xl font-bold leading-tight font-display">{Math.floor(stats.totalTime / 3600)}h</p>
                <div className="flex items-center gap-2">
                  <p className="text-[#A0A0A0] text-sm font-normal leading-normal font-display">Hours Tracked</p>
                </div>
              </div>
            </div>

            {/* Tabs and content */}
            <div className="mt-6">
              <div className="flex border-b border-[#3b4754] gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-primary pb-[13px] pt-4" href="#">
                  <p className="text-white text-sm font-bold leading-normal tracking-[0.015em] font-display">Summary</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
                  <p className="text-[#A0A0A0] text-sm font-bold leading-normal tracking-[0.015em] hover:text-white font-display">Tasks</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent pb-[13px] pt-4" href="#">
                  <p className="text-[#A0A0A0] text-sm font-bold leading-normal tracking-[0.015em] hover:text-white font-display">History</p>
                </a>
              </div>

              {/* Tab Content */}
              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  {/* User Bio */}
                  <div className="rounded-lg bg-[#2A2C30] p-5">
                    <h2 className="text-[#F0F0F0] text-xl font-bold leading-tight tracking-[-0.015em] font-display">About Me</h2>
                    <p className="mt-3 text-[#A0A0A0] text-base font-normal leading-relaxed font-display">
                      Productivity enthusiast and time management specialist. Tracking {stats.totalTasks} tasks
                      and {formatTimeShort(stats.totalTime)} of focused work. Always looking to optimize workflows
                      and achieve more with less stress.
                    </p>
                  </div>

                  {/* Profile Awards Showcase */}
                  <div className="mt-6 rounded-lg bg-[#2A2C30] p-5">
                    <h2 className="text-[#F0F0F0] text-xl font-bold leading-tight tracking-[-0.015em] font-display">Profile Awards Showcase</h2>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                      {achievements.slice(0, 4).map((achievement) => (
                        <div key={achievement.id} className={`flex flex-col items-center gap-2 ${!achievement.unlocked ? 'opacity-40' : ''}`}>
                          <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-lg size-24 flex items-center justify-center text-4xl">
                            {achievement.icon}
                          </div>
                          <p className="text-[#A0A0A0] text-sm text-center font-display">{achievement.name}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Badge Collector */}
                  <div className="mt-6 rounded-lg bg-[#2A2C30] p-5">
                    <h2 className="text-[#F0F0F0] text-xl font-bold leading-tight tracking-[-0.015em] font-display">Badge Collector</h2>
                    <div className="mt-4 grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`bg-gradient-to-br rounded-full size-16 flex items-center justify-center text-2xl ${
                            achievement.unlocked
                              ? 'from-primary to-primary/50'
                              : 'from-slate-700 to-slate-800 opacity-40'
                          }`}
                          title={achievement.description}
                        >
                          {achievement.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Friends List */}
                <div className="lg:col-span-1">
                  <div className="rounded-lg bg-[#2A2C30] p-5">
                    <h2 className="text-[#F0F0F0] text-xl font-bold leading-tight tracking-[-0.015em] font-display">Progress (XP: {stats.xp})</h2>
                    <div className="mt-4 flex flex-col gap-4">
                      <div>
                        <p className="text-primary text-sm font-bold uppercase tracking-wider font-display">Level {stats.level}</p>
                        <div className="mt-2 flex flex-col gap-3">
                          <div className="w-full bg-slate-700 rounded-full h-3">
                            <div
                              className="bg-gradient-to-r from-primary to-primary/70 h-3 rounded-full transition-all"
                              style={{ width: `${(stats.xp % 100)}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-slate-400">{100 - (stats.xp % 100)} XP to next level</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-green-400 text-sm font-bold uppercase tracking-wider font-display">Achievements</p>
                        <div className="mt-2 flex flex-col gap-3">
                          {achievements.map((achievement) => (
                            <div key={achievement.id} className={achievement.unlocked ? '' : 'opacity-60'}>
                              <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-md ${achievement.unlocked ? 'bg-primary/20' : 'bg-slate-700'}`}>
                                  <span className="text-xl">{achievement.icon}</span>
                                </div>
                                <div className="flex-1">
                                  <p className="text-white text-base font-medium font-display">{achievement.name}</p>
                                  <p className="text-xs text-slate-400">{achievement.description}</p>
                                </div>
                                {achievement.unlocked && (
                                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
