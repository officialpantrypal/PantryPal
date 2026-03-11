import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const DesktopNav: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-text-muted hover:text-primary dark:text-gray-300 dark:hover:text-primary";
  };

  return (
    <nav className="hidden md:flex items-center gap-8">
      <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/')}`}>Home</Link>
      <Link to="/how-it-works" className={`text-sm font-medium transition-colors ${isActive('/how-it-works')}`}>How it Works</Link>
      <Link to="/pricing" className={`text-sm font-medium transition-colors ${isActive('/pricing')}`}>Pricing</Link>
      <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about')}`}>About Us</Link>
    </nav>
  );
};

export default DesktopNav;
