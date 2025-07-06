import React from "react";

// Simple SVG garden silhouettes for background decoration
const GardenSilhouettes: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 1440 320"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={props.className}
    style={props.style}
    {...props}
  >
    <defs>
      <linearGradient id="gardenGradient" x1="0" y1="0" x2="0" y2="1" gradientTransform="rotate(90)">
        <stop offset="0%" stopColor="#b7e4c7" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#74c69d" stopOpacity="0.5" />
      </linearGradient>
    </defs>
    <path
      d="M0,256L60,240C120,224,240,192,360,186.7C480,181,600,203,720,213.3C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      fill="url(#gardenGradient)"
      opacity="0.7"
    />
    <ellipse cx="200" cy="300" rx="60" ry="20" fill="#b7e4c7" opacity="0.5" />
    <ellipse cx="1240" cy="310" rx="80" ry="25" fill="#74c69d" opacity="0.4" />
    <ellipse cx="700" cy="320" rx="120" ry="30" fill="#95d5b2" opacity="0.3" />
  </svg>
);

export default GardenSilhouettes;
