import React from 'react';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection.jsx';
import { FadeUp } from '../components/shared/FadeUp.jsx';
import { Button } from '../components/ui/Button.jsx';

export function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <AnimatedSection>
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Government&apos;s Workflow Today
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Experience the power of intelligent task management built for the public sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-10 py-6 rounded-xl font-semibold shadow-xl"
                onClick={() => {
                  // Placeholder: connect to GovFlow app when available
                  console.log('Open GovFlow clicked (navigation not yet configured).');
                }}
              >
                Open GovFlow <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white bg-white/10 hover:bg-white/20 text-lg px-10 py-6 rounded-xl"
                onClick={() => {
                  // Placeholder: connect to dashboard when available
                  console.log('View Dashboard clicked (navigation not yet configured).');
                }}
              >
                View Dashboard
              </Button>
            </div>
          </FadeUp>
        </AnimatedSection>
      </div>
    </section>
  );
}

