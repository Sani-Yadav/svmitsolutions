import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import FeatureCards from '../sections/FeatureCards';
import ServicesSection from '../sections/ServicesSection';
import ChallengesSection from '../sections/ChallengesSection';
import TechnologyFoundationSection from '../sections/TechnologyFoundationSection';
import DevelopmentProcessSection from '../sections/DevelopmentProcessSection';
import IndustriesSection from '../sections/IndustriesSection';
import PortfolioSection from '../sections/PortfolioSection';
import EngineeringCollaborationCTA from '../sections/EngineeringCollaborationCTA';
import ContactSection from '../sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FeatureCards />
      <ServicesSection />
      <ChallengesSection />
      <TechnologyFoundationSection />
      <DevelopmentProcessSection />
      <IndustriesSection />
      <PortfolioSection />
      <EngineeringCollaborationCTA />
      <ContactSection />
      <div className="page-anchors" aria-hidden="true"><span id="solutions" /><span id="projects" /></div>
    </>
  );
}
