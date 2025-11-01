'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ProfileStats } from '../types';

interface HeaderProps {
  stats: ProfileStats;
  onExportData: () => void;
  onClearData: () => void;
}

export default function Header({ stats, onExportData, onClearData }: HeaderProps) {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node)) {
        setShowProfileMenu(false);
      }
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target as Node)) {
        setShowAccountMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="steam-header">
      <div className="header-content">
        {/* Logo */}
        <div className="header-logo">
          <Link href="/" aria-label="Task Tracker Home">
            <svg width="176" height="44" viewBox="0 0 176 44" fill="none">
              <text x="10" y="32" fill="#fff" fontSize="28" fontWeight="700" fontFamily="Arial">
                TASK TRACKER
              </text>
            </svg>
          </Link>
        </div>

        {/* Main Navigation */}
        <nav className="supernav-container" role="navigation" aria-label="Main Menu">
          <Link href="/" className="menuitem supernav supernav-active">
            LIBRARY
          </Link>
          <Link href="/community" className="menuitem supernav">
            COMMUNITY
          </Link>

          {/* Profile Submenu */}
          <div className="profile-menu-wrapper" ref={profileMenuRef}>
            <button
              className="menuitem supernav username"
              onClick={() => {
                setShowProfileMenu(!showProfileMenu);
                setShowAccountMenu(false);
              }}
            >
              Task Master
            </button>

            {showProfileMenu && (
              <div className="submenu-profile">
                <Link className="submenuitem" href="/" onClick={() => setShowProfileMenu(false)}>
                  Activity
                </Link>
                <Link className="submenuitem" href="/profile" onClick={() => setShowProfileMenu(false)}>
                  Profile
                </Link>
                <Link className="submenuitem" href="/" onClick={() => setShowProfileMenu(false)}>
                  Tasks
                </Link>
                <Link className="submenuitem" href="/profile" onClick={() => setShowProfileMenu(false)}>
                  Achievements
                </Link>
                <Link className="submenuitem" href="/profile" onClick={() => setShowProfileMenu(false)}>
                  Statistics
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* Global Actions */}
        <div className="global-actions">
          <div className="global-action-menu">
            {/* Notification Bell */}
            <button className="header-notification-btn" aria-label="Notifications">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none" width="24" height="24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M32 24V26H4V24L8 19V12C8 9.34784 9.05357 6.8043 10.9289 4.92893C12.8043 3.05357 15.3478 2 18 2C20.6522 2 23.1957 3.05357 25.0711 4.92893C26.9464 6.8043 28 9.34784 28 12V19L32 24Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 34C19.2396 33.9986 20.4483 33.6133 21.46 32.897C22.4718 32.1807 23.2368 31.1687 23.65 30H12.35C12.7632 31.1687 13.5282 32.1807 14.54 32.897C15.5517 33.6133 16.7604 33.9986 18 34Z"
                  fill="currentColor"
                />
              </svg>
            </button>

            {/* Account Pulldown */}
            <div className="account-menu-wrapper" ref={accountMenuRef}>
              <button
                className="pulldown persona-name-text-content"
                onClick={() => {
                  setShowAccountMenu(!showAccountMenu);
                  setShowProfileMenu(false);
                }}
              >
                <span className="username-display">Task Master</span>
              </button>

              {showAccountMenu && (
                <div className="popup-block-new">
                  <div className="popup-body popup-menu">
                    <Link className="popup-menu-item" href="/profile" onClick={() => setShowAccountMenu(false)}>
                      View my profile
                    </Link>
                    <Link className="popup-menu-item" href="/settings" onClick={() => setShowAccountMenu(false)}>
                      Account details: <span className="account-name">user@email.com</span>
                    </Link>
                    <Link className="popup-menu-item" href="/settings" onClick={() => setShowAccountMenu(false)}>
                      Preferences
                    </Link>
                    <Link className="popup-menu-item" href="/profile" onClick={() => setShowAccountMenu(false)}>
                      View statistics <span className="account-name">Level {stats.level}</span>
                    </Link>
                    <div className="popup-menu-separator"></div>
                    <button
                      className="popup-menu-item"
                      onClick={() => {
                        onExportData();
                        setShowAccountMenu(false);
                      }}
                    >
                      Export data
                    </button>
                    <button
                      className="popup-menu-item"
                      onClick={() => {
                        onClearData();
                        setShowAccountMenu(false);
                      }}
                    >
                      Clear all data
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* User Avatar */}
            <Link href="/profile" className="user-avatar" aria-label="View your profile">
              <div className="avatar-circle">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="19" stroke="#66c0f4" strokeWidth="2" />
                  <circle cx="20" cy="16" r="6" fill="#66c0f4" />
                  <path d="M10 32.5 Q20 25 30 32.5" fill="#66c0f4" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
