import Link from "next/link";
import { content } from "@/data/content";

export function Footer() {
  const { profile } = content;

  return (
    <footer className="min-h-[80px] py-6 flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[9px] uppercase tracking-wider text-ink-muted">
      <p>© {new Date().getFullYear()} {profile.name} — Full-Stack Developer</p>
      <div className="flex items-center gap-6">
        <Link
          href="#top"
          className="hover:text-ink transition-colors inline-flex items-center gap-1.5"
          aria-label="Kembali ke bagian atas halaman"
        >
          <span>Kembali ke atas</span>
          <span aria-hidden="true" className="text-teal font-sans">
            ↑
          </span>
        </Link>
      </div>
    </footer>
  );
}

