import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button.jsx';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">TD</span>
          </div>
          <span className="font-bold text-lg text-slate-900 dark:text-white">GovFlow</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#challenges" className="hover:text-blue-600 transition-colors">
            Challenges
          </a>
          <a href="#features" className="hover:text-blue-600 transition-colors">
            Features
          </a>
          <a href="#benefits" className="hover:text-blue-600 transition-colors">
            Benefits
          </a>
          <a href="#security" className="hover:text-blue-600 transition-colors">
            Security
          </a>
        </div>
        <Button
          size="sm"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => {
            // Placeholder: wire this to your production app when ready
            console.log('Open App clicked (navigation not yet configured).');
          }}
        >
          Open App
        </Button>
      </div>
    </nav>
  );
}

