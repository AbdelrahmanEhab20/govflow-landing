import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './sections/Navbar.jsx';
import { Hero } from './sections/Hero.jsx';
import { LivePreview } from './sections/LivePreview.jsx';
import { Challenges } from './sections/Challenges.jsx';
import { SolutionBanner } from './sections/SolutionBanner.jsx';
import { Features } from './sections/Features.jsx';
import { Benefits } from './sections/Benefits.jsx';
import { Security } from './sections/Security.jsx';
// import { CTA } from './sections/CTA.jsx';
import { Footer } from './sections/Footer.jsx';
import { Contact } from './sections/Contact.jsx';
import InteractiveTour from './components/landing/InteractiveTour.jsx';

export default function Landing() {
  const [tourOpen, setTourOpen] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-x-hidden">
        <Navbar />
        <Hero onOpenTour={() => setTourOpen(true)} />
        <LivePreview onOpenTour={() => setTourOpen(true)} />
        <Challenges />
        <SolutionBanner />
        <Features />
        <Benefits />
        <Security />
        {/* <CTA /> */}
        <Contact />
        <Footer />
      </div>

      <AnimatePresence>{tourOpen && <InteractiveTour onClose={() => setTourOpen(false)} />}</AnimatePresence>
    </>
  );
}

