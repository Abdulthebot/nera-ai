
import React, { useState } from 'react';
import { ArrowLeft, Search, Eye, AlertTriangle, Shield, ExternalLink, Download, Clock } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-8 h-8 text-violet-300">👁️</div>
        <div className="absolute top-40 right-32 w-6 h-6 text-purple-200">🔍</div>
        <div className="absolute bottom-32 left-16 w-7 h-7 text-blue-300">🛡️</div>
        <div className="absolute bottom-20 right-20 w-5 h-5 text-violet-200">🌙</div>
        <div className="absolute top-60 left-1/2 w-4 h-4 text-purple-300">⭐</div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center text-violet-600 hover:text-violet-800">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to NERA Sanctuary
          </Link>
          
          <div className="text-center flex-1">
            <div className="flex items-center justify-center mb-2">
              <Eye className="h-8 w-8 text-violet-400 mr-3" />
              <h1 className="text-4xl font-light tracking-wider text-violet-900 font-serif">
                NERA EYE
              </h1>
            </div>
            <p className="text-violet-600 italic">
              Track & Protect - Let her image never fall into wrong hands
            </p>
          </div>
          
          <div className="w-20"></div>
        </div>

        {currentStep === 'intro' && (
          <div className="max-w-4xl mx-auto">
            {/* Story Section */}
            <Card className="mb-8 bg-white/80 backdrop-blur-sm border-violet-200 shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-light text-violet-900 mb-4 font-serif">
                    NERA EYE - Track & Protect
                  </h2>
                  <div className="space-y-4 text-violet-700 leading-relaxed text-lg">
                    <p className="italic">"Ek tasveer... jo sirf yakeen aur mohabbat ka hissa thi."</p>
                    <p>NERA EYE searches the vast digital world</p>
                    <p>To find where her image might have been misused</p>
                    <p className="font-medium">Before someone turns it into shame.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/70 backdrop-blur-sm border-violet-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Search className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-violet-900 mb-2">Deep Web Search</h3>
                  <p className="text-violet-600">Scans across 50+ platforms and websites for exact or modified versions</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-violet-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Eye className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-violet-900 mb-2">AI Detection</h3>
                  <p className="text-violet-600">Identifies deepfakes, edits, and manipulated versions using advanced AI</p>
                </CardContent>
              </Card>

              <Card className="bg-white/70 backdrop-blur-sm border-violet-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-violet-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-violet-900 mb-2">Instant Action</h3>
                  <p className="text-violet-600">Generate takedown requests and evidence reports for each violation found</p>
                </CardContent>
              </Card>
            </div>

            {/* Main CTA */}
            <div className="text-center">
              <Button
                onClick={() => setCurrentStep('upload')}
                className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white px-12 py-6 text-xl rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Eye className="h-6 w-6 mr-3" />
                Begin NERA EYE Search
              </Button>
              <p className="text-violet-500 mt-4 italic">
                Upload • Search • Protect • Peace
              </p>
            </div>

            {/* Privacy Notice */}
            <div className="mt-8 p-6 bg-violet-50 rounded-lg border border-violet-200">
              <h4 className="font-medium text-violet-800 mb-2 text-center">🔒 Search Privacy Promise</h4>
              <ul className="text-violet-700 text-sm space-y-1">
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
            <Card className="bg-white/80 backdrop-blur-sm border-violet-200">
              <CardContent className="p-12">
                <div className="animate-pulse mb-6">
                  <Eye className="h-16 w-16 text-violet-400 mx-auto animate-bounce" />
                </div>
                <h3 className="text-2xl font-light text-violet-900 mb-4 font-serif">
                  NERA is searching the digital world...
                </h3>
                <p className="text-violet-600 text-lg mb-6">
                  Please wait while she protects her across all corners of the internet.
                </p>
                
                <div className="space-y-4">
                  <Progress value={searchProgress} className="w-full" />
                  <div className="flex justify-between text-sm text-violet-500">
                    <span>Scanning platforms...</span>
                    <span>{Math.round(searchProgress)}%</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-2 text-violet-600 text-sm">
                  {searchProgress > 20 && <p>🔍 Searching social media platforms...</p>}
                  {searchProgress > 40 && <p>🌐 Scanning image databases...</p>}
                  {searchProgress > 60 && <p>🕵️ Checking for modifications...</p>}
                  {searchProgress > 80 && <p>🛡️ Analyzing potential violations...</p>}
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
