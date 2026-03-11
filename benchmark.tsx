import { createElement, useMemo, useState } from 'react';
import { renderToString } from 'react-dom/server';

type PlanType = 'premium' | 'family5' | 'family10';
type BillingCycle = 'month' | 'year';

const pricing = {
  premium: { name: 'Premium', baseMonthly: 5.00 },
  family5: { name: 'Family (5 Users)', baseMonthly: 8.00 },
  family10: { name: 'Family (10 Users)', baseMonthly: 13.00 }
};

const betaPriceMonthly = 1.00;

const UnoptimizedComponent = () => {
  const [planType] = useState<PlanType>('premium');
  const [billingCycle] = useState<BillingCycle>('month');
  const [addBeta] = useState(false);

  // Calculate Totals (Unoptimized)
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

  return createElement('div', null, `Total: ${total}, Next Billing: ${nextBillingDate.toISOString()}`);
};

const OptimizedComponent = () => {
  const [planType] = useState<PlanType>('premium');
  const [billingCycle] = useState<BillingCycle>('month');
  const [addBeta] = useState(false);

  // Calculate Totals (Optimized)
  const { total, nextBillingDate } = useMemo(() => {
    const currentPlanBase = pricing[planType].baseMonthly;
    const planPrice = billingCycle === 'month' ? currentPlanBase : (currentPlanBase * 12 * 0.8);
    const betaCost = addBeta ? (billingCycle === 'year' ? betaPriceMonthly * 12 : betaPriceMonthly) : 0;
    const totalCost = planPrice + betaCost;

    const nextDate = new Date();
    if (billingCycle === 'year') {
      nextDate.setFullYear(nextDate.getFullYear() + 1);
    } else {
      nextDate.setMonth(nextDate.getMonth() + 1);
    }

    return { total: totalCost, nextBillingDate: nextDate };
  }, [planType, billingCycle, addBeta]);

  return createElement('div', null, `Total: ${total}, Next Billing: ${nextBillingDate.toISOString()}`);
};

const runBenchmark = (Component: any, name: string) => {
  const start = performance.now();
  for (let i = 0; i < 10000; i++) {
    renderToString(createElement(Component));
  }
  const end = performance.now();
  console.log(`${name}: ${end - start} ms`);
};

runBenchmark(UnoptimizedComponent, 'Unoptimized');
runBenchmark(OptimizedComponent, 'Optimized');
