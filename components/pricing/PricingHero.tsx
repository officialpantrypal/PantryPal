import React from 'react';

interface PricingHeroProps {
  isYearly: boolean;
  setIsYearly: (value: boolean) => void;
}

const PricingHero: React.FC<PricingHeroProps> = ({ isYearly, setIsYearly }) => {
  return (
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
  );
};

export default PricingHero;
