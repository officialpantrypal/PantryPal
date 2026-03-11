import React from 'react';

interface DownloadAppProps {
  handleInactive: (e: React.MouseEvent) => void;
}

const DownloadApp: React.FC<DownloadAppProps> = ({ handleInactive }) => {
  return (
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
  );
};

export default DownloadApp;
