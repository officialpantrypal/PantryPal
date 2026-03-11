import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import UserMenu from './UserMenu';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] dark:border-[#333] bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">nutrition</span>
          <h2 className="text-lg font-bold tracking-tight text-[#121714] dark:text-white">PantryPal</h2>
        </Link>

        {/* Desktop Nav */}
        <DesktopNav />

        <div className="flex items-center gap-4">
          <UserMenu />
          
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
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
};

export default Navbar;
