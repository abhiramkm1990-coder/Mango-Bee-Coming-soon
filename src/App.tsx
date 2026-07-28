import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/Hero';
import { CollectionSection } from './components/CollectionSection';
import { CustomizerStudio } from './components/CustomizerStudio';
import { WhyMangobee } from './components/WhyMangobee';
import { SocialProof } from './components/SocialProof';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { QuickViewModal } from './components/QuickViewModal';
import { CorporateBulkModal } from './components/CorporateBulkModal';
import { VipPassModal } from './components/VipPassModal';
import { SeoDrawer } from './components/SeoDrawer';
import { StickyMobileCta } from './components/StickyMobileCta';
import { Product } from './types';
import { X } from 'lucide-react';

export default function App() {
  const [subscriberCount, setSubscriberCount] = useState(2548);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [bulkModalOpen, setBulkModalOpen] = useState(false);
  const [seoDrawerOpen, setSeoDrawerOpen] = useState(false);
  const [genericModal, setGenericModal] = useState<{ title: string; content: string } | null>(null);

  useEffect(() => {
    // Fetch initial subscriber count from backend API
    fetch('/api/subscribers')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.count) {
          setSubscriberCount(data.count);
        }
      })
      .catch(() => {
        // Fallback to initial count
      });
  }, []);

  const handleSubscribe = async (email: string) => {
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data && data.count) {
        setSubscriberCount(data.count);
      }
      return data;
    } catch (err) {
      // Local state fallback if offline
      const newCount = subscriberCount + 1;
      setSubscriberCount(newCount);
      return {
        success: true,
        subscriberNumber: newCount,
        vipCode: `MB-VIP-${Math.floor(1000 + Math.random() * 9000)}`,
        receivesCableArmor: newCount - 2548 <= 500,
      };
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#09090B] font-sans antialiased flex flex-col selection:bg-[#F97316] selection:text-white">
      
      {/* Header Bar */}
      <Header
        onOpenVipModal={() => setVipModalOpen(true)}
        onOpenSeoDrawer={() => setSeoDrawerOpen(true)}
        subscriberCount={subscriberCount}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onSubscribe={handleSubscribe}
          subscriberCount={subscriberCount}
        />

        {/* Upcoming Collection Cards */}
        <CollectionSection
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenVipModal={() => setVipModalOpen(true)}
        />

        {/* Mangobee Customizer Studio Interactive Sandbox */}
        <CustomizerStudio
          onOpenVipModal={() => setVipModalOpen(true)}
        />

        {/* Why Mangobee Pillars */}
        <WhyMangobee />

        {/* Social Proof & Testimonials */}
        <SocialProof
          subscriberCount={subscriberCount}
        />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenBulkModal={() => setBulkModalOpen(true)}
        onOpenModal={(title, content) => setGenericModal({ title, content })}
      />

      {/* Modals & Drawers */}
      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenVipModal={() => setVipModalOpen(true)}
      />

      <CorporateBulkModal
        isOpen={bulkModalOpen}
        onClose={() => setBulkModalOpen(false)}
      />

      <VipPassModal
        isOpen={vipModalOpen}
        onClose={() => setVipModalOpen(false)}
        onSubscribe={handleSubscribe}
        subscriberCount={subscriberCount}
      />

      <SeoDrawer
        isOpen={seoDrawerOpen}
        onClose={() => setSeoDrawerOpen(false)}
      />

      {/* Sticky Mobile VIP CTA */}
      <StickyMobileCta
        onOpenVipModal={() => setVipModalOpen(true)}
        subscriberCount={subscriberCount}
      />

      {/* Generic Modal (Privacy, Terms, Contact) */}
      {genericModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white border border-[#E5E5E5] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setGenericModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#09090B] hover:bg-[#E5E5E5]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-2xl font-extrabold text-[#09090B] font-display mb-4">
              {genericModal.title}
            </h3>
            <p className="text-xs text-[#525252] leading-relaxed whitespace-pre-line font-normal">
              {genericModal.content}
            </p>
            <button
              onClick={() => setGenericModal(null)}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#09090B] text-white text-xs font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
};
