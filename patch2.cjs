const fs = require('fs');

const path = 'pages/PricingPage.tsx';
let content = fs.readFileSync(path, 'utf-8');

// The main branch moved PricingCards to components/pricing/PricingCards.tsx.
// Since we want to maintain our optimization, we should also remove FREE_FEATURES etc from pages/PricingPage.tsx
// if it's no longer used there, and put it into components/pricing/PricingCards.tsx

// Actually, wait, let me look at PricingCards.tsx to see if I need to patch it.
// I will just remove the unused constants from PricingPage.tsx for now.
const constantsToRemove = `const FREE_FEATURES = ['Unlimited receipt scanning', 'Manual item entry & editing', 'AI expiration tracking'];
const PREMIUM_FEATURES = ['Unlimited Recipe Generation', 'Advanced AI tracking', 'Smart notifications', 'Nutritional Analysis'];
const FAMILY_FEATURES = ['Shared Pantry Sync', 'Up to 5 Users', 'Shopping List Collaboration'];\n\n`;

content = content.replace(constantsToRemove, '');
fs.writeFileSync(path, content, 'utf-8');

// Now, update components/pricing/PricingCards.tsx
const cardsPath = 'components/pricing/PricingCards.tsx';
let cardsContent = fs.readFileSync(cardsPath, 'utf-8');

cardsContent = cardsContent.replace(
  "const PricingCards: React.FC<PricingCardsProps> = ({ isYearly, prices, handlePlanSelect }) => {",
  `const FREE_FEATURES = ['Unlimited receipt scanning', 'Manual item entry & editing', 'AI expiration tracking'];
const PREMIUM_FEATURES = ['Unlimited Recipe Generation', 'Advanced AI tracking', 'Smart notifications', 'Nutritional Analysis'];
const FAMILY_FEATURES = ['Shared Pantry Sync', 'Up to 5 Users', 'Shopping List Collaboration'];

const PricingCards: React.FC<PricingCardsProps> = ({ isYearly, prices, handlePlanSelect }) => {`
);

cardsContent = cardsContent.replace(
  `{['Unlimited receipt scanning', 'Manual item entry & editing', 'AI expiration tracking'].map((item, i) => (`,
  `{FREE_FEATURES.map((item, i) => (`
);

cardsContent = cardsContent.replace(
  `{['Unlimited Recipe Generation', 'Advanced AI tracking', 'Smart notifications', 'Nutritional Analysis'].map((item, i) => (`,
  `{PREMIUM_FEATURES.map((item, i) => (`
);

cardsContent = cardsContent.replace(
  `{['Shared Pantry Sync', 'Up to 5 Users', 'Shopping List Collaboration'].map((item, i) => (`,
  `{FAMILY_FEATURES.map((item, i) => (`
);

fs.writeFileSync(cardsPath, cardsContent, 'utf-8');
console.log('Patched pages/PricingPage.tsx and components/pricing/PricingCards.tsx');
