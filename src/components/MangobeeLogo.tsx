import React from 'react';

interface MangobeeLogoProps {
  variant?: 'full' | 'icon';
  theme?: 'light' | 'dark' | 'orange'; // light: black 'mango' + orange emblem + orange 'bee'; dark: white 'mango' + orange emblem + orange 'bee'; orange: all orange
  className?: string;
  height?: number;
}

export const MangobeeBeeIcon: React.FC<{ className?: string; size?: number; color?: string; cutoutColor?: string }> = ({
  className = "w-8 h-8",
  size,
  color = "#F97316",
  cutoutColor
}) => {
  const innerColor = cutoutColor || (color === "#FFFFFF" ? "#09090B" : "#FFFFFF");

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: size } : undefined}
    >
      {/* Reference-Based Symmetrical Friendly Bee Emblem */}
      
      {/* Floating Antenna Dots */}
      <circle cx="28" cy="18" r="3.5" fill={color} />
      <circle cx="72" cy="18" r="3.5" fill={color} />

      {/* Antennae */}
      <path
        d="M 45 23 C 40 14 34 13 32 17"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M 55 23 C 60 14 66 13 68 17"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />

      {/* Head Dome */}
      <path
        d="M 38 27 C 38 18 62 18 62 27 C 62 34 38 34 38 27 Z"
        fill={color}
      />

      {/* Outer Wings */}
      {/* Left Wing */}
      <path
        d="M 44 34 C 20 28 8 46 18 64 C 26 76 45 60 48 44 Z"
        fill={color}
      />
      {/* Left Wing Inner Cutout */}
      <path
        d="M 42 38 C 26 34 16 48 24 60 C 30 68 43 56 45 44 Z"
        fill={innerColor}
      />

      {/* Right Wing */}
      <path
        d="M 56 34 C 80 28 92 46 82 64 C 74 76 55 60 52 44 Z"
        fill={color}
      />
      {/* Right Wing Inner Cutout */}
      <path
        d="M 58 38 C 74 34 84 48 76 60 C 70 68 57 56 55 44 Z"
        fill={innerColor}
      />

      {/* Abdomen Center Body & Stripes */}
      <path
        d="M 42 36 C 42 33 58 33 58 36 C 58 43 42 43 42 36 Z"
        fill={color}
      />
      <path
        d="M 40 46 C 40 43 60 43 60 46 C 60 53 40 53 40 46 Z"
        fill={color}
      />
      <path
        d="M 42 56 C 42 54 58 54 58 56 C 58 63 42 63 42 56 Z"
        fill={color}
      />

      {/* Stinger */}
      <path
        d="M 44 66 C 44 64 56 64 56 66 L 50 82 Z"
        fill={color}
      />
    </svg>
  );
};

export const MangobeeLogo: React.FC<MangobeeLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  height = 36
}) => {
  // Color palette:
  // light theme: black "mango" + orange bee emblem + orange "bee"
  // dark theme: white "mango" + orange bee emblem + orange "bee"
  // orange theme: all orange
  const mangoColor = theme === 'dark' ? '#FFFFFF' : theme === 'orange' ? '#F97316' : '#000000';
  const beeColor = '#F97316';
  const emblemColor = '#F97316';
  const cutoutColor = theme === 'dark' ? '#09090B' : '#FFFFFF';

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <MangobeeBeeIcon size={height} color={emblemColor} cutoutColor={cutoutColor} />
      </div>
    );
  }

  // Exact Brand Logo: "mango" (black/white) + [Orange Bee Emblem] + "bee" (orange, same font as mango)
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 415 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height, width: 'auto' }}
        className="overflow-visible"
      >
        {/* "mango" in geometric bold font */}
        <text
          x="0"
          y="80"
          fill={mangoColor}
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
          fontWeight="800"
          fontSize="64"
          letterSpacing="-2.5px"
        >
          mango
        </text>

        {/* Symmetrical Bee Emblem based on reference image (positioned & centered between 'mango' and 'bee') */}
        <g transform="translate(216, 25) scale(0.68)">
          {/* Floating Antenna Dots */}
          <circle cx="28" cy="18" r="3.5" fill={emblemColor} />
          <circle cx="72" cy="18" r="3.5" fill={emblemColor} />

          {/* Antennae */}
          <path
            d="M 45 23 C 40 14 34 13 32 17"
            stroke={emblemColor}
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 55 23 C 60 14 66 13 68 17"
            stroke={emblemColor}
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
          />

          {/* Head Dome */}
          <path
            d="M 38 27 C 38 18 62 18 62 27 C 62 34 38 34 38 27 Z"
            fill={emblemColor}
          />

          {/* Outer Wings */}
          {/* Left Wing */}
          <path
            d="M 44 34 C 20 28 8 46 18 64 C 26 76 45 60 48 44 Z"
            fill={emblemColor}
          />
          {/* Left Wing Inner Cutout */}
          <path
            d="M 42 38 C 26 34 16 48 24 60 C 30 68 43 56 45 44 Z"
            fill={cutoutColor}
          />

          {/* Right Wing */}
          <path
            d="M 56 34 C 80 28 92 46 82 64 C 74 76 55 60 52 44 Z"
            fill={emblemColor}
          />
          {/* Right Wing Inner Cutout */}
          <path
            d="M 58 38 C 74 34 84 48 76 60 C 70 68 57 56 55 44 Z"
            fill={cutoutColor}
          />

          {/* Abdomen Center Body & Stripes */}
          <path
            d="M 42 36 C 42 33 58 33 58 36 C 58 43 42 43 42 36 Z"
            fill={emblemColor}
          />
          <path
            d="M 40 46 C 40 43 60 43 60 46 C 60 53 40 53 40 46 Z"
            fill={emblemColor}
          />
          <path
            d="M 42 56 C 42 54 58 54 58 56 C 58 63 42 63 42 56 Z"
            fill={emblemColor}
          />

          {/* Stinger */}
          <path
            d="M 44 66 C 44 64 56 64 56 66 L 50 82 Z"
            fill={emblemColor}
          />
        </g>

        {/* "bee" in brand orange using the EXACT SAME font as "mango" */}
        <text
          x="292"
          y="80"
          fill={beeColor}
          fontFamily="'Plus Jakarta Sans', 'Inter', system-ui, sans-serif"
          fontWeight="800"
          fontSize="64"
          letterSpacing="-2.5px"
        >
          bee
        </text>
      </svg>
    </div>
  );
};
