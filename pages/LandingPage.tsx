import React from 'react';

const LandingPage: React.FC = () => {
  const handleInactive = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('trigger-toast'));
  };

  return (
    <>
      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 bg-white dark:bg-[#1e2128]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 md:text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold tracking-tight text-text-main dark:text-white sm:text-4xl mb-4">
              Why PantryPal?
            </h2>
            <p className="text-lg text-text-muted dark:text-gray-400">
              Smart tools designed to help organize groceries and reduce food waste at home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#dde4df] dark:border-[#333] bg-background-light dark:bg-surface-dark p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white dark:bg-[#383d47] shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="material-symbols-outlined text-3xl text-text-main dark:text-white transition-colors duration-300 group-hover:text-primary">list_alt</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-main dark:text-white">Track Groceries</h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                Log your items quickly and keep your digital pantry up-to-date. Always know exactly what you have in stock before you head to the store.
              </p>
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-all group-hover:scale-150"></div>
            </div>

            {/* Feature 2 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#dde4df] dark:border-[#333] bg-background-light dark:bg-surface-dark p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white dark:bg-[#383d47] shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="material-symbols-outlined text-3xl text-text-main dark:text-white transition-colors duration-300 group-hover:text-primary">timer</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-main dark:text-white">Expiration Alerts</h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                Receive simple reminders before your food expires. PantryPal helps you prioritize ingredients that need to be used first.
              </p>
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/5 transition-all group-hover:scale-150"></div>
            </div>

            {/* Feature 3 */}
            <div className="group relative overflow-hidden rounded-2xl border border-[#dde4df] dark:border-[#333] bg-background-light dark:bg-surface-dark p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white dark:bg-[#383d47] shadow-sm border border-gray-100 dark:border-gray-700">
                <span className="material-symbols-outlined text-3xl text-text-main dark:text-white transition-colors duration-300 group-hover:text-primary">restaurant</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-text-main dark:text-white">Discover Recipes</h3>
              <p className="text-text-muted dark:text-gray-400 leading-relaxed">
                Discover meal ideas based on what you already have in your kitchen. PantryPal suggests recipes to help you use up every item.
              </p>
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/5 transition-all group-hover:scale-150"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 mb-8">
        <div className="mx-auto max-w-7xl rounded-2xl bg-primary px-8 py-12 text-center shadow-glow sm:px-12 md:py-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "24px 24px" }}></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Help us build a waste-free future.
            </h2>
            <p className="mb-8 max-w-2xl text-lg text-green-50">
              Start organizing your kitchen with PantryPal and support a student-led initiative to protect our planet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={handleInactive}
                className="flex items-center justify-center rounded-lg bg-white px-8 py-3 text-base font-bold text-primary transition-transform hover:scale-105 shadow-md"
              >
                Join the Beta
              </button>
              <button 
                onClick={handleInactive}
                className="flex items-center justify-center rounded-lg border border-white/30 bg-primary-dark/20 px-8 py-3 text-base font-bold text-white transition-colors hover:bg-primary-dark/40 backdrop-blur-sm"
              >
                Learn Our Story
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;