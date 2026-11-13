"use client";

import { useState, useEffect } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-7 right-7 sm:bottom-9 sm:right-9 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-accent-red text-white flex items-center justify-center shadow-[0_0_25px_rgba(225,29,46,0.7)] hover:scale-110 hover:shadow-[0_0_35px_rgba(225,29,46,0.9)] active:scale-95 transition-all duration-300 focus:outline-none group"
      aria-label="Kembali ke atas"
      title="Kembali ke atas"
    >
      <svg
        className="w-5 h-5 transition-transform group-hover:-translate-y-1"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
