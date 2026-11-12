import { content } from "@/data/content";
import { ProjectItem } from "./ProjectItem";

export function ProjectList() {
  const { projects } = content;
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section
      id="proyek"
      className="py-16 lg:py-24 border-b border-ink"
      aria-labelledby="projects-title"
    >
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-[13%_51%_36%] items-end mb-12 lg:mb-16 gap-6 lg:gap-0">
        <span className="font-mono text-[11px] font-semibold text-teal self-start">
          01
        </span>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink-muted mb-2.5">
            SELECTED WORK / 2024—2025
          </p>
          <h2
            id="projects-title"
            className="font-display font-semibold text-[38px] sm:text-[50px] lg:text-[68px] leading-none tracking-tight text-ink"
          >
            Proyek terpilih
          </h2>
        </div>
        <p className="text-[13px] leading-[1.7] text-ink-muted max-w-[340px] lg:justify-self-end">
          Empat produk yang menunjukkan cara saya bekerja dari perumusan masalah,
          rancangan arsitektur, hingga implementasi kode dan hasil nyata.
        </p>
      </div>

      {/* Featured Project (01) */}
      {featuredProject && (
        <ProjectItem project={featuredProject} isFeatured={true} />
      )}

      {/* Secondary Projects Grid (02, 03, 04) */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-ink">
        {otherProjects.map((project) => (
          <ProjectItem key={project.slug} project={project} isFeatured={false} />
        ))}
      </div>
    </section>
  );
}

