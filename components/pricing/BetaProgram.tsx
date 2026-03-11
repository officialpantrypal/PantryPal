import React from 'react';
import { handleInactive } from '../../utils/toast';

const BetaProgram: React.FC = () => {
  return (
    <section className="w-full px-4 mb-20">
      <div className="max-w-[1200px] mx-auto bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 md:p-12 relative overflow-hidden text-white shadow-xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-3 py-1 mb-4">
              <span className="material-symbols-outlined text-primary text-sm animate-pulse">science</span>
              <span className="text-xs font-bold text-primary uppercase tracking-wider">Experimental</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Join the Beta Testing Program</h2>
            <p className="text-gray-300 mb-6">
              Get early access to experimental AI tools, new designs, and directly influence the app's development.
              Available as an add-on for any paid plan.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                 <span className="material-symbols-outlined text-primary text-sm">check</span>
                 Early access to new features
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                 <span className="material-symbols-outlined text-primary text-sm">check</span>
                 Direct feedback channel
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 min-w-[200px]">
            <span className="text-sm font-medium text-gray-400 uppercase">Add-on Price</span>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-black text-white">$1.00</span>
              <span className="text-sm text-gray-400">/mo</span>
            </div>
            <button
              onClick={handleInactive}
              className="w-full mt-2 py-2 px-4 rounded-lg bg-white text-gray-900 text-sm font-bold hover:bg-gray-100 transition-colors"
            >
              Add to Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BetaProgram;
