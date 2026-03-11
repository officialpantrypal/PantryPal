import React from 'react';
import { Link } from 'react-router-dom';

interface PaymentInformationProps {
  agreedToTerms: boolean;
  setAgreedToTerms: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
}

const PaymentInformation: React.FC<PaymentInformationProps> = ({ agreedToTerms, setAgreedToTerms, loading }) => {
  return (
    <section className="bg-white dark:bg-surface-dark rounded-2xl shadow-soft p-6 md:p-8">
      <h2 className="text-xl font-bold text-text-main dark:text-white mb-2">Payment Information</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">All payments are processed securely through Stripe.</p>

      <div className="space-y-4">
        <div>
           <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Card Number</label>
           <div className="relative">
             <input
              type="text"
              required
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 py-3 pl-4 pr-10 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-primary"
              placeholder="0000 0000 0000 0000"
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
               <span className="material-symbols-outlined text-gray-400">credit_card</span>
            </div>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">Expiration</label>
            <input
              type="text"
              required
              placeholder="MM / YY"
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">CVC</label>
            <input
              type="text"
              required
              placeholder="123"
              className="block w-full rounded-lg border-gray-300 dark:border-gray-600 py-3 px-4 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
        </div>
      </div>

      <div className="flex items-start gap-3 py-6">
        <div className="flex h-5 items-center">
          <input
            type="checkbox"
            id="terms"
            required
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
          />
        </div>
        <label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
          By continuing, you agree to our <Link to="/terms" target="_blank" className="text-primary hover:underline font-bold">Terms of Service</Link> and <Link to="/privacy" target="_blank" className="text-primary hover:underline font-bold">Privacy Policy</Link>.
        </label>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={loading || !agreedToTerms}
          className="w-full sm:w-auto flex justify-center items-center rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-glow hover:bg-primary-dark focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {loading ? 'Processing...' : 'Confirm PantryPal Subscription'}
        </button>
        <p className="text-xs text-gray-500 dark:text-gray-400">You can cancel anytime from your account settings.</p>
      </div>
    </section>
  );
};

export default PaymentInformation;
