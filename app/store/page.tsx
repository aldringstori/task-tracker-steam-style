'use client';

import Link from 'next/link';

export default function StorePage() {
  return (
    <div className="flex min-h-screen bg-[#1b2838]">
      {/* Sidebar Navigation */}
      <aside className="flex w-64 flex-col bg-[#16212d] p-4 text-white">
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
                className="flex items-center gap-3 rounded-lg bg-primary/20 px-3 py-2 text-white"
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
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#A0A0A0] hover:bg-[#2A2C30] hover:text-white"
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
      <main className="flex-1 overflow-y-auto bg-[#1b2838] p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-white text-5xl font-bold mb-2 font-display">Store</h1>
            <p className="text-slate-400 text-lg">Browse and discover new task templates</p>
          </div>

          {/* Featured Section */}
          <div className="mb-8">
            <h2 className="text-white text-2xl font-bold mb-4 font-display">Featured Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Web Development Sprint',
                  description: 'Complete project template for web development tasks',
                  color: '#4c9aff',
                  category: 'Development'
                },
                {
                  name: 'Design System Creation',
                  description: 'Build a comprehensive design system from scratch',
                  color: '#ff4c9a',
                  category: 'Design'
                },
                {
                  name: 'Marketing Campaign',
                  description: 'Plan and execute marketing campaigns',
                  color: '#9a4cff',
                  category: 'Marketing'
                },
                {
                  name: 'Data Analysis Project',
                  description: 'Analyze datasets and create insights',
                  color: '#4cff9a',
                  category: 'Analytics'
                },
                {
                  name: 'Content Creation',
                  description: 'Video, blog, and social media content workflow',
                  color: '#ff9a4c',
                  category: 'Content'
                },
                {
                  name: 'Learning New Technology',
                  description: 'Structured learning path for new skills',
                  color: '#4cffff',
                  category: 'Education'
                }
              ].map((template, index) => (
                <div
                  key={index}
                  className="bg-[#2A2C30] rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer group"
                >
                  <div
                    className="h-40 bg-gradient-to-br flex items-center justify-center"
                    style={{ backgroundImage: `linear-gradient(135deg, ${template.color}dd 0%, ${template.color}88 100%)` }}
                  >
                    <span className="material-symbols-outlined text-white text-6xl">
                      {index % 2 === 0 ? 'work' : 'star'}
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-white text-lg font-bold font-display">{template.name}</h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                        {template.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{template.description}</p>
                    <button className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-lg font-medium transition-colors">
                      Add to Library
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4 font-display">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Development', icon: 'code', color: '#4c9aff' },
                { name: 'Design', icon: 'palette', color: '#ff4c9a' },
                { name: 'Marketing', icon: 'campaign', color: '#9a4cff' },
                { name: 'Writing', icon: 'edit_note', color: '#4cff9a' },
                { name: 'Business', icon: 'business_center', color: '#ff9a4c' },
                { name: 'Personal', icon: 'person', color: '#4cffff' },
                { name: 'Education', icon: 'school', color: '#ffff4c' },
                { name: 'Health', icon: 'favorite', color: '#ff4c4c' }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-[#2A2C30] p-6 rounded-lg hover:bg-[#3A3C40] transition-colors cursor-pointer group"
                >
                  <div
                    className="w-12 h-12 rounded-lg mb-3 flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}33` }}
                  >
                    <span className="material-symbols-outlined text-2xl" style={{ color: category.color }}>
                      {category.icon}
                    </span>
                  </div>
                  <h3 className="text-white font-bold font-display group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
