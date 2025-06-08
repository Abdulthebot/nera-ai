
import React, { useState, useEffect } from 'react';
import { Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ProtectionTimerProps {
  onExpire: () => void;
}

const ProtectionTimer: React.FC<ProtectionTimerProps> = ({ onExpire }) => {
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          onExpire();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onExpire]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = () => {
    return ((3600 - timeLeft) / 3600) * 100;
  };

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-violet-200 mt-6">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-violet-100 rounded-full">
              <Shield className="h-5 w-5 text-violet-600" />
            </div>
            <div>
              <h3 className="font-medium text-violet-900">Privacy Protection Active</h3>
              <p className="text-sm text-violet-600">Auto-delete in progress</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 text-violet-700">
            <Clock className="h-4 w-4" />
            <span className="font-mono text-lg font-semibold">{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="w-full bg-violet-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-violet-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-linear"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          
          <div className="flex justify-between text-xs text-violet-500">
            <span>Upload Protected</span>
            <span>Auto-Delete Complete</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-violet-50 rounded-lg border border-violet-200">
          <p className="text-violet-700 text-sm text-center">
            🕊️ <strong>NERA's Promise:</strong> Your image and all scan data will be completely 
            removed from our servers when this timer reaches zero. No traces will remain.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProtectionTimer;
