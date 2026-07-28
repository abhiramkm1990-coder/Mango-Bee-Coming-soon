import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface StickyMobileCtaProps {
  onOpenVipModal: () => void;
  subscriberCount: number;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenVipModal, subscriberCount }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden p-3 bg-[#09090B]/95 backdrop-blur-md border-t border-[#27272A] shadow-2xl flex items-center justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <MangobeeLogo variant="icon" height={30} />
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white flex items-center gap-1 font-display">
            Mangobee<span className="text-[#F97316]">™</span> VIP
          </span>
          <span className="text-[10px] text-zinc-400">
            India Pre-Launch • 20% Off Pass
          </span>
        </div>
      </div>

      <button
        onClick={onOpenVipModal}
        className="px-4 py-2.5 rounded-xl bg-[#F97316] text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 whitespace-nowrap"
      >
        <span>Get 20% Off</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
