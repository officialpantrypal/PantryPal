
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-text-muted hover:text-primary dark:text-gray-300 dark:hover:text-primary";
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] dark:border-[#333] bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">nutrition</span>
          <h2 className="text-lg font-bold tracking-tight text-[#121714] dark:text-white">PantryPal</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Home</Link>
          <Link to="/how-it-works" className={`text-sm font-medium transition-colors ${isActive('/how-it-works')}`}>How it Works</Link>
          <Link to="/pricing" className={`text-sm font-medium transition-colors ${isActive('/pricing')}`}>Pricing</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about')}`}>About Us</Link>
        </nav>

        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
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
          ) : (
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
          )}
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#121714] dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-surface-dark absolute w-full shadow-lg h-screen">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`text-base font-medium ${isActive('/')}`}>Home</Link>
            <Link to="/how-it-works" onClick={() => setIsMenuOpen(false)} className={`text-base font-medium ${isActive('/how-it-works')}`}>How it Works</Link>
            <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className={`text-base font-medium ${isActive('/pricing')}`}>Pricing</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className={`text-base font-medium ${isActive('/about')}`}>About Us</Link>
            
            <div className="border-t border-gray-100 dark:border-gray-700 my-2 pt-2"></div>
            
            {!isAuthenticated ? (
              <>
                <Link to="/login" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-text-main dark:text-white">Log In</Link>
                <Link 
                  to="/signup" 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full mt-2 flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white shadow-glow"
                >
                  Sign Up
                </Link>
              </>
            ) : (
              <>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">My PantryPal Account</div>
                <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-base font-medium text-text-main dark:text-white">
                  <span className="material-symbols-outlined">account_circle</span>
                  Profile
                </Link>
                <Link to="/settings" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-base font-medium text-text-main dark:text-white">
                  <span className="material-symbols-outlined">settings</span>
                  Settings
                </Link>
                 <Link to="/subscription" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-base font-medium text-text-main dark:text-white">
                  <span className="material-symbols-outlined">credit_card</span>
                  Manage Subscription
                </Link>
                <button 
                  onClick={handleLogout}
                  className="text-left text-base font-medium text-red-500 mt-4 flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">logout</span>
                  Log Out
                </button>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
