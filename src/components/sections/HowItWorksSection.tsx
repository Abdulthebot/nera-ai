
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, MessageCircle, FileText, Download } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-violet-800 mb-6">How NERA Supports You</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every feature is designed with your emotional safety and privacy in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-violet-600" />
              </div>
              <h3 className="text-xl font-medium text-violet-700 mb-4">Detect & Protect</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered detection to identify fake or manipulated images with 98%+ accuracy
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-medium text-blue-700 mb-4">Anonymous Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Chat with NERA AI for emotional support. No names, no judgment, just understanding
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-medium text-pink-700 mb-4">Healing Letters</h3>
              <p className="text-gray-600 leading-relaxed">
                Write letters to yourself or others as part of your healing journey
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200/50 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium text-green-700 mb-4">Private & Secure</h3>
              <p className="text-gray-600 leading-relaxed">
                Everything stays on your device. We never track or store your personal data
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Simple 3-Step Process */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-3xl font-light text-violet-800 text-center mb-12">Simple Steps to Start Healing</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-medium text-violet-600">1</span>
              </div>
              <h4 className="text-xl font-medium text-violet-700 mb-3">Choose Your Need</h4>
              <p className="text-gray-600">Detect, chat, or write a healing letter</p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-medium text-violet-600">2</span>
              </div>
              <h4 className="text-xl font-medium text-violet-700 mb-3">Stay Safe & Private</h4>
              <p className="text-gray-600">Everything stays anonymous and secure</p>
            </div>

            <div className="text-center">
              <div className="bg-violet-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-medium text-violet-600">3</span>
              </div>
              <h4 className="text-xl font-medium text-violet-700 mb-3">Find Your Peace</h4>
              <p className="text-gray-600">Through understanding, not guilt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
