import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PricingHero from '../components/pricing/PricingHero';
import PricingCards from '../components/pricing/PricingCards';
import BetaProgram from '../components/pricing/BetaProgram';
import DownloadApp from '../components/pricing/DownloadApp';

const PricingPage: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const handlePlanSelect = (planName: string, price: number) => {
    // If not authenticated, redirect to login with the intended plan
    if (!isAuthenticated) {
      navigate('/login', { 
        state: { 
          from: { pathname: '/checkout' },
          plan: { name: planName, price, interval: isYearly ? 'year' : 'month' }
        } 
      });
    } else {
      // If authenticated, go straight to checkout
      navigate('/checkout', { 
        state: { 
          plan: { name: planName, price, interval: isYearly ? 'year' : 'month' }
        } 
      });
    }
  };
  
  const handleInactive = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new Event('trigger-toast'));
  };

  // Prices
  const prices = {
      premium: isYearly ? 5.00 * 12 * 0.8 / 12 : 5.00, // 4.00 if yearly approx
      family5: isYearly ? 8.00 * 12 * 0.8 / 12 : 8.00, // 6.40 if yearly
      family10: isYearly ? 13.00 * 12 * 0.8 / 12 : 13.00 // 10.40 if yearly
  };

  return (
    <>
      <PricingHero isYearly={isYearly} setIsYearly={setIsYearly} />
      <PricingCards isYearly={isYearly} prices={prices} handlePlanSelect={handlePlanSelect} />
      <BetaProgram handleInactive={handleInactive} />
      <DownloadApp handleInactive={handleInactive} />
    </>
  );
};

export default PricingPage;
