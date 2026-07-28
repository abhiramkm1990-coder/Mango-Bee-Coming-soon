import React, { useState } from 'react';
import { X, Building2, Send, CheckCircle2 } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface CorporateBulkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CorporateBulkModal: React.FC<CorporateBulkModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    count: '50-100',
    details: '',
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/bulk-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setSuccessMsg(data.message);
      }
    } catch (err) {
      setSuccessMsg('Bulk request received! Our corporate team will email you shortly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white border border-[#E5E5E5] rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-[#FAFAFA] border border-[#E5E5E5] text-[#09090B] hover:bg-[#E5E5E5] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3">
          <MangobeeLogo variant="icon" height={36} />
          <div>
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-[#F97316]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] font-mono">
                Corporate Volume & Custom Branding
              </span>
            </div>
            <span className="text-xs font-bold text-[#09090B] font-display">Mangobee™ Enterprise Studio</span>
          </div>
        </div>

        <h3 className="text-2xl font-extrabold text-[#09090B] font-display mb-2">
          Corporate Bulk Orders
        </h3>

        <p className="text-xs text-[#525252] mb-6 leading-relaxed">
          Outfit your team with custom-engraved Mangobee mechanical combos, laptop stands, and braided USB-C cable armor. Custom laser logo engraving available on orders of 50+ units.
        </p>

        {successMsg ? (
          <div className="bg-[#FAFAFA] border border-[#F97316]/40 rounded-2xl p-6 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-bold text-[#09090B]">Inquiry Received</h4>
            <p className="text-xs text-[#525252] leading-relaxed">{successMsg}</p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2.5 rounded-xl bg-[#09090B] text-white text-xs font-bold"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#09090B] block mb-1">Your Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Sarah Chen"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] text-xs text-[#09090B] focus:outline-none focus:border-[#F97316]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#09090B] block mb-1">Work Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] text-xs text-[#09090B] focus:outline-none focus:border-[#F97316]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-[#09090B] block mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Acme Design Labs"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] text-xs text-[#09090B] focus:outline-none focus:border-[#F97316]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#09090B] block mb-1">Quantity Tier</label>
                <select
                  value={formData.count}
                  onChange={(e) => setFormData({ ...formData, count: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] text-xs text-[#09090B] focus:outline-none focus:border-[#F97316]"
                >
                  <option value="50-100">50 - 100 Units</option>
                  <option value="100-250">100 - 250 Units</option>
                  <option value="250-500">250 - 500 Units</option>
                  <option value="500+">500+ Enterprise Units</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-[#09090B] block mb-1">Project Details / Custom Engraving Notes</label>
              <textarea
                rows={3}
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="Tell us about your team setup or custom branding requests..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] text-xs text-[#09090B] focus:outline-none focus:border-[#F97316]"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#09090B] text-white hover:bg-[#F97316] transition-colors text-xs font-bold shadow-md flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-[#F97316]" />
              <span>Submit Bulk Inquiry</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
