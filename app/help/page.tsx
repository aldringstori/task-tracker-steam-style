'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I start tracking time on a task?',
      answer: 'Simply select a task from your library and click the PLAY button. The timer will start automatically. Only one task can be active at a time.'
    },
    {
      question: 'Can I track multiple tasks simultaneously?',
      answer: 'No, the app is designed to track one task at a time to help you maintain focus. When you start a new task, any currently running task will automatically stop.'
    },
    {
      question: 'How do I create a new task?',
      answer: 'Click the "+ Add Task" button in your library. Enter the task name, description, and choose a color theme. Your task will be added to your library immediately.'
    },
    {
      question: 'What are achievements and how do I unlock them?',
      answer: 'Achievements are milestones you unlock by reaching certain goals like completing tasks, tracking hours, or maintaining streaks. Check your profile to see all available achievements and your progress.'
    },
    {
      question: 'How do I export my data?',
      answer: 'Go to Settings > Data Management and click "Export as JSON". This will download all your tasks, statistics, and achievements in a JSON format that you can back up or import later.'
    },
    {
      question: 'Can I organize tasks by category or genre?',
      answer: 'Yes! You can use the genre tags in the library sidebar to categorize your tasks. Tags include Action, Adventure, RPG, and Strategy, inspired by game genres.'
    },
    {
      question: 'What happens to my data if I clear my browser?',
      answer: 'All data is stored in your browser\'s localStorage. If you clear browser data, your tasks will be lost unless you\'ve exported them first. We recommend regular exports as backups.'
    },
    {
      question: 'How are levels and XP calculated?',
      answer: 'You earn XP by tracking time on tasks. Each hour tracked gives you XP. Every 100 XP increases your level by 1. Your level and XP are displayed on your profile page.'
    }
  ];

  const guides = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of task tracking',
      icon: 'rocket_launch',
      color: '#4c9aff'
    },
    {
      title: 'Advanced Features',
      description: 'Discover pro tips and tricks',
      icon: 'auto_awesome',
      color: '#ff4c9a'
    },
    {
      title: 'Keyboard Shortcuts',
      description: 'Speed up your workflow',
      icon: 'keyboard',
      color: '#9a4cff'
    },
    {
      title: 'Data Management',
      description: 'Import, export, and backup',
      icon: 'storage',
      color: '#4cff9a'
    }
  ];

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
            <Link href="/settings" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-primary/10">
              <span className="material-symbols-outlined">settings</span>
              <p className="text-sm font-medium leading-normal">Settings</p>
            </Link>
            <Link href="/help" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20 text-primary">
              <span className="material-symbols-outlined">help</span>
              <p className="text-sm font-medium leading-normal">Help</p>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-[#1b2838]">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-white text-5xl font-bold mb-2 font-display">Help Center</h1>
            <p className="text-slate-400 text-lg">Find answers and get support</p>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#2A2C30] text-white px-5 py-4 pl-14 rounded-lg border border-slate-700 focus:border-primary focus:outline-none text-lg"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-2xl">
                search
              </span>
            </div>
          </div>

          {/* Quick Help Guides */}
          <div className="mb-12">
            <h2 className="text-white text-2xl font-bold mb-4 font-display">Quick Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {guides.map((guide, index) => (
                <div
                  key={index}
                  className="bg-[#2A2C30] p-6 rounded-lg hover:bg-[#3A3C40] transition-colors cursor-pointer group"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${guide.color}33` }}
                    >
                      <span className="material-symbols-outlined text-2xl" style={{ color: guide.color }}>
                        {guide.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-1 group-hover:text-primary transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-slate-400 text-sm">{guide.description}</p>
                    </div>
                    <span className="material-symbols-outlined text-slate-500 group-hover:text-primary transition-colors">
                      arrow_forward
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-white text-2xl font-bold mb-4 font-display">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#2A2C30] rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-[#3A3C40] transition-colors"
                  >
                    <h3 className="text-white font-medium pr-4">{faq.question}</h3>
                    <span className="material-symbols-outlined text-primary flex-shrink-0">
                      {expandedFaq === index ? 'expand_less' : 'expand_more'}
                    </span>
                  </button>
                  {expandedFaq === index && (
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-lg p-8 border border-primary/30">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-primary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl">support_agent</span>
              </div>
              <div className="flex-1">
                <h2 className="text-white text-2xl font-bold mb-2 font-display">Still need help?</h2>
                <p className="text-slate-300 mb-4">Our support team is here to assist you with any questions or issues.</p>
                <div className="flex flex-wrap gap-3">
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    Contact Support
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-white/20">
                    View Documentation
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Community Resources */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: 'Community Forum', icon: 'forum', description: 'Ask questions and share tips' },
              { title: 'Video Tutorials', icon: 'play_circle', description: 'Watch step-by-step guides' },
              { title: 'Feature Requests', icon: 'lightbulb', description: 'Suggest new features' }
            ].map((resource, index) => (
              <div key={index} className="bg-[#2A2C30] p-5 rounded-lg hover:bg-[#3A3C40] transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-primary text-3xl mb-3 block">
                  {resource.icon}
                </span>
                <h3 className="text-white font-bold mb-1">{resource.title}</h3>
                <p className="text-slate-400 text-sm">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
