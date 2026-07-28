import React from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, RefreshCw, Leaf, Sparkles, Award } from 'lucide-react';

export const WhyMangobee: React.FC = () => {
  const pillars = [
    {
      icon: Cpu,
      title: 'CNC Aerospace Precision',
      description: 'Machined from solid blocks of 6061 anodized aluminum with micron-level tolerances for zero structural flex and timeless durability.',
    },
    {
      icon: ShieldCheck,
      title: 'Ergonomically Certified',
      description: 'Tested alongside posture specialists to deliver exact 15° sightline elevation, reducing cervical spine strain by up to 34%.',
    },
    {
      icon: RefreshCw,
      title: 'Modular Ecosystem Interconnect',
      description: 'Every Mangobee accessory integrates magnetically and physically with custom cable routing, MagSafe mounts, and desk mat channels.',
    },
    {
      icon: Leaf,
      title: '100% Recyclable Eco Build',
      description: 'Zero single-use plastics in packaging, recycled aluminum housing, and non-toxic food-grade silicone contact points.',
    },
  ];

  return (
    <section id="why-mangobee" className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header matching H2 requirement */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-2 block font-mono">
            ENGINEERING PHILOSOPHY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#09090B] font-display mb-4">
            Why Mangobee
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            We build workspace tools for people who care about details, ergonomics, and visual harmony. Designed without compromise in materials or aesthetics.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-3xl p-6 hover:border-[#F97316]/50 transition-all duration-300 shadow-xs group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#09090B] text-white flex items-center justify-center mb-6 group-hover:bg-[#F97316] transition-colors shadow-sm">
                  <IconComponent className="w-6 h-6 text-[#F97316] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-[#09090B] font-display mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Craft Highlight Banner */}
        <div className="mt-16 bg-[#FAFAFA] border border-[#E5E5E5] rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#F97316] font-bold flex items-center justify-center lg:justify-start gap-1.5">
              <Award className="w-4 h-4 text-[#F97316]" />
              2-YEAR FULL REPLACEMENT WARRANTY
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-[#09090B]">
              Built to withstand a lifetime of intense creation.
            </h3>
            <p className="text-xs sm:text-sm text-[#525252] max-w-2xl leading-relaxed">
              Every item is stress-tested through 30,000+ bend cycles, high-temperature thermal dissipation runs, and military-grade drop tests before leaving our assembly studio.
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0 border-t lg:border-t-0 lg:border-l border-[#E5E5E5] pt-6 lg:pt-0 lg:pl-8 text-center">
            <div>
              <div className="text-3xl font-extrabold text-[#09090B] font-mono">30K+</div>
              <div className="text-[11px] font-semibold text-[#525252] uppercase">Flex Cycles</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#09090B] font-mono">15°</div>
              <div className="text-[11px] font-semibold text-[#525252] uppercase">Ergo Sightline</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-[#09090B] font-mono">240W</div>
              <div className="text-[11px] font-semibold text-[#525252] uppercase">USB4 Power</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
