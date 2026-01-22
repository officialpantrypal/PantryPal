import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const SubscriptionPage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  const handleCancel = () => {
    // In a real app, this would trigger a cancellation logic/modal
    // For this demo, navigate directly to the confirmed cancellation page
    navigate('/subscription-canceled');
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/profile" className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
             <span className="material-symbols-outlined text-text-main dark:text-white">arrow_back</span>
          </Link>
          <h1 className="text-3xl font-black text-text-main dark:text-white">Subscription</h1>
        </div>

        <div className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft p-8">
          
          <div className="mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
             <div className="flex justify-between items-start mb-4">
                <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current Plan</h2>
                <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase">Active</span>
             </div>
             <p className="text-3xl font-bold text-text-main dark:text-white mb-6">Family (10 users)</p>
             
             <div className="space-y-3">
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Billing</span>
                  <span className="font-bold text-text-main dark:text-white">Monthly</span>
               </div>
               <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Next charge</span>
                  <span className="font-bold text-text-main dark:text-white">April 20, 2026</span>
               </div>
             </div>
          </div>

          <div className="mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
             <h2 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">Add-ons</h2>
             <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                <div className="flex items-center gap-2">
                   <span className="material-symbols-outlined text-primary">check_circle</span>
                   <span className="font-medium text-text-main dark:text-white">Beta Program</span>
                </div>
                <span className="text-sm font-bold text-text-main dark:text-white">$1.99/mo</span>
             </div>
          </div>

          <div className="space-y-3">
             <Link to="/pricing" className="block w-full py-3 rounded-lg bg-primary text-white font-bold text-center hover:bg-primary-dark transition-colors shadow-glow">
                Change Plan
             </Link>
             <button className="block w-full py-3 rounded-lg border border-gray-200 dark:border-gray-700 text-text-main dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                Switch to Yearly (Save 20%)
             </button>
             <button 
               onClick={handleCancel}
               className="block w-full py-3 text-red-600 font-medium hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg transition-colors text-sm"
             >
                Cancel Subscription
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;