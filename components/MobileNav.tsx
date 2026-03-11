import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface MobileNavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-text-muted hover:text-primary dark:text-gray-300 dark:hover:text-primary";
  };

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/');
  };

  if (!isMenuOpen) return null;

  return (
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
  );
};

export default MobileNav;
