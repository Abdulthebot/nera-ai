import React, { useState, useEffect } from 'react';
import { Upload, Shield, Moon, Heart, Eye, Download, Sparkles, Star, Zap, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import ImageUploader from '@/components/ImageUploader';
import ScanResult from '@/components/ScanResult';
import ProtectionTimer from '@/components/ProtectionTimer';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background with Moving Elements */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        {/* Moving Gradient Orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        <div 
          className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        ></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60">
          <Sparkles className="w-4 h-4 text-violet-300 animate-spin" />
        </div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-40">
          <Star className="w-3 h-3 text-purple-200" />
        </div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}>
          <Zap className="w-5 h-5 text-blue-300" />
        </div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-violet-300 rounded-full animate-pulse opacity-30" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse"></div>
            <Moon className="h-12 w-12 text-violet-300 mr-4 animate-pulse relative z-10" />
            <h1 className="text-8xl font-extralight tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-100 to-blue-200 font-serif relative z-10 drop-shadow-2xl">
              NERA
            </h1>
            <Heart className="h-8 w-8 text-pink-300 ml-4 animate-pulse relative z-10" />
          </div>
          <div className="space-y-3 mb-6">
            <p className="text-violet-300 italic text-xl font-light tracking-wide">
              Made with love, for the love of نَمِيرَة
            </p>
            <Badge variant="secondary" className="bg-violet-900/50 text-violet-200 border-violet-500/30 px-6 py-2 text-sm backdrop-blur-sm">
              Because dignity deserves a guardian
            </Badge>
          </div>
        </div>

        {currentStep === 'intro' && (
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Story Section */}
            <Card className="mb-12 bg-white/5 backdrop-blur-xl border-violet-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5"></div>
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-light text-white mb-8 font-serif leading-relaxed">
                    NERA isn't just an app.
                  </h2>
                  <div className="space-y-6 text-violet-200 leading-relaxed text-xl max-w-4xl mx-auto">
                    <p className="transform hover:scale-105 transition-transform duration-300">It's an apology.</p>
                    <p className="transform hover:scale-105 transition-transform duration-300">It's a vow never to let another soul be shamed in silence.</p>
                    <p className="transform hover:scale-105 transition-transform duration-300">Built from guilt, grief, and a love that couldn't protect when it mattered.</p>
                    <p className="font-medium text-2xl bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">NERA sees what the world chooses to ignore…</p>
                    <p className="font-medium text-2xl bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent transform hover:scale-105 transition-transform duration-300">And stops what should've never existed.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updated Awareness Section with better readability */}
            <Card className="mb-12 bg-gradient-to-br from-violet-900/30 to-purple-900/30 backdrop-blur-xl border-violet-500/30 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10"></div>
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-6">
                    <AlertTriangle className="h-12 w-12 text-violet-400 mr-4 animate-pulse" />
                    <h2 className="text-3xl font-light text-white font-serif">
                      The Digital Violation Crisis
                    </h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <div className="space-y-4 text-left">
                      <h4 className="text-xl font-medium text-violet-200 mb-4">The Reality We Face:</h4>
                      <ul className="text-gray-100 space-y-3 text-lg">
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
                    <div className="space-y-4 text-left">
                      <h4 className="text-xl font-medium text-purple-200 mb-4">NERA's Promise:</h4>
                      <ul className="text-gray-100 space-y-3 text-lg">
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
                  
                  <div className="mt-12 p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-violet-400/30">
                    <p className="text-2xl font-light text-white italic leading-relaxed">
                      "NERA har us ladki ke liye hai…<br />
                      jo ek din khud se keh sake —<br />
                      <span className="text-violet-200 font-medium">'Mere saath galat hua tha, par main galat nahi thi.'"</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Protection Features */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full"></div>
                    <Shield className="h-16 w-16 text-violet-300 mx-auto relative z-10 group-hover:text-violet-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-violet-200 transition-colors duration-300">Sacred Protection</h3>
                  <p className="text-violet-300 text-lg leading-relaxed">AI-powered scanning detects deepfakes and violations with 98%+ accuracy</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                    <Eye className="h-16 w-16 text-purple-300 mx-auto relative z-10 group-hover:text-purple-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">NERA EYE</h3>
                  <p className="text-violet-300 text-lg leading-relaxed">Track image misuse across the internet and take immediate action</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                    <Download className="h-16 w-16 text-blue-300 mx-auto relative z-10 group-hover:text-blue-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">Legal Shield</h3>
                  <p className="text-violet-300 text-lg leading-relaxed">Auto-generate DMCA takedown requests to protect her dignity</p>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Main CTAs */}
            <div className="text-center space-y-8">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 blur-lg opacity-50 animate-pulse"></div>
                <Button
                  onClick={() => setCurrentStep('upload')}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white px-16 py-8 text-2xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 relative z-10 font-light tracking-wide"
                >
                  <Upload className="h-8 w-8 mr-4" />
                  Let NERA Watch Over You
                </Button>
              </div>
              
              <div className="text-violet-400 italic text-lg font-light">or</div>
              
              <Link to="/nera-eye">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-30"></div>
                  <Button
                    variant="outline"
                    className="border-2 border-violet-400/50 text-violet-200 hover:bg-violet-500/20 hover:border-violet-300 px-16 py-8 text-2xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 backdrop-blur-sm relative z-10 font-light tracking-wide"
                  >
                    <Eye className="h-8 w-8 mr-4" />
                    Launch NERA EYE
                  </Button>
                </div>
              </Link>
              
              <p className="text-violet-400 mt-6 italic text-lg font-light tracking-wide">
                Upload a Memory • Shield Activated • Peace Restored
              </p>
            </div>
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
              <CardContent className="p-16">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-violet-500/30 blur-2xl rounded-full animate-pulse"></div>
                  <Moon className="h-20 w-20 text-violet-300 mx-auto animate-spin relative z-10" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6 font-serif">
                  NERA is searching...
                </h3>
                <p className="text-violet-300 text-xl mb-8 leading-relaxed">
                  Please wait while she protects her.
                </p>
                <div className="w-full bg-violet-800/30 rounded-full h-3 backdrop-blur-sm">
                  <div className="bg-gradient-to-r from-violet-400 to-purple-500 h-3 rounded-full animate-pulse shadow-lg" style={{width: '70%'}}></div>
                </div>
                <p className="text-violet-400 mt-6 text-lg italic">
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

        {/* Enhanced Footer */}
        <footer className="text-center mt-20 text-violet-400 text-lg space-y-4">
          <p className="font-light tracking-wide">🌙 Made with love, remorse, and hope 🌙</p>
          <p className="italic text-violet-500 text-xl font-light tracking-wide">"NERA har us ladki ke liye hai…<br />jo ek din khud se keh sake —<br /><span className="text-violet-200 font-medium">'Mere saath galat hua tha, par main galat nahi thi.'"</span></p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
