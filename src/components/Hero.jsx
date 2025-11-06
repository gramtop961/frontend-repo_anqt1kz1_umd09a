import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative overflow-hidden" id="home">
      {/* Header */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="text-xl font-semibold tracking-tight">CallPal.ai</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#samples" className="hover:text-foreground transition">Samples</a>
            <a href="#industries" className="hover:text-foreground transition">Industries</a>
            <a href="#contact" className="hover:text-foreground transition">Contact</a>
            <a
              href="#contact"
              className="rounded-full bg-foreground text-background px-4 py-2 font-medium hover:opacity-90 transition"
            >
              Book a demo
            </a>
          </nav>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative">
        {/* Full-bleed Spline background as cover */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/WCoEDSwacOpKBjaC/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          {/* Veil overlay shouldn't block Spline interactions */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(2,6,23,0)_0%,rgba(2,6,23,0.12)_40%,rgba(2,6,23,0.38)_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-28 grid lg:grid-cols-2 gap-10 items-center">
          <div className="relative z-10">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              AI voice agents that answer, qualify, and book for you
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              Give every caller a fast, friendly experience. CallPal.ai handles inbound & outbound calls, captures intent, and books meetings in your calendar—24/7.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600 via-blue-600 to-orange-500 px-5 py-3 text-white font-medium shadow hover:opacity-95 transition"
              >
                Get a live demo
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-lg border px-5 py-3 font-medium hover:bg-accent transition"
              >
                Explore features
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span>Instant pickup</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>Natural voices</span>
              <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              <span>CRM & calendar integrations</span>
            </div>
          </div>

          {/* Visual placeholder removed since Spline is full-bleed */}
          <div className="relative h-[420px] md:h-[520px] lg:h-[640px]" />
        </div>
      </div>
    </section>
  );
}
