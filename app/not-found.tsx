import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="max-w-shell mx-auto px-5 sm:px-8 lg:px-12 fade-in-section">
      <Header />
      <main className="min-h-[60vh] flex flex-col justify-center items-start py-20 border-b border-ink">
        <span className="font-mono text-[12px] text-teal font-semibold mb-3">
          404 / NOT FOUND
        </span>
        <h1 className="font-display font-semibold text-[48px] sm:text-[64px] text-ink leading-tight mb-4">
          Halaman tidak ditemukan.
        </h1>
        <p className="text-[14px] sm:text-[16px] text-ink-subtle max-w-[500px] mb-8">
          Halaman atau studi kasus yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>
        <Link
          href="/"
          className="border border-ink px-5 py-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-ink hover:bg-ink hover:text-paper transition-colors"
        >
          ← Kembali ke Beranda
        </Link>
      </main>
      <Footer />
    </div>
  );
}

