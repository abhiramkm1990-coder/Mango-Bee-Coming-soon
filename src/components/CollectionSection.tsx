import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { Check, Info, Bell, Sparkles, Layers, Sliders, ChevronRight } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface CollectionSectionProps {
  onSelectProduct: (product: Product) => void;
  onOpenVipModal: () => void;
}

export const CollectionSection: React.FC<CollectionSectionProps> = ({ onSelectProduct, onOpenVipModal }) => {
  const [notifiedItems, setNotifiedItems] = useState<{ [key: string]: boolean }>({});

  const toggleNotify = (productId: string) => {
    setNotifiedItems((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  return (
    <section id="collection" className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F97316]/10 text-[#F97316] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4 font-mono border border-[#F97316]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
            PRE-LAUNCH ECOSYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09090B] font-display mb-4 leading-tight">
            Upcoming Collection
          </h2>
          <p className="text-sm sm:text-base text-[#525252] max-w-2xl mx-auto leading-relaxed font-normal">
            Four precision-engineered core essentials designed to elevate your desk aesthetics, posture, connectivity, and hardware durability.
          </p>
        </div>

        {/* 4 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#F97316]/50 transition-all duration-300 shadow-sm hover:shadow-md group relative overflow-hidden"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative w-full h-[260px] sm:h-[300px] rounded-2xl overflow-hidden bg-white border border-[#E5E5E5]/80 mb-6 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category Pill */}
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-wider font-bold text-[#09090B] bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#E5E5E5] shadow-sm">
                    {product.category}
                  </span>

                  {/* Estimated Price Pill */}
                  <span className="absolute top-4 right-4 text-xs font-extrabold text-[#09090B] bg-[#F97316]/10 text-[#F97316] backdrop-blur-md px-3 py-1 rounded-full border border-[#F97316]/20">
                    Est. {product.estimatedPrice}
                  </span>
                </div>

                {/* Product Name & Tagline */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#09090B] font-display mb-2 group-hover:text-[#F97316] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed mb-6">
                  {product.tagline}
                </p>

                {/* Features List */}
                <div className="mb-6 space-y-2.5 bg-white p-4 rounded-xl border border-[#E5E5E5]">
                  <span className="text-[11px] uppercase font-bold text-[#525252] tracking-wider block mb-1">
                    Key Features
                  </span>
                  {product.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-[#09090B]">
                      <div className="w-4 h-4 rounded-full bg-[#F97316]/10 text-[#F97316] flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Colorway Swatches */}
                <div className="flex items-center justify-between mb-8 px-1">
                  <span className="text-xs font-semibold text-[#525252]">Available Colorways</span>
                  <div className="flex items-center gap-2">
                    {product.colorways.map((color, cIdx) => (
                      <div
                        key={cIdx}
                        title={color.name}
                        className="w-4 h-4 rounded-full border border-black/20 shadow-xs cursor-pointer hover:scale-125 transition-transform"
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E5E5E5]">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="w-full sm:w-auto flex-1 px-4 py-2.5 rounded-xl border border-[#E5E5E5] bg-white text-[#09090B] hover:border-[#09090B] transition-colors text-xs font-bold flex items-center justify-center gap-2"
                >
                  <Info className="w-3.5 h-3.5 text-[#F97316]" />
                  <span>Inspect Full Specs</span>
                </button>

                <button
                  onClick={() => toggleNotify(product.id)}
                  className={`w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    notifiedItems[product.id]
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#09090B] text-white hover:bg-[#F97316]'
                  }`}
                >
                  <Bell className="w-3.5 h-3.5" />
                  <span>{notifiedItems[product.id] ? 'Notification Saved' : 'Notify Me'}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Collection Bundle CTA */}
        <div className="mt-12 bg-[#09090B] text-white rounded-3xl p-8 sm:p-10 border border-[#27272A] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <MangobeeLogo theme="dark" height={26} />
              <span className="text-xs font-mono uppercase tracking-widest text-[#F97316] border-l border-zinc-700 pl-3">
                LAUNCH DAY BUNDLE
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              Reserve The Full Workspace Ecosystem
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-xl">
              Pre-launch VIP members unlock 20% off individual items plus an extra 10% on the Complete Mangobee Desk Bundle with free worldwide express delivery.
            </p>
          </div>
          <button
            onClick={onOpenVipModal}
            className="px-6 py-3.5 rounded-xl bg-[#F97316] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-orange-500/30 whitespace-nowrap flex items-center gap-2"
          >
            <span>Lock In 20% Bundle Pass</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
