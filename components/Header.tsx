import Link from "next/link";
import { content } from "@/data/content";

export function Header() {
  const { profile } = content;

  return (
    <header className="min-h-[86px] lg:min-h-[102px] grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center border-b border-ink py-4 lg:py-0">
      <Link
        href="/#top"
        className="flex flex-col items-start leading-tight group focus-visible:outline-none"
        aria-label="Kembali ke atas beranda"
      >
        <span className="font-display text-[16px] lg:text-[18px] font-semibold text-ink tracking-tight group-hover:text-teal-dark transition-colors">
          {profile.name}
        </span>
        <span className="font-mono text-[9px] lg:text-[10px] uppercase tracking-widest text-ink-muted mt-1">
          {profile.role}
        </span>
      </Link>

      <nav
        aria-label="Navigasi utama"
        className="hidden lg:flex items-center justify-center gap-9 text-[12px] font-semibold text-ink"
      >
        <Link
          href="/#proyek"
          className="relative py-1 hover:text-ink transition-colors after:content-[''] after:h-[2px] after:bg-teal after:absolute after:left-0 after:right-full after:bottom-[-4px] hover:after:right-0 after:transition-all after:duration-200"
        >
          Proyek
        </Link>
        <Link
          href="/#pengalaman"
          className="relative py-1 hover:text-ink transition-colors after:content-[''] after:h-[2px] after:bg-teal after:absolute after:left-0 after:right-full after:bottom-[-4px] hover:after:right-0 after:transition-all after:duration-200"
        >
          Pengalaman
        </Link>
        <Link
          href="/#tentang"
          className="relative py-1 hover:text-ink transition-colors after:content-[''] after:h-[2px] after:bg-teal after:absolute after:left-0 after:right-full after:bottom-[-4px] hover:after:right-0 after:transition-all after:duration-200"
        >
          Tentang
        </Link>
        <Link
          href="/#kontak"
          className="relative py-1 hover:text-ink transition-colors after:content-[''] after:h-[2px] after:bg-teal after:absolute after:left-0 after:right-full after:bottom-[-4px] hover:after:right-0 after:transition-all after:duration-200"
        >
          Kontak
        </Link>
      </nav>

      <div className="justify-self-end flex items-center gap-3">
        <a
          href={profile.cvUrl}
          download
          className="border border-ink px-3 lg:px-4 py-2.5 lg:py-3 text-[10px] lg:text-[11px] font-mono font-semibold uppercase tracking-wider text-ink hover:bg-ink hover:text-paper transition-colors duration-200 inline-flex items-center group"
          aria-label="Unduh Curriculum Vitae Muhammad Firdan Azhari (PDF)"
        >
          <span>Unduh CV</span>
          <span
            aria-hidden="true"
            className="text-teal ml-2.5 font-sans group-hover:translate-y-0.5 transition-transform"
          >
            ↓
          </span>
        </a>
      </div>
    </header>
  );
}

