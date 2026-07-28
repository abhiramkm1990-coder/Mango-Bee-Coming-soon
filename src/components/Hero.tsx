import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, Gift, Lock, Clock, Calendar, CheckCircle2, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';
import heroWorkspacePath from '../assets/images/hero_workspace_1784844898010.jpg';

interface HeroProps {
  onSubscribe: (email: string) => Promise<any>;
  subscriberCount: number;
}

export const HeroSection: React.FC<HeroProps> = ({ onSubscribe, subscriberCount }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [subscriptionSuccess, setSubscriptionSuccess] = useState<any | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Countdown timer target (Targeting 60 days out for pre-launch anticipation)
  const [timeLeft, setTimeLeft] = useState({
    days: 42,
    hours: 18,
    minutes: 34,
    seconds: 12,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

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
        setSubscriptionSuccess(res);
      } else {
        setErrorMsg(res?.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setErrorMsg('Subscription server temporarily busy. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  const downloadIcsReminder = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Mangobee Workspace Studio//NONSGML v1.0//EN
BEGIN:VEVENT
SUMMARY:Mangobee™ Workspace Studio Store Opening
DESCRIPTION:Mangobee Official VIP Store Opening with 20% early access discount and customizer launch.
LOCATION:https://mangobee.com
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8;' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'mangobee-launch-reminder.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-[#E5E5E5]/60 bg-[#FAFAFA]">
      {/* Background Soft Orange Mesh Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#F97316]/15 via-[#F97316]/5 to-transparent blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-subtle" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#09090B] text-white border border-[#27272A] shadow-md mb-8 group"
          >
            <MangobeeLogo variant="icon" height={18} />
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#FAFAFA] flex items-center gap-1.5">
              <span>MANGOBEE WORKSPACE STUDIO</span>
              <span>•</span>
              <span>LAUNCHING FIRST IN INDIA 🇮🇳</span>
            </span>
          </motion.div>

          {/* Main Headline - Single H1 with Editorial Aesthetic serif italic pairing */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl md:text-8xl font-serif italic leading-[1.05] tracking-tight text-[#09090B] mb-6"
          >
            Elevate Your <br className="hidden sm:inline" />
            <span className="not-italic font-sans font-extrabold text-[#09090B]">Workspace</span> <span className="text-[#F97316]">.</span>
          </motion.h1>

          {/* Subtitle strictly matching requested copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-[#525252] font-normal leading-relaxed max-w-3xl mb-10"
          >
            Precision-engineered desk accessories, custom mechanical combos, ergonomic workspace essentials, and heavy-duty device protection—crafted for modern creators, professionals, and productivity enthusiasts.
          </motion.p>

          {/* Animated Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="w-full max-w-xl mb-12 p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5E5] shadow-sm flex flex-col items-center"
          >
            <div className="flex items-center justify-between w-full mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-[#525252]">
              <span className="flex items-center gap-1.5 text-[#09090B]">
                <Clock className="w-4 h-4 text-[#F97316]" />
                Official Launch Countdown
              </span>
              <button
                onClick={downloadIcsReminder}
                className="text-[11px] text-[#F97316] hover:underline flex items-center gap-1 font-medium"
                title="Add to Google / Apple Calendar"
              >
                <Calendar className="w-3.5 h-3.5" />
                Add to Calendar
              </button>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 w-full text-center">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl p-2.5 sm:p-3">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#09090B] font-mono tracking-tight">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs font-semibold text-[#525252] uppercase mt-0.5">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* VIP Pre-Launch Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-xl bg-white border border-[#E5E5E5] rounded-2xl p-6 sm:p-8 shadow-md relative orange-border-glow text-left"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-[#09090B] flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#F97316]" />
                Join VIP Pre-Launch List
              </h2>
              <span className="text-xs font-semibold text-[#F97316] bg-[#F97316]/10 px-2.5 py-1 rounded-full border border-[#F97316]/20">
                20% OFF Pass
              </span>
            </div>

            {subscriptionSuccess ? (
              <div className="bg-[#FAFAFA] border border-[#F97316]/40 rounded-xl p-5 text-center space-y-3">
                <div className="w-12 h-12 bg-[#F97316] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-[#09090B]">You're on the VIP Launch Pass List!</h3>
                <p className="text-xs text-[#525252]">
                  Your VIP Pass Code: <span className="font-mono font-bold text-[#09090B] bg-white px-2 py-1 rounded border border-[#E5E5E5]">{subscriptionSuccess.vipCode}</span>
                </p>
                {subscriptionSuccess.receivesCableArmor && (
                  <div className="text-xs bg-[#F97316]/10 border border-[#F97316]/30 text-[#09090B] p-2.5 rounded-lg font-medium flex items-center justify-center gap-2">
                    <Gift className="w-4 h-4 text-[#F97316]" />
                    <span><strong>Bonus Claimed!</strong> Free Mangobee Cable Armor reserved for your first order.</span>
                  </div>
                )}
                <p className="text-[11px] text-[#525252]">
                  Subscriber #{subscriptionSuccess.subscriberNumber}. We will email you 48 hours before public launch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address..."
                    required
                    className="flex-1 px-4 py-3 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] text-sm text-[#09090B] placeholder-[#525252]/60 focus:outline-none focus:border-[#F97316] focus:bg-white transition-all"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-xl bg-[#09090B] text-white hover:bg-[#F97316] transition-all duration-200 text-sm font-bold shadow-md hover:shadow-orange-500/20 whitespace-nowrap flex items-center justify-center gap-2 group active:scale-95 disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <span>Get Early VIP Access & 20% Off</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-600 font-medium px-1">{errorMsg}</p>
                )}

                {/* Micro-copy strictly matching prompt */}
                <div className="pt-2 border-t border-[#E5E5E5]/60 space-y-2">
                  <p className="text-xs font-semibold text-[#09090B] flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[#F97316]" />
                    Get early VIP access for creators & professionals across India.
                  </p>
                  <p className="text-xs text-[#525252] leading-relaxed bg-[#FAFAFA] p-2.5 rounded-lg border border-[#E5E5E5]/80">
                    <span className="font-semibold text-[#09090B]">Limited Launch Gift:</span> Early VIP registrants receive an exclusive <strong className="text-[#F97316]">Mangobee Cable Armor</strong> with their first bundle order.
                  </p>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 text-[11px] font-medium text-[#525252]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>No spam</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                    <span>Early access</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5 text-[#F97316] shrink-0" />
                    <span>Exclusive pricing</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                    <span>Launch gifts</span>
                  </div>
                </div>
              </form>
            )}
          </motion.div>

          {/* Hero Workspace Illustration Card with Glass Accent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full mt-14 relative rounded-3xl overflow-hidden border border-[#E5E5E5] shadow-xl bg-white group"
          >
            <img
              src={heroWorkspacePath}
              alt="Mangobee premium minimalist desk setup"
              referrerPolicy="no-referrer"
              className="w-full h-[320px] sm:h-[460px] md:h-[540px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
            />
            
            {/* Overlay Gradient & Floating Spec Chips */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/80 via-transparent to-transparent flex items-end p-6 sm:p-10 justify-between">
              <div className="text-left text-white max-w-lg">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#F97316] bg-black/60 px-2.5 py-1 rounded-full backdrop-blur-md border border-[#F97316]/30 mb-2 inline-block">
                  Signature Desk Ecosystem
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display">Crafted For Peak Productivity</h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-1 line-clamp-2">
                  Featuring 6061 Anodized Aluminum, silent scissor switches, and custom 240W braided cable armor.
                </p>
              </div>

              <div className="hidden sm:flex flex-col gap-2 items-end">
                <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  ⚡ 240W Fast Charge Cable
                </span>
                <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  ⌨️ Silent Scissor Switches
                </span>
                <span className="text-xs font-semibold text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10">
                  💻 15° Ergonomic Stand
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
