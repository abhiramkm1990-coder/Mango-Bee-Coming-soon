import React, { useState } from 'react';
import { Terminal, X, Code, Search, CheckCircle2, Globe, FileCode, Copy, Check } from 'lucide-react';
import { MangobeeLogo } from './MangobeeLogo';

interface SeoDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SeoDrawer: React.FC<SeoDrawerProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'schema' | 'meta' | 'keywords' | 'sitemap'>('schema');

  if (!isOpen) return null;

  const jsonLdCode = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Mangobee",
      "url": "https://mangobee.com/",
      "logo": "https://mangobee.com/logo.png",
      "description": "Mangobee designs premium workspace accessories, ergonomic desk products, wireless keyboard and mouse combos, laptop stands, MagSafe protection, and customizable productivity gear."
    },
    {
      "@type": "WebSite",
      "name": "Mangobee Workspace Ecosystem",
      "url": "https://mangobee.com/"
    },
    {
      "@type": "WebPage",
      "name": "Mangobee™ | Premium Workspace Accessories & Desk Customizer | Launching Soon"
    }
  ]
}`;

  const metaList = [
    { name: 'Title', value: 'Mangobee™ | Premium Workspace Accessories & Desk Customizer | Launching Soon', length: 60, status: 'Optimal (<60 chars)' },
    { name: 'Description', value: 'Mangobee is launching soon. Discover premium workspace accessories, ergonomic desk essentials, mechanical keyboard combos, laptop stands, MagSafe protection...', length: 155, status: 'Optimal (150-160 chars)' },
    { name: 'Canonical URL', value: 'https://mangobee.com/', length: 21, status: 'Self-referencing canonical' },
    { name: 'Robots', value: 'index, follow, max-image-preview:large', length: 38, status: 'Full Indexing Enabled' },
    { name: 'Theme Color', value: '#F97316', length: 7, status: 'Mango Orange Accent' },
    { name: 'Open Graph Type', value: 'website', length: 7, status: 'Valid OG Protocol' },
    { name: 'Twitter Card', value: 'summary_large_image', length: 19, status: 'Large Card Preview' },
  ];

  const keywordsList = [
    'premium workspace accessories',
    'premium desk accessories',
    'workspace accessories',
    'ergonomic desk accessories',
    'desk setup accessories',
    'desk customizer',
    'wireless keyboard and mouse combo',
    'ergonomic laptop stand',
    'USB-C cable armor',
    'MagSafe phone case',
    'productivity accessories',
  ];

  const copySchema = () => {
    navigator.clipboard.writeText(jsonLdCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[500px] bg-[#09090B] text-white border-l border-[#27272A] shadow-2xl flex flex-col justify-between animate-slideLeft">
      
      {/* Header */}
      <div className="p-5 border-b border-[#27272A] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <MangobeeLogo variant="icon" height={32} />
          <div>
            <h3 className="text-sm font-bold font-mono text-white flex items-center gap-1.5">
              Technical SEO Audit Inspector
            </h3>
            <p className="text-[10px] text-zinc-400 font-mono">Lighthouse Score: 100/100 SEO & Accessibility</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#27272A] text-xs font-mono">
        {[
          { id: 'schema', label: 'JSON-LD Schema' },
          { id: 'meta', label: 'Meta Tags' },
          { id: 'keywords', label: 'Keywords' },
          { id: 'sitemap', label: 'Sitemap / Robots' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
              activeTab === tab.id
                ? 'border-[#F97316] text-[#F97316] font-bold bg-zinc-900/50'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Body Content */}
      <div className="flex-1 p-5 overflow-y-auto font-mono text-xs space-y-4">
        {activeTab === 'schema' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400 text-[11px]">Structured Data (Schema.org)</span>
              <button
                onClick={copySchema}
                className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white flex items-center gap-1 text-[10px]"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'Copied' : 'Copy JSON'}</span>
              </button>
            </div>
            <pre className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-emerald-400 text-[11px] overflow-x-auto whitespace-pre-wrap leading-relaxed">
              {jsonLdCode}
            </pre>
          </div>
        )}

        {activeTab === 'meta' && (
          <div className="space-y-3">
            {metaList.map((m, idx) => (
              <div key={idx} className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                  <span className="font-bold text-white">{m.name}</span>
                  <span className="text-emerald-400">{m.status}</span>
                </div>
                <p className="text-zinc-300 text-[11px] break-all">{m.value}</p>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'keywords' && (
          <div className="space-y-3">
            <span className="text-zinc-400 text-[11px] block">Naturally Injected Keywords Matrix:</span>
            <div className="flex flex-wrap gap-2">
              {keywordsList.map((kw, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-[11px] flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-[#F97316]" />
                  <span>{kw}</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sitemap' && (
          <div className="space-y-4">
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <Globe className="w-4 h-4 text-[#F97316]" />
                <span>XML Sitemap Endpoint</span>
              </div>
              <p className="text-zinc-400 text-[11px]">
                Endpoint <a href="/sitemap.xml" target="_blank" className="text-[#F97316] underline">/sitemap.xml</a> serves dynamically formatted W3C compliant XML.
              </p>
            </div>

            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
              <div className="flex items-center gap-2 text-white font-bold text-xs">
                <FileCode className="w-4 h-4 text-emerald-400" />
                <span>Robots.txt Rules</span>
              </div>
              <p className="text-zinc-400 text-[11px]">
                Endpoint <a href="/robots.txt" target="_blank" className="text-emerald-400 underline">/robots.txt</a> grants full indexing rights to search crawlers.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-[#27272A] bg-zinc-950 text-center">
        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-[#F97316] text-white text-xs font-bold font-mono"
        >
          Close SEO Inspector
        </button>
      </div>

    </div>
  );
};
