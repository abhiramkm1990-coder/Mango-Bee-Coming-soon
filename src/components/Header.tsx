import React, { useState, useEffect } from 'react';
import { Sparkles, Layers, ShieldCheck, ArrowRight, Menu, X, Terminal } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface HeaderProps {
  onOpenVipModal: () => void;
  onOpenSeoDrawer: () => void;
  subscriberCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onOpenVipModal, onOpenSeoDrawer, subscriberCount }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          scrolled
            ? 'bg-[#FAFAFA]/90 backdrop-blur-md border-[#E5E5E5] shadow-sm py-2 px-4 sm:px-6'
            : 'bg-transparent border-transparent py-3 px-2 sm:px-4'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo & Pre-launch Tag */}
          <a href="#" className="flex items-center gap-3 group">
            <MangobeeLogo theme="light" height={32} className="transition-transform group-hover:scale-105" />
            <span className="hidden sm:inline-flex text-[10px] tracking-wider uppercase font-semibold text-[#525252] items-center gap-1 pl-2 border-l border-[#E5E5E5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] animate-pulse"></span>
              Studio Pre-launch
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-[#525252]">
            <a href="#collection" className="hover:text-[#F97316] transition-colors">
              Collection
            </a>
            <a href="#customizer" className="hover:text-[#F97316] transition-colors flex items-center gap-1">
              <Layers className="w-3.5 h-3.5 text-[#F97316]" />
              Customizer
            </a>
            <a href="#why-mangobee" className="hover:text-[#F97316] transition-colors">
              Why Mangobee
            </a>
            <a href="#faq" className="hover:text-[#F97316] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Technical SEO Inspector trigger */}
            <button
              onClick={onOpenSeoDrawer}
              title="Inspect SEO & Technical Schema"
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-[#E5E5E5] bg-white text-[11px] font-medium text-[#525252] hover:border-[#F97316]/50 hover:text-[#09090B] transition-all"
            >
              <Terminal className="w-3.5 h-3.5 text-[#F97316]" />
              <span className="font-mono text-[10px]">SEO Schema</span>
            </button>

            {/* India Launch Indicator */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 text-xs font-semibold text-[#09090B]">
              <span className="text-xs">🇮🇳</span>
              <span>Launching First in India</span>
            </div>

            {/* VIP Access Button */}
            <button
              onClick={onOpenVipModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#09090B] text-white hover:bg-[#F97316] transition-all duration-200 text-xs font-bold shadow-sm hover:shadow-orange-500/20 active:scale-95"
            >
              <span>Get 20% Off</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-[#E5E5E5] bg-white text-[#09090B]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-[#E5E5E5] flex flex-col gap-3 pb-2 text-sm font-medium text-[#09090B]">
            <a
              href="#collection"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#F97316] transition-colors"
            >
              Upcoming Collection
            </a>
            <a
              href="#customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#F97316] transition-colors flex items-center gap-2"
            >
              <Layers className="w-4 h-4 text-[#F97316]" />
              Customizer Studio Preview
            </a>
            <a
              href="#why-mangobee"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#F97316] transition-colors"
            >
              Why Mangobee
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-2 py-1.5 hover:text-[#F97316] transition-colors"
            >
              Frequently Asked Questions
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSeoDrawer();
              }}
              className="flex items-center gap-2 px-2 py-1.5 text-xs text-[#525252] font-mono"
            >
              <Terminal className="w-4 h-4 text-[#F97316]" />
              Inspect SEO JSON-LD & Meta
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
