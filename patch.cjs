const fs = require('fs');

const path = 'pages/PricingPage.tsx';
let content = fs.readFileSync(path, 'utf-8');

// Replace the whole block of code with just the origin/main version which uses components.
const startMarker = '<<<<<<< HEAD';
const endMarker = '>>>>>>> origin/main';

const startIdx = content.indexOf(startMarker);
const endIdx = content.indexOf(endMarker) + endMarker.length;

if (startIdx !== -1 && endIdx !== -1) {
    const toReplace = content.substring(startIdx, endIdx);
    const originMainVersion = `      <PricingHero isYearly={isYearly} setIsYearly={setIsYearly} />
      <PricingCards isYearly={isYearly} prices={prices} handlePlanSelect={handlePlanSelect} />
      <BetaProgram handleInactive={handleInactive} />
      <DownloadApp handleInactive={handleInactive} />`;

    content = content.replace(toReplace, originMainVersion);
    fs.writeFileSync(path, content, 'utf-8');
    console.log('Patched pages/PricingPage.tsx');
} else {
    console.error('Could not find merge markers in pages/PricingPage.tsx');
}
