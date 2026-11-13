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
    }, 3400);
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
      className="relative w-full overflow-hidden bg-dark text-white border-b border-white/[0.08]"
      aria-label="Hero Section"
    >
      {/* Background Red Floating Particles */}
      <ParticleBackground />

      {/* Hero Visual Stage: Giant Typography + Glow + Cutout */}
      <div className="relative w-full h-[68vh] min-h-[480px] max-h-[820px] sm:h-[72vh] lg:h-[78vh] flex items-center justify-center overflow-hidden">
        {/* Eyebrow Label & Availability (Top Center/Left) */}
        <div className="absolute top-4 sm:top-6 inset-x-0 z-30 flex items-center justify-between max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 pointer-events-none">
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-accent-red font-bold">
            <span>[ 01 . PROFILE ]</span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-widest text-white/60">
            <span
              className="w-1.5 h-1.5 rounded-full bg-accent-red animate-pulse"
              aria-hidden="true"
            />
            <span className="uppercase">{profile.availability}</span>
          </div>
        </div>

        {/* Ambient Radial Red Glow Orb (behind cutout & text) */}
        <div
          className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] lg:w-[680px] lg:h-[680px] rounded-full glow-hero-red blur-3xl opacity-75 pointer-events-none z-[5]"
          style={{
            transform: isReducedMotion
              ? "translate(-50%, -50%)"
              : `translate(calc(-50% - ${mousePos.x * 0.6}px), calc(-50% - ${mousePos.y * 0.6}px))`,
            transition: "transform 0.25s cubic-bezier(0.2, 0, 0, 1)",
          }}
          aria-hidden="true"
        />

        {/* Layer 1 (z-10): Giant Alternating Typography ("M FIRDAN" / "AZHARI") */}
        <div className="absolute inset-x-0 top-[30%] sm:top-[28%] lg:top-[26%] -translate-y-1/2 z-10 flex items-center justify-center select-none pointer-events-none px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWord}
              className="flex items-center justify-center font-display font-black tracking-[-0.04em] uppercase leading-none text-white text-center text-[clamp(3.8rem,13vw,14rem)]"
              aria-label={currentWord}
            >
              {characters.map((char, index) => {
                if (char === " ") {
                  return (
                    <span
                      key={`space-${index}`}
                      className="inline-block w-4 sm:w-8 md:w-12 lg:w-16"
                    >
                      &nbsp;
                    </span>
                  );
                }
                return (
                  <span
                    key={`${char}-${index}`}
                    className="inline-block overflow-hidden py-1 sm:py-2"
                  >
                    <motion.span
                      className="inline-block"
                      initial={{ y: "115%", opacity: 0 }}
                      animate={{
                        y: "0%",
                        opacity: 1,
                        transition: {
                          duration: 0.55,
                          ease: [0.16, 1, 0.3, 1],
                          delay: index * 0.04,
                        },
                      }}
                      exit={{
                        y: "-115%",
                        opacity: 0,
                        transition: {
                          duration: 0.38,
                          ease: [0.16, 1, 0.3, 1],
                          delay: index * 0.025,
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
        </div>

        {/* Layer 2 (z-20): Portrait Cutout PNG Overlapping the Letters */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex justify-center items-end will-change-transform"
          style={{
            transform: isReducedMotion
              ? "translate(-50%, 0)"
              : `translate(calc(-50% + ${mousePos.x}px), ${mousePos.y}px)`,
            transition: "transform 0.15s cubic-bezier(0.2, 0, 0, 1)",
          }}
        >
          <div className="relative">
            <Image
              src="/images/hero-cutout.png"
              alt={profile.name}
              width={1086}
              height={1243}
              priority
              unoptimized
              className="w-[280px] min-[400px]:w-[330px] sm:w-[420px] md:w-[490px] lg:w-[560px] xl:w-[620px] h-auto object-contain object-bottom drop-shadow-[0_24px_48px_rgba(0,0,0,0.9)]"
            />
            {/* Seamless bottom fade into #050505 */}
            <div
              className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-dark via-dark/75 to-transparent pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Below Hero Stage: Role Brief, Value Statement & Quick Facts */}
      <div className="relative z-30 border-t border-white/[0.08] bg-[#070707]/90 backdrop-blur-md">
        <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 py-10 lg:py-14">
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
