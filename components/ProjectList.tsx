"use client";

import { content } from "@/data/content";
import { ProjectItem } from "./ProjectItem";

export function ProjectList() {
  const { projects } = content;

  return (
    <section
      id="project"
      className="py-20 lg:py-32 border-b border-white/[0.08] relative overflow-hidden"
      aria-labelledby="projects-title"
    >
      {/* Faint Giant Background Watermark */}
      <div
        className="absolute top-8 right-0 font-display font-black text-[clamp(6rem,18vw,20rem)] uppercase tracking-tighter text-white/[0.025] select-none pointer-events-none leading-none z-0"
        aria-hidden="true"
      >
        SELECTED
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[0.25em] text-accent-red uppercase mb-3">
              <span>[ 02 . SELECTED ]</span>
            </div>
            <h2
              id="projects-title"
              className="font-display font-black text-[42px] sm:text-[54px] lg:text-[68px] leading-[0.95] tracking-tight uppercase text-white"
            >
              ARCHIVED <span className="text-accent-red italic font-normal">WORKS</span>
            </h2>
          </div>

          <p className="text-[14px] sm:text-[15px] leading-[1.7] text-white/60 max-w-[440px] font-sans">
            Empat produk rekayasa perangkat lunak terpilih: dari perumusan masalah, arsitektur modul, hingga implementasi produksi siap pakai.
          </p>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 lg:gap-8">
          {projects.map((project) => (
            <ProjectItem key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
