import React from 'react';
import { Workflow } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection.jsx';
import { FadeUp } from '../components/shared/FadeUp.jsx';

export function SolutionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <FadeUp>
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Workflow className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Introducing GovFlow</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              A comprehensive, intuitive workflow management platform designed specifically for government entities —
              centralizing, automating, and optimizing daily operations by transforming unstructured communications into
              structured, trackable initiatives.
            </p>
          </FadeUp>
        </AnimatedSection>
      </div>
    </section>
  );
}

