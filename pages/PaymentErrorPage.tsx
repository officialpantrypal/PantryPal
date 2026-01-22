
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark px-4 py-12">
      <div className="w-full max-w-md bg-white dark:bg-surface-dark p-8 rounded-2xl shadow-soft text-center animate-in fade-in zoom-in duration-300 border border-red-100 dark:border-red-900/20">
        <div className="mx-auto h-20 w-20 flex items-center justify-center rounded-full bg-red-100 text-red-600 mb-6">
          <span className="material-symbols-outlined text-4xl">error</span>
        </div>
        <h2 className="text-3xl font-bold text-text-main dark:text-white mb-4">⚠️ Payment Could Not Be Completed</h2>
        <div className="text-gray-600 dark:text-gray-400 mb-8 space-y-2">
           <p>We couldn’t process your payment for PantryPal.</p>
           <p>No charges were made.</p>
           <p className="text-sm font-medium mt-4 mb-2">This can happen due to:</p>
           <ul className="text-sm space-y-1 list-disc list-inside text-gray-500 dark:text-gray-400">
             <li>Incorrect card information</li>
             <li>Insufficient funds</li>
             <li>Temporary bank issues</li>
           </ul>
        </div>

        <div className="space-y-3 mb-6">
          <button 
            onClick={() => navigate('/checkout')}
            className="w-full py-3 rounded-lg bg-primary text-white font-bold hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
          >
            Try Again
          </button>
          <button 
            onClick={() => navigate('/pricing')}
            className="w-full py-3 rounded-lg bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-text-main dark:text-white font-bold hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            Return to Pricing
          </button>
        </div>
        
        <p className="text-xs text-gray-400">
          Your PantryPal plan selection has been saved.
        </p>
      </div>
    </div>
  );
};

export default PaymentErrorPage;
