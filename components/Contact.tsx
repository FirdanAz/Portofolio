"use client";

import { useState, useEffect } from "react";
import { content } from "@/data/content";

export function Contact() {
  const { contact } = content;

  // Real-time WIB digital clock
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString("id-ID", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTimeString(formatted.replace(/\./g, ":"));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socials = [
    {
      name: "INSTAGRAM",
      href: "https://www.instagram.com/firdan.az",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "LINKEDIN",
      href: contact.linkedin.url,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "GITHUB",
      href: contact.github.url,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "WHATSAPP",
      href: contact.phone.url,
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="pt-20 sm:pt-28 lg:pt-36 pb-16 lg:pb-24 border-b border-white/[0.08] relative overflow-hidden bg-dark"
      aria-labelledby="contact-title"
    >
      {/* Background Watermark */}
      <div
        className="absolute top-8 right-0 font-display font-black text-[clamp(6rem,18vw,20rem)] uppercase tracking-tighter text-white/[0.025] select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        CONNECT
      </div>

      <div className="relative z-10">
        {/* Eyebrow Label */}
        <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.25em] text-accent-red uppercase mb-6">
          <span>[ 05 . GET IN TOUCH ]</span>
        </div>

        {/* Huge Bold Heading */}
        <h2
          id="contact-title"
          className="font-display font-black text-[46px] sm:text-[72px] lg:text-[104px] leading-[0.92] tracking-[-0.03em] uppercase text-white mb-16 lg:mb-24"
        >
          LET&apos;S CREATE <br />
          <span className="text-accent-red italic font-normal">SOMETHING</span> <br />
          GREAT.
        </h2>

        {/* 3-Column Editorial Grid */}
        <div className="border-t border-white/[0.08] pt-12 lg:pt-16 grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Socials */}
          <div className="md:col-span-4 flex flex-col">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.2em] text-accent-red uppercase mb-6">
              SOCIALS
            </h3>
            <div className="flex flex-col gap-3.5">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display font-bold text-[16px] sm:text-[17px] uppercase tracking-wider text-white/70 hover:text-white transition-all duration-300 flex items-center justify-between py-2 border-b border-white/[0.04] group hover:border-accent-red/40"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-white/40 group-hover:text-accent-red transition-colors">
                      {social.icon}
                    </span>
                    <span>{social.name}</span>
                  </span>
                  <span className="text-[14px] text-white/30 group-hover:text-accent-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="md:col-span-5 flex flex-col">
            <h3 className="font-mono text-[11px] font-bold tracking-[0.2em] text-accent-red uppercase mb-6">
              CONTACT DETAILS
            </h3>

            <div className="space-y-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                  DIRECT EMAIL
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-display font-black text-[18px] sm:text-[22px] lg:text-[24px] text-white hover:text-accent-red transition-colors tracking-tight block"
                >
                  {contact.email}
                </a>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                  PHONE / WHATSAPP
                </span>
                <a
                  href={contact.phone.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[14px] sm:text-[15px] font-bold text-white/80 hover:text-accent-red transition-colors tracking-wider block"
                >
                  {contact.phone.display}
                </a>
              </div>

              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-white/40 block mb-1">
                  BASED IN
                </span>
                <p className="font-mono text-[12px] sm:text-[13px] text-white/70 tracking-wide">
                  {contact.location.toUpperCase()}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-widest text-emerald-400 mt-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  TERSEDIA UNTUK MAGANG & KERJA
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Live Real-Time WIB Digital Clock */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-[11px] font-bold tracking-[0.2em] text-accent-red uppercase mb-2">
                LOCAL TIME
              </h3>
              <span className="font-mono text-[11px] text-white/40 tracking-wider block mb-4">
                KUDUS, ID (WIB)
              </span>

              <div className="flex items-baseline gap-2.5 py-3 px-4 rounded-[12px] border border-white/[0.08] bg-[#0E0E0E] w-fit">
                <span className="font-display font-black text-[30px] sm:text-[36px] tracking-tight text-white tabular-nums">
                  {timeString || "04:56:00"}
                </span>
                <span className="font-mono font-bold text-[13px] text-accent-red tracking-wider">
                  WIB
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
