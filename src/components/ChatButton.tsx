
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SupportChat from './SupportChat';

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    console.log('Chat button clicked, current state:', isChatOpen);
    setIsChatOpen(!isChatOpen);
    console.log('New state will be:', !isChatOpen);
  };

  console.log('ChatButton rendering, isChatOpen:', isChatOpen);

  return (
    <>
      {/* Floating Chat Button */}
      {!isChatOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={toggleChat}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 shadow-2xl transform hover:scale-110 transition-all duration-300 relative group touch-manipulation"
          >
            <MessageCircle className="h-8 w-8 text-white animate-pulse" />
            
            {/* Notification badge */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">💛</span>
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full mr-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Need support? Chat with NERA Angel
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></div>
            </div>
          </Button>
        </div>
      )}

      {/* Chat Overlay */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <SupportChat onClose={() => {
            console.log('Chat close requested');
            setIsChatOpen(false);
          }} />
        </div>
      )}
    </>
  );
};

export default ChatButton;
