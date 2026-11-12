interface ProjectPreviewProps {
  type: "village" | "notes" | "nusa" | "farm";
}

export function ProjectPreview({ type }: ProjectPreviewProps) {
  if (type === "village") {
    return (
      <div
        className="w-full min-h-[340px] lg:min-h-[430px] border border-ink bg-[#E8EFE8] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden select-none"
        aria-label="Preview antarmuka aplikasi Satu Desa"
      >
        <div className="flex items-baseline justify-between border-b border-ink/20 pb-4">
          <b className="font-display font-semibold text-[14px] lg:text-[15px] tracking-wide text-ink">
            SATU DESA
          </b>
          <span className="font-mono text-[8px] lg:text-[9px] uppercase tracking-wider text-ink-muted">
            Desa dalam genggaman
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 items-center my-6">
          <div className="flex flex-col items-start">
            <small className="font-mono text-[9px] text-ink-muted mb-3 uppercase tracking-wider">
              Halo, Warga
            </small>
            <strong className="font-display font-semibold text-[24px] lg:text-[30px] leading-tight text-ink">
              Layanan desa,
              <br />
              lebih dekat.
            </strong>
            <span className="inline-block bg-ink text-white font-mono text-[8px] lg:text-[9px] uppercase tracking-wider px-3.5 py-2 mt-5">
              Ajukan surat →
            </span>
          </div>

          <div
            className="h-[180px] lg:h-[220px] relative rounded-[48%] border border-teal/40 flex items-center justify-center bg-[repeating-linear-gradient(25deg,transparent_0_30px,rgba(11,27,51,0.06)_31px_32px)]"
            aria-hidden="true"
          >
            <span className="absolute z-10 bg-ink text-white font-mono text-[7px] lg:text-[8px] px-2.5 py-1.5 uppercase tracking-wider">
              Balai Desa
            </span>
            <i className="absolute top-[24%] left-[26%] w-2.5 h-2.5 border-2 border-teal rounded-full" />
            <i className="absolute top-[64%] right-[22%] w-2.5 h-2.5 border-2 border-teal rounded-full" />
            <i className="absolute top-[20%] right-[20%] w-2.5 h-2.5 border-2 border-teal rounded-full" />
          </div>
        </div>

        <div className="bg-paper-pure border border-ink flex justify-around py-3 px-4 font-mono text-[7px] lg:text-[8px] uppercase tracking-widest text-ink font-semibold">
          <span className="text-teal font-bold">Beranda</span>
          <span>Layanan</span>
          <span>Potensi</span>
          <span>Profil</span>
        </div>
      </div>
    );
  }

  if (type === "notes") {
    return (
      <div
        className="w-full min-h-[260px] lg:min-h-[290px] border border-ink bg-[#EEEAE2] grid grid-cols-[28%_72%] overflow-hidden select-none"
        aria-label="Preview antarmuka aplikasi Notula"
      >
        <aside className="bg-ink text-white p-4 lg:p-5 flex flex-col justify-between">
          <div>
            <b className="font-display text-[22px] lg:text-[24px] font-semibold text-teal block mb-6">
              N.
            </b>
            <div className="flex flex-col gap-3 font-mono text-[7px] lg:text-[8px] uppercase tracking-wider text-paper/80">
              <span className="text-teal font-semibold">Hari ini</span>
              <span>Rapat</span>
              <span>Arsip</span>
            </div>
          </div>
          <span className="font-mono text-[6px] text-ink-muted">NOTULA V1</span>
        </aside>

        <div className="p-5 lg:p-6 flex flex-col justify-between bg-paper-pure">
          <div>
            <small className="font-mono text-[7px] text-ink-muted uppercase tracking-wider">
              RAPAT PRODUK / SPRINT 14
            </small>
            <h4 className="font-display font-semibold text-[16px] lg:text-[18px] text-ink mt-1.5 mb-3 leading-snug">
              Catatan sprint mingguan
            </h4>
            <div className="w-[96%] h-1 bg-ink/20 my-2" />
            <div className="w-[68%] h-1 bg-ink/15 my-2" />
          </div>

          <div className="flex items-center gap-3 border-t border-ink pt-3 mt-4">
            <b className="font-display font-semibold text-[22px] text-teal">
              03
            </b>
            <div className="flex flex-col font-mono text-[8px] leading-tight">
              <span className="font-semibold text-ink uppercase">
                Action Items
              </span>
              <small className="text-ink-muted">Siap ditindaklanjuti</small>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "nusa") {
    return (
      <div
        className="w-full min-h-[260px] lg:min-h-[290px] border border-ink bg-[#CDD9D2] p-6 flex items-center justify-around select-none relative overflow-hidden"
        aria-label="Preview antarmuka NUSAVERSE"
      >
        <div className="flex flex-col">
          <small className="font-mono text-[7px] uppercase tracking-wider text-ink-subtle">
            JELAJAH NUSANTARA
          </small>
          <strong className="font-display font-semibold text-[30px] lg:text-[34px] leading-[0.85] text-ink my-3">
            NUSA
            <br />
            VERSE
          </strong>
          <span className="font-mono text-[8px] text-ink-subtle uppercase tracking-wider">
            Warisan hidup dalam cerita.
          </span>
        </div>

        <div
          className="w-[110px] h-[150px] lg:w-[125px] lg:h-[165px] border border-ink rounded-[50%] relative flex flex-col items-center justify-center rotate-[10deg] shrink-0"
          aria-hidden="true"
        >
          <div className="absolute inset-[-8px] border border-teal rounded-[50%] rotate-[55%]" />
          <div className="absolute inset-[-8px] border border-teal rounded-[50%] -rotate-[55%]" />
          <b className="font-display font-semibold text-[28px] lg:text-[32px] text-ink">
            34
          </b>
          <small className="font-mono text-[7px] text-ink-subtle uppercase tracking-widest font-semibold">
            PROVINSI
          </small>
        </div>
      </div>
    );
  }

  // type === 'farm'
  return (
    <div
      className="w-full min-h-[260px] lg:min-h-[290px] border border-ink bg-[#E8EADF] p-5 lg:p-6 flex flex-col justify-between select-none"
      aria-label="Preview antarmuka LadangNusa"
    >
      <div className="flex items-center justify-between border-b border-line pb-3">
        <small className="font-mono text-[7px] text-ink-muted uppercase tracking-wider">
          LADANGNUSA / DASHBOARD
        </small>
        <span className="font-mono text-[7px] text-ink font-semibold uppercase">
          Musim tanam 02
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 my-3">
        <div className="bg-paper-pure p-3 border border-line">
          <small className="font-mono text-[7px] text-ink-muted block uppercase">
            TOTAL LAHAN
          </small>
          <b className="font-display font-semibold text-[20px] text-ink">
            12.4 <i className="font-sans font-normal text-[9px] not-italic">ha</i>
          </b>
        </div>
        <div className="bg-paper-pure p-3 border border-line">
          <small className="font-mono text-[7px] text-ink-muted block uppercase">
            PROYEKSI PANEN
          </small>
          <b className="font-display font-semibold text-[20px] text-ink">
            8.2 <i className="font-sans font-normal text-[9px] not-italic">ton</i>
          </b>
        </div>
      </div>

      <div className="bg-paper-pure p-3 border border-line h-[95px] flex flex-col justify-between">
        <span className="font-mono text-[7px] text-ink-muted uppercase tracking-wider">
          Produktivitas mingguan
        </span>
        <svg
          viewBox="0 0 300 70"
          preserveAspectRatio="none"
          className="w-full h-[50px] overflow-visible"
          aria-hidden="true"
        >
          <polyline
            points="0,58 40,50 78,54 120,32 160,39 205,16 250,26 300,6"
            fill="none"
            stroke="#2DD4BF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

