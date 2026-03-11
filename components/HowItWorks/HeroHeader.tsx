import React from 'react';

const HeroHeader: React.FC = () => {
  return (
    <section className="w-full px-6 py-16 md:py-24 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="relative z-10 flex flex-col items-center gap-4 max-w-3xl mx-auto">
        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Simple & Effective</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-text-main dark:text-white">
          Simplify your kitchen in <span className="text-primary">3 simple steps</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mt-2 leading-relaxed">
          PantryPal transforms your grocery chaos into a streamlined system. Track inventory, reduce waste, and cook delicious meals with what you have.
        </p>
      </div>
    </section>
  );
};

export default HeroHeader;
