import { content } from "@/data/content";

export function Hero() {
  const { profile } = content;
  const { sellingProposition, quickFacts } = profile;

  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-[13%_64%_23%] border-b border-ink relative"
      aria-labelledby="hero-title"
    >
      {/* Vertical sidebar index */}
      <div className="hidden lg:flex flex-col justify-start pt-11 text-[9px] font-mono tracking-widest text-ink-muted [writing-mode:vertical-rl] rotate-180 select-none">
        PORTFOLIO / 2025
      </div>

      {/* Main hero content */}
      <div className="pt-12 pb-10 lg:pt-24 lg:pb-20 lg:pr-12 lg:border-r border-line">
        <p className="flex items-center gap-2.5 font-mono text-[10px] lg:text-[11px] font-semibold uppercase tracking-widest text-ink mb-6 lg:mb-8">
          <span
            className="w-2 h-2 bg-teal inline-block shrink-0"
            aria-hidden="true"
          />
          <span>{profile.availability}</span>
        </p>

        <h1
          id="hero-title"
          className="font-display font-semibold text-[44px] sm:text-[58px] lg:text-[clamp(62px,7vw,110px)] leading-[0.92] lg:leading-[0.88] tracking-[-0.05em] text-ink max-w-[1000px] mb-8 lg:mb-10"
        >
          {sellingProposition.headline}{" "}
          <em className="italic font-normal text-teal">
            {sellingProposition.accent}
          </em>
        </h1>

        <p className="max-w-[620px] text-[14px] sm:text-[16px] leading-[1.75] text-ink-subtle">
          {sellingProposition.paragraph}
        </p>
      </div>

      {/* Right margin aside */}
      <div className="hidden lg:flex flex-col justify-between pt-24 pl-9 relative">
        <p className="font-display italic text-[15px] leading-[1.45] text-ink max-w-[190px]">
          {sellingProposition.note}
        </p>
        <span
          className="absolute right-0 bottom-7 text-teal font-mono text-[12px] tracking-wider"
          aria-hidden="true"
        >
          01—
        </span>
      </div>

      {/* Quick Facts Grid */}
      <div
        className="col-span-1 lg:col-start-2 lg:col-end-4 grid grid-cols-1 sm:grid-cols-3 border-t border-line"
        aria-label="Fakta kualifikasi utama"
      >
        {quickFacts.map((fact, index) => (
          <div
            key={fact.number}
            className={`flex items-start gap-4 py-5 sm:py-6 px-4 lg:px-6 border-b sm:border-b-0 border-line ${
              index < quickFacts.length - 1 ? "sm:border-r border-line" : ""
            }`}
          >
            <b className="font-mono text-[10px] text-teal font-semibold pt-0.5">
              {fact.number}
            </b>
            <div className="flex flex-col leading-tight">
              <strong className="text-[13px] font-semibold text-ink">
                {fact.title}
              </strong>
              <span className="text-[11px] text-ink-muted mt-1 font-mono">
                {fact.subtitle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

