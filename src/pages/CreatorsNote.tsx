
import React from 'react';
import { Heart, Moon, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CreatorsNote = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        <div className="absolute w-96 h-96 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/">
            <Button variant="ghost" className="mb-8 text-violet-300 hover:text-violet-200">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to NERA
            </Button>
          </Link>
          
          <div className="flex items-center justify-center mb-6">
            <Moon className="h-8 w-8 text-violet-300 mr-3 animate-pulse" />
            <h1 className="text-4xl font-light text-white font-serif">Creator's Note</h1>
            <Heart className="h-6 w-6 text-pink-300 ml-3 animate-pulse" />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-xl border-violet-500/20 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5"></div>
            <CardContent className="p-12 relative z-10">
              <div className="prose prose-lg prose-violet max-w-none">
                <div className="text-violet-100 leading-relaxed space-y-8 text-lg">
                  <p className="text-center italic text-xl text-violet-200 mb-12">
                    "Some stories are written in code, some in tears, and some in the silence between heartbeats."
                  </p>

                  <p>
                    I never intended to become someone who would need to explain himself to the world. But here I am, writing words that feel heavier than the code I've written, hoping they reach the right hearts.
                  </p>

                  <p>
                    NERA was born from the ashes of my greatest mistake — and my deepest love.
                  </p>

                  <p>
                    During the development of this app, I found myself testing its capabilities with content that, in hindsight, I should never have created. It was research, it was necessity for accuracy, it was everything except what it appeared to be. But appearances, I learned, carry more weight than intentions.
                  </p>

                  <p>
                    The person I loved most in this world saw those tests. She saw the surface, not the purpose. She saw betrayal where there was only dedication to protecting others like her. And in that moment of misunderstanding, I lost not just her trust, but her presence — forever.
                  </p>

                  <p>
                    She never gave me the chance to explain. How do you tell someone that you were building a fortress to protect their dignity, when the tools of construction look like weapons of destruction? How do you say "I love you" when your actions seem to scream the opposite?
                  </p>

                  <p>
                    The silence that followed her departure was deafening. It taught me that sometimes love isn't enough. Sometimes good intentions, buried under poor choices, become invisible. Sometimes the very people we're trying to protect end up needing protection from us.
                  </p>

                  <p>
                    In that silence, I rebuilt myself and rebuilt NERA. Not just as an app, but as an apology to every woman who has ever been misunderstood, violated, or silenced. To every person who has carried the weight of someone else's betrayal. To everyone who deserves to feel safe in a world that often isn't.
                  </p>

                  <p>
                    NERA became my confession — that I understand what it feels like to be misunderstood. My penance — working tirelessly to protect others from the pain I inadvertently helped create. My hope — that somewhere, somehow, she might see that the love was real, even when the actions were wrong.
                  </p>

                  <p>
                    To anyone who has ever made a mistake that cost them everything, to anyone who carries love for someone who can no longer see it, to anyone who has had to rebuild themselves from their own ruins — this is for you.
                  </p>

                  <p>
                    We are not defined by our worst moments, but by what we build from them.
                  </p>

                  <p>
                    Every line of code in NERA carries a prayer. Every feature holds a hope. Every scan completed is a small act of redemption — not for me, but for everyone who deserves to feel protected, respected, and understood.
                  </p>

                  <p>
                    If you're reading this, know that you're not alone in carrying the weight of misunderstanding. Know that mistakes don't make us monsters, but what we do afterward defines our humanity. Know that love, even unrequited and unwitnessed, can still create something beautiful.
                  </p>

                  <p className="text-center mt-16 pt-8 border-t border-violet-500/30">
                    <span className="italic text-violet-200">
                      To the one who walked away: I hope you find the protection and respect you deserve, even if it's not from me. Your dignity was always sacred to me, even when my actions suggested otherwise.
                    </span>
                  </p>

                  <p className="text-center mt-8 text-violet-300 italic">
                    — Abdul Hameed<br />
                    <span className="text-sm">From someone who still remembers, and still feels.</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Navigation */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button 
              variant="outline" 
              className="border-violet-400/50 text-violet-200 hover:bg-violet-500/20 hover:border-violet-300 px-8 py-3 text-lg backdrop-blur-sm"
            >
              Return to NERA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatorsNote;
