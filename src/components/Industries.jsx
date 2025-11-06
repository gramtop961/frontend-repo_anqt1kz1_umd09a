import React from 'react';

const industries = [
  {
    name: 'Law Firms',
    points: ['Intake & conflict checks', 'Urgent case triage', 'Calendar booking']
  },
  {
    name: 'Real Estate',
    points: ['Lead qualification', 'Property showing scheduling', 'CRM updates']
  },
  {
    name: 'Home Services',
    points: ['Service routing', 'Estimate requests', 'After-hours coverage']
  },
  {
    name: 'Healthcare',
    points: ['Appointment booking', 'Reminders & follow-ups', 'Insurance info capture']
  }
];

export default function Industries() {
  return (
    <section id="industries" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">Who we help</p>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Built for blue and white collar teams</h2>
            <p className="mt-3 text-muted-foreground max-w-xl">Whether you manage a busy front desk or a field team, CallPal.ai ensures every caller is heard, qualified, and scheduled without missing a beat.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {industries.map((ind) => (
              <div key={ind.name} className="rounded-xl border p-6 bg-background">
                <h3 className="font-semibold">{ind.name}</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground list-disc list-inside">
                  {ind.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
