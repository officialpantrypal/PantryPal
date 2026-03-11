import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { PlanType, BillingCycle, pricing, betaPriceMonthly } from '../components/checkout/types';
import CheckoutSuccess from '../components/checkout/CheckoutSuccess';
import PlanSelection from '../components/checkout/PlanSelection';
import BillingFrequency from '../components/checkout/BillingFrequency';
import OptionalAddOns from '../components/checkout/OptionalAddOns';
import PaymentInformation from '../components/checkout/PaymentInformation';
import OrderSummary from '../components/checkout/OrderSummary';

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  
  // Initial state derived from navigation or default
  const initialPlan = location.state?.plan;
  const initialCycle = initialPlan?.interval === 'year' ? 'year' : 'month';
  
  // Determine initial plan type based on passed name
  let defaultPlanType: PlanType = 'premium';
  if (initialPlan?.name?.toLowerCase().includes('family')) {
    if (initialPlan.price > 10) {
       defaultPlanType = 'family10';
    } else {
       defaultPlanType = 'family5';
    }
  }

  const [planType, setPlanType] = useState<PlanType>(defaultPlanType);
  const [billingCycle, setBillingCycle] = useState<BillingCycle>(initialCycle);
  const [addBeta, setAddBeta] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Calculate Totals
  const currentPlanBase = pricing[planType].baseMonthly;
  const planPrice = billingCycle === 'month' ? currentPlanBase : (currentPlanBase * 12 * 0.8);
  const betaCost = addBeta ? (billingCycle === 'year' ? betaPriceMonthly * 12 : betaPriceMonthly) : 0;
  const total = planPrice + betaCost;

  const nextBillingDate = new Date();
  if (billingCycle === 'year') {
    nextBillingDate.setFullYear(nextBillingDate.getFullYear() + 1);
  } else {
    nextBillingDate.setMonth(nextBillingDate.getMonth() + 1);
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <CheckoutSuccess
        planType={planType}
        billingCycle={billingCycle}
        nextBillingDate={nextBillingDate}
      />
    );
  }

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-black text-text-main dark:text-white mb-3">Checkout — PantryPal</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Choose a plan that fits your household and start managing your pantry smarter.</p>
        </div>
        
        <form onSubmit={handlePayment} className="md:grid md:grid-cols-12 md:gap-8 lg:gap-12">
          
          {/* Left Column (Selections) */}
          <div className="md:col-span-7 lg:col-span-8 space-y-8">
            <PlanSelection planType={planType} setPlanType={setPlanType} />
            <BillingFrequency billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
            <OptionalAddOns addBeta={addBeta} setAddBeta={setAddBeta} />
            <PaymentInformation agreedToTerms={agreedToTerms} setAgreedToTerms={setAgreedToTerms} loading={loading} />
          </div>

          {/* Right Column (Sticky Summary) */}
          <OrderSummary planType={planType} billingCycle={billingCycle} addBeta={addBeta} total={total} />
          
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;
