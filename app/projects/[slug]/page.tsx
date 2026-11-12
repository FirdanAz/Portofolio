import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { content, Project } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectPreview } from "@/components/ProjectPreview";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return content.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = content.projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} — Studi Kasus`,
    description: `${project.details.overview} Peran: ${project.role}. Stack: ${project.stack}.`,
    openGraph: {
      title: `${project.title} | Muhammad Firdan Azhari`,
      description: project.details.overview,
      url: `https://firdanazhari.vercel.app/projects/${project.slug}`,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const projectIndex = content.projects.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project: Project = content.projects[projectIndex];
  const prevProject =
    projectIndex > 0 ? content.projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < content.projects.length - 1
      ? content.projects[projectIndex + 1]
      : null;

  return (
    <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-12 fade-in-section">
      <Header />

      <main className="py-10 lg:py-16">
        {/* Navigation Breadcrumb / Back Link */}
        <div className="flex items-center justify-between pb-8 border-b border-line">
          <Link
            href="/#proyek"
            className="font-mono text-[10px] uppercase tracking-wider text-ink font-semibold inline-flex items-center gap-2 hover:text-teal-dark transition-colors group"
          >
            <span
              aria-hidden="true"
              className="text-teal font-sans group-hover:-translate-x-1 transition-transform"
            >
              ←
            </span>
            <span>Kembali ke Beranda</span>
          </Link>

          <span className="font-mono text-[10px] uppercase tracking-wider text-ink-muted">
            STUDI KASUS / {project.number}
          </span>
        </div>

        {/* Project Header */}
        <header className="pt-10 pb-12 lg:pt-14 lg:pb-16 border-b border-ink">
          <div className="flex items-center gap-3 font-mono text-[11px] font-semibold text-teal mb-4">
            <span>PROYEK {project.number}</span>
            <span className="text-line">/</span>
            <span className="text-ink-muted uppercase">{project.category}</span>
          </div>

          <h1 className="font-display font-semibold text-[44px] sm:text-[62px] lg:text-[84px] leading-[0.95] tracking-tight text-ink max-w-[1100px] mb-8">
            {project.title}
          </h1>

          <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[1.6] text-ink-subtle max-w-[850px] font-medium">
            {project.details.overview}
          </p>

          {/* Quick Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 mt-10 border-t border-line">
            <div>
              <span className="block font-mono text-[8px] uppercase tracking-wider text-ink-muted mb-1">
                Peran
              </span>
              <b className="text-[12px] sm:text-[13px] font-semibold text-ink">
                {project.role}
              </b>
            </div>
            <div>
              <span className="block font-mono text-[8px] uppercase tracking-wider text-ink-muted mb-1">
                Kategori
              </span>
              <b className="text-[12px] sm:text-[13px] font-semibold text-ink">
                {project.category}
              </b>
            </div>
            <div>
              <span className="block font-mono text-[8px] uppercase tracking-wider text-ink-muted mb-1">
                Hasil Utama
              </span>
              <b className="text-[12px] sm:text-[13px] font-semibold text-teal-dark">
                {project.result}
              </b>
            </div>
            <div>
              <span className="block font-mono text-[8px] uppercase tracking-wider text-ink-muted mb-1">
                Teknologi
              </span>
              <b className="font-mono text-[10px] sm:text-[11px] font-medium text-ink">
                {project.stack}
              </b>
            </div>
          </div>
        </header>

        {/* Visual Showcase */}
        <section
          className="py-12 lg:py-16 border-b border-ink"
          aria-labelledby="preview-heading"
        >
          <h2 id="preview-heading" className="sr-only">
            Visual Antarmuka Proyek
          </h2>
          <div className="max-w-[960px] mx-auto shadow-sm">
            <ProjectPreview type={project.previewType} />
          </div>
          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-muted text-center mt-4">
            FIG. {project.number} — REPRESENTASI ARSITEKTUR &amp; ANTARMUKA {project.title}
          </p>
        </section>

        {/* Detailed Case Study Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-16 py-14 lg:py-20 border-b border-ink">
          {/* Main Content Column */}
          <div className="flex flex-col gap-14">
            {/* 01: Problem Statement */}
            <section aria-labelledby="problem-heading">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] text-teal font-semibold">
                  01
                </span>
                <h2
                  id="problem-heading"
                  className="font-display font-semibold text-[26px] sm:text-[32px] text-ink"
                >
                  Masalah &amp; Latar Belakang
                </h2>
              </div>
              <p className="text-[14px] sm:text-[15px] leading-[1.8] text-ink-subtle">
                {project.details.problemStatement}
              </p>
            </section>

            {/* 02: Role & Architectural Responsibility */}
            <section aria-labelledby="role-heading">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] text-teal font-semibold">
                  02
                </span>
                <h2
                  id="role-heading"
                  className="font-display font-semibold text-[26px] sm:text-[32px] text-ink"
                >
                  Peran &amp; Tanggung Jawab
                </h2>
              </div>
              <p className="text-[14px] sm:text-[15px] leading-[1.8] text-ink-subtle">
                {project.details.roleDescription}
              </p>
            </section>

            {/* 03: Key Functional Features */}
            <section aria-labelledby="features-heading">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] text-teal font-semibold">
                  03
                </span>
                <h2
                  id="features-heading"
                  className="font-display font-semibold text-[26px] sm:text-[32px] text-ink"
                >
                  Fitur Utama
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {project.details.keyFeatures.map((feature, i) => (
                  <div
                    key={i}
                    className="p-5 border border-line bg-paper-pure flex items-start gap-3.5"
                  >
                    <span className="font-mono text-[10px] font-bold text-teal shrink-0 pt-0.5">
                      0{i + 1}
                    </span>
                    <p className="text-[13px] leading-relaxed text-ink-subtle">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 04: Technical Highlights */}
            <section aria-labelledby="tech-heading">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] text-teal font-semibold">
                  04
                </span>
                <h2
                  id="tech-heading"
                  className="font-display font-semibold text-[26px] sm:text-[32px] text-ink"
                >
                  Sorotan Teknis &amp; Rekayasa
                </h2>
              </div>
              <ul className="flex flex-col gap-3.5 list-none p-0 mt-4">
                {project.details.technicalHighlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="p-4 border-l-2 border-teal bg-paper-pure border-y border-r border-line text-[13px] sm:text-[14px] leading-relaxed text-ink-subtle"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>

            {/* 05: Outcomes and Impact */}
            <section aria-labelledby="outcomes-heading">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-[10px] text-teal font-semibold">
                  05
                </span>
                <h2
                  id="outcomes-heading"
                  className="font-display font-semibold text-[26px] sm:text-[32px] text-ink"
                >
                  Hasil &amp; Dampak
                </h2>
              </div>
              <div className="p-6 border border-ink bg-paper-card">
                <p className="text-[14px] sm:text-[15px] leading-[1.75] text-ink font-semibold">
                  {project.details.outcomes}
                </p>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar for Stack & External Links */}
          <aside className="lg:border-l lg:border-line lg:pl-10 flex flex-col gap-10">
            {/* Tech Stack */}
            <div>
              <h3 className="font-mono text-[9px] uppercase tracking-wider text-ink-muted mb-4 pb-2 border-b border-line">
                Teknologi yang Digunakan
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stackList.map((tech) => (
                  <span
                    key={tech}
                    className="border border-line py-1.5 px-3 font-mono text-[9px] uppercase tracking-wider text-ink bg-paper-pure"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Artifact Links */}
            <div>
              <h3 className="font-mono text-[9px] uppercase tracking-wider text-ink-muted mb-4 pb-2 border-b border-line">
                Tautan &amp; Repositori
              </h3>
              <div className="flex flex-col gap-4">
                <div className="p-4 border border-line bg-paper-pure flex flex-col gap-1.5">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-ink-muted">
                    Kode Sumber
                  </span>
                  <a
                    href={project.details.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] font-bold text-ink hover:text-teal-dark inline-flex items-center justify-between"
                  >
                    <span>GitHub Repositori</span>
                    <span aria-hidden="true" className="text-teal font-sans">
                      ↗
                    </span>
                  </a>
                  <span className="font-mono text-[8px] text-teal-dark mt-1">
                    [Tautan Placeholder Terkonfirmasi]
                  </span>
                </div>

                <div className="p-4 border border-line bg-paper-pure flex flex-col gap-1.5">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-ink-muted">
                    Live Demo / Video
                  </span>
                  <div className="text-[12px] text-ink-subtle">
                    {project.details.demoUrl}
                  </div>
                </div>
              </div>
            </div>

            {/* Developer Contact Quick Card */}
            <div className="p-5 border border-ink bg-paper-pure">
              <span className="font-mono text-[8px] uppercase tracking-wider text-teal-dark font-semibold block mb-1">
                KONSULTASI &amp; PERTANYAAN
              </span>
              <p className="text-[12px] text-ink-subtle leading-relaxed mb-4">
                Tertarik mendiskusikan implementasi teknis atau kode sumber dari
                proyek ini?
              </p>
              <a
                href={`mailto:${content.contact.email}?subject=Diskusi Proyek ${encodeURIComponent(
                  project.title
                )}`}
                className="font-mono text-[10px] font-bold uppercase tracking-wider border-b border-ink pb-1 hover:text-teal-dark hover:border-teal-dark transition-colors inline-flex items-center gap-1.5"
              >
                <span>Kirim Pertanyaan</span>
                <span aria-hidden="true" className="text-teal font-sans">
                  ↗
                </span>
              </a>
            </div>
          </aside>
        </div>

        {/* Bottom Pagination to Next / Prev Projects */}
        <nav
          className="grid grid-cols-1 sm:grid-cols-2 border-b border-ink font-mono text-[11px]"
          aria-label="Navigasi antar proyek"
        >
          {prevProject ? (
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-ink hover:bg-paper-pure transition-colors group flex flex-col"
            >
              <span className="text-[9px] uppercase tracking-wider text-ink-muted mb-1">
                ← Proyek Sebelumnya
              </span>
              <span className="font-display font-semibold text-[20px] text-ink group-hover:text-teal-dark transition-colors">
                {prevProject.title}
              </span>
            </Link>
          ) : (
            <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-ink text-ink-muted/50 hidden sm:block">
              <span className="text-[9px] uppercase tracking-wider">
                Awal Katalog Proyek
              </span>
            </div>
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-6 sm:p-8 hover:bg-paper-pure transition-colors group flex flex-col sm:items-end text-left sm:text-right"
            >
              <span className="text-[9px] uppercase tracking-wider text-ink-muted mb-1">
                Proyek Selanjutnya →
              </span>
              <span className="font-display font-semibold text-[20px] text-ink group-hover:text-teal-dark transition-colors">
                {nextProject.title}
              </span>
            </Link>
          ) : (
            <div className="p-6 sm:p-8 text-ink-muted/50 hidden sm:flex flex-col items-end">
              <span className="text-[9px] uppercase tracking-wider">
                Akhir Katalog Proyek
              </span>
            </div>
          )}
        </nav>
      </main>

      <Footer />
    </div>
  );
}

