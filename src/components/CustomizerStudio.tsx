import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CustomizerState } from '../types';
import { Layers, Sliders, Palette, Check, Sparkles, Download, RotateCcw, Lock, Eye, Monitor, Lightbulb } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface CustomizerStudioProps {
  onOpenVipModal: () => void;
}

export const CustomizerStudio: React.FC<CustomizerStudioProps> = ({ onOpenVipModal }) => {
  const [setup, setSetup] = useState<CustomizerState>({
    matStyle: 'dark-wool',
    keyboardColor: 'mango-accent',
    laptopStandFinish: 'space-gray',
    cableColor: 'mango-braided',
    showPlant: true,
    showMagsafeDock: true,
    ambientLight: 'mango-glow',
  });

  const [savedSetupMessage, setSavedSetupMessage] = useState(false);

  const resetCustomizer = () => {
    setSetup({
      matStyle: 'dark-wool',
      keyboardColor: 'mango-accent',
      laptopStandFinish: 'space-gray',
      cableColor: 'mango-braided',
      showPlant: true,
      showMagsafeDock: true,
      ambientLight: 'mango-glow',
    });
  };

  const handleSaveSetup = () => {
    setSavedSetupMessage(true);
    setTimeout(() => setSavedSetupMessage(false), 3000);
  };

  // Mat styles mapping
  const matBgClasses = {
    'dark-wool': 'bg-zinc-900 border-zinc-800',
    'cream-felt': 'bg-[#EAE8E1] border-[#D6D3C9]',
    'slate-grain': 'bg-[#3F3F46] border-[#52525B]',
    'mango-leather': 'bg-[#C2410C] border-[#9A3412]',
  };

  // Ambient lighting overlay classes
  const ambientGlowClasses = {
    warm: 'bg-amber-500/10 shadow-[0_0_80px_rgba(245,158,11,0.25)]',
    'mango-glow': 'bg-[#F97316]/15 shadow-[0_0_90px_rgba(249,115,22,0.3)]',
    daylight: 'bg-blue-400/10 shadow-[0_0_80px_rgba(96,165,250,0.2)]',
    off: 'bg-transparent',
  };

  return (
    <section id="customizer" className="py-20 md:py-28 bg-[#FAFAFA] border-b border-[#E5E5E5]/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title & Badge strictly matching prompt requirements */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          
          {/* Badge strictly matching prompt */}
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#09090B] text-white border border-[#27272A] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-5 shadow-xs">
            <Lock className="w-3.5 h-3.5 text-[#F97316]" />
            INTERACTIVE STUDIO UNLOCKING AT LAUNCH
          </span>

          {/* Title strictly matching prompt H2 */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#09090B] font-display mb-4 leading-tight">
            Mangobee Customizer Studio
          </h2>

          <p className="text-sm sm:text-base text-[#525252] max-w-2xl mx-auto leading-relaxed font-normal">
            Preview your bespoke desk environment in real-time. Mix keycap colorways, cable sleeves, aluminum stand finishes, and ambient workspace accessories.
          </p>
        </div>

        {/* Customizer Workspace Interactive Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Top: Interactive Live Preview Canvas */}
          <div className="lg:col-span-8 bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 shadow-sm relative">
            
            {/* Canvas Header Bar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#E5E5E5]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                <span className="text-xs font-mono font-semibold text-[#525252] ml-2">
                  studio.mangobee.com / workspace-v1.0
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={resetCustomizer}
                  className="p-2 rounded-lg border border-[#E5E5E5] text-[#525252] hover:text-[#09090B] hover:bg-[#FAFAFA] transition-colors text-xs font-medium flex items-center gap-1"
                  title="Reset to default setup"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
                <button
                  onClick={handleSaveSetup}
                  className="px-3 py-1.5 rounded-lg bg-[#09090B] text-white hover:bg-[#F97316] transition-colors text-xs font-bold flex items-center gap-1.5 shadow-xs"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Save Setup</span>
                </button>
              </div>
            </div>

            {savedSetupMessage && (
              <div className="mb-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs px-4 py-2.5 rounded-xl font-medium flex items-center gap-2 animate-fadeIn">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Custom desk setup configuration saved! Included with your VIP pre-launch profile.</span>
              </div>
            )}

            {/* Virtual Desk Rendering Box */}
            <div className="relative w-full h-[360px] sm:h-[460px] rounded-2xl overflow-hidden bg-[#18181B] flex items-center justify-center p-6 border border-[#27272A] shadow-inner">
              
              {/* Ambient Glow Backlight Overlay */}
              <div className={`absolute inset-0 transition-all duration-700 pointer-events-none ${ambientGlowClasses[setup.ambientLight]}`} />

              {/* Desk Mat Base */}
              <div
                className={`w-[90%] h-[82%] rounded-2xl border-2 transition-all duration-500 relative p-6 flex flex-col justify-between shadow-2xl ${matBgClasses[setup.matStyle]}`}
              >
                {/* Mat Brand Embossing */}
                <div className="absolute top-3 right-4 flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                  <MangobeeLogo theme="dark" height={14} />
                  <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase font-bold select-none border-l border-white/20 pl-2">
                    900x400MM
                  </span>
                </div>

                {/* Top Desk Row: Laptop Stand & Plant */}
                <div className="flex justify-between items-start w-full">
                  
                  {/* Plant Accessory */}
                  {setup.showPlant ? (
                    <div className="flex flex-col items-center group">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-950/80 border border-emerald-600/40 flex items-center justify-center text-xl shadow-md transition-transform group-hover:scale-110">
                        🪴
                      </div>
                      <span className="text-[9px] font-mono text-white/40 mt-1">Bonsai</span>
                    </div>
                  ) : <div />}

                  {/* Laptop Stand & Laptop */}
                  <div className="flex flex-col items-center">
                    <div className="relative w-40 sm:w-56 h-20 sm:h-28 rounded-xl bg-zinc-800/90 border border-zinc-700 flex items-center justify-center shadow-lg transition-all">
                      <div className="w-[88%] h-[85%] rounded-lg bg-zinc-900 border border-zinc-600/80 flex flex-col items-center justify-center p-2 text-center">
                        <Monitor className="w-5 h-5 text-white/80 mb-1" />
                        <span className="text-[9px] font-mono text-zinc-400">16" Studio Display</span>
                      </div>
                      
                      {/* Stand Base Finish Indicator */}
                      <div className={`absolute -bottom-2 w-28 sm:w-40 h-2 rounded-full border ${
                        setup.laptopStandFinish === 'space-gray' ? 'bg-zinc-600 border-zinc-500' :
                        setup.laptopStandFinish === 'matte-black' ? 'bg-zinc-950 border-zinc-800' : 'bg-slate-300 border-slate-200'
                      }`} />
                    </div>
                  </div>

                  {/* MagSafe Charging Dock Accessory */}
                  {setup.showMagsafeDock ? (
                    <div className="flex flex-col items-center group">
                      <div className="w-10 h-12 sm:w-12 sm:h-14 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center shadow-md relative">
                        <div className="w-6 h-6 rounded-full border-2 border-[#F97316] flex items-center justify-center text-[10px] font-bold text-white">
                          ⚡
                        </div>
                      </div>
                      <span className="text-[9px] font-mono text-white/40 mt-1">MagSafe</span>
                    </div>
                  ) : <div />}
                </div>

                {/* Center / Cable Route */}
                <div className="w-full flex justify-center items-center py-2">
                  <div className={`h-1.5 rounded-full transition-all duration-300 ${
                    setup.cableColor === 'mango-braided' ? 'w-48 bg-[#F97316] shadow-[0_0_10px_#F97316]' :
                    setup.cableColor === 'charcoal' ? 'w-48 bg-zinc-700' : 'w-48 bg-amber-100'
                  }`} />
                </div>

                {/* Bottom Row: Keyboard & Mouse */}
                <div className="flex items-center justify-center gap-6 sm:gap-10 w-full">
                  
                  {/* Keyboard Mockup */}
                  <div className="relative w-56 sm:w-80 h-16 sm:h-20 rounded-xl bg-zinc-950 border border-zinc-800 p-2 flex flex-col justify-between shadow-xl">
                    <div className="grid grid-cols-12 gap-1 w-full h-full">
                      {Array.from({ length: 36 }).map((_, kIdx) => (
                        <div
                          key={kIdx}
                          className={`rounded-[3px] border border-black/40 ${
                            kIdx === 12 && setup.keyboardColor === 'mango-accent'
                              ? 'bg-[#F97316] text-white font-bold'
                              : setup.keyboardColor === 'pure-chalk'
                              ? 'bg-slate-200'
                              : 'bg-zinc-800'
                          }`}
                        />
                      ))}
                    </div>
                    {/* Spacebar */}
                    <div className="w-full h-2 rounded bg-zinc-800 mt-1 flex justify-center items-center">
                      {setup.keyboardColor === 'mango-accent' && (
                        <div className="w-12 h-1 bg-[#F97316] rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Wireless Mouse Mockup */}
                  <div className="w-10 sm:w-14 h-16 sm:h-20 rounded-2xl bg-zinc-900 border border-zinc-700 p-1 flex flex-col items-center justify-between shadow-lg">
                    <div className="w-full h-5 border-b border-zinc-700 flex justify-center pt-1">
                      <div className="w-1.5 h-3 bg-[#F97316] rounded-full" />
                    </div>
                    <span className="text-[8px] font-mono text-zinc-500 mb-1">MX</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Live calculated setup metrics */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                <span className="text-[10px] uppercase font-bold text-[#525252] block">Aesthetic Score</span>
                <span className="text-lg font-extrabold text-[#09090B] font-mono">99.4 / 100</span>
              </div>
              <div className="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                <span className="text-[10px] uppercase font-bold text-[#525252] block">Desk Footprint</span>
                <span className="text-lg font-extrabold text-[#09090B] font-mono">900 x 400 mm</span>
              </div>
              <div className="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                <span className="text-[10px] uppercase font-bold text-[#525252] block">Primary Finish</span>
                <span className="text-sm font-bold text-[#F97316] uppercase mt-1 block">Anodized CNC</span>
              </div>
              <div className="bg-[#FAFAFA] p-3 rounded-xl border border-[#E5E5E5]">
                <span className="text-[10px] uppercase font-bold text-[#525252] block">Cable Power</span>
                <span className="text-lg font-extrabold text-[#09090B] font-mono">240W USB4</span>
              </div>
            </div>

          </div>

          {/* Right / Bottom: Controls Sidebar */}
          <div className="lg:col-span-4 bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-[#09090B] font-display flex items-center gap-2 border-b border-[#E5E5E5] pb-3">
              <Sliders className="w-5 h-5 text-[#F97316]" />
              Studio Controls
            </h3>

            {/* 1. Desk Mat Selection */}
            <div>
              <label className="text-xs font-bold text-[#09090B] uppercase tracking-wider block mb-2">
                Desk Mat Texture
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'dark-wool', label: 'Dark Wool' },
                  { id: 'cream-felt', label: 'Cream Felt' },
                  { id: 'slate-grain', label: 'Slate Grain' },
                  { id: 'mango-leather', label: 'Mango Leather' },
                ].map((mat) => (
                  <button
                    key={mat.id}
                    onClick={() => setSetup({ ...setup, matStyle: mat.id as any })}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border text-left transition-all ${
                      setup.matStyle === mat.id
                        ? 'border-[#F97316] bg-[#F97316]/10 text-[#09090B]'
                        : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#525252] hover:border-[#09090B]'
                    }`}
                  >
                    {mat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Keyboard Colorway */}
            <div>
              <label className="text-xs font-bold text-[#09090B] uppercase tracking-wider block mb-2">
                Keyboard Accent
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'mango-accent', label: 'Mango Accent' },
                  { id: 'stealth-dark', label: 'Stealth' },
                  { id: 'pure-chalk', label: 'Pure Chalk' },
                ].map((kb) => (
                  <button
                    key={kb.id}
                    onClick={() => setSetup({ ...setup, keyboardColor: kb.id as any })}
                    className={`px-2.5 py-2 rounded-xl text-xs font-semibold border text-center transition-all ${
                      setup.keyboardColor === kb.id
                        ? 'border-[#F97316] bg-[#F97316]/10 text-[#09090B]'
                        : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#525252] hover:border-[#09090B]'
                    }`}
                  >
                    {kb.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Stand Finish */}
            <div>
              <label className="text-xs font-bold text-[#09090B] uppercase tracking-wider block mb-2">
                Aluminum Stand Finish
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'space-gray', label: 'Space Gray' },
                  { id: 'matte-black', label: 'Matte Black' },
                  { id: 'silver', label: 'Silver' },
                ].map((st) => (
                  <button
                    key={st.id}
                    onClick={() => setSetup({ ...setup, laptopStandFinish: st.id as any })}
                    className={`px-2.5 py-2 rounded-xl text-xs font-semibold border text-center transition-all ${
                      setup.laptopStandFinish === st.id
                        ? 'border-[#F97316] bg-[#F97316]/10 text-[#09090B]'
                        : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#525252] hover:border-[#09090B]'
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Cable Armor Sleeve */}
            <div>
              <label className="text-xs font-bold text-[#09090B] uppercase tracking-wider block mb-2">
                240W Cable Sleeve
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'mango-braided', label: 'Mango Braided' },
                  { id: 'charcoal', label: 'Charcoal Mesh' },
                  { id: 'sand-knit', label: 'Sand Knit' },
                ].map((cb) => (
                  <button
                    key={cb.id}
                    onClick={() => setSetup({ ...setup, cableColor: cb.id as any })}
                    className={`px-2.5 py-2 rounded-xl text-xs font-semibold border text-center transition-all ${
                      setup.cableColor === cb.id
                        ? 'border-[#F97316] bg-[#F97316]/10 text-[#09090B]'
                        : 'border-[#E5E5E5] bg-[#FAFAFA] text-[#525252] hover:border-[#09090B]'
                    }`}
                  >
                    {cb.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Toggles for Accessories & Lighting */}
            <div className="pt-2 border-t border-[#E5E5E5] space-y-3">
              <label className="text-xs font-bold text-[#09090B] uppercase tracking-wider block">
                Workspace Accessories
              </label>

              <div className="flex items-center justify-between text-xs font-medium text-[#09090B]">
                <span>Bonsai Plant</span>
                <input
                  type="checkbox"
                  checked={setup.showPlant}
                  onChange={(e) => setSetup({ ...setup, showPlant: e.target.checked })}
                  className="w-4 h-4 accent-[#F97316] rounded cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between text-xs font-medium text-[#09090B]">
                <span>MagSafe Charging Dock</span>
                <input
                  type="checkbox"
                  checked={setup.showMagsafeDock}
                  onChange={(e) => setSetup({ ...setup, showMagsafeDock: e.target.checked })}
                  className="w-4 h-4 accent-[#F97316] rounded cursor-pointer"
                />
              </div>

              <div className="pt-2">
                <label className="text-[11px] font-semibold text-[#525252] block mb-1">
                  Ambient Glow Mood
                </label>
                <select
                  value={setup.ambientLight}
                  onChange={(e) => setSetup({ ...setup, ambientLight: e.target.value as any })}
                  className="w-full px-3 py-2 rounded-xl border border-[#E5E5E5] bg-[#FAFAFA] text-xs font-medium text-[#09090B] focus:outline-none focus:border-[#F97316]"
                >
                  <option value="mango-glow">Mango Orange Accent Glow</option>
                  <option value="warm">Warm Amber Evening</option>
                  <option value="daylight">Daylight Studio 6500K</option>
                  <option value="off">Off (Stealth)</option>
                </select>
              </div>
            </div>

            {/* Save VIP customizer state CTA */}
            <div className="pt-4 border-t border-[#E5E5E5]">
              <button
                onClick={onOpenVipModal}
                className="w-full py-3 rounded-xl bg-[#09090B] text-white hover:bg-[#F97316] transition-colors text-xs font-bold shadow-md flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-[#F97316]" />
                <span>Pre-Order This Exact Custom Combo</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
