"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/content";

interface ProjectItemProps {
  project: Project;
}

export function ProjectItem({ project }: ProjectItemProps) {
  const isSatuDesa = project.slug === "satu-desa";

  return (
    <article className="group relative rounded-[24px] overflow-hidden border border-white/[0.08] bg-[#0A0A0A] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.85)] flex flex-col justify-between h-[440px] sm:h-[480px] lg:h-[520px]">
      {/* Background Cover Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={`Screenshot ${project.title}`}
          fill
          unoptimized
          className="object-cover object-top opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700 ease-out"
        />
        {/* Top Vignette Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-transparent z-[1]"
          aria-hidden="true"
        />
        {/* Deep Bottom Editorial Gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/85 to-transparent z-[2]"
          aria-hidden="true"
        />
      </div>

      {/* Top Header Row (Badges) */}
      <div className="relative z-10 p-6 sm:p-7 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[11px] font-bold text-accent-red tracking-widest">
            [{project.number}]
          </span>
          <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase px-2.5 py-1 rounded bg-black/60 border border-white/10 text-white/80 backdrop-blur-md">
            {project.platform === "mobile" ? "MOBILE APP" : "WEB PLATFORM"}
          </span>
        </div>

        {/* Highlight Badge: JUARA 3 NASIONAL for Satu Desa or Category Tag */}
        {isSatuDesa ? (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-red text-white font-mono text-[9px] sm:text-[10px] font-bold tracking-wider shadow-[0_0_16px_rgba(225,29,46,0.6)] animate-pulse">
            ★ JUARA 3 NASIONAL
          </span>
        ) : (
          <span className="font-mono text-[10px] tracking-wider text-white/50 uppercase">
            {project.category}
          </span>
        )}
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-10 p-6 sm:p-7 flex flex-col justify-end">
        {/* Tech Stack Pills */}
        <p className="font-mono text-[10px] sm:text-[11px] font-semibold text-accent-red tracking-wider uppercase mb-2">
          {project.stack}
        </p>

        {/* Project Title */}
        <h3 className="font-display font-black text-[26px] sm:text-[32px] lg:text-[36px] leading-[1.05] tracking-tight uppercase text-white mb-2.5 transition-colors">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-accent-red transition-colors inline-flex items-center gap-2 group/title"
          >
            <span>{project.title}</span>
          </Link>
        </h3>

        {/* Short Problem Summary */}
        <p className="text-[13px] sm:text-[14px] text-white/70 line-clamp-2 leading-relaxed mb-6 max-w-[460px]">
          {project.problem}
        </p>

        {/* Action Buttons: VIEW CASE ↗ & GitHub Link */}
        <div className="flex items-center justify-between pt-2">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2.5 bg-white text-black hover:bg-accent-red hover:text-white font-mono text-[11px] font-bold tracking-[0.16em] uppercase px-5 py-2.5 rounded-full transition-all duration-300 shadow-md group/btn"
          >
            <span>VIEW CASE</span>
            <span className="text-[13px] transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5">
              ↗
            </span>
          </Link>

          {project.details.githubUrl && (
            <a
              href={project.details.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-black/70 hover:bg-accent-red border border-white/10 text-white/80 hover:text-white transition-all duration-300 shadow-sm"
              aria-label={`GitHub Repository ${project.title}`}
              title="GitHub Repository"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* Glowing Red Bottom Edge on Hover */}
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] bg-accent-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_16px_#E11D2E] z-20 pointer-events-none"
        aria-hidden="true"
      />
    </article>
  );
}
