import React from 'react';
import { AnimatedSection } from '../components/shared/AnimatedSection.jsx';
import { FadeUp } from '../components/shared/FadeUp.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { security } from '../data/security.js';

export function Security() {
  return (
    <section
      id="security"
      className="py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <FadeUp className="text-center mb-16">
            <Badge className="mb-4 bg-slate-700 text-slate-300 border-slate-600">
              Security &amp; Compliance
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sovereign, Secure &amp; Compliant
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Built to meet the rigorous security and compliance standards of governments and enterprises.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {security.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors h-full flex flex-col min-h-[220px]">
                    <div className="w-12 h-12 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{s.title}</h3>
                    <p className="text-slate-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

