import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserMenu: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (!isAuthenticated) {
    return (
      <>
        <Link to="/login" className="hidden sm:block text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors">
          Log In
        </Link>
        <Link
          to="/signup"
          className="hidden sm:flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105 hover:bg-primary-dark shadow-glow"
        >
          Sign Up
        </Link>
      </>
    );
  }

  return (
    <div className="hidden sm:block relative" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 text-sm font-bold text-text-main dark:text-white hover:text-primary transition-colors bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-lg"
      >
        <span className="material-symbols-outlined text-[20px]">person</span>
        Profile
        <span className={`material-symbols-outlined text-[16px] transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>expand_more</span>
      </button>

      {/* Desktop Dropdown */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-surface-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-700 py-2 animate-in fade-in zoom-in duration-200">
          <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700 mb-2">
            <p className="text-xs text-gray-500 dark:text-gray-400">My PantryPal Account</p>
            <p className="text-sm font-bold text-text-main dark:text-white truncate">{user?.email}</p>
          </div>
          <Link
            to="/profile"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setIsDropdownOpen(false)}
          >
            <span className="material-symbols-outlined text-[18px]">account_circle</span>
            Profile
          </Link>
          <Link
            to="/settings"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setIsDropdownOpen(false)}
          >
            <span className="material-symbols-outlined text-[18px]">settings</span>
            Settings
          </Link>
           <Link
            to="/subscription"
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
            onClick={() => setIsDropdownOpen(false)}
          >
            <span className="material-symbols-outlined text-[18px]">credit_card</span>
            Manage Subscription
          </Link>
          <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            Log Out
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
