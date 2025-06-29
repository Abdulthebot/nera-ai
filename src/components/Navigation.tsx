
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Heart, Shield, FileText, HelpCircle, Info } from 'lucide-react';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChatClick = () => {
    // This will be implemented later - for now just show a gentle message
    alert("💜 Anonymous chat coming soon. You're safe here.");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-violet-200/30 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Shield className="h-8 w-8 text-violet-500" />
            <span className="text-2xl font-light text-violet-800 tracking-wide">NERA</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-violet-600 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-violet-600 transition-colors font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={handleChatClick}
              className="text-gray-700 hover:text-violet-600 transition-colors font-medium flex items-center"
            >
              <MessageCircle className="h-4 w-4 mr-1" />
              Start Anonymous Chat
            </button>
            <button 
              onClick={() => scrollToSection('redemption-tools')}
              className="text-gray-700 hover:text-violet-600 transition-colors font-medium"
            >
              Redemption Tools
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-gray-700 hover:text-violet-600 transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-violet-600 transition-colors font-medium"
            >
              About NERA
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleChatClick}
            className="bg-violet-500 hover:bg-violet-600 text-white px-6 py-2 rounded-full shadow-lg"
          >
            <Heart className="h-4 w-4 mr-2" />
            I Need Support
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
