import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
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
  );
};

export default FeaturesSection;