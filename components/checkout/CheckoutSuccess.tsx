import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PlanType, BillingCycle, pricing } from './types';

interface CheckoutSuccessProps {
  planType: PlanType;
  billingCycle: BillingCycle;
  nextBillingDate: Date;
}

const CheckoutSuccess: React.FC<CheckoutSuccessProps> = ({ planType, billingCycle, nextBillingDate }) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-soft text-center animate-in fade-in zoom-in duration-300">
        <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
          <span className="material-symbols-outlined text-4xl">check_circle</span>
        </div>
        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">🎉 Welcome to PantryPal</h2>
        <div className="text-gray-600 dark:text-gray-400 mb-8 space-y-2 text-center">
          <p>Your PantryPal subscription has been successfully activated.</p>
          <p>You now have access to your selected plan and all available features.</p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 mb-8 text-sm space-y-3">
          <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium">PantryPal Plan</span>
            <span className="font-bold text-text-main dark:text-white">{pricing[planType].name}</span>
          </div>
          <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium">Billing cycle</span>
            <span className="font-bold text-text-main dark:text-white capitalize">{billingCycle === 'year' ? 'Yearly' : 'Monthly'}</span>
          </div>
          <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium">Next billing date</span>
            <span className="font-bold text-text-main dark:text-white">{nextBillingDate.toLocaleDateString()}</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <button
            onClick={() => navigate('/profile')}
            className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Go to Profile
          </button>
          <button
            onClick={() => navigate('/subscription')}
            className="w-full py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            Manage Subscription
          </button>
        </div>

        <p className="text-xs text-gray-400">
          You can change or cancel your PantryPal subscription anytime from your account settings.
        </p>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
