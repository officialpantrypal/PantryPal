import React from 'react';
import { PlanType } from './types';

interface PlanSelectionProps {
  planType: PlanType;
  setPlanType: React.Dispatch<React.SetStateAction<PlanType>>;
}

const PlanSelection: React.FC<PlanSelectionProps> = ({ planType, setPlanType }) => {
  return (
    <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft p-6 md:p-8">
      <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Choose Your Plan</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Select the option that works best for you. You can change or cancel at any time.</p>

      <div className="space-y-4">
         <label className={`relative flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${planType === 'premium' ? 'border-primary bg-primary/5' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'}`}>
           <div className="flex h-6 items-center">
             <input type="radio" name="plan" className="h-5 w-5 text-primary border-gray-300 focus:ring-primary" checked={planType === 'premium'} onChange={() => setPlanType('premium')} />
           </div>
           <div className="ml-3 flex-1">
             <div className="flex justify-between items-center mb-1">
               <span className="font-bold text-text-main dark:text-white text-lg">Premium</span>
               <span className="font-bold text-text-main dark:text-white">$5.00 / month</span>
             </div>
             <p className="text-sm text-gray-500 dark:text-gray-400">For individuals who want unlimited recipes and smart pantry tracking.</p>
           </div>
         </label>

         <label className={`relative flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${planType === 'family5' ? 'border-primary bg-primary/5' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'}`}>
           <div className="flex h-6 items-center">
             <input type="radio" name="plan" className="h-5 w-5 text-primary border-gray-300 focus:ring-primary" checked={planType === 'family5'} onChange={() => setPlanType('family5')} />
           </div>
           <div className="ml-3 flex-1">
             <div className="flex justify-between items-center mb-1">
               <span className="font-bold text-text-main dark:text-white text-lg">Family (5 Users)</span>
               <span className="font-bold text-text-main dark:text-white">$8.00 / month</span>
             </div>
             <p className="text-sm text-gray-500 dark:text-gray-400">Share one pantry with up to five people.</p>
           </div>
         </label>

         <label className={`relative flex items-start p-4 rounded-xl border-2 cursor-pointer transition-all ${planType === 'family10' ? 'border-primary bg-primary/5' : 'border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600'}`}>
           <div className="flex h-6 items-center">
             <input type="radio" name="plan" className="h-5 w-5 text-primary border-gray-300 focus:ring-primary" checked={planType === 'family10'} onChange={() => setPlanType('family10')} />
           </div>
           <div className="ml-3 flex-1">
             <div className="flex justify-between items-center mb-1">
               <span className="font-bold text-text-main dark:text-white text-lg">Family (10 Users)</span>
               <span className="font-bold text-text-main dark:text-white">$13.00 / month</span>
             </div>
             <p className="text-sm text-gray-500 dark:text-gray-400">Perfect for large families or shared households.</p>
           </div>
         </label>
      </div>
    </section>
  );
};

export default PlanSelection;
