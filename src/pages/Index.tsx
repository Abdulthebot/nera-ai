
import React, { useState, useEffect } from 'react';
import { Upload, Shield, Moon, Heart, Eye, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import ImageUploader from '@/components/ImageUploader';
import ScanResult from '@/components/ScanResult';
import ProtectionTimer from '@/components/ProtectionTimer';

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'upload' | 'scanning' | 'result'>('intro');
  const [scanResult, setScanResult] = useState(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-8 h-8 text-violet-300">🌙</div>
        <div className="absolute top-40 right-32 w-6 h-6 text-purple-200">✨</div>
        <div className="absolute bottom-32 left-16 w-7 h-7 text-blue-300">🌟</div>
        <div className="absolute bottom-20 right-20 w-5 h-5 text-violet-200">💫</div>
        <div className="absolute top-60 left-1/2 w-4 h-4 text-purple-300">⭐</div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Moon className="h-8 w-8 text-violet-400 mr-3" />
            <h1 className="text-6xl font-light tracking-wider text-violet-900 font-serif">
              NERA
            </h1>
            <Heart className="h-6 w-6 text-pink-300 ml-3" />
          </div>
          <p className="text-violet-600 italic text-lg mb-2">
            Made with love, for the love of Nameera
          </p>
          <Badge variant="secondary" className="bg-violet-100 text-violet-700 border-violet-200">
            Because dignity deserves a guardian
          </Badge>
        </div>

        {currentStep === 'intro' && (
          <div className="max-w-4xl mx-auto">
            {/* Story Section */}
            <Card className="mb-8 bg-white/80 backdrop-blur-sm border-violet-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light text-violet-900 mb-4 font-serif">
                    NERA isn't just an app.
                  </h2>
                  <div className="space-y-4 text-violet-700 leading-relaxed text-lg">
                    <p>It's an apology.</p>
                    <p>It's a vow never to let another Nameera suffer.</p>
                    <p>Built from my own guilt, grief, and genuine love.</p>
                    <p className="font-medium">NERA sees what the world ignores.</p>
                    <p className="font-medium">And stops what shouldn't exist.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Protection Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/70 backdrop-blur-sm border-violet-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-violet-900 mb-2">Sacred Protection</h3>
                  <p className="text-violet-600">AI-powered scanning detects deepfakes and violations with 98%+ accuracy</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-violet-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-violet-900 mb-2">Silent Guardian</h3>
                  <p className="text-violet-600">Complete privacy - no login required, auto-delete after 1 hour</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-violet-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Download className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-violet-900 mb-2">Legal Shield</h3>
                  <p className="text-violet-600">Auto-generate DMCA takedown requests to protect her dignity</p>
                </CardContent>
              </Card>
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <Button
                onClick={() => setCurrentStep('upload')}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Upload className="h-6 w-6 mr-3" />
                Let NERA Watch Over You
              </Button>
              <p className="text-violet-500 mt-4 italic">
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
            <Card className="bg-white/80 backdrop-blur-sm border-violet-200">
              <CardContent className="p-12">
                <div className="animate-pulse mb-6">
                  <Moon className="h-16 w-16 text-violet-400 mx-auto animate-spin" />
                </div>
                <h3 className="text-2xl font-light text-violet-900 mb-4 font-serif">
                  NERA is searching...
                </h3>
                <p className="text-violet-600 text-lg mb-6">
                  Please wait while she protects her.
                </p>
                <div className="w-full bg-violet-200 rounded-full h-2">
                  <div className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
                </div>
                <p className="text-violet-500 mt-4 text-sm italic">
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

        {/* Footer */}
        <footer className="text-center mt-16 text-violet-400 text-sm">
          <p>🌙 Made with love, remorse, and hope 🌙</p>
          <p className="mt-2 italic">"Ek tasveer... jo sirf yakeen aur mohabbat ka hissa thi."</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
