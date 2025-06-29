
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HelpCircle, Shield, Heart, Lock } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: "Is NERA really anonymous?",
      answer: "Yes, completely. We don't require any registration, don't track your activity, and don't store any personal information. Your privacy and safety are our highest priorities."
    },
    {
      question: "What if someone shared my photo without permission?",
      answer: "You're not alone, and it's not your fault. NERA can help you detect if images have been manipulated, provide emotional support, and guide you through healing. We're here to listen without judgment."
    },
    {
      question: "How accurate is the deepfake detection?",
      answer: "Our AI detection system has 98%+ accuracy in identifying manipulated or fake images. However, remember that your worth isn't determined by any image - real or fake."
    },
    {
      question: "Can NERA help with legal action?",
      answer: "While NERA focuses on emotional support and healing, we can help you understand your situation better. For legal matters, we recommend consulting with professionals who specialize in digital privacy law."
    },
    {
      question: "What if I'm feeling suicidal or in crisis?",
      answer: "Your life matters deeply. If you're in immediate danger, please contact emergency services. NERA provides support, but in crisis situations, please reach out to mental health professionals or crisis hotlines in your area."
    },
    {
      question: "How do I know if my healing letter is really private?",
      answer: "Your letters are saved directly to your device - we never see them, store them, or have any access to them. It's completely between you and your own healing journey."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="bg-violet-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="h-8 w-8 text-violet-600" />
          </div>
          <h2 className="text-4xl font-light text-violet-800 mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We understand you might have concerns. Here are answers to help you feel safer.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-gradient-to-br from-violet-50 to-purple-50 border-violet-200/50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-violet-600 font-medium text-sm">Q</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-violet-800 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Emergency Resources */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-2xl font-light text-pink-800 mb-4">Remember: You Are Not Alone</h3>
              <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
                If you're experiencing thoughts of self-harm, please reach out for immediate help. 
                Your life has value, and there are people who want to support you through this difficult time.
              </p>
              <div className="mt-6 text-sm text-gray-600">
                <p>Crisis support is available 24/7 through local emergency services and mental health hotlines.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
