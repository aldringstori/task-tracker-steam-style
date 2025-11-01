'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="flex min-h-screen bg-[#1b2838]">
      {/* Sidebar Navigation */}
      <aside className="flex w-64 flex-col bg-[#16212d] p-3">
        <div className="flex items-center gap-3 p-2 mb-4">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            U
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-base font-medium leading-normal">Username</h1>
            <p className="text-green-400 text-sm font-normal leading-normal">Online</p>
          </div>
        </div>

        <nav className="flex-grow">
          <div className="flex flex-col gap-1">
            <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10">
              <span className="material-symbols-outlined">home</span>
              <p className="text-sm font-medium leading-normal">Home</p>
            </Link>
            <Link href="/store" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10">
              <span className="material-symbols-outlined">storefront</span>
              <p className="text-sm font-medium leading-normal">Store</p>
            </Link>
            <Link href="/library" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10">
              <span className="material-symbols-outlined">sports_esports</span>
              <p className="text-sm font-medium leading-normal">Library</p>
            </Link>
            <Link href="/community" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10">
              <span className="material-symbols-outlined">groups</span>
              <p className="text-sm font-medium leading-normal">Community</p>
            </Link>
            <Link href="/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10">
              <span className="material-symbols-outlined">person</span>
              <p className="text-sm font-medium leading-normal">Profile</p>
            </Link>
          </div>
        </nav>

        <div className="mt-auto">
          <div className="flex flex-col gap-1">
            <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </Link>
            <Link href="/help" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10">
              <span className="material-symbols-outlined">help</span>
              <p className="text-sm font-medium leading-normal">Help</p>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-[#1b2838]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-white text-4xl font-bold mb-8 font-display">Settings</h1>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 border-b border-slate-700">
            {[
              { id: 'general', label: 'General', icon: 'tune' },
              { id: 'appearance', label: 'Appearance', icon: 'palette' },
              { id: 'notifications', label: 'Notifications', icon: 'notifications' },
              { id: 'privacy', label: 'Privacy', icon: 'lock' },
              { id: 'data', label: 'Data', icon: 'storage' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-[#2A2C30] rounded-lg p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-white text-2xl font-bold mb-4 font-display">General Settings</h2>

                  <div className="space-y-6">
                    <div>
                      <label className="text-white font-medium mb-2 block">Username</label>
                      <input
                        type="text"
                        className="w-full bg-[#1b2838] text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-primary focus:outline-none"
                        defaultValue="Username"
                      />
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">Email</label>
                      <input
                        type="email"
                        className="w-full bg-[#1b2838] text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-primary focus:outline-none"
                        defaultValue="user@example.com"
                      />
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">Time Zone</label>
                      <select className="w-full bg-[#1b2838] text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-primary focus:outline-none">
                        <option>UTC-5 (Eastern Time)</option>
                        <option>UTC-6 (Central Time)</option>
                        <option>UTC-7 (Mountain Time)</option>
                        <option>UTC-8 (Pacific Time)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-white font-medium mb-2 block">Language</label>
                      <select className="w-full bg-[#1b2838] text-white px-4 py-3 rounded-lg border border-slate-700 focus:border-primary focus:outline-none">
                        <option>English</option>
                        <option>Español</option>
                        <option>Français</option>
                        <option>Deutsch</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'appearance' && (
              <div className="space-y-6">
                <h2 className="text-white text-2xl font-bold mb-4 font-display">Appearance</h2>

                <div className="space-y-6">
                  <div>
                    <label className="text-white font-medium mb-2 block">Theme</label>
                    <div className="grid grid-cols-3 gap-4">
                      {['Dark', 'Light', 'Auto'].map((theme) => (
                        <div
                          key={theme}
                          className="bg-[#1b2838] p-4 rounded-lg border-2 border-primary cursor-pointer hover:bg-[#252729] transition-colors"
                        >
                          <p className="text-white font-medium text-center">{theme}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-white font-medium mb-2 block">Accent Color</label>
                    <div className="grid grid-cols-6 gap-3">
                      {['#0b73da', '#ff4c9a', '#9a4cff', '#4cff9a', '#ff9a4c', '#4cffff'].map((color) => (
                        <div
                          key={color}
                          className="w-full aspect-square rounded-lg cursor-pointer hover:scale-110 transition-transform border-2 border-white/20"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-medium">Compact Mode</p>
                      <p className="text-slate-400 text-sm">Reduce spacing and padding</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-white text-2xl font-bold mb-4 font-display">Notifications</h2>

                <div className="space-y-4">
                  {[
                    { label: 'Task Reminders', description: 'Get reminded about upcoming tasks' },
                    { label: 'Achievement Unlocked', description: 'Celebrate when you unlock achievements' },
                    { label: 'Daily Summary', description: 'Receive daily productivity reports' },
                    { label: 'Community Updates', description: 'Stay updated on community activity' },
                    { label: 'New Templates', description: 'Notifications about new templates in store' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                      <div>
                        <p className="text-white font-medium">{item.label}</p>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={index < 3} />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'privacy' && (
              <div className="space-y-6">
                <h2 className="text-white text-2xl font-bold mb-4 font-display">Privacy & Security</h2>

                <div className="space-y-4">
                  {[
                    { label: 'Profile Visibility', description: 'Who can see your profile and stats' },
                    { label: 'Task Sharing', description: 'Allow others to see your tasks' },
                    { label: 'Activity Status', description: 'Show online/offline status' },
                    { label: 'Analytics', description: 'Help improve the app with usage data' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                      <div>
                        <p className="text-white font-medium">{item.label}</p>
                        <p className="text-slate-400 text-sm">{item.description}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={index === 2} />
                        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                    </div>
                  ))}

                  <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <h3 className="text-red-400 font-bold mb-2">Danger Zone</h3>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Delete Account
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'data' && (
              <div className="space-y-6">
                <h2 className="text-white text-2xl font-bold mb-4 font-display">Data Management</h2>

                <div className="space-y-6">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <h3 className="text-blue-400 font-bold mb-2">Export Data</h3>
                    <p className="text-slate-300 text-sm mb-4">Download all your tasks, statistics, and achievements</p>
                    <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Export as JSON
                    </button>
                  </div>

                  <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-lg">
                    <h3 className="text-purple-400 font-bold mb-2">Import Data</h3>
                    <p className="text-slate-300 text-sm mb-4">Import tasks from a backup file</p>
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Choose File
                    </button>
                  </div>

                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <h3 className="text-red-400 font-bold mb-2">Clear All Data</h3>
                    <p className="text-slate-300 text-sm mb-4">Permanently delete all tasks and statistics</p>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                      Clear All Data
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div className="mt-6 flex justify-end gap-4">
            <button className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition-colors">
              Cancel
            </button>
            <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
