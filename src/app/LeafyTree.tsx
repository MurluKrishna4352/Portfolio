import React from "react";

// Elegant leafy tree SVG for portfolio background
export default function LeafyTree(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 80 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Trunk */}
      <rect x="36" y="120" width="8" height="180" rx="4" fill="#7c6f57" />
      {/* Main canopy */}
      <ellipse cx="40" cy="100" rx="36" ry="60" fill="#b7d7a8" />
      {/* Layered leaves for depth */}
      <ellipse cx="24" cy="80" rx="16" ry="28" fill="#a2c89a" />
      <ellipse cx="56" cy="90" rx="18" ry="30" fill="#a2c89a" />
      <ellipse cx="40" cy="60" rx="12" ry="18" fill="#8bbf7a" />
      {/* Subtle shadow at base */}
      <ellipse cx="40" cy="300" rx="18" ry="6" fill="#b3cfd6" opacity="0.18" />
    </svg>
  );
}