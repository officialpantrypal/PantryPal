import React from 'react';
import { handleInactive } from '../utils/toast';

const CTABanner: React.FC = () => {
  return (
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
  );
};

export default CTABanner;