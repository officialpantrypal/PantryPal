export type PlanType = 'premium' | 'family5' | 'family10';
export type BillingCycle = 'month' | 'year';

export const pricing = {
  premium: {
    name: 'Premium',
    baseMonthly: 5.00,
    description: 'For individuals who want unlimited recipes and smart pantry tracking.'
  },
  family5: {
    name: 'Family (5 Users)',
    baseMonthly: 8.00,
    description: 'Share one pantry with up to five people.'
  },
  family10: {
    name: 'Family (10 Users)',
    baseMonthly: 13.00,
    description: 'Perfect for large families or shared households.'
  }
};

export const betaPriceMonthly = 1.00;
