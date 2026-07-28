import { Product } from '../types';

import keyboardImg from '../assets/images/keyboard_mouse_combo_1784844906724.jpg';
import laptopStandImg from '../assets/images/aluminum_laptop_stand_1784844914605.jpg';
import cableArmorImg from '../assets/images/usbc_cable_armor_1784844922820.jpg';
import magSafeCaseImg from '../assets/images/magsafe_armor_case_1784844931417.jpg';

export const PRODUCTS: Product[] = [
  {
    id: 'keyboard-mouse-combo',
    name: 'Keyboard & Wireless Mouse Combo',
    category: 'Input Devices',
    tagline: 'Silent scissor keycaps with custom CNC metal casing and multi-device 2.4G/Bluetooth switching.',
    image: keyboardImg,
    imageAlt: 'Mangobee premium wireless keyboard and mouse combo',
    estimatedPrice: '$149',
    features: [
      'Bluetooth + 2.4GHz Dual Wireless',
      'Silent Scissor Switches',
      'Multi-device Pairing (Up to 3 Devices)',
      'Rechargeable 2000mAh Battery',
      'Custom Accent Colorways'
    ],
    specs: {
      'Connectivity': 'Bluetooth 5.3 & 2.4GHz USB Dongle',
      'Battery Life': 'Up to 120 Hours (USB-C Rechargeable)',
      'Key Switches': 'Ultra-quiet Scissor Action (1.2mm Travel)',
      'Compatibility': 'macOS, Windows, iOS, Android, Linux',
      'Weight': '680g (Precision CNC Aluminum Alloy Base)'
    },
    colorways: [
      { name: 'Mango Accent', hex: '#F97316' },
      { name: 'Stealth Slate', hex: '#18181B' },
      { name: 'Matte Cream', hex: '#E2E8F0' }
    ],
    isFeatured: true
  },
  {
    id: 'aluminum-laptop-stand',
    name: 'Ergonomic Aluminum Laptop Stand',
    category: 'Ergonomic Hardware',
    tagline: 'Precision CNC-machined workspace elevation designed for optimal neck posture and thermal flow.',
    image: laptopStandImg,
    imageAlt: 'Ergonomic anodized aluminum laptop stand',
    estimatedPrice: '$89',
    features: [
      'CNC Anodized Aluminum',
      'Heat Dissipation Air Vents',
      'Foldable Travel Profile',
      'Ergonomic 15° Elevation',
      'Anti-slip Silicone Pads'
    ],
    specs: {
      'Material': '6061 Aerospace-grade CNC Anodized Aluminum',
      'Elevation': '15 Degrees (Optimal Ergonomic Eye Line)',
      'Capacity': 'Supports Laptops from 11" to 17.3" (Up to 10kg)',
      'Dimensions': '260mm x 230mm x 75mm (Folded: 18mm)',
      'Pads': 'Non-marring Premium High-Density Silicone'
    },
    colorways: [
      { name: 'Space Gray', hex: '#4B5563' },
      { name: 'Anodized Silver', hex: '#D1D5DB' },
      { name: 'Midnight Black', hex: '#09090B' }
    ],
    isFeatured: true
  },
  {
    id: 'usbc-cable-armor',
    name: 'Reinforced USB-C Cable Armor',
    category: 'Power & Data',
    tagline: '240W Power Delivery 3.1 & 40Gbps USB4 spec wrapped in kink-proof woven Mango Orange sleeve.',
    image: cableArmorImg,
    imageAlt: 'Braided USB-C cable armor',
    estimatedPrice: '$39',
    features: [
      '240W Fast Charging (E-Marker Chip)',
      'USB4 Compatible (40Gbps Data Transfer)',
      'Heavy-duty Braided Sleeve',
      'Signature Mango Orange Finish',
      'Kink Resistant Zinc Housing'
    ],
    specs: {
      'Power Delivery': 'Up to 240W (48V/5A) PD 3.1 Extended Power',
      'Transfer Speed': '40Gbps Thunderbolt 4 / USB4 Specs',
      'Display Support': 'Single 8K @ 60Hz or Dual 4K Output',
      'Length': '1.8 Meters (6 Feet)',
      'Bend Lifetime': '30,000+ Flex Cycles Tested'
    },
    colorways: [
      { name: 'Mango Orange', hex: '#F97316' },
      { name: 'Graphite Mesh', hex: '#27272A' },
      { name: 'Sandstone Beige', hex: '#D4D4D8' }
    ],
    isFeatured: true
  },
  {
    id: 'magsafe-armor-case',
    name: 'MagSafe Armor Phone Case',
    category: 'Device Protection',
    tagline: 'Slim-fit military drop protection with high-gauss N52 neodymium magnetic ring alignment.',
    image: magSafeCaseImg,
    imageAlt: 'MagSafe armor phone case',
    estimatedPrice: '$49',
    features: [
      'Military-grade Drop Protection (12ft Rated)',
      'MagSafe Compatible (N52 Strong Magnets)',
      'Raised Camera & Screen Protection',
      'Air-cushion Shock Absorption',
      'Slim Ergonomic Profile'
    ],
    specs: {
      'Drop Rating': 'MIL-STD-810G 12ft (3.6m) Impact Certified',
      'Magnet Force': '1500g Magnetic Hold Force',
      'Material': 'Bayer Anti-yellowing Polycarbonate + TPU Rim',
      'Compatibility': 'iPhone 15/16 Series & MagSafe Accessories',
      'Finish': 'Matte Soft-touch Anti-fingerprint Coating'
    },
    colorways: [
      { name: 'Mango Ring Stealth', hex: '#18181B' },
      { name: 'Frosted Smoke', hex: '#525252' },
      { name: 'Pure Mango Orange', hex: '#F97316' }
    ],
    isFeatured: true
  }
];
