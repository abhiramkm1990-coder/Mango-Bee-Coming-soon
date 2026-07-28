export interface Product {
  id: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  imageAlt: string;
  estimatedPrice: string;
  features: string[];
  specs: { [key: string]: string };
  colorways: { name: string; hex: string }[];
  isFeatured?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'launch' | 'products' | 'shipping' | 'customizer';
}

export interface SubscriberResponse {
  success: boolean;
  alreadySubscribed?: boolean;
  subscriberNumber?: number;
  vipCode?: string;
  receivesCableArmor?: boolean;
  count?: number;
  message?: string;
  error?: string;
}

export interface CustomizerState {
  matStyle: 'dark-wool' | 'cream-felt' | 'slate-grain' | 'mango-leather';
  keyboardColor: 'stealth-dark' | 'mango-accent' | 'pure-chalk';
  laptopStandFinish: 'space-gray' | 'matte-black' | 'silver';
  cableColor: 'mango-braided' | 'charcoal' | 'sand-knit';
  showPlant: boolean;
  showMagsafeDock: boolean;
  ambientLight: 'warm' | 'mango-glow' | 'daylight' | 'off';
}
