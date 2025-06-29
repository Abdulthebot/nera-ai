
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Upload, Shield, BookOpen, Phone, Heart, X, User, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

interface SupportChatProps {
  onClose: () => void;
}

const SupportChat: React.FC<SupportChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [userName, setUserName] = useState('');
  const [selectedConcern, setSelectedConcern] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showInitialForm, setShowInitialForm] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const concerns = [
    { id: 'check-image', label: 'I want to check if an image is fake', emoji: '🔍' },
    { id: 'emotional-support', label: 'I need emotional support', emoji: '💛' },
    { id: 'report-fake', label: 'I want to report a fake image', emoji: '🚨' },
    { id: 'just-talk', label: 'Just need to talk to someone', emoji: '💬' }
  ];

  const quickSuggestions = [
    "I saw a fake image of myself, and I feel scared.",
    "I don't know what to do now.",
    "Can you guide me please?",
    "Will this stay private?",
    "Meri fake pic viral ho gayi 😔",
    "Can I trust this app?",
    "What if my family finds out?",
    "I'm scared..."
  ];

  const botResponses = {
    greeting: "I'm here for you. You're not alone. 💛 How can I help you today?",
    checkImage: "I can help you verify if an image is authentic. Would you like me to guide you through our detection process? 🔍",
    emotionalSupport: "I understand this must be really difficult for you. You're brave for reaching out. Let's take this one step at a time. 💛",
    reportFake: "I'm here to help you report this. You're doing the right thing by speaking up. Let me guide you through the process. 🛡️",
    justTalk: "I'm here to listen. Sometimes talking helps more than we realize. What's on your mind? 💬",
    scared: "You're strong. Deepfakes are scary, but truth and tech are on your side. Let me help you figure out next steps. 🌱",
    privacy: "Yes. Your images are not stored. Everything is end-to-end protected and private. Your conversation with me will be deleted after you close this chat. 💡",
    family: "We understand how sensitive this is. Let's take one step at a time. You've already taken the bravest one — by speaking up. 🌱",
    hindi: "Main samajh sakta hoon ki yeh kitna painful hai. Aap safe hain. Mujhe aapko guide karne dijiye. 🙏",
    trust: "NERA is built with your safety and privacy as the top priority. No personal data is stored, and everything stays between us. 💚"
  };

  const blockedWords = ['abuse', 'rape', 'kill', 'suicide', 'xxx', 'die', 'hurt'];
  
  const detectThreatsOrDistress = (text: string): boolean => {
    const distressWords = ['help me', 'sos', 'emergency', 'danger', 'threat', 'hurt me', 'want to die'];
    return distressWords.some(word => text.toLowerCase().includes(word));
  };

  const filterMessage = (text: string): boolean => {
    return blockedWords.some(word => text.toLowerCase().includes(word));
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartChat = () => {
    setShowInitialForm(false);
    const welcomeMessage: Message = {
      id: Date.now().toString(),
      text: botResponses.greeting,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (detectThreatsOrDistress(userMessage)) {
      return "It looks like you're in distress. Would you like to talk to a real human supporter right now? Please know that you're not alone, and help is available. 🤗💛";
    }

    if (lowerMessage.includes('fake pic') || lowerMessage.includes('viral ho gayi')) {
      return botResponses.hindi;
    }
    
    if (lowerMessage.includes('trust') || lowerMessage.includes('safe')) {
      return botResponses.trust;
    }
    
    if (lowerMessage.includes('scared') || lowerMessage.includes('afraid')) {
      return botResponses.scared;
    }
    
    if (lowerMessage.includes('family') || lowerMessage.includes('finds out')) {
      return botResponses.family;
    }
    
    if (lowerMessage.includes('private') || lowerMessage.includes('store')) {
      return botResponses.privacy;
    }

    if (selectedConcern === 'check-image') {
      return botResponses.checkImage;
    }
    
    if (selectedConcern === 'emotional-support') {
      return botResponses.emotionalSupport;
    }
    
    if (selectedConcern === 'report-fake') {
      return botResponses.reportFake;
    }

    return "I hear you. It's not your fault. Deepfakes are digital crimes — and you're strong for speaking up. How can I help you take the next step? 💛";
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    if (filterMessage(currentMessage)) {
      toast({
        title: "Message blocked",
        description: "Please keep our conversation respectful and supportive.",
        variant: "destructive"
      });
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage('');
    setIsTyping(true);

    // Simulate bot typing
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(currentMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setCurrentMessage(suggestion);
  };

  const handleActionButton = (action: string) => {
    let message = "";
    switch (action) {
      case 'upload':
        message = "I'd like to upload an image to check if it's authentic.";
        break;
      case 'report':
        message = "I need help generating a report for image misuse.";
        break;
      case 'rights':
        message = "Can you tell me about my rights regarding image misuse?";
        break;
      case 'human':
        message = "I'd like to speak with a real human supporter.";
        break;
      case 'wellness':
        message = "I need some emotional wellness guidance.";
        break;
    }
    setCurrentMessage(message);
  };

  if (showInitialForm) {
    return (
      <Card className="w-full max-w-md bg-gradient-to-br from-violet-900/95 to-purple-900/95 backdrop-blur-xl border-violet-500/30 shadow-2xl">
        <CardHeader className="text-center">
          <div className="flex items-center justify-between">
            <div></div>
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-pink-300 mr-2 animate-pulse" />
              <CardTitle className="text-violet-100 text-xl font-light">NERA Angel</CardTitle>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="text-violet-300 hover:text-violet-100">
              <X className="h-5 w-5" />
            </Button>
          </div>
          <p className="text-violet-300 text-sm">Safe • Private • Supportive</p>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <label className="text-violet-200 text-sm mb-2 block">
              Name (optional) 😊
            </label>
            <input
              type="text"
              placeholder="You can stay anonymous"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full p-3 bg-white/10 border border-violet-400/30 rounded-lg text-white placeholder-violet-300 focus:border-violet-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-violet-200 text-sm mb-3 block">
              What do you need help with?
            </label>
            <div className="space-y-2">
              {concerns.map((concern) => (
                <button
                  key={concern.id}
                  onClick={() => setSelectedConcern(concern.id)}
                  className={`w-full p-3 text-left rounded-lg border transition-all ${
                    selectedConcern === concern.id
                      ? 'bg-violet-500/30 border-violet-400 text-violet-100'
                      : 'bg-white/5 border-violet-500/20 text-violet-200 hover:bg-white/10'
                  }`}
                >
                  <span className="mr-2">{concern.emoji}</span>
                  {concern.label}
                </button>
              ))}
            </div>
          </div>

          <Button
            onClick={handleStartChat}
            disabled={!selectedConcern}
            className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 text-white py-3 rounded-lg font-medium"
          >
            Start Safe Chat 💛
          </Button>

          <p className="text-violet-400 text-xs text-center">
            🔒 No data stored • Chat auto-deletes when closed
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl h-[600px] bg-gradient-to-br from-violet-900/95 to-purple-900/95 backdrop-blur-xl border-violet-500/30 shadow-2xl flex flex-col">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Heart className="h-6 w-6 text-pink-300 mr-2 animate-pulse" />
            <div>
              <CardTitle className="text-violet-100 text-lg font-light">
                NERA Angel {userName && `• ${userName}`}
              </CardTitle>
              <p className="text-violet-400 text-sm">Here for you, always 💛</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="text-violet-300 hover:text-violet-100">
            <X className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col overflow-hidden">
        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' ? 'bg-violet-500' : 'bg-pink-500'
                }`}>
                  {message.sender === 'user' ? <User className="h-4 w-4 text-white" /> : <Bot className="h-4 w-4 text-white" />}
                </div>
                <div className={`p-3 rounded-2xl break-words ${
                  message.sender === 'user'
                    ? 'bg-violet-500 text-white'
                    : 'bg-white/10 text-violet-100'
                }`}>
                  {message.text}
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start space-x-2">
                <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="bg-white/10 text-violet-100 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-violet-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-violet-300 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-violet-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        {messages.length <= 1 && (
          <div className="mb-4">
            <p className="text-violet-300 text-sm mb-2">Quick suggestions:</p>
            <div className="flex flex-wrap gap-2">
              {quickSuggestions.slice(0, 4).map((suggestion, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickSuggestion(suggestion)}
                  className="text-xs border-violet-400/50 text-violet-200 hover:bg-violet-500/20"
                >
                  {suggestion.length > 30 ? suggestion.substring(0, 30) + '...' : suggestion}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleActionButton('upload')}
              className="border-violet-400/50 text-violet-200 hover:bg-violet-500/20"
            >
              <Upload className="h-3 w-3 mr-1" />
              Check Image
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleActionButton('report')}
              className="border-violet-400/50 text-violet-200 hover:bg-violet-500/20"
            >
              <Shield className="h-3 w-3 mr-1" />
              Generate Report
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleActionButton('rights')}
              className="border-violet-400/50 text-violet-200 hover:bg-violet-500/20"
            >
              <BookOpen className="h-3 w-3 mr-1" />
              Know Rights
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => handleActionButton('human')}
              className="border-violet-400/50 text-violet-200 hover:bg-violet-500/20"
            >
              <Phone className="h-3 w-3 mr-1" />
              Human Help
            </Button>
          </div>
        </div>

        {/* Message Input */}
        <div className="flex space-x-2">
          <Textarea
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            placeholder="Type your message... You're safe here 💛"
            className="flex-1 bg-white/10 border-violet-400/30 text-white placeholder-violet-300 resize-none min-h-[60px] max-h-[120px]"
            onKeyPress={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button
            onClick={handleSendMessage}
            disabled={!currentMessage.trim()}
            className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-400 hover:to-purple-500 px-4"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportChat;
