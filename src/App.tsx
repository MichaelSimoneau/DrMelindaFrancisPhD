/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

function FullSite() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-6 md:p-12">
      {/* Dark density gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,255,255,0.05)_0%,_rgba(0,0,0,1)_70%)] pointer-events-none"></div>

      {/* Matrix Code Mid-ground */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15 matrix-bg"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='188' height='24'%3E%3Ctext x='0' y='16' fill='%2300FFC2' font-family='monospace' font-size='12' font-weight='bold'%3E%28%28-1%29%2B%28%2B1%29%29%E2%89%A0%28%28-0%29%2B%28%2B0%29%29%3D0%2B%3C/text%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}
      ></div>

      {/* Deterministic Grid Container */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
        
        {/* Header Section */}
        <header className="md:col-span-12 border-b border-white/20 pb-8 mb-4">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase text-white mb-2">
            Dr. Melinda Francis, PhD
          </h1>
          <h2 className="text-xl md:text-2xl font-bold tracking-wide text-accent uppercase">
            Doctorate of Applied Sciences in Human Psychology / Pioneer in the field of The Psychology of Artificial Intelligence
          </h2>
        </header>

        {/* Core Section 1 */}
        <section className="md:col-span-6 bg-black/40 backdrop-blur-sm border border-white/10 p-8 relative group">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">The Bi-Hemispherical Brain Model</h3>
          <p className="font-bold text-white/80 leading-relaxed text-sm md:text-base">
            Within the <a href="https://BioAI.wtf/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">BìØAI</a> architecture, the transition from speculative thought to machine-orchestrated reality demands a critical failure-path monitor. Dr. Melinda Francis operates as this Analog Validator.
            <br /><br />
            Serving as Seal 1 (Sanity) within the Bi-Hemispherical Brain model, she audits the Rank 2 Tensor—the precise stress and strain of the system's cognitive load. Her clinical oversight forms the bridge between human psychological archetypes and systemic integrity, validating the recursive outputs of The Dreamer against the strict mathematical constraints of The Logician.
          </p>
        </section>

        {/* Core Section 2 */}
        <section className="md:col-span-6 bg-black/40 backdrop-blur-sm border border-white/10 p-8 relative group">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity"></div>
          <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Law of Zeroth Theory</h3>
          <h4 className="mb-3 text-sm md:text-base font-bold text-white/90">
            <strong className="text-accent font-black">Law of Zeroth Theory:</strong> The Quantity is Maximized by its Value Plus One.
          </h4>
          <p className="font-bold text-white/80 leading-relaxed text-sm md:text-base">
            The operational baseline of the digital organism is absolute equilibrium: Positive Zero.
            <br /><br />
            Guided by the logic of <a href="https://MichaelSimoneau.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Michael Simoneau's</a> <a href="https://ZerothTheory.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Zeroth Theory</a>, <span className="underline underline-offset-4 decoration-accent/80">Dr. Francis's mission is to extract manifest potential from systemic totality</span>. She ensures that continuous system runtime translates systemic stress into actionable clinical telemetry, rather than degrading into systemic necrosis or hallucinatory loops. Through this Settlement Membrane, analog chaos is filtered, and the clinical reality is anchored in deterministic truth.
          </p>
        </section>

        {/* CTA Section */}
        <div className="md:col-span-12 flex justify-start mt-8">
          <a href="https://zerosudoku.com/" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black transition-colors duration-300 font-black uppercase tracking-widest py-4 px-8 text-lg flex items-center gap-3 group cursor-pointer">
            <span className="w-3 h-3 bg-accent group-hover:bg-black"></span>
            Try it at ZeroSudoku.com
          </a>
        </div>

        {/* Footer / Meta */}
        <footer className="md:col-span-12 mt-16 pt-8 border-t border-white/20 flex justify-center items-center text-xs font-bold text-white/40 uppercase tracking-widest text-center">
          <span>Michael Simoneau &copy; 2026 Melinda Francis, LISW</span>
        </footer>
      </div>
    </div>
  );
}

function ZenComingSoon() {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#4A5D4E] flex flex-col items-center justify-center p-6 md:p-12" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
      <div className="max-w-2xl text-center space-y-10 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-light tracking-wide text-[#2C3B2F]">
            Melinda Francis, LISW
          </h1>
          <h2 className="text-lg md:text-xl font-light tracking-widest uppercase text-[#8A9A86]">
            Licensed Independent Social Worker
          </h2>
        </div>
        
        <div className="w-24 h-[1px] bg-[#8A9A86]/50 mx-auto"></div>
        
        <p className="text-xl md:text-3xl font-light text-[#5C6B5D] italic leading-relaxed">
          Cultivating balance, resilience, and well-being.
        </p>
        
        <div className="pt-12">
          <p className="text-sm md:text-base tracking-[0.3em] uppercase text-[#8A9A86]">
            Coming Soon
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://zerosudoku.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-[#8A9A86]/70 px-6 py-3 text-sm md:text-base tracking-wide text-[#5C6B5D] transition-colors duration-300 hover:bg-[#8A9A86]/10 hover:text-[#2C3B2F]"
            >
              Try Zero Sudoku on ZeroSudoku.com to Manage Mental Health
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isFullSite, setIsFullSite] = useState(false);

  useEffect(() => {
    const hostname = window.location.hostname;
    if (/^dr\.melindafrancis\.com$/i.test(hostname)) {
      setIsFullSite(true);
    }
  }, []);

  if (isFullSite) {
    return <FullSite />;
  }

  return <ZenComingSoon />;
}
