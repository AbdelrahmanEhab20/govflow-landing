import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button.jsx';
import { Logo } from '../components/Logo.jsx';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isAtTop = !scrolled;

  const brandTextClasses = `font-bold text-lg transition-colors ${
    isAtTop ? 'text-white' : 'text-slate-900 dark:text-white'
  }`;

  const desktopLinksWrapperClasses = `hidden md:flex items-center gap-8 text-sm font-medium transition-colors ${
    isAtTop ? 'text-slate-100' : 'text-slate-600 dark:text-slate-300'
  }`;

  const desktopLinkHoverClasses = isAtTop
    ? 'hover:text-blue-300'
    : 'hover:text-blue-600';

  const mobileToggleClasses = `md:hidden inline-flex items-center justify-center rounded-xl border px-2.5 py-2 text-sm transition-colors ${
    isAtTop
      ? 'text-white border-white/30 bg-white/5 hover:bg-white/10'
      : 'text-slate-900 border-slate-300 bg-white/80 hover:bg-white'
  }`;

  const mobilePanelClasses = `md:hidden border-t backdrop-blur-md ${
    isAtTop
      ? 'bg-slate-900/95 border-slate-800 text-slate-100'
      : 'bg-white/95 border-slate-200 text-slate-900 dark:bg-slate-900/95 dark:border-slate-700 dark:text-slate-100'
  }`;

  const mobileLinkHoverClasses = isAtTop
    ? 'hover:text-blue-300'
    : 'hover:text-blue-600';

  const handleMobileLinkClick = () => {
    setMobileOpen(false);
  };

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
          <Logo />
          <span className={brandTextClasses}>GovFlow</span>
        </div>

        <div className="flex items-center gap-3">
          <div className={desktopLinksWrapperClasses}>
            <a
              href="#challenges"
              className={`${desktopLinkHoverClasses} transition-colors`}
            >
              Challenges
            </a>
            <a
              href="#features"
              className={`${desktopLinkHoverClasses} transition-colors`}
            >
              Features
            </a>
            <a
              href="#benefits"
              className={`${desktopLinkHoverClasses} transition-colors`}
            >
              Benefits
            </a>
            <a
              href="#security"
              className={`${desktopLinkHoverClasses} transition-colors`}
            >
              Security
            </a>
          </div>

          <a href="#contact" className="hidden md:inline-flex">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us
            </Button>
          </a>

          <button
            type="button"
            className={mobileToggleClasses}
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className={mobilePanelClasses}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-medium">
            <a
              href="#challenges"
              className={`py-1 transition-colors ${mobileLinkHoverClasses}`}
              onClick={handleMobileLinkClick}
            >
              Challenges
            </a>
            <a
              href="#features"
              className={`py-1 transition-colors ${mobileLinkHoverClasses}`}
              onClick={handleMobileLinkClick}
            >
              Features
            </a>
            <a
              href="#benefits"
              className={`py-1 transition-colors ${mobileLinkHoverClasses}`}
              onClick={handleMobileLinkClick}
            >
              Benefits
            </a>
            <a
              href="#security"
              className={`py-1 transition-colors ${mobileLinkHoverClasses}`}
              onClick={handleMobileLinkClick}
            >
              Security
            </a>
            <a
              href="#contact"
              className={`py-1 transition-colors ${mobileLinkHoverClasses}`}
              onClick={handleMobileLinkClick}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

