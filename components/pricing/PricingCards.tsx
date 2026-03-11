import React from 'react';

interface PricingCardsProps {
  isYearly: boolean;
  prices: {
    premium: number;
    family5: number;
    family10: number;
  };
  handlePlanSelect: (planName: string, price: number) => void;
}

const PricingCards: React.FC<PricingCardsProps> = ({ isYearly, prices, handlePlanSelect }) => {
  return (
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
  );
};

export default PricingCards;
