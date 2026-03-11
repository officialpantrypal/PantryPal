import React from 'react';

const HeroSection: React.FC = () => {
  const handleInactive = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('trigger-toast'));
  };

  return (
    <section className="relative px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          {/* Hero Text Block */}
          <div className="lg:col-span-5 flex flex-col justify-center rounded-2xl bg-surface-light dark:bg-surface-dark p-8 lg:p-12 shadow-soft border border-[#e5e7eb] dark:border-[#333]">
            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-6">
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span>Student-Built Startup</span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-text-main dark:text-white lg:text-5xl xl:text-6xl">
              PantryPal: <br />
              <span className="text-primary">Waste Less Food</span>
            </h1>
            <p className="mb-8 text-lg text-text-muted dark:text-gray-300 leading-relaxed">
              PantryPal helps you keep track of groceries, monitor expiration dates, and plan meals more efficiently — all in one simple platform. Built by students to help households eat fresher and save more.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleInactive}
                className="flex h-12 items-center justify-center rounded-lg bg-primary px-8 text-base font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg shadow-glow"
              >
                Get Started
              </button>
              <button
                onClick={handleInactive}
                className="flex h-12 items-center justify-center rounded-lg border border-[#dde4df] dark:border-[#444] bg-transparent px-8 text-base font-bold text-text-main dark:text-white hover:bg-gray-50 dark:hover:bg-[#333] transition-all"
              >
                View Pricing
              </button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-xs font-medium text-text-muted dark:text-gray-400 italic">
              <p>An early-stage project developed to reduce household waste.</p>
            </div>
          </div>

          {/* Hero Image Block */}
          <div className="lg:col-span-7 relative h-[400px] lg:h-auto overflow-hidden rounded-2xl bg-[#e8f5e9] dark:bg-[#1a2e22] shadow-soft group">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/10 dark:to-black/40 z-10"></div>
            <div className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFEQfAZuEYJAjoR6KsxdMWtqwKk4lfjUYlfUyWuupX3G0kKgnIsJQhiNFWo9VmWafgF0A4vTn9E4M2CXVK65M6JyCvaNUJxt7lybRTmhiSgzSTS0oo3cdqhumNKdxaMQaLGGwkg1ngw6fzmtBMFnx9AKLyF2w-R5ShIdndisZseKw8WqlXG9_-TpbYEIVoBAl5U1H9VZdJfC9vdElGJCiFSgAVM4jU_XZbazMjYKI7zfvjB8Dpmj9ciWtJLyZbIKaO7iiCP7RUlTc')" }}></div>

            {/* Floating Card */}
            <div className="absolute bottom-6 right-6 z-20 hidden sm:block animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="w-64 rounded-xl bg-white/95 dark:bg-surface-dark/95 p-4 shadow-xl backdrop-blur-sm border border-white/20">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase">Expiring Soon</span>
                  <span className="material-symbols-outlined text-accent text-sm">warning</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-xl">🥑</div>
                  <div>
                    <p className="text-sm font-bold text-text-main dark:text-white">Avocados</p>
                    <p className="text-xs text-red-500 font-medium">Use within 2 days</p>
                  </div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-2 overflow-hidden">
                  <div className="bg-red-500 h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;