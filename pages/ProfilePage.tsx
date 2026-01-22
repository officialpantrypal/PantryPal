import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-black text-text-main dark:text-white mb-8">My Profile</h1>

        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft p-8 space-y-8">
          
          {/* User Details */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pb-8 border-b border-gray-100 dark:border-gray-700">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="text-center sm:text-left space-y-1">
              <h2 className="text-xl font-bold text-text-main dark:text-white">Account Info</h2>
              <p className="text-gray-500 dark:text-gray-400 font-medium">{user.email}</p>
              <div className="pt-2">
                 <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                   Family (5 users) Plan
                 </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              to="/subscription" 
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-4 text-base font-bold text-white hover:bg-primary-dark transition-colors shadow-glow"
            >
              <span className="material-symbols-outlined">credit_card</span>
              Manage Subscription
            </Link>
            <Link 
              to="/settings" 
              className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-dark px-4 py-4 text-base font-bold text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              <span className="material-symbols-outlined">settings</span>
              View Settings
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;