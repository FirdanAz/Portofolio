import { content } from "@/data/content";

export function Experience() {
  const { experience } = content;

  return (
    <section
      id="pengalaman"
      className="py-16 lg:py-24 border-b border-ink grid grid-cols-1 lg:grid-cols-[40%_60%]"
      aria-labelledby="experience-title"
    >
      {/* Section Header */}
      <div className="grid grid-cols-[40px_1fr] lg:grid-cols-[25%_75%] items-start mb-10 lg:mb-0">
        <span className="font-mono text-[11px] font-semibold text-teal">
          02
        </span>
        <div>
          <p className="font-mono text-[9px] uppercase tracking-widest text-ink-muted mb-2">
            EXPERIENCE / 01 YEAR
          </p>
          <h2
            id="experience-title"
            className="font-display font-semibold text-[38px] sm:text-[46px] lg:text-[54px] leading-tight tracking-tight text-ink"
          >
            Pengalaman
          </h2>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="flex flex-col">
        {experience.map((item, index) => (
          <div
            key={item.company + item.period}
            className={`grid grid-cols-[85px_24px_1fr] sm:grid-cols-[140px_30px_1fr] border-t border-ink pt-7 ${
              index > 0 ? "mt-8" : ""
            }`}
          >
            {/* Timeline Date */}
            <div className="font-mono text-[9px] sm:text-[10px] uppercase text-ink-muted leading-[1.8]">
              {item.periodShort.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </div>

            {/* Timeline Dot */}
            <div className="pt-1.5 flex justify-center">
              <span
                className="w-2.5 h-2.5 bg-teal inline-block shrink-0"
                aria-hidden="true"
              />
            </div>

            {/* Timeline Copy */}
            <div className="pb-4">
              <p className="font-mono text-[11px] uppercase tracking-wider text-ink font-semibold">
                {item.company}{" "}
                {item.parentCompany && (
                  <span className="text-ink-muted font-normal">
                    / {item.parentCompany}
                  </span>
                )}
              </p>

              <h3 className="font-display font-semibold text-[26px] sm:text-[34px] lg:text-[40px] text-ink leading-tight mt-3 mb-4">
                {item.role}
              </h3>

              <p className="text-[13px] sm:text-[14px] leading-[1.8] text-ink-subtle max-w-[580px]">
                {item.description}
              </p>

              <ul className="flex flex-wrap gap-2 pt-6 list-none p-0 m-0">
                {item.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="border border-line py-1.5 px-3 font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-ink bg-paper-pure"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

