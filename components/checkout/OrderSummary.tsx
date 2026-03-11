import React from 'react';
import { PlanType, BillingCycle, pricing } from './types';

interface OrderSummaryProps {
  planType: PlanType;
  billingCycle: BillingCycle;
  addBeta: boolean;
  total: number;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ planType, billingCycle, addBeta, total }) => {
  return (
    <div className="md:col-span-5 lg:col-span-4 mt-8 md:mt-0">
      <div className="md:static lg:sticky lg:top-24 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm">
        <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Order Summary</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Review your subscription before completing checkout.</p>

        <div className="space-y-4 text-sm mb-8">
          <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium">PantryPal Plan</span>
            <span>{pricing[planType].name}</span>
          </div>
          <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium">Billing Cycle</span>
            <span className="capitalize">{billingCycle === 'year' ? 'Yearly' : 'Monthly'}</span>
          </div>
          <div className="flex justify-between items-center text-gray-700 dark:text-gray-300">
            <span className="font-medium">Add-ons</span>
            <span>{addBeta ? 'Beta Program Access' : 'None'}</span>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
          <div className="flex justify-between items-end mb-1">
            <span className="text-base font-bold text-text-main dark:text-white">Total</span>
            <span className="text-2xl font-black text-primary">${total.toFixed(2)}</span>
          </div>
          <p className="text-xs text-right text-gray-500 dark:text-gray-400">
            / {billingCycle === 'year' ? 'year' : 'month'}
          </p>
        </div>

        <div className="mt-4 text-xs text-center text-gray-500 dark:text-gray-400">
          You won’t be charged until you confirm.
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
