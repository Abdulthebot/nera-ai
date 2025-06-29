
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Heart, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const handleChatClick = () => {
    alert("💜 Anonymous chat coming soon. You're safe here.");
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="container mx-auto px-6">
        {/* Soft Banner */}
        <div className="text-center mb-12">
          <div className="inline-block bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-violet-200/50 mb-8">
            <p className="text-violet-700 font-light text-lg tracking-wide">
              NERA — Protecting Her Dignity, Silently.
            </p>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-16 w-16 text-violet-400 mr-4" />
            <h1 className="text-6xl font-extralight text-violet-800 tracking-wide">
              NERA
            </h1>
            <Heart className="h-12 w-12 text-pink-400 ml-4 animate-pulse" />
          </div>

          <p className="text-2xl text-violet-600 font-light mb-6 leading-relaxed">
            A safe space for healing, understanding, and reclaiming your peace
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            If you've experienced online harassment, deepfakes, or digital violations, 
            you're not alone. NERA is here to support you with compassion, not judgment.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              onClick={handleChatClick}
              className="bg-violet-500 hover:bg-violet-600 text-white px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5 mr-3" />
              Start Anonymous Chat
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-violet-300 text-violet-600 hover:bg-violet-50 px-8 py-4 text-lg rounded-full"
            >
              Learn How NERA Helps
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/70 backdrop-blur-sm border-violet-200/50 shadow-lg">
            <CardContent className="p-6 text-center">
              <Shield className="h-12 w-12 text-violet-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-violet-700 mb-2">100% Anonymous</h3>
              <p className="text-gray-600">No registration, no tracking, complete privacy</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-violet-200/50 shadow-lg">
            <CardContent className="p-6 text-center">
              <Heart className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-violet-700 mb-2">Judgment-Free</h3>
              <p className="text-gray-600">A safe space designed with empathy and care</p>
            </CardContent>
          </Card>

          <Card className="bg-white/70 backdrop-blur-sm border-violet-200/50 shadow-lg">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-violet-700 mb-2">Always Available</h3>
              <p className="text-gray-600">Support whenever you need it, day or night</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
