
import React, { useState } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

type PlanType = 'premium' | 'family5' | 'family10';
type BillingCycle = 'month' | 'year';

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Initial state derived from navigation or default
  const initialPlan = location.state?.plan;
  const initialCycle = initialPlan?.interval === 'year' ? 'year' : 'month';
  
  // Determine initial plan type based on passed name
  let defaultPlanType: PlanType = 'premium';
  if (initialPlan?.name?.toLowerCase().includes('family')) {
    if (initialPlan.price > 10) {
       defaultPlanType = 'family10';
    } else {
       defaultPlanType = 'family5';
    }
  }

  const [planType, setPlanType] = useState<PlanType>(defaultPlanType);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(initialCycle);
  const [addBeta, setAddBeta] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Pricing Configuration
  const pricing = {
    premium: {
      name: 'Premium',
      baseMonthly: 5.00,
      description: 'For individuals who want unlimited recipes and smart pantry tracking.'
    },
    family5: {
      name: 'Family (5 Users)',
      baseMonthly: 8.00,
      description: 'Share one pantry with up to five people.'
    },
    family10: {
      name: 'Family (10 Users)',
      baseMonthly: 13.00,
      description: 'Perfect for large families or shared households.'
    }
  };

  const betaPriceMonthly = 1.00;
  
  // Calculate Totals
  const currentPlanBase = pricing[planType].baseMonthly;
  const planPrice = billingCycle === 'month' ? currentPlanBase : (currentPlanBase * 12 * 0.8);
  const betaCost = addBeta ? (billingCycle === 'year' ? betaPriceMonthly * 12 : betaPriceMonthly) : 0;
  const total = planPrice + betaCost;

  const nextBillingDate = new Date();
  if (billingCycle === 'year') {
    nextBillingDate.setFullYear(nextBillingDate.getFullYear() + 1);
  } else {
    nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
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
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-3">Checkout — PantryPal</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Choose a plan that fits your household and start managing your pantry smarter.</p>
        </div>
        
        <form onSubmit={handlePayment} className="md:grid md:grid-cols-12 md:gap-8 lg:gap-12">
          
          {/* Left Column (Selections) */}
          <div className="md:col-span-7 lg:col-span-8 space-y-8">
            
            {/* 1. Choose Your Plan */}
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

            {/* 2. Billing Frequency */}
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

            {/* 3. Optional Add-Ons */}
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

            {/* 4. Payment Information */}
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

          </div>

          {/* Right Column (Sticky Summary) */}
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
          
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
