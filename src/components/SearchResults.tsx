
import React, { useState } from 'react';
import { Shield, ExternalLink, Download, AlertTriangle, CheckCircle, Clock, RotateCcw, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import TakedownGenerator from '@/components/TakedownGenerator';

interface SearchResult {
  id: number;
  platform: string;
  url: string;
  confidence: number;
  status: 'exact_match' | 'modified' | 'suspicious' | 'deepfake';
  thumbnail: string;
  dateFound: string;
  description: string;
}

interface SearchResultsProps {
  results: {
    totalFound: number;
    searchedPlatforms: number;
    searchTime: string;
    results: SearchResult[];
  };
  onReset: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ results, onReset }) => {
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const [showTakedown, setShowTakedown] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'exact_match': return 'bg-red-100 text-red-800 border-red-200';
      case 'modified': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'suspicious': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'deepfake': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'exact_match': return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case 'modified': return <AlertTriangle className="h-5 w-5 text-orange-600" />;
      case 'suspicious': return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'deepfake': return <Shield className="h-5 w-5 text-red-600" />;
      default: return <CheckCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getResultMessage = () => {
    if (results.totalFound === 0) {
      return {
        title: '🌙 Alhamdulillah, She is Safe',
        subtitle: 'No unauthorized copies found across the digital world.',
        blessing: 'NERA EYE found no misuse of this image. Her dignity remains protected.'
      };
    } else {
      return {
        title: '🛡️ NERA Found Violations',
        subtitle: `${results.totalFound} potential misuse${results.totalFound > 1 ? 's' : ''} detected.`,
        blessing: 'Do not worry. NERA will help you take action to protect her honor.'
      };
    }
  };

  const downloadEvidence = () => {
    const evidence = {
      searchSummary: {
        totalFound: results.totalFound,
        searchedPlatforms: results.searchedPlatforms,
        searchTime: results.searchTime,
        timestamp: new Date().toISOString()
      },
      violations: results.results,
      generatedBy: 'NERA EYE - Made with love for Nameera'
    };

    const blob = new Blob([JSON.stringify(evidence, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nera-eye-evidence-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "📋 Evidence Package Downloaded",
      description: "Complete search results saved for legal action.",
    });
  };

  const handleTakedownRequest = (result: SearchResult) => {
    setSelectedResult(result);
    setShowTakedown(true);
  };

  const resultMsg = getResultMessage();

  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm border-violet-200 shadow-lg">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-3xl font-light text-violet-900 font-serif">
            {resultMsg.title}
          </CardTitle>
          <p className="text-violet-600 text-lg">{resultMsg.subtitle}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center p-6 bg-violet-50 rounded-lg border border-violet-200">
            <p className="text-violet-700 text-lg italic leading-relaxed">
              {resultMsg.blessing}
            </p>
          </div>

          {/* Search Summary */}
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-violet-800">{results.totalFound}</div>
              <div className="text-violet-600 text-sm">Matches Found</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-violet-800">{results.searchedPlatforms}</div>
              <div className="text-violet-600 text-sm">Platforms Searched</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-violet-800">{results.searchTime}</div>
              <div className="text-violet-600 text-sm">Search Time</div>
            </div>
          </div>

          {results.totalFound > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-violet-900 text-center">Violations Found</h3>
              
              {results.results.map((result) => (
                <Card key={result.id} className="border-2 border-orange-200 bg-orange-50/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          {getStatusIcon(result.status)}
                          <h4 className="font-medium text-gray-800">{result.platform}</h4>
                          <Badge className={getStatusColor(result.status)}>
                            {result.status.replace('_', ' ').toUpperCase()}
                          </Badge>
                          <span className="text-sm text-gray-600">{result.confidence}% match</span>
                        </div>
                        
                        <p className="text-gray-700 text-sm mb-2">{result.description}</p>
                        
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            Found: {result.dateFound}
                          </span>
                          <span className="flex items-center">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            <a href={result.url} target="_blank" rel="noopener noreferrer" 
                               className="text-violet-600 hover:underline">
                              View Source
                            </a>
                          </span>
                        </div>
                      </div>
                      
                      <div className="ml-4">
                        <Button
                          onClick={() => handleTakedownRequest(result)}
                          size="sm"
                          className="bg-red-500 hover:bg-red-600 text-white"
                        >
                          <Shield className="h-4 w-4 mr-1" />
                          Take Action
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-3 justify-center">
            {results.totalFound > 0 && (
              <Button
                onClick={downloadEvidence}
                variant="outline"
                className="border-violet-300 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-full"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Evidence Package
              </Button>
            )}

            <Button
              variant="outline"
              onClick={onReset}
              className="border-violet-300 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-full"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Search Another Image
            </Button>
          </div>

          {results.totalFound === 0 && (
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 font-medium text-lg mb-2">
                🕊️ NERA EYE protected someone today.
              </p>
              <p className="text-green-600">
                Her image remains pure and protected across the digital world.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {showTakedown && selectedResult && (
        <TakedownGenerator 
          scanResult={{
            hash: `eye_${selectedResult.id}_${Date.now()}`,
            timestamp: new Date().toISOString(),
            status: selectedResult.status,
            confidence: selectedResult.confidence
          }}
          onClose={() => {
            setShowTakedown(false);
            setSelectedResult(null);
          }} 
        />
      )}
    </div>
  );
};

export default SearchResults;
