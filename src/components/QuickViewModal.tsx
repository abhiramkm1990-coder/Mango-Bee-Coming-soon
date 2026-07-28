import React from 'react';
import { Product } from '../types';
import { X, Check, Sparkles, Shield, Cpu, Bell } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenVipModal: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose, onOpenVipModal }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-[#E5E5E5] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#09090B] hover:bg-[#E5E5E5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] uppercase font-bold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-full border border-[#F97316]/20 font-mono">
            {product.category}
          </span>
          <span className="text-xs font-bold text-[#525252]">
            Est. Price: {product.estimatedPrice}
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#09090B] font-display mb-3">
          {product.name}
        </h3>

        {/* Image Display */}
        <div className="w-full h-[240px] sm:h-[280px] rounded-2xl overflow-hidden bg-[#FAFAFA] border border-[#E5E5E5] mb-6 relative group">
          <img
            src={product.image}
            alt={product.imageAlt}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-3 left-3 bg-[#09090B]/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-zinc-700 flex items-center gap-1.5 shadow-md">
            <MangobeeLogo theme="dark" height={16} />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-sm text-[#525252] leading-relaxed mb-6 font-normal">
          {product.tagline}
        </p>

        {/* Key Features Grid */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-bold uppercase text-[#09090B] tracking-wider mb-2 font-mono">
            Highlighted Capabilities
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#09090B] bg-[#FAFAFA] p-2.5 rounded-xl border border-[#E5E5E5]">
                <Check className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="mb-6 space-y-2">
          <h4 className="text-xs font-bold uppercase text-[#09090B] tracking-wider mb-2 font-mono">
            Technical Specs Matrix
          </h4>
          <div className="space-y-1.5 text-xs">
            {Object.entries(product.specs).map(([key, val], idx) => (
              <div key={idx} className="flex justify-between py-1.5 border-b border-[#E5E5E5] text-[#525252]">
                <span className="font-semibold text-[#09090B]">{key}</span>
                <span className="text-right font-mono text-[11px] text-[#09090B]">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E5E5E5]">
          <button
            onClick={() => {
              onClose();
              onOpenVipModal();
            }}
            className="w-full sm:w-auto flex-1 py-3 px-6 rounded-xl bg-[#09090B] text-white hover:bg-[#F97316] transition-colors text-xs font-bold shadow-md flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span>Get 20% Off Launch Reservation</span>
          </button>
        </div>

      </div>
    </div>
  );
};
