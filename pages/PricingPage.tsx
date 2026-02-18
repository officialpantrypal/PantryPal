import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handlePlanSelect = (planName: string, price: number) => {
    // If not authenticated, redirect to login with the intended plan
    if (!isAuthenticated) {
      navigate('/login', { 
        state: { 
          from: { pathname: '/checkout' },
          plan: { name: planName, price, interval: isYearly ? 'year' : 'month' }
        } 
      });
    } else {
      // If authenticated, go straight to checkout
      navigate('/checkout', { 
        state: { 
          plan: { name: planName, price, interval: isYearly ? 'year' : 'month' }
        } 
      });
    }
  };
  
  const handleInactive = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('trigger-toast'));
  };

  // Prices
  const prices = {
      premium: isYearly ? 5.00 * 12 * 0.8 / 12 : 5.00, // 4.00 if yearly approx
      family5: isYearly ? 8.00 * 12 * 0.8 / 12 : 8.00, // 6.40 if yearly
      family10: isYearly ? 13.00 * 12 * 0.8 / 12 : 13.00 // 10.40 if yearly
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full py-16 md:py-24 bg-gradient-to-b from-[#E0F2E4]/50 to-transparent dark:from-green-900/20">
        <div className="max-w-[960px] mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wider mb-4 uppercase">
            Simple Pricing
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-main dark:text-white tracking-tight leading-[1.1] mb-6">
            Eat fresher, save more.<br className="hidden sm:block" /> Choose the plan that fits your kitchen.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium max-w-2xl mx-auto mb-10">
            Organize your kitchen, minimize waste, and track your nutrition with tools designed for every household size.
          </p>
          
          {/* Toggle Switch */}
          <div className="flex justify-center items-center gap-3 mb-8">
            <span className={`text-sm font-semibold ${!isYearly ? 'text-text-main dark:text-white' : 'text-gray-500'}`}>Monthly</span>
            <button 
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-6 bg-primary rounded-full relative cursor-pointer opacity-90 hover:opacity-100 transition-opacity focus:outline-none"
            >
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-all duration-300 ${isYearly ? 'left-7' : 'left-1'}`}></div>
            </button>
            <span className={`text-sm font-medium ${isYearly ? 'text-text-main dark:text-white' : 'text-gray-500'}`}>
              Yearly <span className="text-primary text-xs font-bold ml-1">-20%</span>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="w-full px-4 md:px-6 lg:px-8 pb-20 -mt-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
            
            {/* Free Tier */}
            <div className="relative flex flex-col rounded-2xl bg-white dark:bg-surface-dark p-8 border border-gray-100 dark:border-gray-700 h-full shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">Free Version</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Experience core features for individuals.</p>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-text-main dark:text-white tracking-tight">$0</span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
              </div>
              <button 
                onClick={() => handlePlanSelect('Free Version', 0)}
                className="w-full py-3 px-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-text-main dark:text-white text-sm font-bold transition-colors mb-8"
              >
                Get Started
              </button>
              <div className="space-y-4 flex-grow">
                {['Unlimited receipt scanning', 'Manual item entry & editing', 'AI expiration tracking'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    {item}
                  </div>
                ))}
                 <div className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="material-symbols-outlined text-accent text-[20px]">info</span>
                    5 Recipe suggestions/mo
                </div>
              </div>
            </div>

            {/* Premium Tier */}
            <div className="relative flex flex-col rounded-2xl bg-white dark:bg-surface-dark p-8 border-2 border-primary ring-4 ring-primary/5 h-full transform md:-translate-y-4 z-10 shadow-xl">
              <div className="absolute top-0 right-0 left-0 -mt-3 flex justify-center">
                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">Most Popular</span>
              </div>
              <div className="mb-6 mt-2">
                <h3 className="text-xl font-bold text-text-main dark:text-white mb-2 flex items-center gap-2">
                  Premium <span className="material-symbols-outlined text-primary text-xl">star</span>
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">For individuals who want unlimited recipes and smart pantry tracking.</p>
              </div>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-5xl font-black text-text-main dark:text-white tracking-tight">${prices.premium.toFixed(2)}</span>
                <span className="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
              </div>
              <button 
                onClick={() => handlePlanSelect('Premium', prices.premium)}
                className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-green-600 text-white text-sm font-bold transition-colors mb-8 shadow-lg shadow-primary/20"
              >
                Start Free Trial
              </button>
              <div className="space-y-4 flex-grow">
                 <div className="flex items-center gap-3 text-sm font-medium text-text-main dark:text-white">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Everything in Free
                </div>
                {['Unlimited Recipe Generation', 'Advanced AI tracking', 'Smart notifications', 'Nutritional Analysis'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Family Tier */}
            <div className="relative flex flex-col rounded-2xl bg-white dark:bg-surface-dark p-8 border border-gray-100 dark:border-gray-700 h-full shadow-soft transition-transform hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-text-main dark:text-white mb-2">Family Plans</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Collaborative features for households.</p>
              </div>
              <div className="mb-6 flex flex-col gap-1">
                <div className="flex items-baseline gap-1">
                   <span className="text-4xl font-black text-text-main dark:text-white tracking-tight">${prices.family5.toFixed(2)}</span>
                   <span className="text-base font-medium text-gray-500 dark:text-gray-400">/mo</span>
                </div>
                <span className="text-xs text-primary font-bold">For 5 People</span>
              </div>
              <button 
                onClick={() => handlePlanSelect('Family', prices.family5)}
                className="w-full py-3 px-4 rounded-xl bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-text-main dark:text-white text-sm font-bold transition-colors mb-8"
              >
                Go Family
              </button>
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3 text-sm font-medium text-text-main dark:text-white">
                  <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                  Everything in Premium
                </div>
                {['Shared Pantry Sync', 'Up to 5 Users', 'Shopping List Collaboration'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                    {item}
                  </div>
                ))}
                 <div 
                   className="flex items-center gap-3 text-sm font-medium text-gray-700 dark:text-gray-200 border-t pt-3 border-gray-100 dark:border-gray-700 mt-2 cursor-pointer hover:text-primary transition-colors"
                   onClick={() => handlePlanSelect('Family10', prices.family10)}
                 >
                    <span className="material-symbols-outlined text-primary text-[24px]">groups</span>
                    <span>Need 10 users? <span className="font-bold">Upgrade for +${(prices.family10 - prices.family5).toFixed(2)}/mo</span></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      
      {/* Beta Program Section */}
      <section className="w-full px-4 mb-20">
        <div className="max-w-[1200px] mx-auto bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 relative overflow-hidden text-white shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-3 py-1 mb-4">
                <span className="material-symbols-outlined text-primary text-sm animate-pulse">science</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">Experimental</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Beta Testing Program</h2>
              <p className="text-gray-300 mb-6">
                Get early access to experimental AI tools, new designs, and directly influence the app's development. 
                Available as an add-on for any paid plan.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="flex items-center gap-2 text-sm text-gray-300">
                   <span className="material-symbols-outlined text-primary text-sm">check</span>
                   Early access to new features
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-300">
                   <span className="material-symbols-outlined text-primary text-sm">check</span>
                   Direct feedback channel
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 min-w-[200px]">
              <span className="text-sm font-medium text-gray-400 uppercase">Add-on Price</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">$1.00</span>
                <span className="text-sm text-gray-400">/mo</span>
              </div>
              <button 
                onClick={handleInactive}
                className="w-full mt-2 py-2 px-4 rounded-lg bg-white text-gray-900 text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                Add to Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="w-full bg-white dark:bg-surface-dark py-16 lg:py-24 border-t border-gray-100 dark:border-gray-700">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-background-light dark:bg-gray-800 rounded-3xl p-8 lg:p-12 overflow-hidden relative">
            
            {/* Decorative Circle */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex-1 max-w-lg z-10">
              <h2 className="text-3xl lg:text-4xl font-black text-text-main dark:text-white mb-4 leading-tight">
                Take your pantry anywhere.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Scan receipts in seconds, get notified before food expires, and plan meals on the go. Available now on iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#" 
                  onClick={handleInactive}
                  className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOTtZraMhk4ooYSzannJl-TVd7kI91U1vvloBLjVSHTR8ceobMtnCMJjRYnBUZqAfEl2rJHPGH9B0jJINr259wzO-qtRt_JQXacSrp2cbFlfPjlFnzZHCUWUvP81nGdbn7LaZWciUVdORUXGTCApJyOfagLryItM6l8dZiXaKdJeuIznWzTCbolUx8k3dO-1t5GsaWYo0Tw2K41xC_4Sr5xgkO4IgJo3WDjvt7GvmWBGYf58m5kpzGxjjcUMhYHU7hHXAM5yG5HKs" alt="Apple Logo" className="w-6 h-6" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-medium">Download on the</span>
                    <span className="text-base font-bold">App Store</span>
                  </div>
                </a>
                <a 
                  href="#" 
                  onClick={handleInactive}
                  className="flex items-center gap-3 bg-gray-900 text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFoJpNBhIjEjejpAJ9DxS2ca7EuSO0PVxFONM-Xv8GXP0RJY6AGs1iHA7_LWX_BgERQtDNFklpyDtDKHb8q88vUhAtMwu64yG571rMM_4im9N4U1IPSJihNxd77TWxdVc2k9sPSzzJa6exVi-zTOqoP_lQwlwT1Om5NNgfB5cHCX4jA6txFTKT3IGs3RLv8ltKKSPWY96ppOrMm8tGKL3t7JTyqnJiWEn1MV9XiRhNqCpMT_1JTE7MUxWn3f2V2DyzlphDP9btYPA" alt="Android Logo" className="w-6 h-6 invert" />
                  <div className="flex flex-col items-start leading-none">
                    <span className="text-[10px] uppercase font-medium">Get it on</span>
                    <span className="text-base font-bold">Google Play</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex-1 w-full flex justify-center lg:justify-end relative z-10 mt-8 lg:mt-0">
              {/* Phone Mockup */}
              <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] shadow-2xl border-8 border-gray-900 overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-white dark:bg-gray-800 flex flex-col relative">
                  {/* App Header */}
                  <div className="px-6 pt-12 pb-4 bg-primary text-white">
                    <div className="text-xs font-medium opacity-80 mb-1">Good Morning</div>
                    <div className="text-xl font-bold">My Pantry</div>
                  </div>
                  {/* App List */}
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-xl">🥕</div>
                      <div className="flex-1">
                        <div className="text-sm font-bold dark:text-white">Carrots</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Exp: 3 days</div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-xl">🍎</div>
                      <div className="flex-1">
                        <div className="text-sm font-bold dark:text-white">Apples</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Exp: 5 days</div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-xl">🥬</div>
                      <div className="flex-1">
                        <div className="text-sm font-bold dark:text-white">Spinach</div>
                        <div className="text-xs text-red-500 font-bold">Exp: Today</div>
                      </div>
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    </div>
                  </div>
                   {/* FAB */}
                   <div className="absolute bottom-6 right-6 w-12 h-12 bg-primary rounded-full shadow-lg flex items-center justify-center text-white">
                    <span className="material-symbols-outlined">add</span>
                  </div>
                </div>
              </div>
              
              {/* Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-green-200/50 dark:bg-green-900/30 rounded-full blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPage;