import React from 'react';

const AudienceSection: React.FC = () => {
  return (
      <section className="w-full bg-white dark:bg-surface-dark py-24 px-6 border-t border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-text-main dark:text-white mb-4">Who is PantryPal for?</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              Designed to support everyday households looking to stay organized and reduce food waste.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Students */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-3xl">school</span>
              </div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Students</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Simple grocery tracking without the stress. Keep food organized, avoid waste, and plan meals easily — even on a busy schedule.
              </p>
            </div>

            {/* Families */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-3xl">family_restroom</span>
              </div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Families</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Stay on top of groceries for the whole household. Track shared pantry items, expiration dates, and plan meals more efficiently together.
              </p>
            </div>

            {/* Sustainability-Focused Users */}
            <div className="flex flex-col items-center text-center p-6">
              <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 shadow-sm">
                <span className="material-symbols-outlined text-3xl">eco</span>
              </div>
              <h3 className="text-xl font-bold text-text-main dark:text-white mb-3">Sustainability-Focused Users</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Make small changes that reduce food waste. PantryPal helps you use what you already have before it goes bad.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-500 italic">
              PantryPal is built to be flexible — whether you’re cooking for yourself or for a full household.
            </p>
          </div>
        </div>
      </section>
  );
};

export default AudienceSection;
