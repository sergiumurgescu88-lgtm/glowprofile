import React from 'react';
import { Sparkles, ShieldCheck, ArrowRight, Wand2, Eye, Palette } from 'lucide-react';

interface HeroProps {
  onStartDesigning: () => void;
  onOpenScanner: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartDesigning, onOpenScanner }) => {
  const supportedSites = [
    { name: 'Chaturbate', color: 'text-amber-400', border: 'border-amber-500/30', bg: 'bg-amber-500/10' },
    { name: 'MyFreeCams', color: 'text-sky-400', border: 'border-sky-500/30', bg: 'bg-sky-500/10' },
    { name: 'Bongacams', color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-rose-500/10' },
    { name: 'Stripchat', color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
    { name: 'Cam4', color: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#0F172A] to-[#0B0F19] pt-12 pb-16 md:pt-18 md:pb-24 border-b border-slate-800/80">
      {/* Background glow subtle effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-violet-600/15 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Free pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-violet-400" />
          <span>100% free, no coding needed</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
          Free Profile Designer for{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-rose-400">
            Chaturbate, MyFreeCams & More
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
          Create stunning cam site profiles without coding. Drag-and-drop editor with beautiful templates.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            id="hero-start-designing"
            onClick={onStartDesigning}
            className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 active:scale-[0.98] shadow-xl shadow-violet-600/30 flex items-center justify-center gap-2.5 transition-all duration-150 cursor-pointer"
          >
            <Palette className="w-5 h-5 text-violet-200" />
            <span>Start Designing Free</span>
            <ArrowRight className="w-4 h-4 text-violet-200" />
          </button>

          <button
            id="hero-leak-scanner"
            onClick={onOpenScanner}
            className="w-full sm:w-auto px-6 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 hover:border-slate-600 active:scale-[0.98] flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <ShieldCheck className="w-5 h-5 text-rose-400" />
            <span>Free Leak Scanner (2 min)</span>
          </button>
        </div>

        {/* Works with Platforms Pills */}
        <div className="pt-2">
          <p className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3.5">
            Works with Chaturbate, MyFreeCams, Bongacams, Stripchat & Cam4
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {supportedSites.map((site) => (
              <div
                key={site.name}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${site.color} ${site.bg} ${site.border} border`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {site.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
