
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote, Heart, Shield } from 'lucide-react';

const feedbacks = [
  {
    id: 1,
    text: "Finally, something that actually helps. I was terrified my ex would share private photos, but NERA gave me peace of mind.",
    emotion: "relieved",
    age: "22"
  },
  {
    id: 2,
    text: "Honestly? I'm still skeptical about AI solving this mess. But if it works even a little bit, it's worth it.",
    emotion: "cautious",
    age: "19"
  },
  {
    id: 3,
    text: "This made me cry. Someone actually understands what we go through. Thank you for building this.",
    emotion: "emotional",
    age: "24"
  },
  {
    id: 4,
    text: "Used it after my photos were leaked on Reddit. Found them in 3 places I didn't even know about. Scary but helpful.",
    emotion: "grateful",
    age: "21"
  },
  {
    id: 5,
    text: "Why should girls have to use tools like this? Fix the men, not the symptoms. But... I still downloaded it.",
    emotion: "frustrated",
    age: "23"
  },
  {
    id: 6,
    text: "My sister told me about this. I hope I never need it, but I'm glad it exists for those who do.",
    emotion: "supportive",
    age: "18"
  },
  {
    id: 7,
    text: "Does it actually work though? I've been burned by 'protective' apps before that were just data collectors.",
    emotion: "skeptical",
    age: "25"
  },
  {
    id: 8,
    text: "The Creator's Note made me sob. You can feel the pain behind this app. Real recognizes real.",
    emotion: "moved",
    age: "20"
  },
  {
    id: 9,
    text: "Used NERA Eye yesterday. Found my photo on 2 sites I never knew existed. Terrifying but necessary.",
    emotion: "shaken",
    age: "22"
  },
  {
    id: 10,
    text: "Finally someone who gets it. This isn't just about technology - it's about dignity and respect.",
    emotion: "understood",
    age: "24"
  }
];

const UserFeedback = () => {
  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case 'relieved':
      case 'grateful':
      case 'supportive':
        return 'text-green-300';
      case 'emotional':
      case 'moved':
      case 'understood':
        return 'text-pink-300';
      case 'cautious':
      case 'skeptical':
        return 'text-yellow-300';
      case 'frustrated':
      case 'shaken':
        return 'text-orange-300';
      default:
        return 'text-violet-300';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-6 w-6 text-pink-300 mr-3" />
          <h2 className="text-3xl font-light text-white font-serif">Voices of Trust</h2>
          <Shield className="h-6 w-6 text-violet-300 ml-3" />
        </div>
        <p className="text-violet-300 text-lg italic">
          Anonymous feedback from girls who tested NERA
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbacks.map((feedback) => (
          <Card key={feedback.id} className="bg-white/5 backdrop-blur-xl border-violet-500/20 hover:bg-white/8 transition-all duration-300 group">
            <CardContent className="p-6">
              <div className="flex items-start mb-4">
                <Quote className="h-4 w-4 text-violet-400 mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-200 leading-relaxed text-sm">
                  {feedback.text}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">
                  Anonymous, {feedback.age}
                </span>
                <div className={`w-2 h-2 rounded-full ${getEmotionColor(feedback.emotion)}`}></div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-violet-400 italic text-sm">
          Every voice matters. Every story drives us to do better.
        </p>
      </div>
    </div>
  );
};

export default UserFeedback;
