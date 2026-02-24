import React, { useState } from 'react';
import { AnimatedSection } from '../components/shared/AnimatedSection.jsx';
import { FadeUp } from '../components/shared/FadeUp.jsx';
import { Button } from '../components/ui/Button.jsx';
import { BarChart3, Building2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const honeypot = (formData.get('companyWebsite') || '').toString().trim();
    if (honeypot) {
      return;
    }

    const payload = {
      name: (formData.get('name') || '').toString().trim(),
      email: (formData.get('email') || '').toString().trim(),
      organization: (formData.get('organization') || '').toString().trim(),
      inquiryType: (formData.get('inquiryType') || '').toString(),
      message: (formData.get('message') || '').toString().trim(),
    };

    if (!payload.name || !payload.email) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <FadeUp className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full bg-blue-500/10 border border-blue-500/30 px-3 py-1 text-sm text-blue-200">
                <span className="mr-2 text-base">✨</span>
                Tailored for modern public organizations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">
                Have a question or need a demo?
              </h2>
              <p className="text-slate-300 text-lg max-w-xl">
                Tell us a bit about your organization and what you&apos;re looking
                to achieve. We&apos;ll follow up with guidance, demos, or pricing
                details tailored to your needs.
              </p>

              <div className="relative mt-8">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-cyan-400/20 blur-2xl opacity-70" />
                <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-blue-100" strokeWidth={2.4} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        Example inquiry
                      </p>
                      <p className="text-sm font-medium leading-relaxed">
                        &quot;We need a secure, on-premise workflow hub for our
                        ministry.&quot;
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0">
                      <BarChart3 className="w-5 h-5 text-blue-100" strokeWidth={2.4} />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        How we help
                      </p>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        Get guidance on implementation timelines, modules, and
                        integrations that fit your governance model.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-slate-900/60 border border-slate-700 rounded-3xl p-6 md:p-8 shadow-xl space-y-5"
              >
                <input
                  type="text"
                  name="companyWebsite"
                  autoComplete="off"
                  tabIndex={-1}
                  className="hidden"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-1">
                      Full name
                    </label>
                    <input
                      name="name"
                      required
                      maxLength={80}
                      autoComplete="name"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Alex Johnson"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-200 mb-1">
                      Work email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      maxLength={120}
                      autoComplete="email"
                      inputMode="email"
                      className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="you@agency.gov"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    Organization
                  </label>
                  <input
                    name="organization"
                    maxLength={120}
                    autoComplete="organization"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Ministry, authority, or enterprise"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    Inquiry type
                  </label>
                  <select
                    name="inquiryType"
                    required
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    defaultValue="implementation"
                  >
                    <option value="implementation">Implementation &amp; onboarding</option>
                    <option value="pricing">Pricing &amp; licensing</option>
                    <option value="security">Security &amp; compliance</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-200 mb-1">
                    How can we help?
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={2000}
                    className="w-full rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Share a bit about your current workflows, challenges, or goals."
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-500 text-white"
                  >
                    Submit Inquiry
                  </Button>
                  <p className="text-xs text-slate-500">
                    By submitting, you agree to be contacted about GovFlow. We&apos;ll
                    never share your details with third parties.
                  </p>
                  {submitted && (
                    <p className="text-xs text-emerald-400">
                      Thank you — we&apos;ve received your inquiry and will be in
                      touch shortly.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </FadeUp>
        </AnimatedSection>
      </div>
    </section>
  );
}

