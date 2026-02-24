import React from 'react';
import { CheckCircle } from 'lucide-react';
import { AnimatedSection } from '../components/shared/AnimatedSection.jsx';
import { FadeUp } from '../components/shared/FadeUp.jsx';
import { Badge } from '../components/ui/Badge.jsx';
import { features } from '../data/features.js';

export function Features() {
  return (
    <section id="features" className="py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <FadeUp className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800">
              Platform Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything Your Agency Needs</h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Six powerful modules, seamlessly integrated into one platform.
            </p>
          </FadeUp>
        </AnimatedSection>

        <div className="space-y-24">
          {features.map((f, i) => {
            const Icon = f.icon;
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection key={i}>
                <div
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  <FadeUp className="flex-1 w-full">
                    <div
                      className={`${f.bg} rounded-3xl p-10 h-72 flex items-center justify-center relative overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${f.color} opacity-5 rounded-3xl`}
                      />
                      <div className={`w-24 h-24 ${f.iconBg} rounded-3xl flex items-center justify-center`}>
                        <Icon className={`w-12 h-12 ${f.iconColor}`} />
                      </div>
                      <div className="absolute top-6 right-6 grid grid-cols-3 gap-1.5">
                        {[...Array(9)].map((_, d) => (
                          <div key={d} className={`w-1.5 h-1.5 rounded-full ${f.iconBg}`} />
                        ))}
                      </div>
                    </div>
                  </FadeUp>
                  <div className="flex-1">
                    <FadeUp>
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${f.color} text-white`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        Feature {i + 1}
                      </div>
                      <h3 className="text-3xl font-bold mb-3">{f.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 mb-6 text-lg leading-relaxed">
                        {f.desc}
                      </p>
                      <ul className="space-y-3">
                        {f.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-3">
                            <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${f.iconColor}`} />
                            <span className="text-slate-700 dark:text-slate-300">{b}</span>
                          </li>
                        ))}
                      </ul>
                    </FadeUp>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

