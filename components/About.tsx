"use client";

import { content } from "@/data/content";

export function About() {
  const { profile } = content;

  // Skill groups for Bento Cards
  const bentoSkills = [
    {
      id: "mobile",
      title: "MOBILE & APPLICATION DEVELOPMENT",
      description: "Pengembangan aplikasi mobile lintas platform berarsitektur bersih (BLoC & Provider) dan performa tinggi.",
      skills: [
        {
          name: "Flutter",
          color: "#02569B",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zM14.314 11.23L7.757 17.787 11.456 21.486 21.684 11.23h-7.37z" />
            </svg>
          ),
        },
        {
          name: "Dart",
          color: "#0175C2",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M4.105 4.105L12 0l7.895 4.105L24 12l-4.105 7.895L12 24l-7.895-4.105L0 12l4.105-7.895zm3.79 3.79L12 5.684l4.105 2.21L18.316 12l-2.21 4.105L12 18.316l-4.105-2.21L5.684 12l2.21-4.105z" />
            </svg>
          ),
        },
        {
          name: "Android",
          color: "#3DDC84",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.411 13.856 8.1 12 8.1s-3.5902.311-5.1368.8507L4.8409 5.4477a.416.416 0 00-.5676-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
            </svg>
          ),
        },
        {
          name: "Java",
          color: "#EA2D2E",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M9.047 18.538s-.804-.476 1.488-.636c2.783-.194 4.238.167 4.238.167s-1.464.444-2.88.468c-1.417.024-2.846 0-2.846 0zm-1.89-3.238s-1.127-.667 2.083-.89c3.896-.272 5.933.234 5.933.234s-2.05.622-4.032.656c-1.983.033-3.984 0-3.984 0zm6.815-4.483s1.258 1.428-.847 2.857c-2.43 1.648-5.068 1.706-5.068 1.706s2.327-.929 4.197-1.821c1.87-.893 1.718-2.742 1.718-2.742zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.047 21.458c-4.453 0-8.083-1.026-8.083-2.292 0-.258.152-.505.428-.737.525.228 1.154.417 1.867.558 1.696.335 3.738.471 5.788.471 2.05 0 4.092-.136 5.788-.471.713-.141 1.342-.33 1.867-.558.276.232.428.479.428.737 0 1.266-3.63 2.292-8.083 2.292z" />
            </svg>
          ),
        },
        {
          name: "Firebase",
          color: "#FFCA28",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M3.89 15.672L6.255.461A.542.542 0 017.27.283l3.543 6.643-6.923 8.746zm16.793 2.923l-2.012-12.44a.543.543 0 00-.919-.286L3.454 19.347l7.732 4.364a1.63 1.63 0 001.628 0l7.869-4.364v-.752zM12.983 8.784L10.37 3.82a.541.541 0 00-.964.013L1.517 19.124l11.466-10.34z" />
            </svg>
          ),
        },
      ],
      highlights: ["Flutter (Dart)", "Java Native Android", "BLoC & Provider", "Riverpod", "Firebase Core"],
    },
    {
      id: "backend",
      title: "BACKEND & SERVER",
      description: "Arsitektur REST API kokoh, otentikasi aman, dan manajemen database relasional.",
      skills: [
        {
          name: "Laravel",
          color: "#FF2D20",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M8.28 0a.48.48 0 00-.28.09L.2 5.51a.48.48 0 00-.2.39v12.2a.48.48 0 00.2.39l7.8 5.42a.48.48 0 00.56 0l7.8-5.42a.48.48 0 00.2-.39V5.9a.48.48 0 00-.2-.39L8.56.09A.48.48 0 008.28 0zm0 1.15l6.83 4.75-6.83 4.75L1.45 5.9 8.28 1.15zM.96 6.8l6.84 4.75v9.5L.96 16.3V6.8zm14.64 0v9.5l-6.84 4.75v-9.5l6.84-4.75z" />
            </svg>
          ),
        },
        {
          name: "PHP",
          color: "#777BB4",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-3.69 16.89l.86-4.52h1.69c1.9 0 3.03-.98 3.34-2.61.32-1.68-.53-2.6-2.43-2.6H8.22l-1.91 9.73h2zm6.65-4.52h1.69c1.9 0 3.03-.98 3.34-2.61.32-1.68-.53-2.6-2.43-2.6h-3.55l-1.91 9.73h2l.86-4.52zm-5.79-3.32h1.25c.78 0 1.25.32 1.1 1.09-.14.77-.73 1.09-1.51 1.09h-1.25l.41-2.18zm6.65 0h1.25c.78 0 1.25.32 1.1 1.09-.14.77-.73 1.09-1.51 1.09h-1.25l.41-2.18z" />
            </svg>
          ),
        },
        {
          name: "MySQL",
          color: "#00758F",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm1.75 6.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25-2.25-1.01-2.25-2.25 1.01-2.25 2.25-2.25zM7.5 17.25c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25zm9 0c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25 2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25z" />
            </svg>
          ),
        },
        {
          name: "Express.js",
          color: "#000000",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.54 15.65l-2.07-3.65 2-3.65h-1.84l-1.15 2.2-1.15-2.2h-1.84l2 3.65-2.07 3.65h1.84l1.22-2.3 1.22 2.3h1.84zM7.5 8.35h4.2v1.5H9.3v1.8h2.1v1.5H9.3v2.5H7.5v-7.3z" />
            </svg>
          ),
        },
      ],
      highlights: ["Laravel (MVC)", "RESTful API & JSON", "MySQL Database", "Express.js", "Resumable Uploads"],
    },
    {
      id: "frontend",
      title: "FRONTEND & TOOLS",
      description: "Antarmuka web modern dengan Next.js App Router, TypeScript, dan kontrol versi Git terstandar.",
      skills: [
        {
          name: "Next.js",
          color: "#000000",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M18.665 21.978C16.744 23.255 14.453 24 12 24 5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12c0 3.328-1.353 6.34-3.535 8.513l-9.877-12.75v8.474h-1.84V6.98h1.492l10.425 13.498a11.966 11.966 0 001.996-1.5z" />
            </svg>
          ),
        },
        {
          name: "React",
          color: "#61DAFB",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 14.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm5.5-2.5c0 1.5-2.46 2.75-5.5 2.75S6.5 13.5 6.5 12 8.96 9.25 12 9.25s5.5 1.25 5.5 2.75z" />
            </svg>
          ),
        },
        {
          name: "TypeScript",
          color: "#3178C6",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm9.52 7.031h2.51v9.938h-2.51V7.031zm4.17 2.14h2.46c.3 1.95 1.83 2.55 3.31 2.55 1.48 0 2.8-.6 2.8-1.92 0-1.24-.98-1.74-2.73-2.19l-.98-.25c-2.42-.62-3.83-1.67-3.83-3.69 0-2.31 1.91-3.79 4.67-3.79 2.77 0 4.61 1.45 4.73 3.98h-2.46c-.22-1.46-1.15-2.02-2.34-2.02-1.2 0-2.14.58-2.14 1.63 0 1.03.85 1.46 2.51 1.88l1.01.26c2.6.66 4.02 1.76 4.02 3.82 0 2.57-2.04 4.08-4.99 4.08-3.08 0-4.9-1.57-5.04-4.34z" />
            </svg>
          ),
        },
        {
          name: "Tailwind",
          color: "#06B6D4",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
            </svg>
          ),
        },
        {
          name: "Git",
          color: "#F05032",
          svg: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M23.546 10.93L13.067.452a1.5 1.5 0 00-2.126 0L8.808 2.585l3.24 3.24a1.8 1.8 0 011.666 2.284l3.12 3.12a1.8 1.8 0 012.284 1.666l4.428-4.428a1.5 1.5 0 000-2.127zM2.585 8.808L.452 10.941a1.5 1.5 0 000 2.126l10.479 10.478a1.5 1.5 0 002.126 0l2.133-2.133-3.24-3.24a1.8 1.8 0 01-1.666-2.284l-3.12-3.12a1.8 1.8 0 01-2.284-1.666z" />
            </svg>
          ),
        },
      ],
      highlights: ["Next.js App Router", "TypeScript", "Tailwind CSS", "Git & GitHub", "Flutter DevTools"],
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-panel-light text-black rounded-t-[60px] sm:rounded-t-[80px] lg:rounded-t-[100px] -mt-10 sm:-mt-14 lg:-mt-20 z-30 pt-16 sm:pt-24 lg:pt-32 pb-20 sm:pb-28 lg:pb-36 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.45)]"
      aria-labelledby="about-title"
    >
      {/* Faint Giant Background Watermark */}
      <div
        className="absolute top-8 right-4 sm:right-12 lg:right-20 font-display font-black text-[clamp(6rem,18vw,22rem)] uppercase tracking-tighter text-black/[0.035] select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        FIRDAN
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Mono Metadata Block, and CV Button */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.25em] text-accent-red uppercase mb-4">
              <span>[ 01 . PROFILE ]</span>
            </div>

            <h2
              id="about-title"
              className="font-display font-black text-[44px] sm:text-[56px] lg:text-[68px] leading-[0.95] tracking-tight uppercase text-black mb-8 lg:mb-12"
            >
              ABOUT <span className="text-accent-red italic font-normal">ME</span>
            </h2>

            {/* Editorial Metadata List (Mono) */}
            <div className="space-y-6 border-l-2 border-black/10 pl-5 sm:pl-6 mb-10">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 mb-1">
                  FULL NAME
                </p>
                <p className="font-mono text-[13px] sm:text-[14px] font-bold text-black tracking-wide">
                  {profile.name}
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 mb-1">
                  LOCATION
                </p>
                <p className="font-mono text-[13px] sm:text-[14px] font-bold text-black tracking-wide">
                  {profile.location}, INDONESIA
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 mb-1">
                  SPECIALIZATION
                </p>
                <p className="font-mono text-[13px] sm:text-[14px] font-bold text-black tracking-wide">
                  FULL-STACK DEVELOPER (FLUTTER · LARAVEL · NEXT.JS)
                </p>
              </div>

              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400 mb-1">
                  STATUS
                </p>
                <p className="font-mono text-[13px] sm:text-[14px] font-bold text-black tracking-wide flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                  {profile.availability.toUpperCase()}
                </p>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href={profile.cvUrl}
              download="CV_Muhammad_Firdan_Azhari.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3.5 bg-black text-white hover:bg-accent-red transition-all duration-300 font-mono text-[11px] font-bold tracking-[0.2em] uppercase px-8 py-4 rounded-full w-fit shadow-md hover:shadow-xl hover:shadow-accent-red/25 group"
            >
              <span>DOWNLOAD CV</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>

          {/* Right Column: Narrative Bio & Bento Skill Cards */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Bio Narrative */}
            <div className="space-y-5 text-zinc-700 text-[15px] sm:text-[16px] lg:text-[17px] leading-[1.8] font-sans">
              <p className="font-medium text-black text-[17px] sm:text-[19px] leading-[1.6]">
                {profile.aboutText.lead}
              </p>
              <p className="text-zinc-600">
                {profile.aboutText.objective}
              </p>
            </div>

            {/* Bento Skill Cards (3 Cards: Mobile, Backend, Frontend) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {/* Card 1: Mobile (Full Width Across Columns) */}
              <div className="sm:col-span-2 bg-white rounded-[22px] p-6 sm:p-7 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-mono text-[11px] sm:text-[12px] font-bold uppercase tracking-[0.18em] text-zinc-400 group-hover:text-accent-red transition-colors">
                    {bentoSkills[0].title}
                  </h3>
                  <span className="font-mono text-[10px] text-zinc-400">01</span>
                </div>
                <p className="text-[13px] text-zinc-600 mb-6 leading-relaxed">
                  {bentoSkills[0].description}
                </p>

                {/* Tech Icons with Color Transition on Hover */}
                <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 border-t border-zinc-100">
                  {bentoSkills[0].skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      title={skill.name}
                    >
                      <div style={{ color: skill.color }}>{skill.svg}</div>
                      <span className="font-mono text-[12px] font-semibold text-zinc-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Backend & Server */}
              <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 group-hover:text-accent-red transition-colors">
                      {bentoSkills[1].title}
                    </h3>
                    <span className="font-mono text-[10px] text-zinc-400">02</span>
                  </div>
                  <p className="text-[13px] text-zinc-600 mb-6 leading-relaxed">
                    {bentoSkills[1].description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-zinc-100">
                  {bentoSkills[1].skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      title={skill.name}
                    >
                      <div style={{ color: skill.color }}>{skill.svg}</div>
                      <span className="font-mono text-[11px] font-semibold text-zinc-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 3: Frontend & Tools */}
              <div className="bg-white rounded-[22px] p-6 sm:p-7 border border-black/[0.05] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 group-hover:text-accent-red transition-colors">
                      {bentoSkills[2].title}
                    </h3>
                    <span className="font-mono text-[10px] text-zinc-400">03</span>
                  </div>
                  <p className="text-[13px] text-zinc-600 mb-6 leading-relaxed">
                    {bentoSkills[2].description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-zinc-100">
                  {bentoSkills[2].skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-1.5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      title={skill.name}
                    >
                      <div style={{ color: skill.color }}>{skill.svg}</div>
                      <span className="font-mono text-[11px] font-semibold text-zinc-800">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
