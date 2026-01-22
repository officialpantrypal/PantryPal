
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const handleInactive = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('trigger-toast'));
  };

  return (
    <footer className="bg-white dark:bg-background-dark border-t border-[#e5e7eb] dark:border-[#333] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">nutrition</span>
            <h2 className="text-xl font-bold text-[#121714] dark:text-white">PantryPal</h2>
          </div>
          
          <div className="mb-8 flex flex-wrap justify-center gap-8">
            <Link to="/about" className="text-base text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">About Us</Link>
            <Link to="/privacy" className="text-base text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-base text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-base text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">Contact Us</Link>
          </div>
          
          <div className="mb-8 flex gap-6">
            <a href="#" onClick={handleInactive} className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">public</span>
            </a>
            <a href="#" onClick={handleInactive} className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">photo_camera</span>
            </a>
            <a href="#" onClick={handleInactive} className="text-text-muted hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">groups</span>
            </a>
          </div>
          
          <div className="mb-6 max-w-md">
            <p className="text-xs text-text-muted dark:text-gray-500 italic">
              PantryPal is an early-stage student startup created as part of a high school incubator program. 
              We are committed to transparency and helping households reduce food waste.
            </p>
          </div>
          
          <p className="text-sm text-text-muted dark:text-gray-500">
            © 2026 PantryPal Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
