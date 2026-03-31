import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, ListTodo, BarChart3, Shield, Layers,
  ArrowRight, ArrowLeft, X, CheckCircle2,
} from 'lucide-react';
import { Button } from '../ui/Button.jsx';

const TOUR_STEPS = [
  {
    id: 1,
    icon: Mail,
    color: 'from-purple-500 to-pink-500',
    iconColor: 'text-purple-600',
    title: 'Email -> Task in One Click',
    subtitle: 'Email Inbox',
    description: 'All incoming emails land in a unified inbox. Spot the priority, assign a category, and convert it to a structured task with a single click.',
    highlights: ['Unified inbox for all mailboxes', 'AI-powered categorization', 'One-click task conversion', 'Thread-linked task tracking'],
  },
  {
    id: 2,
    icon: ListTodo,
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-600',
    title: 'Full Task Lifecycle Management',
    subtitle: 'Task Management',
    description: 'Create, assign, and track initiatives from kickoff to completion with priorities, due dates, subtasks, and dependencies.',
    highlights: ['Structured initiatives with milestones', 'Subtasks and checklists', 'Priority and dependency tracking', 'Recurring tasks and scheduling'],
  },
  {
    id: 3,
    icon: Layers,
    color: 'from-indigo-500 to-purple-600',
    iconColor: 'text-indigo-600',
    title: 'Visual Kanban and Approval Flows',
    subtitle: 'Kanban Board',
    description: 'Drag-and-drop Kanban board with customizable workflow stages and built-in multi-step approval flows.',
    highlights: ['Drag-and-drop Kanban interface', 'Configurable workflow stages', 'Multi-step approval flows', 'Real-time team collaboration'],
  },
  {
    id: 4,
    icon: BarChart3,
    color: 'from-teal-500 to-cyan-600',
    iconColor: 'text-teal-600',
    title: 'Analytics and AI-Powered Insights',
    subtitle: 'Reports and Dashboard',
    description: 'Executive dashboards, team performance metrics, and AI-generated insights to help decision making.',
    highlights: ['Real-time performance dashboards', 'Department and sector analytics', 'AI insights and recommendations', 'Team leaderboard and rankings'],
  },
  {
    id: 5,
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    iconColor: 'text-green-600',
    title: 'Role-Based Access Control',
    subtitle: 'Security and RBAC',
    description: 'Fine-grained permissions for every role so each user sees exactly what they need.',
    highlights: ['Admin, Manager and Member roles', 'Page-level access control', 'Feature-level permissions', 'Configurable access matrix'],
  },
];

function TourVisual({ step }) {
  if (step === 0) {
    return (
      <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-5 space-y-3">
        {['HR Department', 'Finance Team', 'Legal Affairs'].map((name, i) => (
          <div key={name} className="flex items-center gap-3 p-3 rounded-xl border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center">{name[0]}</div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-slate-700 truncate">{name}</p>
              <p className="text-xs text-slate-400 truncate">Sample incoming request</p>
            </div>
            {i === 0 && (
              <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                <ArrowRight className="w-3 h-3" /> Task
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-5">
      <div className="grid grid-cols-3 gap-3 mb-4">
        {[
          { v: '78%', l: 'Completion', c: 'text-green-600' },
          { v: '91%', l: 'On Time', c: 'text-blue-600' },
          { v: '24', l: 'Active', c: 'text-purple-600' },
        ].map((s) => (
          <div key={s.l} className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
            <div className={`text-lg font-bold ${s.c}`}>{s.v}</div>
            <div className="text-xs text-slate-400">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="flex items-end gap-1 h-16">
        {[45, 72, 58, 90, 65, 83, 77, 88].map((h, i) => (
          <div key={i} className="flex-1 bg-gradient-to-t from-teal-600 to-teal-400 rounded-t" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

export default function InteractiveTour({ onClose }) {
  const [step, setStep] = useState(0);
  const current = TOUR_STEPS[step];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden"
      >
        <div className={`bg-gradient-to-r ${current.color} p-6 text-white relative`}>
          <button onClick={onClose} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
            <X className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white/70 text-xs font-medium uppercase tracking-wider">{current.subtitle}</p>
              <h2 className="text-xl font-bold">{current.title}</h2>
            </div>
          </div>
          <div className="flex gap-1.5 mt-4">
            {TOUR_STEPS.map((_, i) => (
              <button key={i} onClick={() => setStep(i)} className={`h-1.5 rounded-full transition-all ${i === step ? 'bg-white w-8' : 'bg-white/40 w-4 hover:bg-white/60'}`} />
            ))}
          </div>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{current.description}</p>
            <ul className="space-y-2">
              {current.highlights.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${current.iconColor}`} />
                  {h}
                </li>
              ))}
            </ul>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              <TourVisual step={step} />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="px-6 pb-6 flex items-center justify-between">
          <Button variant="outline" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Previous
          </Button>
          <span className="text-sm text-slate-400">{step + 1} of {TOUR_STEPS.length}</span>
          {step < TOUR_STEPS.length - 1 ? (
            <Button onClick={() => setStep((s) => s + 1)} className={`bg-gradient-to-r ${current.color} text-white border-0`}>
              Next <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button onClick={onClose} className="bg-green-600 hover:bg-green-700 text-white">
              <CheckCircle2 className="w-4 h-4 mr-2" /> Done
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}

