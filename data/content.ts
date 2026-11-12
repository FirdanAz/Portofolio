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
      links: [
        { label: "Lihat studi kasus", href: "/projects/satu-desa" },
        {
          label: "GitHub [ISI]",
          href: "https://github.com/firdanazhari/satu-desa",
          isExternal: true,
        },
      ],
      details: {
        overview:
          "Satu Desa adalah platform digital terintegrasi untuk menjembatani birokrasi pemerintahan desa dan kebutuhan warga sehari-hari melalui antarmuka mobile yang intuitif.",
        problemStatement:
          "Warga desa kerap menghadapi hambatan jarak geografis, proses pengajuan berkas manual yang memakan waktu berhari-hari, serta minimnya transparansi informasi terkait alokasi dana dan program sosial desa.",
        roleDescription:
          "Memegang peran penuh (Full-Stack Developer) mulai dari riset kebutuhan pengguna, prototyping UI di Figma, pengembangan klien mobile berbasis Flutter, perancangan skema relasional di MySQL, hingga penulisan endpoint REST API menggunakan Laravel.",
        keyFeatures: [
          "Pengajuan surat keterangan dan dokumen administrasi warga secara daring tanpa antre di kantor kelurahan.",
          "Direktori potensi dan UMKM desa untuk memperluas jangkauan pemasaran komoditas lokal.",
          "Kanal pengumuman resmi dan transparansi agenda desa langsung ke ponsel warga.",
          "Peta persebaran fasilitas publik dan pos pelayanan desa berbasis geolokasi.",
        ],
        technicalHighlights: [
          "State management Flutter yang modular untuk pengalaman transisi antarmuka yang cepat di perangkat entry-level.",
          "Arsitektur REST API Laravel dengan validasi ketat dan penanganan sesi terenkripsi.",
          "Optimasi kueri MySQL pada data demografi untuk menjaga latensi respons di bawah 200 milidetik.",
        ],
        outcomes:
          "Meraih penghargaan Juara 3 Tingkat Nasional pada ajang kompetisi GENETIC 2025 bidang Inovasi Teknologi Layanan Publik.",
        githubUrl: "https://github.com/firdanazhari/satu-desa",
        demoUrl: "[ISI: Tautan video demo / APK uji coba belum dipublikasikan]",
      },
    },
    {
      slug: "notula",
      number: "02",
      title: "Notula",
      category: "Productivity",
      problem:
        "Mengubah rekaman suara dan percakapan rapat yang tercecer menjadi notulensi terstruktur, daftar tindak lanjut (action items), dan ekspor berkas resmi.",
      role: "Full-Stack Developer",
      stack: "FLUTTER  ·  LARAVEL  ·  REST API",
      stackList: ["Flutter", "Laravel", "REST API", "Chunked Upload", "Docx Generator"],
      result: "Alur pencatatan dan distribusi hasil rapat terpusat dalam satu alur kerja.",
      previewType: "notes",
      links: [
        { label: "Lihat studi kasus", href: "/projects/notula" },
        {
          label: "GitHub [ISI]",
          href: "https://github.com/firdanazhari/notula",
          isExternal: true,
        },
      ],
      details: {
        overview:
          "Notula adalah asisten rapat cerdas yang menangani siklus dokumentasi lengkap: dari perekaman audio di perangkat lapangan, pengunggahan data secara terpotong (chunked) yang tahan putus koneksi, sampai format notulen terstruktur yang siap dibagikan.",
        problemStatement:
          "Proses notulensi konvensional rawan kehilangan poin penting, berkas rekaman suara berukuran besar kerap gagal diunggah ketika sinyal seluler tidak stabil, dan pembuatan berkas laporan akhir (.docx) memakan waktu lama.",
        roleDescription:
          "Merancang alur pengguna, mengimplementasikan modul perekaman audio di aplikasi Flutter, serta membangun backend Laravel dengan protokol chunked & resumable upload serta generator dokumen Word.",
        keyFeatures: [
          "Perekam audio langsung di dalam aplikasi dengan kontrol jeda dan penandaan stempel waktu otomatis.",
          "Pengunggahan audio ke server Laravel secara chunked (berkeping) dengan fitur resume otomatis saat jaringan terputus.",
          "Pengelompokan agenda pembahasan, kesimpulan rapat, dan pembagian tugas per peserta rapat.",
          "Ekspor otomatis dokumen hasil rapat ke format file .docx sesuai format standar persuratan organisasi.",
        ],
        technicalHighlights: [
          "Mekanisme chunked file upload dengan verifikasi checksum per keping data untuk mencegah integritas file korup.",
          "Pemrosesan background task di Laravel Queue untuk pembentukan berkas dokumen tanpa memblokir antarmuka pengguna.",
          "Penyimpanan lokal di Flutter (offline-first draft) sehingga pengguna tidak kehilangan catatan meski perangkat kehabisan daya.",
        ],
        outcomes:
          "Memangkas durasi penyusunan dokumen risalah rapat pasca-acara dan meniadakan kendala kegagalan unggah file rekaman besar pada jaringan seluler lemah.",
        githubUrl: "https://github.com/firdanazhari/notula",
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
      links: [
        { label: "Lihat studi kasus", href: "/projects/nusaverse" },
        {
          label: "GitHub [ISI]",
          href: "https://github.com/firdanazhari/nusaverse",
          isExternal: true,
        },
      ],
      details: {
        overview:
          "NUSAVERSE dibangun untuk ajang BytesFest 2026 guna mendukung Target Pembangunan Berkelanjutan (SDG 11: Kota dan Komunitas yang Berkelanjutan) melalui pelestarian warisan budaya Nusantara secara digital.",
        problemStatement:
          "Dokumentasi budaya tradisional Indonesia sering tersebar secara sporadis dan disajikan secara pasif berbasis teks, sehingga kurang mengundang minat eksplorasi generasi muda.",
        roleDescription:
          "Bertanggung jawab atas arsitektur frontend web, menerjemahkan wireframe dan desain Figma menjadi komponen Next.js berbasis TypeScript, serta memastikan visualisasi orbit budaya berjalan mulus pada berbagai resolusi layar.",
        keyFeatures: [
          "Eksplorasi terarah materi adat, pakaian tradisional, tarian, dan rumah adat 34 provinsi.",
          "Navigasi interaktif berbasis kartu dan tata letak dinamis bertema kepulauan Nusantara.",
          "Aksesibilitas web dengan kontras warna terbaca, dukungan pembaca layar, dan navigasi ramah keyboard.",
          "Arsitektur halaman terindeks SEO untuk mendukung literasi budaya di mesin pencari.",
        ],
        technicalHighlights: [
          "Penerapan Next.js App Router dengan Static Site Generation (SSG) untuk pemuatan halaman instan.",
          "Desain sistem modular dengan Tailwind CSS tanpa ketergantungan pustaka animasi berlebih demi menjaga beban bundle minimal.",
          "Optimasi gambar menggunakan next/image dengan format modern WebP/AVIF untuk efisiensi transfer data.",
        ],
        outcomes:
          "Diselesaikan sebagai karya inovasi digital BytesFest 2026 dengan performa Core Web Vitals sempurna dan navigasi bebas hambatan.",
        githubUrl: "https://github.com/firdanazhari/nusaverse",
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
      links: [
        { label: "Lihat studi kasus", href: "/projects/ladangnusa" },
        {
          label: "GitHub [ISI]",
          href: "https://github.com/firdanazhari/ladangnusa",
          isExternal: true,
        },
      ],
      details: {
        overview:
          "LadangNusa adalah sistem manajemen pertanian terpadu yang memadukan pencatatan lapangan secara real-time dengan modul kecerdasan buatan untuk kalkulasi estimasi panen dan pengelolaan sumber daya.",
        problemStatement:
          "Pencatatan bibit, pupuk, dan jadwal tanam yang masih dilakukan secara manual pada buku fisik mempersulit estimasi waktu panen dan analisis biaya operasional per petak lahan.",
        roleDescription:
          "Mengembangkan platform web responsif menggunakan Next.js 14 (App Router) dan TypeScript, merancang komponen dasbor dengan Tailwind CSS, serta mengintegrasikan API backend untuk pemrosesan estimasi produktivitas.",
        keyFeatures: [
          "Dasbor pemantauan multi-lahan dengan metrik luas area dan status siklus tanam aktif.",
          "Kalkulator estimasi proyeksi panen berbasis riwayat luas lahan dan varietas bibit.",
          "Grafik tren produktivitas mingguan yang ringan dan responsif pada peramban seluler.",
          "Buku catatan digital pemupukan, irigasi, dan pengeluaran modal per musim tanam.",
        ],
        technicalHighlights: [
          "Komponen grafik performa tinggi berbasis SVG murni tanpa library chart eksternal yang membebani memori.",
          "Validasi skema form menggunakan TypeScript untuk mencegah anomali data luasan dan kuantitas pupuk.",
          "Integrasi REST API terpisah dengan caching cerdas pada data historis musim tanam.",
        ],
        outcomes:
          "Mempermudah evaluasi operasional lahan tani dengan visualisasi metrik yang langsung dapat dipahami tanpa latar belakang teknis.",
        githubUrl: "https://github.com/firdanazhari/ladangnusa",
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
      url: "https://github.com/firdanazhari",
      display: "github.com/firdanazhari [ISI]",
    },
    linkedin: {
      label: "LinkedIn",
      url: "https://linkedin.com/in/muhammad-firdan-azhari",
      display: "linkedin.com/in/muhammad-firdan-azhari [ISI]",
    },
    location: "Kudus, Jawa Tengah, Indonesia",
  },
};

