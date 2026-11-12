const projects = [
  {
    number: "01",
    title: "Satu Desa",
    category: "Civic technology",
    problem:
      "Menyatukan layanan administrasi, informasi, dan potensi desa dalam satu aplikasi yang mudah dipakai warga.",
    role: "Full-Stack Developer",
    stack: "FLUTTER  ·  LARAVEL  ·  MYSQL",
    result: "Juara 3 Nasional GENETIC 2025",
    links: ["Lihat studi kasus", "GitHub"],
    featured: true,
    preview: "village",
  },
  {
    number: "02",
    title: "Notula",
    category: "Productivity",
    problem:
      "Mengubah catatan rapat yang tercecer menjadi notulensi terstruktur dan mudah ditindaklanjuti.",
    role: "Full-Stack Developer",
    stack: "NEXT.JS  ·  TYPESCRIPT  ·  API",
    result: "Alur pencatatan rapat lebih ringkas dalam satu ruang kerja.",
    links: ["Demo", "GitHub"],
    preview: "notes",
  },
  {
    number: "03",
    title: "NUSAVERSE",
    category: "Edutech",
    problem:
      "Membuat pembelajaran budaya Nusantara terasa lebih dekat melalui pengalaman digital yang interaktif.",
    role: "Frontend Developer",
    stack: "NEXT.JS  ·  TAILWIND  ·  FIGMA",
    result: "Eksplorasi materi budaya dengan navigasi yang mudah dipahami.",
    links: ["Demo", "GitHub"],
    preview: "nusa",
  },
  {
    number: "04",
    title: "LadangNusa",
    category: "Agritech",
    problem:
      "Membantu petani mencatat aktivitas lahan dan memantau hasil panen tanpa alur yang rumit.",
    role: "Full-Stack Developer",
    stack: "FLUTTER  ·  LARAVEL  ·  REST API",
    result: "Pencatatan lahan dan panen terpusat dalam satu aplikasi.",
    links: ["Demo", "GitHub"],
    preview: "farm",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function ProjectPreview({ type }: { type: string }) {
  if (type === "village") {
    return (
      <div className="project-shot shot-village" aria-label="Preview antarmuka aplikasi Satu Desa">
        <div className="shot-top">
          <b>SATU DESA</b>
          <span>Desa dalam genggaman</span>
        </div>
        <div className="village-body">
          <div className="village-copy">
            <small>Halo, Warga</small>
            <strong>
              Layanan desa,
              <br />
              lebih dekat.
            </strong>
            <button>Ajukan surat →</button>
          </div>
          <div className="village-map">
            <span>Balai Desa</span>
            <i></i>
            <i></i>
            <i></i>
          </div>
        </div>
        <div className="shot-nav">
          <span>Beranda</span>
          <span>Layanan</span>
          <span>Potensi</span>
          <span>Profil</span>
        </div>
      </div>
    );
  }
  if (type === "notes") {
    return (
      <div className="project-shot shot-notes" aria-label="Preview antarmuka aplikasi Notula">
        <aside>
          <b>N.</b>
          <span>Hari ini</span>
          <span>Rapat</span>
          <span>Arsip</span>
        </aside>
        <div className="notes-main">
          <small>RAPAT PRODUK / 14 MEI</small>
          <h4>Catatan sprint mingguan</h4>
          <div className="note-line long"></div>
          <div className="note-line"></div>
          <div className="note-card">
            <b>03</b>
            <span>
              Action items
              <br />
              <small>Siap ditindaklanjuti</small>
            </span>
          </div>
        </div>
      </div>
    );
  }
  if (type === "nusa") {
    return (
      <div className="project-shot shot-nusa" aria-label="Preview antarmuka NUSAVERSE">
        <div className="nusa-title">
          <small>JELAJAH NUSANTARA</small>
          <strong>
            NUSA
            <br />
            VERSE
          </strong>
          <span>Warisan hidup dalam cerita.</span>
        </div>
        <div className="nusa-orbit">
          <i></i>
          <i></i>
          <b>34</b>
          <small>PROVINSI</small>
        </div>
      </div>
    );
  }
  return (
    <div className="project-shot shot-farm" aria-label="Preview antarmuka LadangNusa">
      <div className="farm-head">
        <small>LADANGNUSA / DASHBOARD</small>
        <span>Musim tanam 02</span>
      </div>
      <div className="farm-grid">
        <div>
          <small>TOTAL LAHAN</small>
          <b>
            12.4 <i>ha</i>
          </b>
        </div>
        <div>
          <small>PROYEKSI PANEN</small>
          <b>
            8.2 <i>ton</i>
          </b>
        </div>
      </div>
      <div className="farm-chart">
        <span>Produktivitas mingguan</span>
        <svg viewBox="0 0 300 80" preserveAspectRatio="none">
          <polyline points="0,65 40,56 78,60 120,36 160,44 205,18 250,29 300,8" />
        </svg>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="identity" href="#top" aria-label="Kembali ke atas">
          <span className="identity-name">Muhammad Firdan Azhari</span>
          <span className="identity-role">Full-Stack Developer</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#proyek">Proyek</a>
          <a href="#tentang">Tentang</a>
          <a href="#kontak">Kontak</a>
        </nav>
        <a className="cv-link" href="/muhammad-firdan-azhari-cv.txt" download>
          Unduh CV <span aria-hidden="true">↓</span>
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-index mono">PORTFOLIO / 2025</div>
          <div className="hero-main">
            <p className="eyebrow">
              <span></span> Tersedia untuk magang &amp; kerja
            </p>
            <h1 id="hero-title">
              Dari rancangan UI
              <br />
              hingga API dan <em>rilis.</em>
            </h1>
            <p className="hero-intro">
              Saya membangun produk digital secara utuh—menerjemahkan kebutuhan menjadi antarmuka
              yang jelas, backend yang rapi, dan aplikasi yang siap dipakai.
            </p>
          </div>
          <div className="hero-aside">
            <p className="margin-note">
              Mahasiswa sekaligus developer dengan pengalaman kerja nyata.
            </p>
            <span className="rule-mark">01—</span>
          </div>
          <div className="quick-facts" aria-label="Fakta singkat">
            <div>
              <b>01</b>
              <p>
                <strong>Juara 3 Nasional</strong>
                <span>GENETIC 2025</span>
              </p>
            </div>
            <div>
              <b>02</b>
              <p>
                <strong>1 tahun</strong>
                <span>pengalaman kerja</span>
              </p>
            </div>
            <div>
              <b>03</b>
              <p>
                <strong>Flutter · Laravel</strong>
                <span>Next.js</span>
              </p>
            </div>
          </div>
        </section>

        <section className="section projects-section" id="proyek" aria-labelledby="projects-title">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <p className="mono">SELECTED WORK / 2024—2025</p>
              <h2 id="projects-title">Proyek terpilih</h2>
            </div>
            <p>
              Empat produk yang menunjukkan cara saya bekerja dari masalah, proses, sampai hasil.
            </p>
          </div>

          <article className="featured-project">
            <div className="project-meta">
              <div className="project-kicker">
                <span>{projects[0].number}</span>
                <span className="mono">{projects[0].category}</span>
              </div>
              <h3>{projects[0].title}</h3>
              <p className="project-problem">{projects[0].problem}</p>
              <dl>
                <div>
                  <dt>Peran</dt>
                  <dd>{projects[0].role}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd className="mono">{projects[0].stack}</dd>
                </div>
                <div className="result-row">
                  <dt>Hasil</dt>
                  <dd>{projects[0].result}</dd>
                </div>
              </dl>
              <div className="project-links">
                <a href="#kontak">
                  {projects[0].links[0]} <Arrow />
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer">
                  {projects[0].links[1]} <Arrow />
                </a>
              </div>
            </div>
            <div className="featured-visual">
              <div className="award-label">
                <span>03</span>
                <p>
                  <b>JUARA NASIONAL</b>
                  <small>GENETIC 2025</small>
                </p>
              </div>
              <ProjectPreview type={projects[0].preview} />
              <p className="caption mono">FIG. 01 — HALAMAN UTAMA SATU DESA</p>
            </div>
          </article>

          <div className="project-list">
            {projects.slice(1).map((project) => (
              <article className="project-row" key={project.title}>
                <div className="project-row-head">
                  <span>{project.number}</span>
                  <p className="mono">{project.category}</p>
                </div>
                <div className="project-row-content">
                  <h3>{project.title}</h3>
                  <p className="project-problem">{project.problem}</p>
                  <div className="role-line">
                    <span>PERAN</span>
                    {project.role}
                  </div>
                  <p className="stack mono">{project.stack}</p>
                  <p className="result">
                    <span>HASIL</span>
                    {project.result}
                  </p>
                  <div className="project-links">
                    <a href="#kontak">
                      {project.links[0]} <Arrow />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      {project.links[1]} <Arrow />
                    </a>
                  </div>
                </div>
                <div className="row-visual">
                  <ProjectPreview type={project.preview} />
                  <p className="caption mono">FIG. {project.number} — PRODUCT VIEW</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section experience-section"
          id="pengalaman"
          aria-labelledby="experience-title"
        >
          <div className="section-heading compact">
            <span className="section-number">02</span>
            <div>
              <p className="mono">EXPERIENCE / 01 YEAR</p>
              <h2 id="experience-title">Pengalaman</h2>
            </div>
          </div>
          <div className="timeline">
            <div className="timeline-date mono">
              MAR 2024
              <br />— MAR 2025
            </div>
            <div className="timeline-dot"></div>
            <div className="timeline-copy">
              <p className="company">
                Digital Code <span>/ CV. Bahagia Putra</span>
              </p>
              <h3>Mobile Developer</h3>
              <p>
                Mengembangkan dan memelihara aplikasi mobile berbasis Flutter, mengintegrasikan REST
                API, serta berkolaborasi dengan tim backend dan desain untuk mengirim fitur yang
                siap digunakan.
              </p>
              <ul>
                <li>Flutter development</li>
                <li>API integration</li>
                <li>Bug fixing &amp; release</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section about-section" id="tentang" aria-labelledby="about-title">
          <div className="section-heading compact">
            <span className="section-number">03</span>
            <div>
              <p className="mono">PROFILE / CAPABILITIES</p>
              <h2 id="about-title">Tentang &amp; keterampilan</h2>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>
                Saya Muhammad Firdan Azhari, mahasiswa dan Full-Stack Developer dari Kudus. Saya
                nyaman berpindah dari Figma ke kode, dari aplikasi mobile ke REST API, tanpa
                kehilangan perhatian pada detail produk.
              </p>
              <p>
                Yang saya cari sekarang: tim yang memberi ruang untuk belajar cepat, mengerjakan
                masalah nyata, dan mengirim pekerjaan yang benar-benar dipakai.
              </p>
            </div>
            <div className="skills">
              <div>
                <span className="mono">MOBILE</span>
                <p>Flutter, Dart, Firebase</p>
              </div>
              <div>
                <span className="mono">BACKEND</span>
                <p>Laravel, PHP, REST API, MySQL</p>
              </div>
              <div>
                <span className="mono">FRONTEND</span>
                <p>Next.js, React, TypeScript, Tailwind CSS</p>
              </div>
              <div>
                <span className="mono">TOOLS</span>
                <p>Git, GitHub, Figma, Postman</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="kontak" aria-labelledby="contact-title">
          <div className="contact-top">
            <span className="section-number">04</span>
            <p className="mono">LET'S BUILD SOMETHING USEFUL</p>
          </div>
          <div className="contact-main">
            <h2 id="contact-title">
              Mari bicara
              <br />
              tentang <em>kesempatan.</em>
            </h2>
            <a className="email-link" href="mailto:muhammadfirdanazhari@gmail.com">
              muhammadfirdanazhari@gmail.com <Arrow />
            </a>
          </div>
          <div className="contact-links">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <Arrow />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <Arrow />
            </a>
            <p>
              <span>Lokasi</span>Kudus, Jawa Tengah
            </p>
          </div>
        </section>
      </main>
      <footer>
        <p>© 2025 Muhammad Firdan Azhari</p>
        <a href="#top">Kembali ke atas ↑</a>
      </footer>
    </div>
  );
}
