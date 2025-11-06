import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Industries from './components/Industries';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />
      <Industries />
      <CTA />
      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400" />
            <span className="font-medium text-foreground">CallPal.ai</span>
          </div>
          <p>© {new Date().getFullYear()} CallPal.ai. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#industries" className="hover:text-foreground">Industries</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
