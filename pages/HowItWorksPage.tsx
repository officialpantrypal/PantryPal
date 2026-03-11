import React from 'react';
import HeroHeader from '../components/HowItWorks/HeroHeader';
import StepsGrid from '../components/HowItWorks/StepsGrid';
import AudienceSection from '../components/HowItWorks/AudienceSection';
import CallToAction from '../components/HowItWorks/CallToAction';

const HowItWorksPage: React.FC = () => {
  return (
    <>
      <HeroHeader />
      <StepsGrid />
      <AudienceSection />
      <CallToAction />
    </>
  );
};

export default HowItWorksPage;