export interface ProjectImage {
  url: string;
  caption: string;
  alt: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  problem: string;
  role: string;
  stack: string;
  stackList: string[];
  result: string;
  featured?: boolean;
  coverImage: string;
  galleryImages: ProjectImage[];
  previewType: "village" | "notes" | "nusa" | "farm";
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
  }[];
  details: {
    overview: string;
    problemStatement: string;
    roleDescription: string;
    keyFeatures: string[];
    technicalHighlights: string[];
    outcomes: string;
    githubUrl: string;
    demoUrl: string;
  };
}

export interface ExperienceItem {
  period: string;
  periodShort: string;
  company: string;
  parentCompany?: string;
  role: string;
  description: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string;
}

export interface PortfolioContent {
  profile: {
    name: string;
    role: string;
    location: string;
    tagline: string;
    availability: string;
    sellingProposition: {
      headline: string;
      accent: string;
      paragraph: string;
      note: string;
    };
    quickFacts: {
      number: string;
      title: string;
      subtitle: string;
    }[];
    aboutText: {
      lead: string;
      objective: string;
    };
    cvUrl: string;
  };
  projects: Project[];
  experience: ExperienceItem[];
  skills: SkillCategory[];
  contact: {
    title: string;
    titleAccent: string;
    email: string;
    github: {
      label: string;
      url: string;
      display: string;
    };
    linkedin: {
      label: string;
      url: string;
      display: string;
    };
    location: string;
  };
}

export const content: PortfolioContent = {
  profile: {
    name: "Muhammad Firdan Azhari",
    role: "Full-Stack Developer",
    location: "Kudus, Jawa Tengah",
    tagline: "Flutter · Laravel · Next.js",
    availability: "Tersedia untuk magang & kerja",
    sellingProposition: {
      headline: "Dari rancangan UI hingga API dan",
      accent: "rilis.",
      paragraph:
        "Saya membangun produk digital secara utuh—menerjemahkan kebutuhan pengguna menjadi antarmuka yang jelas, backend REST API yang rapi, dan aplikasi yang siap diandalkan di lingkungan produksi.",
      note: "Mahasiswa sekaligus pengembang perangkat lunak dengan pengalaman kerja nyata.",
    },
    quickFacts: [
      {
        number: "01",
        title: "Juara 3 Nasional",
        subtitle: "GENETIC 2025",
      },
      {
        number: "02",
        title: "1 tahun",
        subtitle: "pengalaman kerja nyata",
      },
      {
        number: "03",
        title: "Flutter · Laravel",
        subtitle: "Next.js & TypeScript",
      },
    ],
    aboutText: {
      lead: "Saya Muhammad Firdan Azhari, mahasiswa dan Full-Stack Developer dari Kudus. Saya nyaman bekerja melintasi batas disiplin: dari iterasi desain di Figma, penulisan kode aplikasi mobile, hingga arsitektur REST API dan integrasi basis data tanpa kehilangan fokus pada detail pengalaman pengguna.",
      objective:
        "Fokus saat ini: bergabung dengan tim rekayasa perangkat lunak yang memprioritaskan kualitas teknis, memecahkan masalah nyata dengan dampak terukur, dan merilis produk yang benar-benar digunakan.",
    },
    cvUrl: "/muhammad-firdan-azhari-cv.pdf",
  },
  projects: [
    {
      slug: "satu-desa",
      number: "01",
      title: "Satu Desa",
      category: "Civic Technology",
      problem:
        "Menyatukan layanan administrasi kependudukan, publikasi informasi resmi, dan pemetaan potensi desa dalam satu aplikasi mobile yang mudah diakses warga.",
      role: "Full-Stack Developer",
      stack: "FLUTTER  ·  LARAVEL  ·  MYSQL",
      stackList: ["Flutter", "Laravel", "MySQL", "REST API", "Figma"],
      result: "Juara 3 Nasional GENETIC 2025",
      featured: true,
      previewType: "village",
      coverImage: "/projects/satu-desa/home.png",
      galleryImages: [
        {
          url: "/projects/satu-desa/home.png",
          caption: "Beranda Utama & Akses Cepat Layanan Warga",
          alt: "Tampilan beranda utama aplikasi mobile Satu Desa",
        },
        {
          url: "/projects/satu-desa/layanan-surat.png",
          caption: "Alur Formulir Pengajuan Dokumen Administrasi Kependudukan",
          alt: "Formulir permohonan surat administrasi warga Satu Desa",
        },
        {
          url: "/projects/satu-desa/dana-desa.png",
          caption: "Transparansi Anggaran Pendapatan dan Belanja Desa (APBDes)",
          alt: "Modul transparansi dan laporan alokasi dana desa",
        },
        {
          url: "/projects/satu-desa/kabar-desa.png",
          caption: "Feed Publikasi Berita dan Agenda Kegiatan Resmi Kelurahan",
          alt: "Feed kabar dan pengumuman resmi warga desa",
        },
        {
          url: "/projects/satu-desa/detail-kabar-desa.png",
          caption: "Tampilan Detail Berita dengan Dokumentasi Kegiatan Warga",
          alt: "Detail kabar desa Satu Desa",
        },
        {
          url: "/projects/satu-desa/bayar-sampah.png",
          caption: "Modul Pembayaran Retribusi Iuran Sampah & Layanan Publik",
          alt: "Antarmuka pembayaran retribusi kebersihan desa",
        },
      ],
      links: [
        { label: "Lihat studi kasus", href: "/projects/satu-desa" },
        {
          label: "GitHub Repositori",
          href: "https://github.com/FirdanAz/Satu-Desa-Genetic-2025",
          isExternal: true,
        },
      ],
      details: {
        overview:
          "Satu Desa adalah platform digital terintegrasi untuk memodernisasi tata kelola birokrasi pemerintahan desa dan mempercepat pelayanan administrasi warga melalui antarmuka mobile yang mudah dipahami.",
        problemStatement:
          "Warga desa kerap terkendala oleh jarak fisik ke kantor kelurahan, antrean panjang untuk urusan surat menyurat, serta minimnya keterbukaan informasi perihal realisasi anggaran dan agenda bantuan desa.",
        roleDescription:
          "Bertindak sebagai Full-Stack Developer: merancang alur interaksi dan desain antarmuka di Figma, membangun aplikasi klien berbasis Flutter, merancang skema relasional di MySQL, dan mengimplementasikan seluruh endpoint REST API di backend Laravel.",
        keyFeatures: [
          "Pengajuan surat pengantar dan dokumen kependudukan secara digital tanpa harus datang ke balai desa.",
          "Modul transparansi APBDes dan alokasi dana pembangunan desa secara transparan.",
          "Sistem pembayaran retribusi dan iuran sampah berkala bagi warga.",
          "Pusat informasi berita, agenda sosialisasi, dan pengumuman penting pemerintah desa.",
        ],
        technicalHighlights: [
          "Pengelolaan state Flutter yang terstruktur untuk menjamin keandalan aplikasi pada berbagai spesifikasi ponsel Android.",
          "Backend REST API Laravel dengan proteksi validasi request, token authentication, dan query optimal pada MySQL.",
          "Penanganan offline caching untuk daftar riwayat pengajuan surat sehingga warga tetap dapat mengecek status dokumen saat jaringan lambat.",
        ],
        outcomes:
          "Berhasil meraih penghargaan Juara 3 Tingkat Nasional pada ajang kompetisi GENETIC 2025 kategori Inovasi Teknologi Pelayanan Publik.",
        githubUrl: "https://github.com/FirdanAz/Satu-Desa-Genetic-2025",
        demoUrl: "[ISI: Tautan video demo / APK uji coba belum dipublikasikan]",
      },
    },
    {
      slug: "notula",
      number: "02",
      title: "Notula",
      category: "Productivity",
      problem:
        "Mengubah rekaman suara dan percakapan rapat yang panjang menjadi notulensi terstruktur, pembagian action items, serta ekspor berkas .docx otomatis.",
      role: "Full-Stack Developer",
      stack: "FLUTTER  ·  LARAVEL  ·  REST API",
      stackList: ["Flutter", "Laravel", "REST API", "Chunked Upload", "Docx Generator"],
      result: "Alur dokumentasi rapat terorganisir dengan mekanisme unggah audio tahan putus koneksi.",
      previewType: "notes",
      coverImage: "/projects/notula/02-home.png",
      galleryImages: [
        {
          url: "/projects/notula/02-home.png",
          caption: "Dasbor Beranda Notula & Riwayat Rapat Aktif",
          alt: "Tampilan beranda aplikasi Notula",
        },
        {
          url: "/projects/notula/04-recording.png",
          caption: "Antarmuka Perekaman Audio Rapat dengan Visual Gelombang Suara",
          alt: "Layar perekaman suara audio Notula",
        },
        {
          url: "/projects/notula/05-processing.png",
          caption: "Proses Unggah Chunked & Resumable Audio ke Server",
          alt: "Proses komputasi dan pengunggahan audio",
        },
        {
          url: "/projects/notula/06-recap.png",
          caption: "Rekapitulasi Poin Diskusi, Catatan Penting, dan Keputusan",
          alt: "Ringkasan notulensi rapat Notula",
        },
        {
          url: "/projects/notula/08-output.png",
          caption: "Daftar Tindak Lanjut (Action Items) per Penanggung Jawab",
          alt: "Daftar action items rapat",
        },
        {
          url: "/projects/notula/09-templates.png",
          caption: "Pilihan Format & Template Standar Dokumen Risalah Rapat",
          alt: "Template dokumen notulen Notula",
        },
        {
          url: "/projects/notula/10-editor.png",
          caption: "Editor Teks Interaktif untuk Penyesuaian Risalah Sebelum Ekspor",
          alt: "Editor catatan hasil rapat Notula",
        },
        {
          url: "/projects/notula/11-detail.png",
          caption: "Pratinjau Dokumen Siap Cetak dan Ekspor Format .docx",
          alt: "Detail berkas risalah dan tombol ekspor .docx",
        },
      ],
      links: [
        { label: "Lihat studi kasus", href: "/projects/notula" },
        {
          label: "GitHub Repositori",
          href: "https://github.com/FirdanAz/notula_mobile-app",
          isExternal: true,
        },
      ],
      details: {
        overview:
          "Notula adalah asisten rapat mobile yang menyelesaikan permasalahan utama pencatatan rapat: kegagalan unggah file audio besar, pencatatan manual yang memakan waktu, dan format laporan akhir yang berantakan.",
        problemStatement:
          "File audio durasi panjang sering gagal diunggah karena batas timeout server atau sinyal seluler yang fluktuatif di ruang rapat, sementara penulisan dokumen resmi pasca-rapat kerap tertunda berhari-hari.",
        roleDescription:
          "Mengembangkan aplikasi Flutter dari perekam audio hingga antarmuka editor, serta membangun backend Laravel dengan protokol chunked & resumable upload serta integrasi generator file .docx.",
        keyFeatures: [
          "Modul perekaman audio built-in dengan jeda dan stempel waktu transkrip.",
          "Sistem pengunggahan chunked & resumable yang dapat melanjutkan unggahan otomatis saat koneksi internet pulih.",
          "Strukturisasi cerdas notulensi menjadi pembagian: Agenda, Keputusan Utama, dan Tindak Lanjut (Action Items).",
          "Ekspor dokumen notulen instan ke berkas berekstensi .docx yang siap diarsipkan atau dicetak.",
        ],
        technicalHighlights: [
          "Protokol chunked upload di Laravel dengan kalkulasi checksum hash SHA-256 untuk memastikan keutuhan berkas audio.",
          "Antarmuka Flutter berbasis clean architecture dan reactive state untuk kontrol audio yang mulus.",
          "Pembangkitan berkas dokumen Word (.docx) berbasis template XML kustom di sisi server.",
        ],
        outcomes:
          "Menjamin reliabilitas pengunggahan file audio hingga ratusan megabyte tanpa risiko korup berkas dan memangkas waktu penyusunan risalah rapat hingga 60%.",
        githubUrl: "https://github.com/FirdanAz/notula_mobile-app",
        demoUrl: "[ISI: Tautan demo Notula belum dipublikasikan]",
      },
    },
    {
      slug: "nusaverse",
      number: "03",
      title: "NUSAVERSE",
      category: "Edutech & Culture",
      problem:
        "Menyajikan kekayaan budaya 34 provinsi Nusantara melalui platform digital interaktif untuk kompetisi BytesFest 2026 yang mendukung agenda SDG 11.",
      role: "Frontend Developer",
      stack: "NEXT.JS  ·  TYPESCRIPT  ·  TAILWIND",
      stackList: ["Next.js", "TypeScript", "Tailwind CSS", "Figma", "SDG 11 Alignment"],
      result: "Eksplorasi warisan budaya interaktif dengan navigasi visual yang aksesibel.",
      previewType: "nusa",
      coverImage: "/projects/nusaverse/hero-overview.png",
      galleryImages: [
        {
          url: "/projects/nusaverse/hero-overview.png",
          caption: "Halaman Utama Eksplorasi Digital Kebudayaan Nusantara",
          alt: "Tampilan beranda visual NUSAVERSE",
        },
        {
          url: "/projects/nusaverse/explore-provinsi.png",
          caption: "Katalog & Eksplorasi Keragaman Budaya 34 Provinsi Indonesia",
          alt: "Direktori 34 provinsi pada NUSAVERSE",
        },
        {
          url: "/projects/nusaverse/budaya-detail.png",
          caption: "Halaman Narasi Warisan Budaya, Busana Tradisional, dan Filosofi Adat",
          alt: "Detail dokumentasi warisan budaya NUSAVERSE",
        },
        {
          url: "/projects/nusaverse/interaktif-map.png",
          caption: "Peta Persebaran Budaya Interaktif yang Mendukung Agenda SDG 11",
          alt: "Peta persebaran kebudayaan Indonesia interaktif",
        },
      ],
      links: [
        { label: "Lihat studi kasus", href: "/projects/nusaverse" },
        {
          label: "GitHub Repositori",
          href: "https://github.com/FirdanAz/nusaverse-bytesfest2026",
          isExternal: true,
        },
      ],
      details: {
        overview:
          "NUSAVERSE dibangun untuk kompetisi nasional BytesFest 2026 sebagai sarana edukasi kebudayaan interaktif berbasis web yang sejalan dengan Tujuan Pembangunan Berkelanjutan (SDG 11: Kota dan Komunitas yang Berkelanjutan).",
        problemStatement:
          "Dokumentasi tradisi Nusantara sering kali disajikan secara pasif berbasis teks tebal tanpa navigasi visual yang mengundang generasi muda untuk menjelajahi keunikan setiap daerah.",
        roleDescription:
          "Bertanggung jawab atas arsitektur frontend web: menerjemahkan rancangan sistem desain dari Figma ke komponen React/Next.js, menyusun tata letak responsif bertema Nusantara, serta mengoptimasi performa pemuatan gambar.",
        keyFeatures: [
          "Navigasi interaktif kebudayaan 34 provinsi Nusantara.",
          "Koleksi informasi pakaian adat, rumah tradisional, senjata pusaka, dan tarian daerah.",
          "Desain antarmuka bertema budaya dengan tipografi terbaca dan struktur aksesibilitas tinggi.",
          "Dukungan keyboard navigation dan kontras warna yang ramah bagi seluruh pengguna.",
        ],
        technicalHighlights: [
          "Penerapan Next.js App Router dengan Static Site Generation (SSG) untuk rendering halaman super cepat.",
          "Komponen reusable berbasis TypeScript dan Tailwind CSS tanpa dependensi library eksternal yang membebani browser.",
          "Optimalisasi aset grafis menggunakan next/image dengan format modern WebP/AVIF.",
        ],
        outcomes:
          "Diselesaikan sebagai karya inovasi kompetisi BytesFest 2026 dengan performa Core Web Vitals tinggi dan tata letak yang konsisten di perangkat seluler maupun desktop.",
        githubUrl: "https://github.com/FirdanAz/nusaverse-bytesfest2026",
        demoUrl: "[ISI: Tautan demo web NUSAVERSE belum dipublikasikan]",
      },
    },
    {
      slug: "ladangnusa",
      number: "04",
      title: "LadangNusa",
      category: "Agritech & AI",
      problem:
        "Membantu petani mencatat siklus tanam, menganalisis produktivitas lahan, dan memproyeksikan hasil panen dengan bantuan pemodelan cerdas tanpa alur yang rumit.",
      role: "Full-Stack Developer",
      stack: "NEXT.JS 14  ·  TYPESCRIPT  ·  LARAVEL",
      stackList: ["Next.js 14", "TypeScript", "Tailwind CSS", "Laravel", "REST API", "AI Model API"],
      result: "Pencatatan lahan, kalkulasi panen, dan metrik produktivitas terpusat dalam satu dasbor.",
      previewType: "farm",
      coverImage: "/projects/ladangnusa/dashboard-main.png",
      galleryImages: [
        {
          url: "/projects/ladangnusa/dashboard-main.png",
          caption: "Dasbor Utama Manajemen Operasional Pertanian & Status Lahan",
          alt: "Dasbor web monitoring pertanian LadangNusa",
        },
        {
          url: "/projects/ladangnusa/lahan-monitoring.png",
          caption: "Detail Pemantauan Petak Lahan, Varietas Tanaman, dan Luas Area",
          alt: "Tabel dan kartu monitoring lahan LadangNusa",
        },
        {
          url: "/projects/ladangnusa/analisis-ai.png",
          caption: "Panel Analisis & Rekomendasi Cerdas Tindakan Agronomi Berbasis AI",
          alt: "Modul insight dan rekomendasi cerdas LadangNusa",
        },
        {
          url: "/projects/ladangnusa/proyeksi-panen.png",
          caption: "Grafik Proyeksi Panen dan Estimasi Hasil Produktivitas Komoditas",
          alt: "Grafik proyeksi dan kalkulasi panen",
        },
        {
          url: "/projects/ladangnusa/jadwal-irigasi.png",
          caption: "Kalender Perawatan Tanaman: Jadwal Pemupukan dan Irigasi Lapangan",
          alt: "Kalender dan jadwal kerja tani LadangNusa",
        },
      ],
      links: [
        { label: "Lihat studi kasus", href: "/projects/ladangnusa" },
        {
          label: "GitHub Repositori",
          href: "https://github.com/FirdanAz/ladangnusa-web",
          isExternal: true,
        },
      ],
      details: {
        overview:
          "LadangNusa adalah sistem manajemen pertanian terpadu berbasis Next.js 14 yang menghubungkan pemantauan kondisi lahan secara real-time dengan modul kecerdasan buatan untuk proyeksi hasil panen.",
        problemStatement:
          "Pencatatan bibit, pupuk, dan jadwal tanam yang masih dilakukan secara konvensional pada buku catatan manual menyulitkan petani dalam menghitung biaya produksi serta memproyeksikan waktu panen optimal.",
        roleDescription:
          "Membangun arsitektur frontend web menggunakan Next.js 14 (App Router) dan TypeScript, merancang komponen dasbor dengan Tailwind CSS, serta mengintegrasikan REST API backend untuk pemrosesan data kalkulasi pertanian.",
        keyFeatures: [
          "Dasbor pemantauan multi-petak lahan dengan metrik luas area dan varietas tanaman.",
          "Kalkulator proyeksi estimasi hasil panen berdasarkan input parameter luasan dan komoditas.",
          "Visualisasi grafik produktivitas mingguan yang responsif diakses dari ponsel petani.",
          "Buku catatan digital pemupukan, pengairan, dan pencatatan pengeluaran modal tani.",
        ],
        technicalHighlights: [
          "Komponen grafik visualisasi data yang ringan dan adaptif terhadap layar smartphone.",
          "Validasi formulir berbasis TypeScript untuk meminimalisir kesalahan entri kuantitas pupuk dan benih.",
          "Struktur caching API yang efisien untuk mempercepat navigasi riwayat musim tanam.",
        ],
        outcomes:
          "Memudahkan evaluasi operasional lahan tani dengan penyajian data yang intuitif tanpa membutuhkan keahlian teknis yang rumit.",
        githubUrl: "https://github.com/FirdanAz/ladangnusa-web",
        demoUrl: "[ISI: Tautan demo LadangNusa belum dipublikasikan]",
      },
    },
  ],
  experience: [
    {
      period: "Maret 2024 — Maret 2025",
      periodShort: "MAR 2024\n— MAR 2025",
      company: "Digital Code",
      parentCompany: "CV. Bahagia Putra",
      role: "Mobile Developer",
      description:
        "Mengembangkan dan memelihara aplikasi mobile berbasis Flutter di lingkungan produksi komersial, mengintegrasikan endpoint REST API yang kompleks, serta berkolaborasi aktif dengan perancang antarmuka dan pengembang backend untuk menjamin kualitas rilis yang stabil.",
      highlights: [
        "Pengembangan Fitur Flutter",
        "Integrasi REST API & Validasi Data",
        "State Management & Optimalisasi UI",
        "Perbaikan Bug & Prosedur Rilis",
      ],
    },
  ],
  skills: [
    {
      category: "MOBILE",
      skills: "Flutter, Dart, Firebase, State Management (Bloc / Provider)",
    },
    {
      category: "BACKEND",
      skills: "Laravel, PHP, REST API, MySQL, Relational Database Design",
    },
    {
      category: "FRONTEND",
      skills: "Next.js, React, TypeScript, Tailwind CSS, HTML5 & Modern CSS",
    },
    {
      category: "TOOLS & WORKFLOW",
      skills: "Git, GitHub, Figma, Postman, Linux Basics, Vercel",
    },
  ],
  contact: {
    title: "Mari bicara tentang",
    titleAccent: "kesempatan.",
    email: "muhammadfirdanazhari@gmail.com",
    github: {
      label: "GitHub",
      url: "https://github.com/FirdanAz",
      display: "github.com/FirdanAz",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://linkedin.com/in/muhammad-firdan-azhari",
      display: "linkedin.com/in/muhammad-firdan-azhari [ISI]",
    },
    location: "Kudus, Jawa Tengah, Indonesia",
  },
};
