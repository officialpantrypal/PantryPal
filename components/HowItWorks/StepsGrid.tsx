import React from 'react';

const StepsGrid: React.FC = () => {
  return (
      <section className="w-full px-6 pb-20">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Step 1 */}
          <div className="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full overflow-hidden">
            <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors font-black text-8xl leading-none select-none z-0">1</div>
            <div className="relative z-10 flex flex-col gap-6 h-full">
              <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA60XA6NURRntnoO_NP4hkr7yadkvvZ8YWNMHG1wIc4DTCsCO3tu0vbxc8xFGkumv_vqBFoJyWQEmgKbGKJWdv6bHGvHfGhjMzH6gQ3R6Nw6P8DldgV1vTHtNI4_ngY759EI2y87gvx_4M4Flp9ge9sLvCd8vd3N7kBSxmW_b1Hx92XSnWO4ktDFwYtt7nV7yEI38ZYPwO1J29kBgIRP5XS3NgUKjWwhZ0ob4JWgd3xnj-lqb-oy0_N8qgnevJ_A5vix9Wo0LQo2cc')" }}></div>
                <div className="absolute inset-0 bg-black/10"></div>
                {/* Mock UI Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg flex items-center gap-3 animate-pulse">
                  <span className="material-symbols-outlined text-primary">receipt_long</span>
                  <div className="flex flex-col gap-1 w-full">
                    <div className="h-2 w-3/4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    <div className="h-2 w-1/2 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  </div>
                  <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
                  <h3 className="text-2xl font-bold text-text-main dark:text-white">Scan or Type</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Upload a receipt, scan a barcode, or manually enter items in PantryPal. You have full control to edit item details, quantities, and dates.
                </p>
              </div>
            </div>
          </div>

          {/* Step 2 - FIXED: Tightened framing, clipped overflow, and subtle motion */}
          <div className="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full overflow-hidden">
            <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors font-black text-8xl leading-none select-none z-0">2</div>
            <div className="relative z-10 flex flex-col gap-6 h-full">
              {/* Image/Mock Wrapper with fixed max-height and overflow clipping */}
              <div className="w-full max-h-[320px] bg-gray-50 dark:bg-gray-900/50 rounded-xl overflow-hidden relative flex flex-col p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Pantry Editor</span>
                  <div className="flex gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 relative">
                  {/* Subtle Y-translation (32px / 8 units) clipped within this container */}
                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm transition-transform duration-500 group-hover:-translate-y-2 opacity-60">
                    <div className="flex items-center gap-3">
                      <div className="text-lg">🥛</div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold dark:text-white">Whole Milk</span>
                        <span className="text-[9px] text-gray-400">Qty: 2L</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-orange-500 bg-orange-50 dark:bg-orange-900/20 px-2 py-0.5 rounded">Exp 3d</span>
                  </div>

                  {/* Primary Featured Item - Focused Animation */}
                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-xl border-2 border-primary dark:border-primary/50 shadow-lg transition-transform duration-500 group-hover:-translate-y-8 z-10">
                    <div className="flex items-center gap-3">
                      <div className="text-xl">🥚</div>
                      <div className="flex flex-col">
                        <span className="text-sm font-black text-text-main dark:text-white">Farm Eggs</span>
                        <div className="flex items-center gap-2 mt-1">
                          <button className="size-5 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">-</button>
                          <span className="text-xs font-bold text-primary">12</span>
                          <button className="size-5 rounded bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs">+</button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                       <button className="text-[10px] font-bold bg-primary text-white px-4 py-1.5 rounded-md shadow-sm">Save Changes</button>
                       <span className="text-[9px] text-gray-400">Updated: Today</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-3 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm transition-transform duration-500 group-hover:-translate-y-12 opacity-40">
                    <div className="flex items-center gap-3">
                      <div className="text-lg">🥑</div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold dark:text-white">Avocados</span>
                        <span className="text-[9px] text-gray-400">Qty: 4</span>
                      </div>
                    </div>
                    <span className="text-[9px] font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-0.5 rounded">Fresh</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
                  <h3 className="text-2xl font-bold text-text-main dark:text-white">Track & Edit</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                  Your digital pantry updates instantly. AI estimates expiration dates, and you can easily update the "amount left" or quantity in real-time.
                </p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative flex flex-col bg-surface-light dark:bg-surface-dark rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full overflow-hidden">
            <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors font-black text-8xl leading-none select-none z-0">3</div>
            <div className="relative z-10 flex flex-col gap-6 h-full">
              <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDKL0OFga_Ukywlfgn9npD-gtkZQL5arJECK7I3GpM-7UbVJnZ9b-L4J16_V-yPJvPWwlDYSuMOqwgn6I62KtUv3Cr0jLpJfzXTeyNf-431YK6LYkFUdaAF6MtRYTeZ44Dhm2_4YXrtCCpKTfHJnjxBOtB-MIZwqFbcPDaHBeRz3nUFaqk1UJysAwZjY70OjMFUGbmN_hB3m-vOXrezmH4uma-yS2eRUpckToSgQI8pmIUdq3-mbWDlfB-LFBGCqo4OxCIN6P9azvE')" }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="material-symbols-outlined icon-filled text-yellow-400 text-sm">star</span>
                    <span className="text-xs font-bold text-yellow-400">Match Found</span>
                  </div>
                  <p className="font-bold text-lg">Avocado Toast & Eggs</p>
                  <p className="text-xs text-gray-200">Uses 2 items from pantry</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 mt-auto">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
                  <h3 className="text-2xl font-bold text-text-main dark:text-white">Chef Mode</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Get custom recipes based on what you already have in PantryPal. Save money, reduce waste, and discover new favorite meals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default StepsGrid;
