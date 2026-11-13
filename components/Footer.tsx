"use client";

import { content } from "@/data/content";

export function Footer() {
  const { profile } = content;

  return (
    <footer className="w-full bg-dark text-white border-t border-white/[0.08] relative z-20">
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/50">
          © {new Date().getFullYear()} {profile.name}. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.16em] text-white/40">
          DESIGNED IN EDITORIAL DARK · BUILT WITH NEXT.JS &amp; TAILWIND
        </p>
      </div>
    </footer>
  );
}
