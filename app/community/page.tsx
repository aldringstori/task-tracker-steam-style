'use client';

import Link from 'next/link';

export default function CommunityPage() {
  return (
    <div className="flex min-h-screen bg-[#1b2838]">
      {/* Sidebar Navigation */}
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
              <Link
                href="/"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">home</span>
                <p className="text-sm font-medium leading-normal font-display">Home</p>
              </Link>
              <Link
                href="/store"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white"
              >
                <span className="material-symbols-outlined text-2xl">storefront</span>
                <p className="text-sm font-medium leading-normal font-display">Store</p>
              </Link>
              <Link
                href="/library"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">sports_esports</span>
                <p className="text-sm font-medium leading-normal font-display">Library</p>
              </Link>
              <Link
                href="/community"
                className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-white"
              >
                <span className="material-symbols-outlined text-2xl">groups</span>
                <p className="text-sm font-medium leading-normal font-display">Community</p>
              </Link>
              <Link
                href="/profile"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white"
              >
                <span className="material-symbols-outlined text-2xl">person</span>
                <p className="text-sm font-medium leading-normal font-display">Profile</p>
              </Link>
            </nav>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] font-display hover:bg-primary/90">
            <span className="truncate">Download App</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-[#1B1D20] p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-white text-5xl font-bold mb-2 font-display">Community</h1>
            <p className="text-slate-400 text-lg">Connect, share, and learn with other productivity enthusiasts</p>
          </div>

          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Active Members', value: '12.5K', icon: 'person', color: '#4c9aff' },
              { label: 'Templates Shared', value: '3.2K', icon: 'share', color: '#ff4c9a' },
              { label: 'Total Hours Tracked', value: '850K', icon: 'schedule', color: '#9a4cff' },
              { label: 'Achievements Unlocked', value: '45K', icon: 'emoji_events', color: '#4cff9a' }
            ].map((stat, index) => (
              <div key={index} className="bg-[#2A2C30] p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}33` }}
                  >
                    <span className="material-symbols-outlined" style={{ color: stat.color }}>
                      {stat.icon}
                    </span>
                  </div>
                </div>
                <p className="text-white text-3xl font-bold font-display">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Community Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2">
              <h2 className="text-white text-2xl font-bold mb-4 font-display">Community Feed</h2>
              <div className="space-y-4">
                {[
                  {
                    user: 'ProductivityPro',
                    avatar: 'P',
                    time: '2 hours ago',
                    content: 'Just completed 100 hours on my web development project! The task tracker really helps maintain focus. 🎉',
                    likes: 45,
                    comments: 12,
                    type: 'achievement'
                  },
                  {
                    user: 'DesignMaster',
                    avatar: 'D',
                    time: '5 hours ago',
                    content: 'Created a new template for UI/UX design workflows. Check it out in the store!',
                    likes: 78,
                    comments: 23,
                    type: 'template'
                  },
                  {
                    user: 'CodeNinja',
                    avatar: 'C',
                    time: '1 day ago',
                    content: 'Tip: Use the genre tags to organize your tasks better. Game-changer for managing multiple projects!',
                    likes: 156,
                    comments: 34,
                    type: 'tip'
                  },
                  {
                    user: 'MarketingGuru',
                    avatar: 'M',
                    time: '2 days ago',
                    content: 'Reached Level 50! Who else is grinding their productivity stats? Let\'s connect!',
                    likes: 92,
                    comments: 28,
                    type: 'milestone'
                  }
                ].map((post, index) => (
                  <div key={index} className="bg-[#2A2C30] rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-gradient-to-br from-primary to-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold flex-shrink-0">
                        {post.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h3 className="text-white font-bold font-display">{post.user}</h3>
                            <p className="text-slate-400 text-sm">{post.time}</p>
                          </div>
                          <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                            {post.type}
                          </span>
                        </div>
                        <p className="text-slate-300 mb-4">{post.content}</p>
                        <div className="flex items-center gap-6 text-slate-400">
                          <button className="flex items-center gap-2 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">favorite_border</span>
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">chat_bubble_outline</span>
                            <span className="text-sm">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Top Contributors */}
              <div className="bg-[#2A2C30] rounded-lg p-6 mb-6">
                <h3 className="text-white text-lg font-bold mb-4 font-display">Top Contributors</h3>
                <div className="space-y-4">
                  {[
                    { name: 'TaskMaster', level: 87, color: 'from-yellow-500 to-orange-500' },
                    { name: 'FocusKing', level: 76, color: 'from-blue-500 to-purple-500' },
                    { name: 'TimeWarrior', level: 65, color: 'from-green-500 to-teal-500' }
                  ].map((user, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="text-slate-400 font-bold text-lg w-6">#{index + 1}</div>
                      <div className={`bg-gradient-to-br ${user.color} rounded-full w-10 h-10 flex items-center justify-center text-white font-bold`}>
                        {user.name[0]}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-slate-400 text-sm">Level {user.level}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Groups */}
              <div className="bg-[#2A2C30] rounded-lg p-6">
                <h3 className="text-white text-lg font-bold mb-4 font-display">Active Groups</h3>
                <div className="space-y-3">
                  {[
                    { name: 'Web Developers', members: '2.5K', icon: 'code' },
                    { name: 'Designers United', members: '1.8K', icon: 'palette' },
                    { name: 'Productivity Hackers', members: '3.2K', icon: 'psychology' }
                  ].map((group, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-[#1B1D20] rounded-lg hover:bg-[#252729] transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-primary">{group.icon}</span>
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">{group.name}</p>
                        <p className="text-slate-400 text-sm">{group.members} members</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
