import React, { useState } from 'react';
import { ChevronDown, Gift, Shield, Sparkles, Menu, X, ArrowRight, ExternalLink, FileText, Award, Layers, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onOpenGift: () => void;
  onOpenScanner: () => void;
  onStartDesigning: () => void;
  onSelectTool: (toolId: string) => void;
  onSelectGuide: (guideTitle: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenGift,
  onOpenScanner,
  onStartDesigning,
  onSelectTool,
  onSelectGuide,
}) => {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [dmcaOpen, setDmcaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toolsList = [
    { id: 'designer', name: 'Profile Designer', desc: 'Custom cam bios without code', badge: 'Popular' },
    { id: 'badges', name: 'DMCA Badges', desc: 'Display deterrence shields on site', badge: 'Free' },
    { id: 'quiz', name: 'Content Safety Quiz', desc: 'Assess your leak risk level', badge: 'Interactive' },
    { id: 'scanner', name: 'Free Leak Scanner', desc: 'Audit piracy sites for stolen media', badge: 'Instant' },
    { id: 'floating-icons', name: 'Floating Icons', desc: 'Social & protection overlays', badge: 'New' },
    { id: 'takedown', name: 'DMCA Takedown Generator', desc: '512(c)(3) legal notices & mailer', badge: 'Legal' },
    { id: 'copyright', name: 'Copyright Registration', desc: 'Official IP & USCO filing guide', badge: 'Guide' },
  ];

  const dmcaGuides = [
    'What is DMCA?',
    'DMCA Takedown',
    'Cam Model Protection',
    'OnlyFans DMCA',
    'Fansly DMCA',
    'Google DMCA',
    'How to File DMCA Takedown',
    'DMCA Takedown Template',
    'DMCA Takedown Service',
    'Reddit DMCA',
    'X (Twitter) DMCA',
    'TikTok DMCA',
    'Instagram DMCA',
    'Telegram DMCA',
    'YouTube DMCA',
    'Chaturbate DMCA',
    'Catfishing & Impersonation',
  ];

  const handleToolClick = (toolId: string) => {
    setToolsOpen(false);
    setMobileMenuOpen(false);
    if (toolId === 'scanner') {
      onOpenScanner();
    } else {
      onSelectTool(toolId);
    }
  };

  const handleGuideClick = (guide: string) => {
    setDmcaOpen(false);
    setMobileMenuOpen(false);
    onSelectGuide(guide);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-violet-500/20 group-hover:scale-105 transition-transform duration-200">
                <Shield className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                rulta
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Tools Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
              >
                <button
                  id="nav-tools-button"
                  className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  Tools
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${toolsOpen ? 'rotate-180 text-violet-400' : ''}`} />
                </button>

                {toolsOpen && (
                  <div className="absolute top-full left-0 w-88 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-slate-900 border border-slate-700/70 rounded-xl shadow-2xl p-2.5 space-y-1">
                      {toolsList.map((tool) => (
                        <button
                          key={tool.id}
                          onClick={() => handleToolClick(tool.id)}
                          className="w-full text-left px-3 py-2.5 rounded-lg flex items-center justify-between hover:bg-slate-800/70 transition-colors group cursor-pointer"
                        >
                          <div>
                            <div className="text-sm font-semibold text-white group-hover:text-violet-300 flex items-center gap-2">
                              {tool.name}
                              {tool.badge && (
                                <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                                  tool.badge === 'Popular'
                                    ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                                    : tool.badge === 'Instant'
                                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                                    : 'bg-slate-800 text-slate-300'
                                }`}>
                                  {tool.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-400 mt-0.5">{tool.desc}</p>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* What is DMCA? Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setDmcaOpen(true)}
                onMouseLeave={() => setDmcaOpen(false)}
              >
                <button
                  id="nav-dmca-button"
                  className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  What is DMCA?
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dmcaOpen ? 'rotate-180 text-violet-400' : ''}`} />
                </button>

                {dmcaOpen && (
                  <div className="absolute top-full left-0 w-120 pt-2 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-slate-900 border border-slate-700/70 rounded-xl shadow-2xl p-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-2">
                        DMCA Guides & Protection
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 max-h-96 overflow-y-auto pr-1">
                        {dmcaGuides.map((guide) => (
                          <button
                            key={guide}
                            onClick={() => handleGuideClick(guide)}
                            className="text-left px-2.5 py-2 text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors truncate cursor-pointer"
                          >
                            {guide}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#blog" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors">
                Blog
              </a>
              <a href="#agencies" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors">
                Agencies
              </a>
              <a href="#pricing" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors">
                Pricing
              </a>
              <a href="#support" className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/50 transition-colors">
                Help & Support
              </a>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#referral"
              className="text-sm font-medium text-slate-300 hover:text-white px-2 py-1 transition-colors"
            >
              Referral Program
            </a>

            <button
              id="nav-gift-button"
              onClick={onOpenGift}
              className="px-3 py-1.5 text-sm font-medium text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Gift className="w-4 h-4 text-amber-400" />
              Get a Gift
            </button>

            <button
              id="nav-get-started-button"
              onClick={onStartDesigning}
              className="px-4 py-2 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 active:bg-violet-700 rounded-lg shadow-md shadow-violet-600/25 transition-all duration-150 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenGift}
              className="p-2 text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded-lg"
            >
              <Gift className="w-4 h-4" />
            </button>
            <button
              id="mobile-nav-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 px-3">
            Rulta Creator Tools
          </div>
          <div className="space-y-1">
            {toolsList.map((tool) => (
              <button
                key={tool.id}
                onClick={() => handleToolClick(tool.id)}
                className="w-full text-left px-3 py-2 text-sm font-medium text-white hover:bg-slate-800 rounded-md flex items-center justify-between"
              >
                <span>{tool.name}</span>
                <span className="text-[10px] text-slate-400">{tool.badge}</span>
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 space-y-1">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 rounded-md"
            >
              Pricing
            </a>
            <a
              href="#support"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:bg-slate-800 rounded-md"
            >
              Help & Support
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              onClick={() => {
                onStartDesigning();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 text-center font-medium text-white bg-violet-600 rounded-lg text-sm"
            >
              Start Designing (100% Free)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
