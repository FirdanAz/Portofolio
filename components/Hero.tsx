"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/data/content";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
  const { profile } = content;
  const { sellingProposition, quickFacts } = profile;

  // Alternating typography: "M FIRDAN" and "AZHARI"
  const words = ["M FIRDAN", "AZHARI"];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [words.length]);

  const currentWord = words[wordIndex];
  const characters = currentWord.split("");

  // Mouse parallax state (desktop only, disabled on reduced motion)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mq.addEventListener("change", handleMotionChange);

    const handleMouseMove = (e: MouseEvent) => {
      if (mq.matches || window.innerWidth < 1024) return;
      const { innerWidth, innerHeight } = window;
      const normX = (e.clientX / innerWidth - 0.5) * 2;
      const normY = (e.clientY / innerHeight - 0.5) * 2;
      setMousePos({
        x: Math.round(normX * 12),
        y: Math.round(normY * 12),
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mq.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <section
      className="relative w-full bg-dark text-white border-b border-white/[0.08]"
      aria-label="Hero Section"
    >
      {/* Background Red Floating Particles */}
      <ParticleBackground />

      {/* Hero Visual Stage: Giant Typography + Glow + Cutout (Generous height & headroom) */}
      <div className="relative w-full h-[82vh] min-h-[580px] max-h-[820px] flex items-center justify-center overflow-hidden">
        {/* Top Eyebrow Label & Status (Spacious on mobile and desktop) */}
        <div className="absolute top-6 sm:top-7 inset-x-0 z-30 flex items-center justify-between max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] leading-relaxed uppercase tracking-[0.22em] text-accent-red font-bold py-1">
            <span>[ 01 . PROFILE ]</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-widest text-white/60 py-1">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse"
              aria-hidden="true"
            />
            <span className="uppercase hidden sm:inline">{profile.availability}</span>
            <span className="uppercase sm:hidden">TERSEDIA</span>
          </div>
        </div>

        {/* Ambient Radial Red Glow Orb (centered behind head & upper torso) */}
        <div
          className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[520px] sm:h-[520px] lg:w-[680px] lg:h-[680px] rounded-full glow-hero-red blur-3xl opacity-75 pointer-events-none z-[5]"
          style={{
            transform: isReducedMotion
              ? "translate(-50%, -50%)"
              : `translate(calc(-50% - ${mousePos.x * 0.5}px), calc(-50% - ${mousePos.y * 0.5}px))`,
            transition: "transform 0.25s cubic-bezier(0.2, 0, 0, 1)",
          }}
          aria-hidden="true"
        />

        {/* Layer 1 (z-10): Giant Alternating Typography ("M FIRDAN" / "AZHARI") */}
        <div className="absolute inset-x-0 top-[40%] sm:top-[42%] lg:top-[40%] -translate-y-1/2 z-10 flex items-center justify-center select-none pointer-events-none px-2 sm:px-4">
          <div className="relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentWord}
                className="flex items-center justify-center font-display font-black tracking-[-0.04em] uppercase leading-none text-white text-center whitespace-nowrap text-[68px] min-[380px]:text-[80px] sm:text-[100px] md:text-[124px] lg:text-[clamp(9rem,11.5vw,12.5rem)] drop-shadow-[0_10px_35px_rgba(0,0,0,0.85)]"
                aria-label={currentWord}
              >
                {characters.map((char, index) => {
                  if (char === " ") {
                    return (
                      <span
                        key={`space-${index}`}
                        className="inline-block w-3 sm:w-6 md:w-10 lg:w-14"
                        aria-hidden="true"
                      >
                        &nbsp;
                      </span>
                    );
                  }
                  return (
                    <span
                      key={`${char}-${index}`}
                      className="inline-flex overflow-hidden h-[1.15em] items-center justify-center py-1"
                    >
                      <motion.span
                        className="inline-block will-change-transform text-white"
                        initial={{ y: "105%", opacity: 0 }}
                        animate={{
                          y: "0%",
                          opacity: 1,
                          transition: {
                            duration: 0.55,
                            ease: [0.16, 1, 0.3, 1],
                            delay: index * 0.035,
                          },
                        }}
                        exit={{
                          y: "-105%",
                          opacity: 0,
                          transition: {
                            duration: 0.4,
                            ease: [0.16, 1, 0.3, 1],
                            delay: index * 0.02,
                          },
                        }}
                      >
                        {char}
                      </motion.span>
                    </span>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Metallic Red Shimmer Sweep Beam Overlay (Multiplies with white text to produce rich red shine) */}
            <div
              className="absolute inset-0 pointer-events-none select-none z-10 overflow-hidden mix-blend-multiply flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-[200%] h-full animate-beam-sweep flex items-center justify-center">
                <div className="w-28 sm:w-44 lg:w-64 h-full bg-gradient-to-r from-white via-accent-red to-white transform -skew-x-20 opacity-95" />
              </div>
            </div>
          </div>
        </div>

        {/* Layer 2 (z-20): Portrait Cutout PNG Overlapping the Letters (Perfect Headroom & Balanced on Mobile) */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex justify-center items-end will-change-transform"
          style={{
            transform: isReducedMotion
              ? "translate(-50%, 0)"
              : `translate(calc(-50% + ${mousePos.x}px), ${mousePos.y}px)`,
            transition: "transform 0.15s cubic-bezier(0.2, 0, 0, 1)",
          }}
        >
          <div className="relative flex items-end justify-center">
            <Image
              src="/images/hero-cutout.png"
              alt={profile.name}
              width={1086}
              height={1243}
              priority
              unoptimized
              className="h-[46vh] min-h-[290px] max-h-[420px] sm:h-[64vh] sm:min-h-[380px] sm:max-h-[620px] lg:h-[70vh] lg:max-h-[660px] w-auto max-w-[90vw] object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.92)]"
            />
            {/* Seamless bottom fade into #050505 */}
            <div
              className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-dark via-dark/75 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Below Hero Stage: Role Brief, Value Statement & Quick Facts */}
      <div className="relative z-30 border-t border-white/[0.08] bg-[#070707]/95 backdrop-blur-md">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pt-10 sm:pt-12 lg:pt-16 pb-24 sm:pb-28 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Role & Selling Value Statement */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-accent-red uppercase">
                  {profile.role}
                </span>
                <span className="text-white/20 font-mono">/</span>
                <span className="font-mono text-[11px] tracking-[0.18em] text-white/60 uppercase">
                  {profile.tagline}
                </span>
              </div>

              <h1 className="font-display font-bold text-[28px] sm:text-[38px] lg:text-[44px] leading-[1.08] tracking-[-0.03em] text-white">
                {sellingProposition.headline}{" "}
                <em className="italic font-normal text-accent-red not-italic font-display font-bold">
                  {sellingProposition.accent}
                </em>
              </h1>

              <p className="text-[14px] sm:text-[15px] leading-[1.7] text-white/65 max-w-[620px]">
                {sellingProposition.paragraph}
              </p>
            </div>

            {/* Right Column: 3 Quick Facts Cards */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3.5">
              {quickFacts.map((fact) => (
                <div
                  key={fact.number}
                  className="flex items-start gap-4 p-4 rounded-[4px] border border-white/[0.08] bg-[#0C0C0C] hover:border-accent-red/40 transition-colors"
                >
                  <span className="font-mono text-[11px] font-bold tracking-widest text-accent-red pt-0.5">
                    [{fact.number}]
                  </span>
                  <div className="flex flex-col">
                    <strong className="text-[14px] font-bold text-white tracking-tight">
                      {fact.title}
                    </strong>
                    <span className="text-[11px] font-mono tracking-wider text-white/50 mt-0.5">
                      {fact.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
