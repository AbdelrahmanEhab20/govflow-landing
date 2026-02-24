import React from 'react';
import { Logo } from '../components/Logo.jsx';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Logo size="sm" />
          <span className="text-white font-semibold">GovFlow</span>
        </div>
        <p className="text-slate-500 text-sm">
          © {currentYear} GovFlow. Built for Governments &amp; Enterprises.
        </p>
      </div>
    </footer>
  );
}

