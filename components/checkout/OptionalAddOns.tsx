import React from 'react';

interface OptionalAddOnsProps {
  addBeta: boolean;
  setAddBeta: React.Dispatch<React.SetStateAction<boolean>>;
}

const OptionalAddOns: React.FC<OptionalAddOnsProps> = ({ addBeta, setAddBeta }) => {
  return (
    <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft p-6 md:p-8">
      <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Optional Add-Ons</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">Enhance your experience with early feature access.</p>

      <label className="flex items-start p-4 rounded-xl border border-gray-100 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
        <div className="flex h-6 items-center">
          <input
            type="checkbox"
            checked={addBeta}
            onChange={() => setAddBeta(!addBeta)}
            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
          />
        </div>
        <div className="ml-3 flex-1">
          <div className="flex justify-between items-center mb-1">
            <span className="font-bold text-text-main dark:text-white">Beta Program Access</span>
            <span className="font-bold text-text-main dark:text-white">+$1.00 / month</span>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Get early access to new features and help shape PantryPal’s future.</p>
        </div>
      </label>
    </section>
  );
};

export default OptionalAddOns;
