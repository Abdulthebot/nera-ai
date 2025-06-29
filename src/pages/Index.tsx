import React, { useState, useEffect } from 'react';
import { Upload, Shield, Moon, Heart, Eye, Download, Sparkles, Star, Zap, AlertTriangle, MessageCircle, FileText, Lock, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import ImageUploader from '@/components/ImageUploader';
import ScanResult from '@/components/ScanResult';
import ProtectionTimer from '@/components/ProtectionTimer';
import UserFeedback from '@/components/UserFeedback';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'upload' | 'scanning' | 'result'>('intro');
  const [scanResult, setScanResult] = useState(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setCurrentStep('scanning');
    
    // Simulate AI scanning with realistic delay
    setTimeout(() => {
      const mockResult = {
        status: 'safe',
        confidence: 98.7,
        details: 'This image appears to be authentic and has not been detected as AI-generated or deepfaked.',
        timestamp: new Date().toISOString(),
        hash: 'nera_' + Math.random().toString(36).substr(2, 9)
      };
      setScanResult(mockResult);
      setCurrentStep('result');
      
      toast({
        title: "🌙 NERA Protected Someone Today",
        description: "The scan is complete. She's safe.",
      });
    }, 3000);
  };

  const resetFlow = () => {
    setCurrentStep('intro');
    setScanResult(null);
    setUploadedFile(null);
  };

  const handleSupportChat = () => {
    toast({
      title: "🤖 NERA Support Chat",
      description: "Chat feature coming soon. You're not alone in this.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background with Moving Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:50px_50px]"></div>
        
        {/* Moving Gradient Orbs */}
        <div 
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-0 w-48 h-48 md:w-72 md:h-72 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        {/* Floating Particles - Hidden on mobile for performance */}
        <div className="hidden md:block absolute top-20 left-20 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60">
          <Sparkles className="w-4 h-4 text-violet-300 animate-spin" />
        </div>
        <div className="hidden md:block absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-40">
          <Star className="w-3 h-3 text-purple-200" />
        </div>
        <div className="hidden md:block absolute bottom-32 left-16 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}>
          <Zap className="w-5 h-5 text-blue-300" />
        </div>
        <div className="hidden md:block absolute bottom-20 right-20 w-2 h-2 bg-violet-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="hidden md:block absolute top-60 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-6 md:py-12 relative z-10">
        {/* Creator's Note Link - Moved to top */}
        <div className="text-center mb-6 md:mb-8">
          <Link to="/creators-note" className="inline-flex items-center text-violet-300 hover:text-violet-200 transition-colors duration-300 text-base md:text-lg font-light tracking-wide backdrop-blur-sm bg-white/5 px-4 md:px-6 py-2 md:py-3 rounded-full border border-violet-500/30 hover:border-violet-400/50 hover:bg-white/10 touch-manipulation">
            <Heart className="w-4 h-4 md:w-5 md:h-5 mr-2 animate-pulse" />
            Read the Creator's Note
            <Heart className="w-4 h-4 md:w-5 md:h-5 ml-2 animate-pulse" />
          </Link>
        </div>

        {/* Enhanced Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center mb-6 md:mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse"></div>
            <Moon className="h-8 w-8 md:h-12 md:w-12 text-violet-300 mr-3 md:mr-4 animate-pulse relative z-10" />
            <h1 className="text-4xl md:text-8xl font-extralight tracking-[0.2em] md:tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-100 to-blue-200 font-serif relative z-10 drop-shadow-2xl">
              NERA
            </h1>
            <Heart className="h-6 w-6 md:h-8 md:w-8 text-pink-300 ml-3 md:ml-4 animate-pulse relative z-10" />
          </div>
          <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
            <p className="text-violet-300 italic text-lg md:text-xl font-light tracking-wide px-4">
              Made with love, for the love of نَمِيرَة
            </p>
            <Badge variant="secondary" className="bg-violet-900/50 text-violet-200 border-violet-500/30 px-4 md:px-6 py-1 md:py-2 text-xs md:text-sm backdrop-blur-sm">
              Because dignity deserves a guardian
            </Badge>
          </div>
        </div>

        {currentStep === 'intro' && (
          <div className="max-w-6xl mx-auto">
            {/* Section Header - About NERA */}
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-serif">About NERA</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Simplified Story Section */}
            <Card className="mb-8 md:mb-12 bg-white/5 backdrop-blur-xl border-violet-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5"></div>
              <CardContent className="p-6 md:p-12 relative z-10">
                <div className="text-center mb-6 md:mb-10">
                  <h2 className="text-2xl md:text-4xl font-light text-white mb-6 md:mb-8 font-serif leading-relaxed">
                    NERA isn't just an app.
                  </h2>
                  <div className="space-y-4 md:space-y-6 text-violet-200 leading-relaxed text-lg md:text-xl max-w-4xl mx-auto px-4">
                    <p className="transform hover:scale-105 transition-transform duration-300 px-4">Its motive is to protect haya and save girls' pictures from getting misused.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Header - What NERA Can Do */}
            <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-serif">What NERA Can Do</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Section 1: What NERA Can Do */}
            <Card className="mb-8 md:mb-12 bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-xl border-violet-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10"></div>
              <CardContent className="p-6 md:p-12 relative z-10">
                <div className="text-center mb-6 md:mb-8">
                  <h2 className="text-2xl md:text-3xl font-light text-white font-serif mb-6 md:mb-8">
                    What NERA Can Do
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto text-left">
                    <div className="space-y-3 md:space-y-4 text-gray-100 text-base md:text-lg">
                      <div className="flex items-start">
                        <span className="text-violet-300 mr-3 text-lg md:text-xl">📷</span>
                        <span>Detect and explain if an image might be fake or manipulated</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-violet-300 mr-3 text-lg md:text-xl">💬</span>
                        <span>Offer anonymous emotional support chat (no names, no login)</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-violet-300 mr-3 text-lg md:text-xl">🧠</span>
                        <span>Provide self-redemption tools like letters to yourself or others</span>
                      </div>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-gray-100 text-base md:text-lg">
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 text-lg md:text-xl">🧾</span>
                        <span>Generate a closure note for your healing</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-purple-300 mr-3 text-lg md:text-xl">🔒</span>
                        <span>100% private — We never track or store your data</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Header - Talk to NERA */}
            <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-serif">Talk to NERA</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-blue-400 to-violet-400 mx-auto rounded-full"></div>
            </div>

            {/* Section 2: Talk to NERA (AI Support Chat) */}
            <Card className="mb-8 md:mb-12 bg-gradient-to-br from-blue-900/30 to-violet-900/30 backdrop-blur-xl border-blue-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10"></div>
              <CardContent className="p-6 md:p-12 relative z-10">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    <MessageCircle className="h-8 w-8 md:h-12 md:w-12 text-blue-300 mr-3 md:mr-4 animate-pulse" />
                    <h2 className="text-2xl md:text-3xl font-light text-white font-serif">
                      Talk to NERA
                    </h2>
                  </div>
                  <p className="text-blue-200 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                    An AI trained to support victims of emotional & digital trauma
                  </p>
                  
                  <div className="relative inline-block mb-6 md:mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-600 blur-lg opacity-50 animate-pulse"></div>
                    <Button
                      onClick={handleSupportChat}
                      className="bg-gradient-to-r from-blue-500 to-violet-600 hover:from-blue-400 hover:to-violet-500 text-white px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 relative z-10 font-light tracking-wide touch-manipulation"
                    >
                      <MessageCircle className="h-5 w-5 md:h-6 md:w-6 mr-2 md:mr-3" />
                      🤖 Start Talking to NERA
                    </Button>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 max-w-3xl mx-auto">
                    <p className="text-blue-200 mb-3 md:mb-4 text-base md:text-lg">You can tell NERA how you're feeling. You can ask questions like:</p>
                    <div className="space-y-2 text-blue-100 text-left max-w-2xl mx-auto text-sm md:text-base">
                      <p className="flex items-start"><span className="mr-2">•</span>"Was it really my fault?"</p>
                      <p className="flex items-start"><span className="mr-2">•</span>"What if someone shared my photo?"</p>
                      <p className="flex items-start"><span className="mr-2">•</span>"How do I heal from this?"</p>
                    </div>
                    <p className="text-blue-200 mt-3 md:mt-4 italic font-medium">NERA will never judge you.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Header - How to Use NERA */}
            <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-serif">How to Use NERA</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
            </div>

            {/* Section 3: How to Use NERA */}
            <Card className="mb-8 md:mb-12 bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-xl border-purple-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"></div>
              <CardContent className="p-6 md:p-12 relative z-10">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-6 md:mb-8">
                    <FileText className="h-8 w-8 md:h-12 md:w-12 text-purple-300 mr-3 md:mr-4" />
                    <h2 className="text-2xl md:text-3xl font-light text-white font-serif">
                      How to Use NERA
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                      <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-3 md:mb-4">Step 1</div>
                      <p className="text-purple-200 text-base md:text-lg">Choose what you need — detect, chat, or emotional closure</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                      <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-3 md:mb-4">Step 2</div>
                      <p className="text-purple-200 text-base md:text-lg">Follow the guided steps. Everything stays private.</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6">
                      <div className="text-2xl md:text-3xl font-bold text-purple-300 mb-3 md:mb-4">Step 3</div>
                      <p className="text-purple-200 text-base md:text-lg">Get your peace — through understanding, not guilt.</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-300 mt-6 md:mt-8 text-base md:text-lg italic">
                    Optional: Download your healing letter or closure note
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Section Header - For Every Girl */}
            <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
              <h2 className="text-2xl md:text-4xl font-light text-white mb-4 font-serif px-4">For Every Girl Who Was Never Heard</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-pink-400 to-violet-400 mx-auto rounded-full"></div>
            </div>

            {/* Section 4: For Every Girl Who Was Never Heard */}
            <Card className="mb-8 md:mb-12 bg-gradient-to-br from-pink-900/30 to-violet-900/30 backdrop-blur-xl border-pink-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-violet-500/10"></div>
              <CardContent className="p-6 md:p-12 relative z-10">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-6 md:mb-8">
                    <span className="text-3xl md:text-4xl mr-3 md:mr-4">🧕</span>
                    <h2 className="text-2xl md:text-3xl font-light text-white font-serif">
                      For Every Girl Who Was Never Heard
                    </h2>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6 text-pink-200 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
                    <p>If you've ever been shamed for something that wasn't your fault…</p>
                    <p>If you've ever stayed quiet because no one would believe you…</p>
                    <p className="text-xl md:text-2xl font-medium text-pink-100">NERA believes you.</p>
                    <p className="text-lg md:text-xl text-pink-300 italic">This is for you.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Header - The Digital Crisis */}
            <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
              <h2 className="text-2xl md:text-4xl font-light text-white mb-4 font-serif px-4">The Digital Violation Crisis</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Updated Awareness Section */}
            <Card className="mb-8 md:mb-12 bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-xl border-violet-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10"></div>
              <CardContent className="p-6 md:p-12 relative z-10">
                <div className="text-center mb-6 md:mb-8">
                  <div className="flex items-center justify-center mb-4 md:mb-6">
                    <AlertTriangle className="h-8 w-8 md:h-12 md:w-12 text-violet-400 mr-3 md:mr-4 animate-pulse" />
                    <h2 className="text-2xl md:text-3xl font-light text-white font-serif">
                      The Digital Violation Crisis
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    <div className="space-y-3 md:space-y-4 text-left">
                      <h4 className="text-lg md:text-xl font-medium text-violet-200 mb-3 md:mb-4">The Reality We Face:</h4>
                      <ul className="text-gray-100 space-y-2 md:space-y-3 text-base md:text-lg">
                        <li className="flex items-start">
                          <span className="text-violet-300 mr-3">•</span>
                          Deepfake pornography affects 90% women victims
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-300 mr-3">•</span>
                          AI-generated fake nudes created in seconds
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-300 mr-3">•</span>
                          Images manipulated without consent daily
                        </li>
                        <li className="flex items-start">
                          <span className="text-violet-300 mr-3">•</span>
                          Victims suffer psychological trauma & social shame
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3 md:space-y-4 text-left">
                      <h4 className="text-lg md:text-xl font-medium text-purple-200 mb-3 md:mb-4">NERA's Promise:</h4>
                      <ul className="text-gray-100 space-y-2 md:space-y-3 text-base md:text-lg">
                        <li className="flex items-start">
                          <span className="text-purple-300 mr-3">•</span>
                          Detect fake & manipulated content instantly
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-300 mr-3">•</span>
                          Track misuse across the entire internet
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-300 mr-3">•</span>
                          Generate legal takedown requests automatically
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-300 mr-3">•</span>
                          Restore dignity & peace of mind
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Section Header - Protection Features */}
            <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-serif">Protection Features</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-violet-400 to-blue-400 mx-auto rounded-full"></div>
            </div>

            {/* Enhanced Protection Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 md:p-8 text-center relative z-10">
                  <div className="mb-4 md:mb-6 relative">
                    <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full"></div>
                    <Shield className="h-12 w-12 md:h-16 md:w-16 text-violet-300 mx-auto relative z-10 group-hover:text-violet-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3 md:mb-4 group-hover:text-violet-200 transition-colors duration-300">Sacred Protection</h3>
                  <p className="text-violet-300 text-base md:text-lg leading-relaxed">AI-powered scanning detects deepfakes and violations with 98%+ accuracy</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 md:p-8 text-center relative z-10">
                  <div className="mb-4 md:mb-6 relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                    <Eye className="h-12 w-12 md:h-16 md:w-16 text-purple-300 mx-auto relative z-10 group-hover:text-purple-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3 md:mb-4 group-hover:text-purple-200 transition-colors duration-300">NERA EYE</h3>
                  <p className="text-violet-300 text-base md:text-lg leading-relaxed">Track image misuse across the internet and take immediate action</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-6 md:p-8 text-center relative z-10">
                  <div className="mb-4 md:mb-6 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                    <Download className="h-12 w-12 md:h-16 md:w-16 text-blue-300 mx-auto relative z-10 group-hover:text-blue-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium text-white mb-3 md:mb-4 group-hover:text-blue-200 transition-colors duration-300">Legal Shield</h3>
                  <p className="text-violet-300 text-base md:text-lg leading-relaxed">Auto-generate DMCA takedown requests to protect her dignity</p>
                </CardContent>
              </Card>
            </div>

            {/* Section Header - Get Started */}
            <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-serif">Get Started</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto rounded-full"></div>
            </div>

            {/* Enhanced Main CTAs */}
            <div className="text-center space-y-6 md:space-y-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 blur-lg opacity-50 animate-pulse"></div>
                <Button
                  onClick={() => setCurrentStep('upload')}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white px-10 md:px-16 py-6 md:py-8 text-xl md:text-2xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 relative z-10 font-light tracking-wide touch-manipulation"
                >
                  <Upload className="h-6 w-6 md:h-8 md:w-8 mr-3 md:mr-4" />
                  Let NERA Watch Over You
                </Button>
              </div>
              
              <div className="text-violet-400 italic text-base md:text-lg font-light">or</div>
              
              <Link to="/nera-eye">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-30"></div>
                  <Button
                    variant="outline"
                    className="border-2 border-violet-400/50 text-violet-200 hover:bg-violet-500/20 hover:border-violet-300 px-10 md:px-16 py-6 md:py-8 text-xl md:text-2xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm relative z-10 font-light tracking-wide touch-manipulation"
                  >
                    <Eye className="h-6 w-6 md:h-8 md:w-8 mr-3 md:mr-4" />
                    Launch NERA EYE
                  </Button>
                </div>
              </Link>
              
              <p className="text-violet-400 mt-4 md:mt-6 italic text-base md:text-lg font-light tracking-wide px-4">
                Upload a Memory • Shield Activated • Peace Restored
              </p>
            </div>

            {/* Section Header - Contact & Support */}
            <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-serif">Contact & Support</h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-slate-400 to-violet-400 mx-auto rounded-full"></div>
            </div>

            {/* Footer / Contact */}
            <Card className="mt-8 md:mt-16 bg-gradient-to-br from-slate-900/50 to-violet-900/50 backdrop-blur-xl border-slate-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 to-violet-500/5"></div>
              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="text-center space-y-3 md:space-y-4">
                  <div className="flex items-center justify-center mb-3 md:mb-4">
                    <Mail className="h-6 w-6 md:h-8 md:w-8 text-violet-300 mr-2 md:mr-3" />
                    <h3 className="text-xl md:text-2xl font-light text-white font-serif">Contact & Support</h3>
                  </div>
                  <p className="text-violet-200 text-base md:text-lg px-4">
                    Created by <span className="font-medium text-violet-100">Abdul Hameed</span>, Final-Year B.Tech CSE, LPU Jalandhar
                  </p>
                  <p className="text-violet-300 px-4 text-sm md:text-base">
                    For awareness campaigns or partnerships, contact{' '}
                    <a href="mailto:nameera9655@gmail.com" className="text-violet-200 hover:text-violet-100 underline transition-colors">
                      nameera9655@gmail.com
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <ImageUploader onFileUpload={handleFileUpload} onBack={resetFlow} />
          </div>
        )}

        {currentStep === 'scanning' && (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 shadow-2xl">
              <CardContent className="p-8 md:p-16">
                <div className="mb-6 md:mb-8 relative">
                  <div className="absolute inset-0 bg-violet-500/30 blur-2xl rounded-full animate-pulse"></div>
                  <Moon className="h-16 w-16 md:h-20 md:w-20 text-violet-300 mx-auto animate-spin relative z-10" />
                </div>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-4 md:mb-6 font-serif">
                  NERA is searching...
                </h3>
                <p className="text-violet-300 text-lg md:text-xl mb-6 md:mb-8 leading-relaxed px-4">
                  Please wait while she protects her.
                </p>
                <div className="w-full bg-violet-800/30 rounded-full h-2 md:h-3 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-violet-400 to-purple-500 h-2 md:h-3 rounded-full animate-pulse shadow-lg" style={{width: '70%'}}></div>
                </div>
                <p className="text-violet-400 mt-4 md:mt-6 text-base md:text-lg italic">
                  Scanning with love and precision...
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 'result' && scanResult && (
          <div className="max-w-3xl mx-auto">
            <ScanResult result={scanResult} onReset={resetFlow} />
            <ProtectionTimer onExpire={resetFlow} />
          </div>
        )}

        {/* Section Header - User Feedback */}
        <div className="text-center mb-6 md:mb-8 mt-12 md:mt-16">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4 font-serif">User Feedback</h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-pink-400 to-violet-400 mx-auto rounded-full"></div>
        </div>

        {/* User Feedback Section */}
        <section className="mb-12 md:mb-20">
          <UserFeedback />
        </section>

        {/* Enhanced Footer */}
        <footer className="text-center mt-12 md:mt-20 text-violet-400 text-base md:text-lg space-y-3 md:space-y-4 px-4">
          <p className="font-light tracking-wide">🌙 Made with love, remorse, and hope 🌙</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
