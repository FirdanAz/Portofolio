"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  year: string;
  credentialId?: string;
  accentColor: string;
  type: "award" | "certificate";
}

export function CredentialsCarousel() {
  const credentials: CredentialItem[] = [
    {
      id: "genetic-2025",
      title: "JUARA 3 NASIONAL GENETIC 2025",
      issuer: "GEBYAR NATIONAL IT COMPETITION",
      category: "Inovasi Teknologi Pelayanan Publik (Satu Desa)",
      year: "2025",
      credentialId: "GENETIC/PUB-TECH/2025/03",
      accentColor: "#E11D2E",
      type: "award",
    },
    {
      id: "dicoding-flutter",
      title: "MEMBUAT APLIKASI FLUTTER UNTUK PEMULA",
      issuer: "DICODING INDONESIA",
      category: "Mobile Application Development",
      year: "2024",
      credentialId: "DICODING-FLUTTER-CERT-902",
      accentColor: "#02569B",
      type: "certificate",
    },
    {
      id: "smk-rus-rpl",
      title: "KOMPETENSI REKAYASA PERANGKAT LUNAK",
      issuer: "SMK RADEN UMAR SAID KUDUS",
      category: "Software Engineering & Architecture",
      year: "2024",
      credentialId: "SMK-RUS/RPL/2024/088",
      accentColor: "#E11D2E",
      type: "certificate",
    },
    {
      id: "dicoding-js",
      title: "BELAJAR DASAR PEMROGRAMAN JAVASCRIPT",
      issuer: "DICODING INDONESIA",
      category: "Web & Full-Stack Foundations",
      year: "2024",
      credentialId: "DICODING-JS-FOUNDATIONS-412",
      accentColor: "#F7DF1E",
      type: "certificate",
    },
    {
      id: "bytesfest-2026",
      title: "DELEGASI INOVASI BYTESFEST 2026",
      issuer: "BYTESFEST SDG 11 COMPETITION",
      category: "Platform Kebudayaan Interaktif (NUSAVERSE)",
      year: "2026",
      credentialId: "BYTESFEST/SDG11/2026/014",
      accentColor: "#2DD4BF",
      type: "award",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : credentials.length - 1));
  }, [credentials.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev < credentials.length - 1 ? prev + 1 : 0));
  }, [credentials.length]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <section
      id="credentials"
      className="py-20 lg:py-32 border-b border-white/[0.08] relative overflow-hidden bg-dark select-none"
      aria-labelledby="credentials-title"
    >
      {/* Background Watermark */}
      <div
        className="absolute top-8 right-0 font-display font-black text-[clamp(6rem,18vw,20rem)] uppercase tracking-tighter text-white/[0.025] select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        CREDENTIALS
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.25em] text-accent-red uppercase mb-3">
              <span>[ 03 . CREDENTIALS ]</span>
            </div>
            <h2
              id="credentials-title"
              className="font-display font-black text-[42px] sm:text-[54px] lg:text-[68px] leading-[0.95] tracking-tight uppercase text-white"
            >
              LICENSES & <span className="text-accent-red italic font-normal">CREDENTIALS</span>
            </h2>
          </div>

          {/* Navigation Arrow Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0E0E0E] hover:bg-accent-red hover:border-accent-red text-white flex items-center justify-center transition-all duration-300 shadow-md group"
              aria-label="Previous Credential"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full border border-white/10 bg-[#0E0E0E] hover:bg-accent-red hover:border-accent-red text-white flex items-center justify-center transition-all duration-300 shadow-md group"
              aria-label="Next Credential"
            >
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* 3D Coverflow Stage */}
        <div
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center [perspective:1200px]"
        >
          {credentials.map((item, index) => {
            const offset = index - activeIndex;
            const isCenter = offset === 0;
            const isLeft = offset === -1 || (activeIndex === 0 && index === credentials.length - 1);
            const isRight = offset === 1 || (activeIndex === credentials.length - 1 && index === 0);

            // Compute 3D transformation values
            let transform = "translateX(0) scale(0.65) translateZ(-250px)";
            let opacity = 0;
            let zIndex = 10;
            let pointerEvents = "none";

            if (isCenter) {
              transform = "translateX(0) scale(1) translateZ(0) rotateY(0deg)";
              opacity = 1;
              zIndex = 30;
              pointerEvents = "auto";
            } else if (isLeft) {
              transform = "translateX(-68%) scale(0.82) translateZ(-140px) rotateY(24deg)";
              opacity = 0.45;
              zIndex = 20;
              pointerEvents = "auto";
            } else if (isRight) {
              transform = "translateX(68%) scale(0.82) translateZ(-140px) rotateY(-24deg)";
              opacity = 0.45;
              zIndex = 20;
              pointerEvents = "auto";
            }

            return (
              <div
                key={item.id}
                onClick={() => setActiveIndex(index)}
                style={{
                  transform,
                  opacity,
                  zIndex,
                  pointerEvents: pointerEvents as "auto" | "none",
                  transition: "all 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className={`absolute w-[300px] sm:w-[380px] lg:w-[420px] rounded-[22px] border p-6 sm:p-7 flex flex-col justify-between cursor-pointer backdrop-blur-md ${
                  isCenter
                    ? "bg-[#111111] border-accent-red/50 shadow-[0_20px_50px_rgba(0,0,0,0.9),0_0_25px_rgba(225,29,46,0.15)]"
                    : "bg-[#0A0A0A] border-white/[0.06] hover:opacity-75"
                }`}
              >
                {/* Issuer Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-4">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-accent-red">
                    {item.issuer}
                  </span>
                  <span className="font-mono text-[11px] text-white/40">{item.year}</span>
                </div>

                {/* Framed Certificate Mockup Card */}
                <div className="relative w-full aspect-[4/3] rounded-[14px] bg-[#161616] border border-white/[0.08] p-4 flex flex-col justify-between overflow-hidden shadow-inner my-2">
                  {/* Subtle Certificate Corner Accents */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-accent-red/40" />
                  <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-accent-red/40" />
                  <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-accent-red/40" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-accent-red/40" />

                  {/* Header inside Certificate */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] uppercase tracking-wider text-white/50">
                      OFFICIAL CERTIFICATION
                    </span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.accentColor }}
                    />
                  </div>

                  {/* Center Award / Title */}
                  <div className="text-center my-auto py-2">
                    <p className="font-display font-black text-[15px] sm:text-[17px] uppercase tracking-tight text-white leading-tight">
                      {item.title}
                    </p>
                    <p className="font-sans text-[11px] text-white/60 mt-1">
                      Awarded to Muhammad Firdan Azhari
                    </p>
                  </div>

                  {/* Footer inside Certificate */}
                  <div className="flex items-center justify-between border-t border-white/[0.06] pt-2 text-[9px] font-mono text-white/40">
                    <span>{item.credentialId}</span>
                    <span className="text-emerald-400 font-semibold">VERIFIED ✓</span>
                  </div>
                </div>

                {/* Card Title & Category */}
                <div className="mt-4 pt-2">
                  <h3 className="font-display font-black text-[17px] sm:text-[19px] leading-tight uppercase text-white tracking-tight">
                    {item.title}
                  </h3>
                  <p className="font-mono text-[11px] text-white/50 mt-1 uppercase tracking-wider">
                    {item.category}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Pagination Dots */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {credentials.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setActiveIndex(dotIndex)}
              className={`transition-all duration-300 rounded-full ${
                dotIndex === activeIndex
                  ? "w-7 h-2 bg-accent-red shadow-[0_0_12px_#E11D2E]"
                  : "w-2 h-2 bg-white/20 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
