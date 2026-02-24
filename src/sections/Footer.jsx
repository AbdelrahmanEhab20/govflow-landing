import React from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-xs">TD</span>
          </div>
          <span className="text-white font-semibold">GovFlow</span>
          <span className="text-slate-500 text-sm">— Tourism Development Workflow System</span>
        </div>
        <p className="text-slate-500 text-sm">
          © 2026 GovFlow. Built for Governments &amp; Enterprises.
        </p>
      </div>
    </footer>
  );
}

