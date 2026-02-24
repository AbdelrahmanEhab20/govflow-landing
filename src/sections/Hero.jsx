import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Badge } from '../components/ui/Badge.jsx';
import { Button } from '../components/ui/Button.jsx';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 pt-24 md:pt-32 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-3xl" />
      </div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 text-sm px-4 py-1.5">
            ⚡ Built for Modern Organizations
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
        >
          Empower Modern
          <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Governments &amp; Enterprises Workflows
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          GovFlow transforms unstructured communications into structured, trackable initiatives — streamlining
          operations, enhancing collaboration, and driving accountability across your agency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#features">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-500 text-white text-lg px-8 py-6 rounded-xl shadow-xl shadow-blue-600/30"
            >
              Get Started <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
          <a href="#features">
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white bg-white/10 hover:bg-white/20 text-lg px-8 py-6 rounded-xl"
            >
              Explore Features <ChevronDown className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: '6+', label: 'Core Modules' },
            { value: 'RBAC', label: 'Access Control' },
            { value: 'AI', label: 'Smart Insights' },
            { value: '100%', label: 'Compliant' },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

