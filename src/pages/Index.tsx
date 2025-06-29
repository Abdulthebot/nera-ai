
import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/sections/HeroSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import RedemptionToolsSection from '@/components/sections/RedemptionToolsSection';
import FAQSection from '@/components/sections/FAQSection';
import AboutSection from '@/components/sections/AboutSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <RedemptionToolsSection />
      <FAQSection />
      <AboutSection />
      
      {/* Footer */}
      <footer className="bg-violet-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="space-y-4">
            <p className="text-lg font-light">
              Created with love by <span className="font-medium">Abdul Hameed</span>
            </p>
            <p className="text-violet-300">
              Final Year B.Tech CSE | Lovely Professional University
            </p>
            <div className="pt-6 border-t border-violet-700">
              <p className="text-violet-200 text-sm">
                NERA — Protecting Her Dignity, Silently.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
