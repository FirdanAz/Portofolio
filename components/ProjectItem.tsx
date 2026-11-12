import Link from "next/link";
import { Project } from "@/data/content";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectItemProps {
  project: Project;
  isFeatured?: boolean;
}

export function ProjectItem({ project, isFeatured = false }: ProjectItemProps) {
  if (isFeatured) {
    return (
      <article className="grid grid-cols-1 lg:grid-cols-[38%_62%] border-y border-ink mb-0">
        {/* Project Meta Column */}
        <div className="py-8 lg:py-10 lg:pr-10 lg:border-r border-ink flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-[11px] font-semibold text-teal">
                {project.number}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                {project.category}
              </span>
            </div>

            <h3 className="font-display font-semibold text-[38px] sm:text-[48px] lg:text-[58px] leading-[0.95] tracking-tight text-ink mt-8 mb-5">
              <Link
                href={`/projects/${project.slug}`}
                className="hover:text-teal-dark transition-colors"
              >
                {project.title}
              </Link>
            </h3>

            <p className="text-[13px] sm:text-[14px] leading-[1.65] text-ink-subtle max-w-[430px]">
              {project.problem}
            </p>

            <dl className="mt-8 mb-8 text-[12px]">
              <div className="grid grid-cols-[80px_1fr] py-3 border-t border-line items-baseline">
                <dt className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                  Peran
                </dt>
                <dd className="font-semibold text-ink">{project.role}</dd>
              </div>
              <div className="grid grid-cols-[80px_1fr] py-3 border-t border-line items-baseline">
                <dt className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                  Stack
                </dt>
                <dd className="font-mono text-[9px] text-ink-subtle">
                  {project.stack}
                </dd>
              </div>
              <div className="grid grid-cols-[80px_1fr] py-3 border-t border-line items-baseline">
                <dt className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
                  Hasil
                </dt>
                <dd className="font-semibold text-teal-dark">{project.result}</dd>
              </div>
            </dl>
          </div>

          <div className="flex items-center gap-6 pt-2 font-mono text-[11px] font-bold">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center border-b border-ink pb-1 hover:text-teal-dark hover:border-teal-dark transition-colors"
            >
              <span>Lihat studi kasus</span>
              <span aria-hidden="true" className="text-teal ml-2">
                ↗
              </span>
            </Link>
            {project.links
              .filter((l) => l.isExternal)
              .map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border-b border-ink pb-1 text-ink hover:text-teal-dark hover:border-teal-dark transition-colors"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-teal ml-1.5">
                    ↗
                  </span>
                </a>
              ))}
          </div>
        </div>

        {/* Featured Visual Column */}
        <div className="pt-8 pb-6 lg:py-10 lg:pl-10 relative flex flex-col justify-between border-t lg:border-t-0 border-ink">
          {/* Award Badge */}
          <div
            className="absolute z-10 top-4 right-4 sm:top-8 sm:right-8 bg-teal w-[110px] h-[110px] sm:w-[135px] sm:h-[135px] rounded-full flex items-center justify-center gap-1.5 shadow-sm rotate-[7deg] select-none pointer-events-none"
            aria-label="Juara Nasional GENETIC 2025"
          >
            <span className="font-display font-semibold text-[30px] sm:text-[36px] text-ink leading-none">
              03
            </span>
            <div className="flex flex-col font-mono text-[7px] sm:text-[8px] font-semibold text-ink leading-tight">
              <b>JUARA NASIONAL</b>
              <small className="text-ink/80 text-[6px] sm:text-[7px]">
                GENETIC 2025
              </small>
            </div>
          </div>

          <div>
            <ProjectPreview type={project.previewType} />
          </div>

          <p className="font-mono text-[8px] text-ink-muted uppercase tracking-wider mt-4">
            FIG. 01 — ANTARMUKA UTAMA SATU DESA (MOBILE)
          </p>
        </div>
      </article>
    );
  }

  // Standard row / card for other projects (Projects 02, 03, 04)
  return (
    <article className="flex flex-col justify-between p-6 lg:p-7 border-b lg:border-b-0 lg:border-r last:lg:border-r-0 border-ink">
      <div>
        <div className="flex items-center justify-between pb-3">
          <span className="font-mono text-[11px] font-semibold text-teal">
            {project.number}
          </span>
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-muted">
            {project.category}
          </p>
        </div>

        <h3 className="font-display font-semibold text-[32px] sm:text-[36px] leading-[1] tracking-tight text-ink mt-5 mb-3">
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-teal-dark transition-colors"
          >
            {project.title}
          </Link>
        </h3>

        <p className="text-[12px] sm:text-[13px] leading-[1.65] text-ink-subtle min-h-[68px]">
          {project.problem}
        </p>

        <div className="flex items-baseline gap-3 text-[11px] border-t border-line pt-3 mt-4">
          <span className="font-mono text-[9px] uppercase tracking-wider text-ink-muted shrink-0">
            Peran
          </span>
          <span className="font-semibold text-ink text-[12px]">
            {project.role}
          </span>
        </div>

        <p className="font-mono text-[8px] text-ink-muted uppercase tracking-wider my-3 min-h-[18px]">
          {project.stack}
        </p>

        <div className="grid grid-cols-[48px_1fr] gap-2 text-[11px] leading-snug min-h-[44px]">
          <span className="font-mono text-[8px] uppercase tracking-wider text-ink-muted pt-0.5">
            Hasil
          </span>
          <span className="text-ink-subtle font-medium">{project.result}</span>
        </div>

        <div className="flex items-center gap-5 my-5 font-mono text-[10px] font-bold">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center border-b border-ink pb-0.5 hover:text-teal-dark hover:border-teal-dark transition-colors"
          >
            <span>Detail</span>
            <span aria-hidden="true" className="text-teal ml-1.5">
              ↗
            </span>
          </Link>
          {project.links
            .filter((l) => l.isExternal)
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border-b border-ink pb-0.5 text-ink hover:text-teal-dark hover:border-teal-dark transition-colors"
              >
                <span>{link.label}</span>
                <span aria-hidden="true" className="text-teal ml-1">
                  ↗
                </span>
              </a>
            ))}
        </div>
      </div>

      <div className="mt-4 pt-2">
        <ProjectPreview type={project.previewType} />
        <p className="font-mono text-[8px] text-ink-muted uppercase tracking-wider mt-3">
          FIG. {project.number} — {project.title} VIEW
        </p>
      </div>
    </article>
  );
}

