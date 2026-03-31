import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const TASK_ITEMS = [
  { title: 'Employee Onboarding Program', status: 'in_progress', priority: 'high', progress: 65, lead: 'Sara A.', due: 'Mar 10' },
  { title: 'Annual Compliance Audit', status: 'completed', priority: 'urgent', progress: 100, lead: 'Ahmed K.', due: 'Feb 28' },
  { title: 'Office Renovation Planning', status: 'not_started', priority: 'medium', progress: 0, lead: 'Fatima R.', due: 'Mar 20' },
  { title: 'IT Infrastructure Upgrade', status: 'in_progress', priority: 'high', progress: 40, lead: 'Omar S.', due: 'Mar 15' },
];

const STATUS_COLORS = {
  in_progress: 'bg-blue-100 text-blue-700',
  completed: 'bg-green-100 text-green-700',
  not_started: 'bg-slate-100 text-slate-500',
  delayed: 'bg-red-100 text-red-600',
};

const PRIORITY_COLORS = {
  urgent: 'bg-red-500',
  high: 'bg-orange-400',
  medium: 'bg-yellow-400',
  low: 'bg-green-400',
};

function TaskMockup() {
  const [highlighted, setHighlighted] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setHighlighted((h) => (h + 1) % TASK_ITEMS.length), 2000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
      <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-400 font-medium">GovFlow - Tasks</span>
      </div>
      <div className="p-4 space-y-2">
        {TASK_ITEMS.map((task, i) => (
          <motion.div
            key={i}
            animate={{ scale: highlighted === i ? 1.02 : 1, backgroundColor: highlighted === i ? '#eff6ff' : '#ffffff' }}
            transition={{ duration: 0.3 }}
            className="rounded-xl border border-slate-100 p-3 cursor-pointer"
            style={{ backgroundColor: highlighted === i ? '#eff6ff' : '#fff' }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className={`w-2 h-2 rounded-full ${PRIORITY_COLORS[task.priority]}`} />
              <span className="text-xs font-semibold text-slate-700 flex-1">{task.title}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${STATUS_COLORS[task.status]}`}>{task.status.replace('_', ' ')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-100 rounded-full h-1.5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${task.progress}%` }}
                  transition={{ duration: 1, delay: i * 0.2 }}
                  className="h-1.5 rounded-full bg-blue-500"
                />
              </div>
              <span className="text-xs text-slate-400">{task.progress}%</span>
              <span className="text-xs text-slate-400">Due {task.due}</span>
              <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-full text-slate-500">{task.lead}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EmailMockup() {
  const emails = [
    { from: 'HR Department', subject: 'Request for Q1 Headcount Report', time: '9:14 AM', unread: true },
    { from: 'Legal Affairs', subject: 'Contract Review - Vendor 2026', time: 'Yesterday', unread: true },
    { from: 'Finance Team', subject: 'Budget Approval Needed', time: 'Mon', unread: false },
    { from: 'IT Support', subject: 'Invitation: System Upgrade Meeting', time: 'Sun', unread: false },
  ];
  const [converting, setConverting] = useState(null);

  useEffect(() => {
    const t = setTimeout(() => setConverting(0), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
      <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-400 font-medium">GovFlow - Email Inbox</span>
      </div>
      <div className="p-3 space-y-1">
        {emails.map((email, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.15 }}
            className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${i === converting ? 'border-blue-300 bg-blue-50' : 'border-transparent hover:bg-slate-50'}`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 ${['bg-blue-500', 'bg-purple-500', 'bg-pink-500', 'bg-amber-500'][i]}`}>
              {email.from[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className={`text-xs ${email.unread ? 'font-bold text-slate-800' : 'text-slate-500'} truncate flex-1`}>{email.from}</span>
                <span className="text-xs text-slate-400 flex-shrink-0">{email.time}</span>
              </div>
              <p className={`text-xs mt-0.5 truncate ${email.unread ? 'text-slate-700 font-medium' : 'text-slate-400'}`}>{email.subject}</p>
            </div>
            {i === converting && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex-shrink-0">
                <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
                  <ArrowRight className="w-3 h-3" /> Task
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const bars = [45, 72, 58, 90, 65, 83, 77];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
      <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 border-b border-slate-100 dark:border-slate-700 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-400" />
        <div className="w-3 h-3 rounded-full bg-yellow-400" />
        <div className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-xs text-slate-400 font-medium">GovFlow - Reports</span>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[{ label: 'Completion', value: '78%', color: 'text-green-600' }, { label: 'On Time', value: '91%', color: 'text-blue-600' }, { label: 'Active', value: '24', color: 'text-purple-600' }].map((s, i) => (
            <motion.div key={i} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.2 }} className="bg-slate-50 rounded-xl p-3 text-center">
              <div className={`text-lg font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex items-end gap-1.5 h-20">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-1">
              <motion.div initial={{ height: 0 }} animate={{ height: `${h}%` }} transition={{ duration: 0.8, delay: i * 0.1, ease: 'easeOut' }} className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-md" />
              <span className="text-xs text-slate-400">{days[i]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const MOCKUPS = [
  { id: 'tasks', label: 'Task Management', component: TaskMockup },
  { id: 'email', label: 'Email Inbox', component: EmailMockup },
  { id: 'analytics', label: 'Analytics', component: AnalyticsMockup },
];

export default function AnimatedMockup() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % MOCKUPS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const ActiveComponent = MOCKUPS[active].component;

  return (
    <div className="w-full">
      <div className="flex gap-2 justify-center mb-6">
        {MOCKUPS.map((m, i) => (
          <button key={m.id} onClick={() => setActive(i)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${active === i ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'bg-white/10 text-slate-400 hover:bg-white/20'}`}>
            {m.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{ opacity: 0, y: 20, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: -10, scale: 0.97 }} transition={{ duration: 0.4 }}>
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

