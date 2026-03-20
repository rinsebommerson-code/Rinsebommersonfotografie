"use client";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  showText?: boolean;
}

export default function Logo({ variant = "dark", className = "", showText = true }: LogoProps) {
  const color = variant === "dark" ? "#1A1A1A" : "#FAF8F5";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* RB Lettermark SVG — replace with your actual logo files */}
      <svg
        width="40"
        height="40"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Rinse Bommerson Fotografie logo"
      >
        {/* Stylized R lettermark with double outline */}
        <rect x="2" y="2" width="96" height="96" rx="8" fill={variant === "dark" ? "#1A1A1A" : "transparent"} stroke={color} strokeWidth="4" />
        <g transform="translate(18, 12)">
          {/* Outer R shape */}
          <path
            d="M8 4 L8 72 L20 72 L20 44 L40 72 L55 72 L33 42 C46 39 54 30 54 20 C54 10 46 4 34 4 Z M20 14 L32 14 C38 14 42 18 42 23 C42 28 38 33 32 33 L20 33 Z"
            fill={variant === "dark" ? "#FAF8F5" : "#1A1A1A"}
          />
          {/* Inner line detail */}
          <path
            d="M14 10 L14 66 L18 66 L18 40 L38 66 L49 66 L29 38 C40 35 48 27 48 20 C48 12 42 10 34 10 Z M18 18 L31 18 C36 18 40 21 40 24 C40 27 36 30 31 30 L18 30 Z"
            fill={variant === "dark" ? "#1A1A1A" : "transparent"}
            stroke={variant === "dark" ? "#FAF8F5" : "#1A1A1A"}
            strokeWidth="1.5"
          />
        </g>
      </svg>
      {showText && (
        <div>
          <div
            className="text-sm font-semibold tracking-wider uppercase"
            style={{
              color,
              fontFamily: "var(--font-dm-sans)",
              letterSpacing: "0.12em",
            }}
          >
            Rinse Bommerson
          </div>
          <div
            className="text-xs tracking-widest uppercase"
            style={{
              color,
              opacity: 0.7,
              fontFamily: "var(--font-dm-sans)",
              letterSpacing: "0.2em",
            }}
          >
            Fotografie
          </div>
        </div>
      )}
    </div>
  );
}
