import React from 'react';
import { Shield } from 'lucide-react';

interface FooterProps {
  onSelectTool?: (toolId: string) => void;
  onSelectGuide?: (guide: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTool, onSelectGuide }) => {
  return (
    <footer className="bg-[#060911] text-slate-400 text-xs border-t border-slate-800/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: Company Info & Socials */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <a href="#" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                rulta
              </span>
            </a>

            <div className="text-slate-400 space-y-1 text-xs leading-relaxed">
              <p className="font-semibold text-slate-300">Rulta OÜ</p>
              <p>Tartu mnt 67/1-13b,</p>
              <p>Tallinn, 10115 Estonia</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-violet-600/30 border border-slate-800 hover:border-violet-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-violet-600/30 border border-slate-800 hover:border-violet-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-violet-600/30 border border-slate-800 hover:border-violet-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>

              <a
                href="https://reddit.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Reddit"
                className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-violet-600/30 border border-slate-800 hover:border-violet-500/50 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
              Product
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li>
                <button
                  onClick={() => onSelectTool?.('badges')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  DMCA badges
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTool?.('designer')}
                  className="text-violet-400 font-medium hover:text-violet-300 transition-colors text-left cursor-pointer"
                >
                  Profile designer
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTool?.('quiz')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Content safety quiz
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTool?.('floating-icons')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Floating icons
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTool?.('copyright')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Copyright registration
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
              Company
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#agencies" className="hover:text-white transition-colors">Agencies</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About us</a></li>
              <li><a href="#support" className="hover:text-white transition-colors">Contact us</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
              Resources
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#support" className="hover:text-white transition-colors">Help & support</a></li>
              <li>
                <button
                  onClick={() => onSelectGuide?.('What is DMCA?')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  What is DMCA?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTool?.('takedown')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  DMCA takedown notice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectGuide?.('DMCA Takedown')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Takedown service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectGuide?.('DMCA Takedown Template')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Takedown template
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectGuide?.('How to File DMCA Takedown')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  How to file a takedown
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Takedown Guides */}
          <div>
            <h4 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">
              Takedown Guides
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                'OnlyFans DMCA',
                'TikTok DMCA',
                'Instagram DMCA',
                'Fansly DMCA',
                'X (Twitter) DMCA',
                'Chaturbate DMCA',
                'Google DMCA',
                'Telegram DMCA',
                'Cam Model Protection',
                'Reddit DMCA',
                'YouTube DMCA',
                'Catfishing & Impersonation',
              ].map((guide) => (
                <li key={guide}>
                  <button
                    onClick={() => onSelectGuide?.(guide)}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    {guide}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 Rulta OÜ · Reg. 14640476 · VAT EE102233393
          </p>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="#cookie-policy" className="hover:text-white transition-colors">Cookie Policy</a>
            <span>·</span>
            <a href="#cookie-settings" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
