
import React, { useState } from 'react';
import { Shield, CheckCircle, AlertTriangle, Download, Mail, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import TakedownGenerator from '@/components/TakedownGenerator';

interface ScanResultProps {
  result: {
    status: 'safe' | 'suspicious' | 'violation' | 'deepfake';
    confidence: number;
    details: string;
    timestamp: string;
    hash: string;
  };
  onReset: () => void;
}

const ScanResult: React.FC<ScanResultProps> = ({ result, onReset }) => {
  const [showTakedown, setShowTakedown] = useState(false);

  const getStatusColor = () => {
    switch (result.status) {
      case 'safe': return 'bg-green-100 text-green-800 border-green-200';
      case 'suspicious': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'violation': return 'bg-red-100 text-red-800 border-red-200';
      case 'deepfake': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = () => {
    switch (result.status) {
      case 'safe': return <CheckCircle className="h-6 w-6 text-green-600" />;
      case 'suspicious': return <AlertTriangle className="h-6 w-6 text-yellow-600" />;
      case 'violation': return <Shield className="h-6 w-6 text-red-600" />;
      case 'deepfake': return <Shield className="h-6 w-6 text-red-600" />;
      default: return <Shield className="h-6 w-6 text-gray-600" />;
    }
  };

  const getStatusMessage = () => {
    switch (result.status) {
      case 'safe': return {
        title: '🌙 Alhamdulillah, She is Safe',
        subtitle: 'This image appears to be authentic and protected.',
        blessing: 'NERA found no violations or AI manipulation. Your memory remains pure.'
      };
      case 'suspicious': return {
        title: '⚠️ NERA Detected Something',
        subtitle: 'This image may have been modified or edited.',
        blessing: 'Let us investigate further and shield her dignity.'
      };
      case 'violation': return {
        title: '🛡️ NERA Will Protect Her',
        subtitle: 'This image shows signs of inappropriate manipulation.',
        blessing: 'We will help you take action to restore her honor.'
      };
      case 'deepfake': return {
        title: '🚨 NERA Found a Violation',
        subtitle: 'This appears to be an AI-generated deepfake.',
        blessing: 'Together, we will fight this injustice and protect her dignity.'
      };
      default: return {
        title: 'Analysis Complete',
        subtitle: 'NERA has finished scanning.',
        blessing: 'Review the results below.'
      };
    }
  };

  const downloadReport = () => {
    const report = {
      timestamp: result.timestamp,
      hash: result.hash,
      status: result.status,
      confidence: result.confidence,
      details: result.details,
      generatedBy: 'NERA - Made with love for Nameera'
    };

    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nera-protection-report-${result.hash}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "🌙 Report Downloaded",
      description: "Your protection report is saved securely.",
    });
  };

  const statusMsg = getStatusMessage();

  return (
    <div className="space-y-6">
      <Card className="bg-white/90 backdrop-blur-sm border-violet-200 shadow-lg">
        <CardHeader className="text-center pb-4">
          <div className="flex justify-center mb-4">
            {getStatusIcon()}
          </div>
          <CardTitle className="text-3xl font-light text-violet-900 font-serif">
            {statusMsg.title}
          </CardTitle>
          <p className="text-violet-600 text-lg">{statusMsg.subtitle}</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div className="text-center p-6 bg-violet-50 rounded-lg border border-violet-200">
            <p className="text-violet-700 text-lg italic leading-relaxed">
              {statusMsg.blessing}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-violet-600 font-medium">Status:</span>
                <Badge className={getStatusColor()}>
                  {result.status.toUpperCase()}
                </Badge>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-violet-600 font-medium">Confidence:</span>
                <span className="text-violet-800 font-semibold">{result.confidence}%</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-violet-600 font-medium">Scan ID:</span>
                <code className="text-xs text-violet-800 bg-violet-100 px-2 py-1 rounded">
                  {result.hash}
                </code>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-violet-600 font-medium">Protected At:</span>
                <span className="text-violet-800 text-sm">
                  {new Date(result.timestamp).toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Analysis Details:</h4>
            <p className="text-gray-700 text-sm leading-relaxed">{result.details}</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {(result.status === 'violation' || result.status === 'deepfake' || result.status === 'suspicious') && (
              <Button
                onClick={() => setShowTakedown(true)}
                className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white px-6 py-3 rounded-full"
              >
                <Shield className="h-5 w-5 mr-2" />
                Generate Takedown Request
              </Button>
            )}

            <Button
              variant="outline"
              onClick={downloadReport}
              className="border-violet-300 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-full"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Report
            </Button>

            <Button
              variant="outline"
              onClick={onReset}
              className="border-violet-300 text-violet-600 hover:bg-violet-50 px-6 py-3 rounded-full"
            >
              <RotateCcw className="h-5 w-5 mr-2" />
              Protect Another
            </Button>
          </div>

          {result.status === 'safe' && (
            <div className="text-center p-6 bg-green-50 rounded-lg border border-green-200">
              <p className="text-green-700 font-medium text-lg mb-2">
                🕊️ NERA protected someone today.
              </p>
              <p className="text-green-600">
                She's safe. And so are you.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {showTakedown && (
        <TakedownGenerator 
          scanResult={result} 
          onClose={() => setShowTakedown(false)} 
        />
      )}
    </div>
  );
};

export default ScanResult;
