import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { content, Project } from "@/data/content";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
    title: `${project.title} — Studi Kasus Rekayasa Perangkat Lunak`,
    description: `${project.details.overview} Peran: ${project.role}. Stack: ${project.stack}.`,
    openGraph: {
      title: `${project.title} | Muhammad Firdan Azhari`,
      description: project.details.overview,
      url: `https://firdanazhari.vercel.app/projects/${project.slug}`,
      images: [
        {
          url: project.coverImage,
          width: 1200,
          height: 630,
          alt: `Tangkapan layar antarmuka proyek ${project.title}`,
        },
      ],
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

          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-ink-muted">
            <span className="px-2 py-0.5 border border-line bg-paper-pure text-ink">
              {project.platform === "mobile" ? "Mobile App" : "Web Platform"}
            </span>
            <span>STUDI KASUS / {project.number}</span>
          </div>
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
                Platform &amp; Kategori
              </span>
              <b className="text-[12px] sm:text-[13px] font-semibold text-ink">
                {project.platform === "mobile" ? "Mobile" : "Web"} · {project.category}
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

        {/* Hero Visual Showcase — Customized by Platform */}
        <section
          className="py-12 lg:py-16 border-b border-ink"
          aria-labelledby="preview-heading"
        >
          <h2 id="preview-heading" className="sr-only">
            Visual Antarmuka Utama Proyek
          </h2>

          {project.platform === "mobile" ? (
            /* Multi-Device Smartphone Showcase for Mobile Apps */
            <div className="max-w-[1100px] mx-auto border border-ink bg-[#E8EFE8] py-10 px-4 sm:px-8">
              <div className="flex items-center justify-center gap-4 sm:gap-8 overflow-hidden">
                {/* Main Screen */}
                <div className="w-[185px] sm:w-[230px] aspect-[9/19] rounded-[28px] sm:rounded-[34px] border-[3.5px] border-ink bg-paper-pure shadow-lg overflow-hidden relative shrink-0">
                  <div
                    className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-ink rounded-full z-10"
                    aria-hidden="true"
                  />
                  <Image
                    src={project.coverImage}
                    alt={`Tangkapan layar antarmuka utama ${project.title}`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 185px, 230px"
                  />
                </div>

                {/* Second Feature Screen */}
                {project.secondaryImage && (
                  <div className="w-[185px] sm:w-[220px] aspect-[9/19] rounded-[28px] sm:rounded-[34px] border-[3px] border-ink/80 bg-paper-pure shadow-md overflow-hidden relative shrink-0">
                    <div
                      className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-ink/80 rounded-full z-10"
                      aria-hidden="true"
                    />
                    <Image
                      src={project.secondaryImage}
                      alt={`Tangkapan layar fitur kedua ${project.title}`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 185px, 220px"
                    />
                  </div>
                )}

                {/* Third Feature Screen on larger screens */}
                {project.galleryImages.length > 2 && (
                  <div className="hidden md:block w-[205px] aspect-[9/19] rounded-[34px] border-[3px] border-ink/60 bg-paper-pure shadow-sm overflow-hidden relative opacity-90 shrink-0">
                    <div
                      className="absolute top-2.5 left-1/2 -translate-x-1/2 w-14 h-3 bg-ink/60 rounded-full z-10"
                      aria-hidden="true"
                    />
                    <Image
                      src={project.galleryImages[2].url}
                      alt={`Tangkapan layar fitur ketiga ${project.title}`}
                      fill
                      className="object-cover object-top"
                      sizes="205px"
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* Desktop Web Browser Showcase */
            <div className="max-w-[1100px] mx-auto border border-ink bg-paper-card p-4 sm:p-8">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] border border-ink overflow-hidden bg-paper-pure shadow-sm">
                <div
                  className="h-6 bg-paper-muted border-b border-ink/20 px-3 flex items-center gap-1.5"
                  aria-hidden="true"
                >
                  <span className="w-2 h-2 rounded-full bg-ink/40" />
                  <span className="w-2 h-2 rounded-full bg-ink/40" />
                  <span className="w-2 h-2 rounded-full bg-ink/40" />
                  <span className="ml-4 text-[9px] font-mono text-ink-muted">
                    https://{project.slug}.app
                  </span>
                </div>
                <div className="relative w-full h-[calc(100%-24px)]">
                  <Image
                    src={project.coverImage}
                    alt={`Tangkapan layar antarmuka utama ${project.title}`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1200px) 100vw, 1100px"
                  />
                </div>
              </div>
            </div>
          )}

          <p className="font-mono text-[9px] uppercase tracking-wider text-ink-muted text-center mt-4">
            FIG. {project.number} — REPRESENTASI ANTARMUKA {project.title.toUpperCase()} (
            {project.platform === "mobile" ? "APLIKASI MOBILE FLUTTER" : "PLATFORM WEB NEXT.JS"})
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

            {/* 06: Full Screenshot Gallery — Tailored for Mobile vs Web */}
            {project.galleryImages.length > 0 && (
              <section aria-labelledby="gallery-heading">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-[10px] text-teal font-semibold">
                    06
                  </span>
                  <h2
                    id="gallery-heading"
                    className="font-display font-semibold text-[26px] sm:text-[32px] text-ink"
                  >
                    Galeri Antarmuka &amp; Alur Fitur
                  </h2>
                </div>
                <p className="text-[13px] text-ink-muted mb-6">
                  {project.platform === "mobile"
                    ? "Tangkapan layar antarmuka aplikasi mobile dengan rasio layar smartphone utuh:"
                    : "Dokumentasi visual tangkapan layar antarmuka dari platform web yang dikembangkan:"}
                </p>

                {project.platform === "mobile" ? (
                  /* Mobile Gallery: 4 columns on large, 3 on tablet, 2 on phone with smartphone portrait ratio */
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                    {project.galleryImages.map((img, idx) => (
                      <figure
                        key={img.url + idx}
                        className="border border-ink bg-paper-pure p-3 flex flex-col justify-between group hover:border-teal-dark transition-colors"
                      >
                        <div className="w-full aspect-[9/18.5] border border-ink/80 rounded-[20px] overflow-hidden relative bg-paper-muted shadow-sm">
                          {/* Mini Notch */}
                          <div
                            className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-ink/80 rounded-full z-10"
                            aria-hidden="true"
                          />
                          <Image
                            src={img.url}
                            alt={img.alt}
                            fill
                            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                        </div>
                        <figcaption className="pt-3 font-mono text-[8px] uppercase tracking-wider text-ink-subtle">
                          <b className="text-teal font-bold mr-1.5">
                            #{idx + 1}
                          </b>
                          <span>{img.caption}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ) : (
                  /* Web Gallery: 2 columns with landscape ratio */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.galleryImages.map((img, idx) => (
                      <figure
                        key={img.url + idx}
                        className="border border-ink bg-paper-pure p-3 flex flex-col justify-between group hover:border-teal-dark transition-colors"
                      >
                        <div className="relative w-full aspect-[16/10] border border-line overflow-hidden bg-paper-muted">
                          <Image
                            src={img.url}
                            alt={img.alt}
                            fill
                            className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, 500px"
                          />
                        </div>
                        <figcaption className="pt-3 font-mono text-[8px] uppercase tracking-wider text-ink-subtle">
                          <b className="text-teal font-bold mr-1.5">
                            #{idx + 1}
                          </b>
                          <span>{img.caption}</span>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </section>
            )}
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
                <div className="p-4 border border-ink bg-paper-pure flex flex-col gap-1.5">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-ink-muted">
                    Kode Sumber
                  </span>
                  <a
                    href={project.details.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] font-bold text-ink hover:text-teal-dark inline-flex items-center justify-between"
                  >
                    <span>Kunjungi Repositori GitHub</span>
                    <span aria-hidden="true" className="text-teal font-sans">
                      ↗
                    </span>
                  </a>
                  <span className="font-mono text-[8px] text-teal-dark mt-1 break-all">
                    {project.details.githubUrl}
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
