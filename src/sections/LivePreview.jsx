import React from 'react';
import { Play } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection.jsx';
import { FadeUp } from '../components/shared/FadeUp.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';
import AnimatedMockup from '../components/landing/AnimatedMockup.jsx';

export function LivePreview({ onOpenTour }) {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="max-w-4xl mx-auto px-6">
        <AnimatedSection>
          <FadeUp className="text-center mb-10">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30">Live Preview</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">See GovFlow in Action</h2>
            <p className="text-slate-400">Interactive previews of the platform&apos;s core modules</p>
          </FadeUp>
          <FadeUp>
            <AnimatedMockup />
          </FadeUp>
          <FadeUp className="text-center mt-10">
            <Button
              onClick={onOpenTour}
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-5 rounded-xl shadow-xl shadow-blue-600/30"
            >
              <Play className="w-5 h-5 mr-2" /> Take the Full Interactive Tour
            </Button>
          </FadeUp>
        </AnimatedSection>
      </div>
    </section>
  );
}

