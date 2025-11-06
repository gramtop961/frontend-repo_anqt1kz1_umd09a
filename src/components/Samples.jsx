import React from 'react';
import { Headphones, PlayCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const clips = [
  {
    title: 'Inbound – Law Firm Intake',
    desc: 'Greets, gathers case details, checks conflicts, and books a consult.',
    tags: ['Intake', 'Scheduling', 'Screening'],
    audio: 'https://www.soundjay.com/voice/sounds/hello-1.mp3'
  },
  {
    title: 'Outbound – Appointment Confirmation',
    desc: 'Confirms time, handles reschedules, and sends calendar invites.',
    tags: ['Outbound', 'Calendar', 'Reminders'],
    audio: 'https://www.soundjay.com/voice/sounds/please-hold-on-1.mp3'
  },
  {
    title: 'Support – After-hours Triage',
    desc: 'Answers FAQs, captures contact info, and escalates urgent issues.',
    tags: ['Triage', 'Escalation', '24/7'],
    audio: 'https://www.soundjay.com/voice/sounds/thank-you-1.mp3'
  },
  {
    title: 'Sales – Real Estate Lead Qualifier',
    desc: 'Qualifies buyers/sellers and schedules property showings.',
    tags: ['Leads', 'Qualification', 'Real Estate'],
    audio: 'https://www.soundjay.com/voice/sounds/hello-1.mp3'
  }
];

function AnimatedBars() {
  const bars = Array.from({ length: 24 });
  return (
    <div className="flex items-end gap-1 h-14">
      {bars.map((_, i) => (
        <motion.span
          key={i}
          className="w-1 rounded-full bg-gradient-to-b from-purple-500 via-blue-500 to-orange-400"
          style={{ height: '50%' }}
          animate={{ scaleY: [0.5, 1.2, 0.6, 1.0] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: (i % 6) * 0.08,
          }}
        />
      ))}
    </div>
  );
}

function SampleCard({ title, desc, tags, audio }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_60%_at_80%_0%,rgba(168,85,247,0.20),transparent_60%)]" />
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Headphones className="h-4 w-4" />
              <span>Call Recording</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
          </div>
          <PlayCircle className="h-6 w-6 text-muted-foreground" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="text-xs rounded-full border px-2.5 py-1 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 rounded-xl border bg-black/5 p-4">
          <AnimatedBars />
          <audio className="mt-3 w-full" controls preload="none" src={audio} />
        </div>
      </div>
    </div>
  );
}

export default function Samples() {
  return (
    <section id="samples" className="relative py-20">
      {/* Decorative stripe background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/2 h-[480px] w-[120vw] -translate-x-1/2 rotate-[-8deg] bg-gradient-to-r from-purple-600/15 via-blue-600/15 to-orange-500/15 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Hear it in action</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Sample call recordings</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Realistic, natural voices that capture intent and move conversations forward.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {clips.map((clip) => (
            <SampleCard key={clip.title} {...clip} />
          ))}
        </div>
      </div>
    </section>
  );
}
