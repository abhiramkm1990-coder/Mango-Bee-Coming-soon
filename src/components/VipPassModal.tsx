import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Sparkles, CheckCircle2, Gift, Lock, Shield, ArrowRight } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface VipPassModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubscribe: (email: string) => Promise<any>;
  subscriberCount: number;
}

export const VipPassModal: React.FC<VipPassModalProps> = ({
  isOpen,
  onClose,
  onSubscribe,
  subscriberCount,
}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    try {
      const res = await onSubscribe(email);
      if (res && res.success) {
        setResult(res);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F97316', '#09090B', '#E2E8F0'],
        });
      } else {
        setErrorMsg(res?.error || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Server connection busy. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
      <div className="bg-white border border-[#E5E5E5] rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl">
        
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
              <Sparkles className="w-4 h-4 text-[#F97316]" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F97316] font-mono">
                EXCLUSIVE PRE-LAUNCH ACCESS
              </span>
            </div>
            <span className="text-xs font-bold text-[#09090B] font-display">Mangobee™ Workspace Studio</span>
          </div>
        </div>

        <h3 className="text-2xl font-extrabold text-[#09090B] font-display mb-2">
          Claim 20% Off Launch Pass
        </h3>

        <p className="text-xs text-[#525252] mb-6 leading-relaxed">
          Get early VIP access for creators & professionals across India. Early registrants receive an exclusive Mangobee Cable Armor gift with their first bundle purchase.
        </p>

        {result ? (
          <div className="bg-[#FAFAFA] border border-[#F97316]/40 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-[#F97316] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg font-bold text-[#09090B]">VIP Launch Pass Activated!</h4>
            
            <div className="bg-white p-3 rounded-xl border border-[#E5E5E5]">
              <span className="text-[10px] uppercase font-bold text-[#525252] block">Your Pass Code</span>
              <span className="font-mono text-base font-extrabold text-[#09090B]">{result.vipCode}</span>
            </div>

            {result.receivesCableArmor && (
              <div className="text-xs bg-[#F97316]/10 border border-[#F97316]/30 text-[#09090B] p-2.5 rounded-xl font-medium flex items-center justify-center gap-2">
                <Gift className="w-4 h-4 text-[#F97316]" />
                <span>Free Mangobee Cable Armor gift added to your profile!</span>
              </div>
            )}

            <p className="text-[11px] text-[#525252]">
              We will email you 48 hours prior to public store opening in India.
            </p>

            <button
              onClick={onClose}
              className="mt-2 w-full py-2.5 rounded-xl bg-[#09090B] text-white text-xs font-bold"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-bold text-[#09090B] block mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] text-xs text-[#09090B] focus:outline-none focus:border-[#F97316]"
              />
            </div>

            {errorMsg && (
              <p className="text-xs text-red-600 font-medium">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[#09090B] text-white hover:bg-[#F97316] transition-colors text-xs font-bold shadow-md flex items-center justify-center gap-2"
            >
              {loading ? (
                <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
              ) : (
                <>
                  <span>Get Early VIP Access & 20% Off</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <div className="pt-2 text-[11px] text-[#525252] flex items-center justify-between">
              <span>🔒 No spam. Unsubscribe anytime.</span>
              <span>⚡ Secure signup</span>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
