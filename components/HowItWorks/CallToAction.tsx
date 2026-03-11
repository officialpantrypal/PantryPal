import React from 'react';

const CallToAction: React.FC = () => {
  const handleInactive = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('trigger-toast'));
  };

  return (
      <section className="w-full px-6 py-20">
        <div className="max-w-[960px] mx-auto bg-primary rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-primary/30 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          <div className="flex flex-col gap-4 relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
              Ready to waste less <br />and eat better with PantryPal?
            </h2>
          </div>
          <div className="relative z-10 flex flex-col gap-3 w-full md:w-auto">
            <button
              onClick={handleInactive}
              className="flex w-full md:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 px-8 bg-white text-primary text-base font-bold leading-normal tracking-wide hover:bg-gray-50 transition-colors shadow-lg"
            >
              Start Organizing Today
            </button>
            <p className="text-white/70 text-xs text-center">Free 14-day trial • No credit card required</p>
          </div>
        </div>
      </section>
  );
};

export default CallToAction;
