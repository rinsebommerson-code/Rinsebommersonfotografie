"use client";

import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const src = variant === "light" ? "/images/logo/logo-wit.png" : "/images/logo/logo-zwart.png";

  return (
    <div className={`relative ${className}`} style={{ height: "52px", width: "133px" }}>
      <Image
        src={src}
        alt="Rinse Bommerson Photography"
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
}
