
import React, { useState } from 'react';
import { ArrowLeft, Search, Eye, AlertTriangle, Shield, ExternalLink, Download, Clock, Sparkles, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { toast } from '@/hooks/use-toast';
import { Link } from 'react-router-dom';
import ImageUploader from '@/components/ImageUploader';
import SearchResults from '@/components/SearchResults';

const NeraEye = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'upload' | 'searching' | 'results'>('intro');
  const [searchResults, setSearchResults] = useState(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [searchProgress, setSearchProgress] = useState(0);

  const handleFileUpload = (file: File) => {
    setUploadedFile(file);
    setCurrentStep('searching');
    
    // Simulate search progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      setSearchProgress(Math.min(progress, 95));
      
      if (progress >= 95) {
        clearInterval(interval);
        setTimeout(() => {
          const mockResults = {
            totalFound: 3,
            searchedPlatforms: 12,
            searchTime: '4.2 seconds',
            results: [
              {
                id: 1,
                platform: 'Instagram',
                url: 'https://instagram.com/post/12345',
                confidence: 94.5,
                status: 'exact_match',
                thumbnail: '/placeholder.svg',
                dateFound: '2024-01-15',
                description: 'Exact match found on Instagram profile'
              },
              {
                id: 2,
                platform: 'Reddit',
                url: 'https://reddit.com/r/photos/comments/abc123',
                confidence: 87.2,
                status: 'modified',
                thumbnail: '/placeholder.svg',
                dateFound: '2024-01-10',
                description: 'Image appears to be cropped and filtered'
              },
              {
                id: 3,
                platform: 'Unknown Website',
                url: 'https://suspicious-site.com/gallery/img456',
                confidence: 91.8,
                status: 'suspicious',
                thumbnail: '/placeholder.svg',
                dateFound: '2024-01-08',
                description: 'Found on unverified website - potential misuse'
              }
            ]
          };
          setSearchResults(mockResults);
          setCurrentStep('results');
          setSearchProgress(100);
          
          toast({
            title: "🔍 NERA EYE Search Complete",
            description: `Found ${mockResults.totalFound} potential matches across ${mockResults.searchedPlatforms} platforms.`,
          });
        }, 2000);
      }
    }, 300);
  };

  const resetFlow = () => {
    setCurrentStep('intro');
    setSearchResults(null);
    setUploadedFile(null);
    setSearchProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="absolute top-20 left-20 w-2 h-2 bg-violet-400 rounded-full animate-bounce opacity-60">
          <Sparkles className="w-4 h-4 text-violet-300 animate-spin" />
        </div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-purple-300 rounded-full animate-pulse opacity-40">
          <Star className="w-3 h-3 text-purple-200" />
        </div>
        <div className="absolute bottom-32 left-16 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-50">
          <Zap className="w-5 h-5 text-blue-300" />
        </div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-violet-300 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Enhanced Header */}
        <div className="flex items-center justify-between mb-12">
          <Link to="/" className="flex items-center text-violet-300 hover:text-violet-100 transition-colors duration-300 group">
            <ArrowLeft className="h-6 w-6 mr-3 group-hover:transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="text-lg font-light">Back to NERA Sanctuary</span>
          </Link>
          
          <div className="text-center flex-1">
            <div className="flex items-center justify-center mb-3 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-2xl rounded-full animate-pulse"></div>
              <Eye className="h-10 w-10 text-violet-300 mr-4 relative z-10 animate-pulse" />
              <h1 className="text-5xl font-light tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-violet-200 via-purple-100 to-blue-200 font-serif relative z-10">
                NERA EYE
              </h1>
            </div>
            <p className="text-violet-300 italic text-lg font-light">
              Track & Protect - Let her image never fall into wrong hands
            </p>
          </div>
          
          <div className="w-40"></div>
        </div>

        {currentStep === 'intro' && (
          <div className="max-w-5xl mx-auto">
            {/* Enhanced Story Section */}
            <Card className="mb-12 bg-white/5 backdrop-blur-xl border-violet-500/20 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5"></div>
              <CardContent className="p-12 relative z-10">
                <div className="text-center mb-10">
                  <h2 className="text-4xl font-light text-white mb-8 font-serif">
                    NERA EYE - Track & Protect
                  </h2>
                  <div className="space-y-6 text-violet-200 leading-relaxed text-xl max-w-3xl mx-auto">
                    <p className="italic text-2xl">"Ek tasveer... jo sirf yakeen aur mohabbat ka hissa thi."</p>
                    <p className="transform hover:scale-105 transition-transform duration-300">NERA EYE searches the vast digital world</p>
                    <p className="transform hover:scale-105 transition-transform duration-300">To find where her image might have been misused</p>
                    <p className="font-medium text-2xl bg-gradient-to-r from-violet-300 to-purple-300 bg-clip-text text-transparent">Before someone turns it into shame.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-full"></div>
                    <Search className="h-16 w-16 text-violet-300 mx-auto relative z-10 group-hover:text-violet-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4">Deep Web Search</h3>
                  <p className="text-violet-300 text-lg">Scans across 50+ platforms and websites for exact or modified versions</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full"></div>
                    <Eye className="h-16 w-16 text-purple-300 mx-auto relative z-10 group-hover:text-purple-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4">AI Detection</h3>
                  <p className="text-violet-300 text-lg">Identifies deepfakes, edits, and manipulated versions using advanced AI</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 hover:shadow-2xl transition-all duration-500 group hover:scale-105 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                    <Shield className="h-16 w-16 text-blue-300 mx-auto relative z-10 group-hover:text-blue-200 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-medium text-white mb-4">Instant Action</h3>
                  <p className="text-violet-300 text-lg">Generate takedown requests and evidence reports for each violation found</p>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Main CTA */}
            <div className="text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-600 blur-lg opacity-50 animate-pulse"></div>
                <Button
                  onClick={() => setCurrentStep('upload')}
                  className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white px-16 py-8 text-2xl rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 relative z-10 font-light tracking-wide"
                >
                  <Eye className="h-8 w-8 mr-4" />
                  Begin NERA EYE Search
                </Button>
              </div>
              <p className="text-violet-400 mt-6 italic text-lg font-light tracking-wide">
                Upload • Search • Protect • Peace
              </p>
            </div>

            {/* Enhanced Privacy Notice */}
            <div className="mt-12 p-8 bg-white/5 backdrop-blur-xl rounded-xl border border-violet-500/20 shadow-xl">
              <h4 className="font-medium text-violet-200 mb-4 text-center text-xl">🔒 Search Privacy Promise</h4>
              <ul className="text-violet-300 space-y-2 max-w-3xl mx-auto text-lg">
                <li>• Your original image is never shared with external platforms</li>
                <li>• Search uses encrypted image hashing for privacy</li>
                <li>• All search data auto-deleted after 1 hour</li>
                <li>• No image storage on our servers</li>
              </ul>
            </div>
          </div>
        )}

        {currentStep === 'upload' && (
          <div className="max-w-2xl mx-auto">
            <ImageUploader onFileUpload={handleFileUpload} onBack={resetFlow} />
          </div>
        )}

        {currentStep === 'searching' && (
          <div className="max-w-2xl mx-auto text-center">
            <Card className="bg-white/10 backdrop-blur-xl border-violet-400/30 shadow-2xl">
              <CardContent className="p-16">
                <div className="mb-8 relative">
                  <div className="absolute inset-0 bg-violet-500/30 blur-2xl rounded-full animate-pulse"></div>
                  <Eye className="h-20 w-20 text-violet-300 mx-auto animate-bounce relative z-10" />
                </div>
                <h3 className="text-3xl font-light text-white mb-6 font-serif">
                  NERA is searching the digital world...
                </h3>
                <p className="text-violet-300 text-xl mb-8">
                  Please wait while she protects her across all corners of the internet.
                </p>
                
                <div className="space-y-6">
                  <Progress value={searchProgress} className="w-full h-3 bg-violet-800/30" />
                  <div className="flex justify-between text-lg text-violet-400">
                    <span>Scanning platforms...</span>
                    <span>{Math.round(searchProgress)}%</span>
                  </div>
                </div>
                
                <div className="mt-8 space-y-3 text-violet-300 text-lg">
                  {searchProgress > 20 && <p className="animate-fade-in">🔍 Searching social media platforms...</p>}
                  {searchProgress > 40 && <p className="animate-fade-in">🌐 Scanning image databases...</p>}
                  {searchProgress > 60 && <p className="animate-fade-in">🕵️ Checking for modifications...</p>}
                  {searchProgress > 80 && <p className="animate-fade-in">🛡️ Analyzing potential violations...</p>}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentStep === 'results' && searchResults && (
          <div className="max-w-4xl mx-auto">
            <SearchResults results={searchResults} onReset={resetFlow} />
          </div>
        )}
      </div>
    </div>
  );
};

export default NeraEye;
