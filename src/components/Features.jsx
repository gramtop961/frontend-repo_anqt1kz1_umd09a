import React from 'react';
import { CheckCircle, Calendar, PhoneCall, Bot } from 'lucide-react';

const features = [
  {
    icon: <PhoneCall className="h-6 w-6" />,
    title: 'Instant Answering',
    desc: 'Pick up every call in under a second with natural, human-like voices.'
  },
  {
    icon: <Bot className="h-6 w-6" />,
    title: 'Smart Qualification',
    desc: 'Gather intent, detect urgency, and route or escalate when needed.'
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: 'Calendar Booking',
    desc: 'Book, reschedule, and confirm appointments directly in your calendar.'
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: 'CRM Sync',
    desc: 'Push call summaries, transcripts, and outcomes to your CRM automatically.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-muted-foreground">Capabilities</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Everything your phone line needs</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">From greeting to booking, your AI agent handles the full conversation and keeps your team in the loop.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border bg-background p-6 hover:shadow-md transition">
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-orange-500/10 text-primary">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
