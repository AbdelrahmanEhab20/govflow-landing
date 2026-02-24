import React from 'react';
import { AnimatedSection } from '../components/shared/AnimatedSection.jsx';
import { FadeUp } from '../components/shared/FadeUp.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { benefits, benefitPillars } from '../data/benefits.js';

export function Benefits() {
  return (
    <section id="benefits" className="py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <FadeUp className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800">
              Why GovFlow
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Measurable Impact</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Real results for government teams that adopt structured workflow management.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
                      {b.value}
                    </div>
                    <div className="font-semibold text-lg mb-1">{b.label}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{b.desc}</div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefitPillars.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 flex gap-4">
                    <div className="flex-shrink-0">
                      <Icon className={`w-7 h-7 ${p.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{p.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
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

