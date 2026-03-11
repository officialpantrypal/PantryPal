import React from 'react';
import { BillingCycle } from './types';

interface BillingFrequencyProps {
  billingCycle: BillingCycle;
  setBillingCycle: React.Dispatch<React.SetStateAction<BillingCycle>>;
}

const BillingFrequency: React.FC<BillingFrequencyProps> = ({ billingCycle, setBillingCycle }) => {
  return (
    <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft p-6 md:p-8">
      <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Billing Frequency</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Choose how you’d like to be billed.</p>

      <div className="space-y-4">
        <label className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${billingCycle === 'month' ? 'border-primary bg-primary/5' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'}`}>
           <div className="flex h-6 items-center">
            <input type="radio" name="billing" className="h-5 w-5 text-primary border-gray-300 focus:ring-primary" checked={billingCycle === 'month'} onChange={() => setBillingCycle('month')} />
          </div>
          <span className="ml-3 font-bold text-text-main dark:text-white">Monthly — Pay month to month</span>
        </label>

        <label className={`relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${billingCycle === 'year' ? 'border-primary bg-primary/5' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'}`}>
           <div className="flex h-6 items-center">
             <input type="radio" name="billing" className="h-5 w-5 text-primary border-gray-300 focus:ring-primary" checked={billingCycle === 'year'} onChange={() => setBillingCycle('year')} />
          </div>
          <div className="ml-3 flex items-center gap-2">
             <span className="font-bold text-text-main dark:text-white">Yearly — Save 20% with annual billing</span>
          </div>
        </label>
      </div>
    </section>
  );
};

export default BillingFrequency;
