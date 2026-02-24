import React from 'react';
import { Navbar } from './sections/Navbar.jsx';
import { Hero } from './sections/Hero.jsx';
import { Challenges } from './sections/Challenges.jsx';
import { SolutionBanner } from './sections/SolutionBanner.jsx';
import { Features } from './sections/Features.jsx';
import { Benefits } from './sections/Benefits.jsx';
import { Security } from './sections/Security.jsx';
import { CTA } from './sections/CTA.jsx';
import { Footer } from './sections/Footer.jsx';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Challenges />
      <SolutionBanner />
      <Features />
      <Benefits />
      <Security />
      <CTA />
      <Footer />
    </div>
  );
}

