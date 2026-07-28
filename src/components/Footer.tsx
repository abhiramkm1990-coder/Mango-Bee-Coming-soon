import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin, Building2, Mail, ShieldAlert, FileText, ArrowUp } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface FooterProps {
  onOpenBulkModal: () => void;
  onOpenModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBulkModal, onOpenModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const privacyText = `Privacy Policy for Mangobee™ Workspace Studio
  
1. Information We Collect: When you sign up for VIP early access or submit a corporate bulk inquiry, we collect your email address, name, and workspace preferences.
2. How We Use Data: Your information is strictly used to notify you about the Mangobee pre-launch, issue early VIP discount codes, and deliver promised cable armor launch rewards.
3. No Spam Policy: We never sell, rent, or trade your personal data. You can opt-out at any time with one click.
4. Data Protection: All records are secured using TLS encryption and stored in compliant server infrastructure.`;

  const termsText = `Terms & Conditions for Mangobee™ Pre-Launch VIP Program
  
1. VIP 20% Discount Code: VIP subscribers receive a 20% off promotional code valid for 30 days starting from the official store opening date.
2. Free Cable Armor Gift: The first 500 validated VIP email registrants are eligible for a free Mangobee Reinforced Cable Armor with their first purchase of any workspace accessory or bundle.
3. Product Specifications: Product dimensions, materials, and features shown on this pre-launch landing page and customizer studio reflect pre-production engineering models and are subject to minor aesthetic updates prior to shipping.
4. Copyright: Mangobee™ name, customizer interface, and desk designs are registered trademarks.`;

  return (
    <footer className="bg-[#09090B] text-white pt-16 pb-12 border-t border-[#27272A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#27272A]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <MangobeeLogo theme="dark" height={38} />
            </div>

            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Precision-engineered desk accessories, custom mechanical combos, ergonomic workspace essentials, and heavy-duty device protection—crafted for modern creators, professionals, and productivity enthusiasts.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[
                { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/mangobee' },
                { icon: Facebook, label: 'Facebook', url: 'https://facebook.com/mangobee' },
                { icon: Twitter, label: 'X (Twitter)', url: 'https://x.com/mangobee' },
                { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/company/mangobee' },
              ].map((soc, idx) => {
                const IconComp = soc.icon;
                return (
                  <a
                    key={idx}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="w-9 h-9 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-[#F97316] hover:border-[#F97316]/50 flex items-center justify-center transition-all"
                  >
                    <IconComp className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F97316] font-mono">
              Ecosystem
            </h4>
            <ul className="space-y-2 text-xs text-zinc-400 font-medium">
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Upcoming Collection
                </a>
              </li>
              <li>
                <a href="#customizer" className="hover:text-white transition-colors">
                  Customizer Studio
                </a>
              </li>
              <li>
                <a href="#why-mangobee" className="hover:text-white transition-colors">
                  Why Mangobee
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ & Launch Rules
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#F97316] font-mono">
              Corporate & Legal
            </h4>
            <div className="flex flex-col gap-2.5 text-xs text-zinc-400">
              <button
                onClick={onOpenBulkModal}
                className="text-left hover:text-[#F97316] transition-colors flex items-center gap-2"
              >
                <Building2 className="w-4 h-4 text-[#F97316]" />
                <span>Corporate Bulk Orders (50+ units)</span>
              </button>

              <button
                onClick={() =>
                  onOpenModal(
                    'Contact Mangobee Studio',
                    'For press inquiries, creator sponsorships, or custom engineering requests, please email us directly at launch@mangobee.com or corporate@mangobee.com. Our studio team responds within 24 hours.'
                  )
                }
                className="text-left hover:text-[#F97316] transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#F97316]" />
                <span>Contact Studio Team</span>
              </button>

              <button
                onClick={() => onOpenModal('Privacy Policy', privacyText)}
                className="text-left hover:text-[#F97316] transition-colors flex items-center gap-2"
              >
                <ShieldAlert className="w-4 h-4 text-zinc-500" />
                <span>Privacy Policy</span>
              </button>

              <button
                onClick={() => onOpenModal('Terms & Conditions', termsText)}
                className="text-left hover:text-[#F97316] transition-colors flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-zinc-500" />
                <span>Terms & Conditions</span>
              </button>
            </div>
          </div>

        </div>

        {/* SEO Natural Keyword Footer Paragraph */}
        <div className="py-6 border-b border-[#27272A] text-[11px] text-zinc-500 leading-relaxed font-normal">
          <p>
            Mangobee™ specializes in premium workspace accessories, ergonomic desk accessories, workspace customization, and desk setup organization. Our upcoming collection features high-performance wireless keyboard and mouse combos with silent scissor keycaps, CNC anodized ergonomic laptop stands, braided 240W USB-C cable armor, and military-grade MagSafe phone cases designed for creators, programmers, and productivity enthusiasts across India.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} Mangobee Inc. All rights reserved. Precision Designed for Modern Workspaces.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-[#F97316] transition-colors flex items-center gap-1 text-[11px]"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
