
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { FileText, Download, Heart, PenTool } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const RedemptionToolsSection = () => {
  const [letterContent, setLetterContent] = useState('');
  const [letterType, setLetterType] = useState<'self' | 'other'>('self');

  const handleSaveLetter = () => {
    if (!letterContent.trim()) {
      toast({
        title: "💜 Your words matter",
        description: "Please write something before saving your letter.",
      });
      return;
    }

    // Create a downloadable text file
    const blob = new Blob([letterContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `healing-letter-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "💝 Letter Saved",
      description: "Your healing letter has been saved privately to your device.",
    });
  };

  const letterPrompts = {
    self: [
      "Dear beautiful soul, today I want to tell you...",
      "I forgive myself for...",
      "I am stronger than I thought because...",
      "The truth about what happened is...",
      "I deserve love and respect because..."
    ],
    other: [
      "To the person who hurt me, I need you to know...",
      "This is how your actions affected me...",
      "I am choosing to heal by...",
      "I release the power you had over me by...",
      "My dignity was never yours to take..."
    ]
  };

  return (
    <section id="redemption-tools" className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-violet-800 mb-6">Redemption & Healing Tools</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Sometimes healing begins with the words we write. Create your own path to peace.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Letter Writing Tool */}
          <Card className="bg-white/80 backdrop-blur-sm border-violet-200/50 shadow-xl">
            <CardHeader className="text-center pb-6">
              <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <PenTool className="h-8 w-8 text-violet-600" />
              </div>
              <CardTitle className="text-2xl font-light text-violet-800">Write a Healing Letter</CardTitle>
              <p className="text-gray-600">Express your feelings safely and privately</p>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Letter Type Selection */}
              <div className="flex gap-4">
                <Button
                  variant={letterType === 'self' ? 'default' : 'outline'}
                  onClick={() => setLetterType('self')}
                  className={letterType === 'self' ? 'bg-violet-500 text-white' : 'border-violet-300 text-violet-600'}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Letter to Myself
                </Button>
                <Button
                  variant={letterType === 'other' ? 'default' : 'outline'}
                  onClick={() => setLetterType('other')}
                  className={letterType === 'other' ? 'bg-violet-500 text-white' : 'border-violet-300 text-violet-600'}
                >
                  <FileText className="h-4 w-4 mr-2" />
                  Letter to Someone
                </Button>
              </div>

              {/* Writing Prompts */}
              <div className="bg-violet-50 p-4 rounded-lg">
                <p className="text-sm font-medium text-violet-700 mb-2">Writing prompts to help you start:</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  {letterPrompts[letterType].map((prompt, index) => (
                    <li key={index} className="cursor-pointer hover:text-violet-600 transition-colors"
                        onClick={() => setLetterContent(prev => prev + (prev ? '\n\n' : '') + prompt)}>
                      • {prompt}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Text Area */}
              <Textarea
                placeholder="Start writing your letter here... Remember, this is your safe space."
                value={letterContent}
                onChange={(e) => setLetterContent(e.target.value)}
                className="min-h-[300px] border-violet-200 focus:border-violet-400 resize-none"
              />

              {/* Actions */}
              <div className="flex gap-4">
                <Button 
                  onClick={handleSaveLetter}
                  className="bg-violet-500 hover:bg-violet-600 text-white flex-1"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Save My Letter
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => setLetterContent('')}
                  className="border-gray-300 text-gray-600"
                >
                  Clear
                </Button>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Your letter is saved privately to your device. NERA never sees or stores your words.
              </p>
            </CardContent>
          </Card>

          {/* Additional Tools */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm border-pink-200/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-medium text-pink-700 mb-4">Daily Affirmations</h3>
                <p className="text-gray-600 mb-6">
                  Gentle reminders of your worth and strength
                </p>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-pink-700 italic">
                    "I am worthy of respect. What happened to me was not my fault. 
                    I choose healing over hurt, and peace over pain."
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-medium text-blue-700 mb-4">Closure Generator</h3>
                <p className="text-gray-600 mb-6">
                  Create a formal closure document for your peace of mind
                </p>
                <Button 
                  variant="outline" 
                  className="border-blue-300 text-blue-600 hover:bg-blue-50"
                  onClick={() => toast({
                    title: "🕊️ Coming Soon",
                    description: "The closure generator will be available soon."
                  })}
                >
                  Generate Closure Note
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RedemptionToolsSection;
