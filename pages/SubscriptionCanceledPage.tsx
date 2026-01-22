
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SubscriptionCanceledPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-soft text-center animate-in fade-in zoom-in duration-300">
        <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 mb-6">
          <span className="material-symbols-outlined text-4xl">cancel</span>
        </div>
        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">PantryPal Subscription Canceled</h2>
        <div className="text-gray-600 dark:text-gray-400 mb-8 space-y-2">
           <p>Your PantryPal subscription has been successfully canceled.</p>
           <p>You’ll continue to have access until the end of your current billing period.</p>
        </div>

        <button 
          onClick={() => navigate('/profile')}
          className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
        >
          Return to Profile
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCanceledPage;
