import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SettingsPage: React.FC = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        
        <div className="flex items-center gap-4 mb-8">
          <Link to="/profile" className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
             <span className="material-symbols-outlined text-text-main dark:text-white">arrow_back</span>
          </Link>
          <h1 className="text-3xl font-black text-text-main dark:text-white">Settings</h1>
        </div>

        <div className="space-y-8">
          
          {/* Account */}
          <section>
            <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">Account</h2>
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden divide-y divide-gray-100 dark:divide-gray-700">
               <button className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                 <span className="text-text-main dark:text-white font-medium">Change Email</span>
                 <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
               </button>
               <button className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                 <span className="text-text-main dark:text-white font-medium">Change Password</span>
                 <span className="material-symbols-outlined text-gray-400 text-sm">chevron_right</span>
               </button>
            </div>
          </section>

          {/* Preferences */}
          <section>
            <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">Preferences</h2>
            <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden divide-y divide-gray-100 dark:divide-gray-700">
               <div className="p-4 flex justify-between items-center">
                 <span className="text-text-main dark:text-white font-medium">Notification Settings</span>
                 <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
              </div>
              <div className="p-4 flex justify-between items-center">
                 <span className="text-text-main dark:text-white font-medium">Expiration Alerts</span>
                 <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" defaultChecked className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                  </label>
              </div>
            </div>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">Legal</h2>
             <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden divide-y divide-gray-100 dark:divide-gray-700">
              <Link to="/privacy" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                 <span className="text-text-main dark:text-white font-medium">Privacy Policy</span>
              </Link>
              <Link to="/terms" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                 <span className="text-text-main dark:text-white font-medium">Terms of Service</span>
              </Link>
            </div>
          </section>
          
          {/* Support */}
           <section>
            <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3 px-2">Support</h2>
             <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft overflow-hidden">
              <Link to="/contact" className="block p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                 <span className="text-text-main dark:text-white font-medium">Contact Us</span>
              </Link>
            </div>
          </section>

          <button 
            onClick={handleLogout} 
            className="w-full text-center p-4 bg-red-50 hover:bg-red-100 dark:bg-red-900/10 dark:hover:bg-red-900/20 rounded-xl transition-colors text-red-600 font-bold"
          >
             Log Out
          </button>

          <div className="text-center pt-2">
             <p className="text-xs text-gray-400">PantryPal v1.0.0</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;