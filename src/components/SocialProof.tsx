import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Globe, Layers, Laptop, Star } from 'lucide-react';

interface SocialProofProps {
  subscriberCount?: number;
}

export const SocialProof: React.FC<SocialProofProps> = () => {
  const stats = [
    {
      icon: Sparkles,
      value: 'India Launch',
      label: 'Exclusive Pre-Launch Access',
    },
    {
      icon: Globe,
      value: '🇮🇳 Pan-India',
      label: 'Launching First Across India',
    },
    {
      icon: Layers,
      value: '1 Unified System',
      label: 'Premium Workspace Ecosystem',
    },
    {
      icon: Laptop,
      value: '100% CNC Precision',
      label: 'Built For Creators & Developers',
    },
  ];

  const testimonials = [
    {
      quote: "Mangobee's attention to CNC aluminum finish and keyboard silent scissor actuation is on par with Apple and Logitech MX. The Customizer Studio makes bundle building effortless.",
      author: 'Alex Rivera',
      role: 'Desk Setup Curator & Tech Youtuber',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: "The 240W cable armor with the Mango Orange sleeve is an absolute showstopper on my dark wool desk mat. Finally, a workspace brand that gets minimalism right.",
      author: 'Marcus Vance',
      role: 'Principal Industrial Designer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: "As someone who spends 10+ hours daily coding, the 15° aluminum laptop elevation eliminated my chronic neck strain within three days. Must-have gear.",
      author: 'Elena Rostova',
      role: 'Senior Software Architect',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAFA] border-b border-[#E5E5E5]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 4 Core Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-[#E5E5E5] rounded-2xl p-6 text-center shadow-xs hover:border-[#F97316]/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 text-[#F97316] flex items-center justify-center mx-auto mb-3">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div className="text-xl sm:text-2xl font-extrabold text-[#09090B] font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-[#525252] mt-1 font-display">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testimonial Quotes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center gap-1 text-[#F97316] mb-4">
                  {[...Array(5)].map((_, sIdx) => (
                    <Star key={sIdx} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#09090B] italic leading-relaxed mb-6 font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E5]/60">
                <img
                  src={t.avatar}
                  alt={t.author}
                  referrerPolicy="no-referrer"
                  className="w-10 h-10 rounded-full object-cover border border-[#E5E5E5]"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#09090B] font-display">{t.author}</h4>
                  <p className="text-[11px] text-[#525252]">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
