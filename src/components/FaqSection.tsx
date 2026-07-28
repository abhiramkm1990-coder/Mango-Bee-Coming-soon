import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS } from '../data/faq';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-b border-[#E5E5E5]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header matching H2 requirement */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F97316] mb-2 block font-mono">
            HELP & TRANSPARENCY
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#09090B] font-display mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#525252] leading-relaxed">
            Everything you need to know about the Mangobee launch, early VIP discounts, free cable gifts, and order customization.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-[#525252] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions or keywords (e.g., 20% discount, Mac, warranty)..."
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-[#E5E5E5] bg-[#FAFAFA] text-xs sm:text-sm text-[#09090B] placeholder-[#525252]/60 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center text-xs font-semibold">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'launch', label: 'Launch & VIP Pass' },
              { id: 'products', label: 'Hardware Specs' },
              { id: 'customizer', label: 'Customizer Studio' },
              { id: 'shipping', label: 'India Delivery' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full border transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#09090B] text-white border-[#09090B]'
                    : 'bg-[#FAFAFA] text-[#525252] border-[#E5E5E5] hover:border-[#09090B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 bg-[#FAFAFA] rounded-2xl border border-[#E5E5E5] text-xs text-[#525252]">
              No questions found matching your search. Try searching for "discount", "cable", or "shipping".
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#09090B] hover:text-[#F97316] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#525252] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 text-[#F97316]' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="px-5 pb-5 text-xs sm:text-sm text-[#525252] leading-relaxed border-t border-[#E5E5E5]/60 pt-3"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
