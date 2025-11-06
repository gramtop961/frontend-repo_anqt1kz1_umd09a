import React from 'react';

export default function CTA() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-orange-500/10 p-10">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">See CallPal.ai in action</h3>
            <p className="mt-2 text-muted-foreground max-w-2xl">Share a few details and we’ll set up a personalized demo. We’ll show how our AI voice agents answer calls, qualify leads, and book into your calendar.</p>
            <form className="mt-6 grid sm:grid-cols-2 gap-4">
              <input className="w-full rounded-md border bg-background px-4 py-3" placeholder="Your name" aria-label="Your name" />
              <input className="w-full rounded-md border bg-background px-4 py-3" placeholder="Work email" aria-label="Work email" type="email" />
              <input className="w-full rounded-md border bg-background px-4 py-3 sm:col-span-2" placeholder="Company" aria-label="Company" />
              <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-lg bg-foreground text-background px-5 py-3 font-medium hover:opacity-90 transition">
                Request demo
              </button>
            </form>
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_80%_20%,rgba(168,85,247,0.25),transparent_60%)]" />
        </div>
        <p className="mt-4 text-xs text-muted-foreground text-center">By requesting a demo, you agree to be contacted about CallPal.ai products and services.</p>
      </div>
    </section>
  );
}
