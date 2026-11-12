import { content } from "@/data/content";

export function About() {
  const { profile, skills } = content;

  return (
    <section
      id="tentang"
      className="py-16 lg:py-24 border-b border-ink"
      aria-labelledby="about-title"
    >
      {/* Section Header */}
      <div className="grid grid-cols-[40px_1fr] lg:grid-cols-[13%_87%] items-start mb-12 lg:mb-16">
        <span className="font-mono text-[11px] font-semibold text-teal">
          03
        </span>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink-muted mb-2">
            PROFILE / CAPABILITIES
          </p>
          <h2
            id="about-title"
            className="font-display font-semibold text-[38px] sm:text-[46px] lg:text-[54px] leading-tight tracking-tight text-ink"
          >
            Tentang &amp; keterampilan
          </h2>
        </div>
      </div>

      {/* Grid: Narrative Story & Skills Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-[13%_40%_47%]">
        {/* Empty left column on desktop to maintain vertical grid alignment */}
        <div className="hidden lg:block" aria-hidden="true" />

        {/* Narrative bio */}
        <div className="lg:pr-14 mb-10 lg:mb-0">
          <p className="font-display font-medium text-[19px] sm:text-[22px] leading-[1.55] text-ink mb-6">
            {profile.aboutText.lead}
          </p>
          <p className="text-[13px] sm:text-[14px] leading-[1.75] text-ink-muted">
            {profile.aboutText.objective}
          </p>
        </div>

        {/* Skills categorization */}
        <div className="border-t border-ink">
          {skills.map((category) => (
            <div
              key={category.category}
              className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] py-4 sm:py-5 border-b border-line items-baseline"
            >
              <span className="font-mono text-[9px] uppercase tracking-wider text-teal-dark font-semibold">
                {category.category}
              </span>
              <p className="text-[12px] sm:text-[13px] text-ink leading-relaxed font-medium">
                {category.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

