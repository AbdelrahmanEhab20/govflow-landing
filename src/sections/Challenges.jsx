import React from 'react';
import { Badge } from '../components/ui/Badge.jsx';
import { AnimatedSection } from '../components/shared/AnimatedSection.jsx';
import { FadeUp } from '../components/shared/FadeUp.jsx';
import { challenges } from '../data/challenges.js';

export function Challenges() {
  return (
    <section id="challenges" className="py-28 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <FadeUp className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800">
              The Problem
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Daily Operational Deluge</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Government teams face a relentless stream of unstructured demands that slow everything down.
            </p>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeUp key={i} delay={i * 0.05}>
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 h-full hover:shadow-lg transition-shadow">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-red-500" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{c.desc}</p>
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

