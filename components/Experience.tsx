"use client";

import { content } from "@/data/content";

export function Experience() {
  const { experience, education } = content;

  return (
    <section
      id="experience"
      className="py-20 lg:py-32 border-b border-white/[0.08] relative overflow-hidden bg-dark"
      aria-labelledby="experience-title"
    >
      {/* Background Watermark */}
      <div
        className="absolute top-8 right-0 font-display font-black text-[clamp(6rem,18vw,20rem)] uppercase tracking-tighter text-white/[0.025] select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        CAREER
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 lg:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.25em] text-accent-red uppercase mb-3">
              <span>[ 04 . CAREER ]</span>
            </div>
            <h2
              id="experience-title"
              className="font-display font-black text-[42px] sm:text-[54px] lg:text-[68px] leading-[0.95] tracking-tight uppercase text-white"
            >
              EXPERIENCE & <span className="text-accent-red italic font-normal">EDUCATION</span>
            </h2>
          </div>

          <p className="text-[14px] sm:text-[15px] leading-[1.7] text-white/60 max-w-[420px] font-sans">
            Rekam jejak kerja profesional pengembangan aplikasi mobile lintas platform dan latar belakang pendidikan rekayasa perangkat lunak.
          </p>
        </div>

        {/* 2-Column Grid: Work Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Work Experience (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent-red pb-3 border-b border-white/[0.08] flex items-center justify-between">
              <span>PROFESSIONAL WORK EXPERIENCE</span>
              <span className="text-white/40">1 YEAR FULL-TIME</span>
            </h3>

            {experience.map((item) => (
              <div
                key={item.company + item.period}
                className="rounded-[20px] border border-white/[0.08] bg-[#0C0C0C] p-6 sm:p-8 hover:border-accent-red/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                  <h4 className="font-display font-black text-[22px] sm:text-[24px] uppercase text-white tracking-tight">
                    {item.role}
                  </h4>
                  <span className="font-mono text-[11px] text-accent-red tracking-wider">
                    {item.period}
                  </span>
                </div>

                <p className="font-mono text-[12px] font-bold uppercase tracking-wider text-white/80 mb-4">
                  {item.company}{" "}
                  {item.parentCompany && (
                    <span className="text-white/40 font-normal">
                      ({item.parentCompany})
                    </span>
                  )}
                </p>

                <p className="text-[14px] text-white/70 leading-relaxed mb-6">
                  {item.description}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/[0.06]">
                  {item.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3 text-[13px] text-white/60">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-red mt-2 shrink-0" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Academic Background (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-accent-red pb-3 border-b border-white/[0.08]">
              ACADEMIC BACKGROUND
            </h3>

            <div className="space-y-5">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="rounded-[20px] border border-white/[0.08] bg-[#0C0C0C] p-6 hover:border-accent-red/40 transition-colors"
                >
                  <span className="font-mono text-[10px] text-accent-red tracking-wider uppercase block mb-1.5">
                    {edu.period}
                  </span>
                  <h4 className="font-display font-black text-[18px] sm:text-[20px] uppercase text-white tracking-tight">
                    {edu.institution}
                  </h4>
                  <p className="font-sans text-[13px] text-white/70 mt-1">
                    {edu.major}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
