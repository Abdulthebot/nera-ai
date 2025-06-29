
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Shield, Mail, User } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-violet-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <Heart className="h-8 w-8 text-violet-600" />
          </div>
          <h2 className="text-4xl font-light text-violet-800 mb-6">About NERA</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Born from love, built with compassion, designed for healing
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Mission Statement */}
          <Card className="bg-white/80 backdrop-blur-sm border-violet-200/50 shadow-xl">
            <CardContent className="p-12 text-center">
              <Shield className="h-16 w-16 text-violet-400 mx-auto mb-8" />
              <h3 className="text-3xl font-light text-violet-800 mb-6">Our Mission</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                NERA exists to protect the dignity of every girl and woman who has faced digital violations, 
                deepfakes, or online harassment. We believe that healing happens through understanding, 
                not judgment.
              </p>
              <div className="bg-violet-50 p-6 rounded-lg">
                <p className="text-violet-700 italic text-lg">
                  "In a world that often blames the victim, NERA stands as a guardian of dignity, 
                  offering tools for healing and hope for tomorrow."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Story */}
          <Card className="bg-white/80 backdrop-blur-sm border-pink-200/50 shadow-xl">
            <CardContent className="p-12">
              <h3 className="text-3xl font-light text-pink-800 mb-8 text-center">The Story Behind NERA</h3>
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                <p>
                  NERA was created out of love and remorse - love for those who suffer in silence, 
                  and remorse for a world where such suffering exists. It's named after نَمِيرَة (Nameera), 
                  representing purity and dignity that should never be compromised.
                </p>
                <p>
                  Every feature, every word, every design choice has been made with one goal: 
                  to create a space where healing can begin, where shame can transform into strength, 
                  and where no one has to face their darkest moments alone.
                </p>
                <p className="text-center text-pink-700 italic font-medium">
                  This is more than an app - it's a promise that dignity deserves a guardian.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Creator Info */}
          <Card className="bg-white/80 backdrop-blur-sm border-blue-200/50 shadow-lg">
            <CardContent className="p-10 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-light text-blue-800 mb-6">Created with Love</h3>
              <div className="text-gray-700 space-y-3">
                <p className="text-lg">
                  <span className="font-medium">Abdul Hameed</span>
                </p>
                <p>Final Year B.Tech CSE</p>
                <p>Lovely Professional University</p>
                <div className="flex items-center justify-center mt-6 text-blue-600">
                  <Mail className="h-5 w-5 mr-2" />
                  <a href="mailto:nameera9655@gmail.com" className="hover:underline">
                    nameera9655@gmail.com
                  </a>
                </div>
                <p className="text-sm text-gray-600 italic mt-6">
                  For awareness campaigns, partnerships, or just to share your story of healing
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/70 backdrop-blur-sm border-violet-200/50 shadow-lg text-center">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-violet-500 mx-auto mb-4" />
                <h4 className="text-xl font-medium text-violet-700 mb-3">Privacy First</h4>
                <p className="text-gray-600">Your safety and anonymity are non-negotiable</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-pink-200/50 shadow-lg text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
                <h4 className="text-xl font-medium text-pink-700 mb-3">Compassion</h4>
                <p className="text-gray-600">Every interaction designed with empathy and care</p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-blue-200/50 shadow-lg text-center">
              <CardContent className="p-8">
                <User className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h4 className="text-xl font-medium text-blue-700 mb-3">Empowerment</h4>
                <p className="text-gray-600">Tools to reclaim your narrative and find peace</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
