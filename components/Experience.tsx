import { content } from "@/data/content";

export function Experience() {
  const { experience, education } = content;

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
            Pengalaman &amp; Pendidikan
          </h2>
        </div>
      </div>

      {/* Experience Timeline */}
      <div className="flex flex-col gap-10">
        <div>
          <h3 className="font-mono text-[9px] uppercase tracking-wider text-ink-muted mb-4 pb-2 border-b border-line">
            Pengalaman Kerja Profesional
          </h3>

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

                <h4 className="font-display font-semibold text-[26px] sm:text-[32px] text-ink leading-tight mt-2 mb-3">
                  {item.role}
                </h4>

                <p className="text-[13px] sm:text-[14px] leading-[1.75] text-ink-subtle max-w-[580px] mb-4">
                  {item.description}
                </p>

                {/* Detailed Responsibilities from CV */}
                {item.responsibilities && (
                  <ul className="flex flex-col gap-2 list-none p-0 m-0 mb-5">
                    {item.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="text-[12px] sm:text-[13px] text-ink-subtle flex items-start gap-2.5 leading-relaxed"
                      >
                        <span className="text-teal font-bold text-[14px] leading-none pt-0.5">
                          ·
                        </span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="flex flex-wrap gap-2 pt-2 list-none p-0 m-0">
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

        {/* Education Section */}
        {education && education.length > 0 && (
          <div className="border-t border-line pt-8">
            <h3 className="font-mono text-[9px] uppercase tracking-wider text-ink-muted mb-4 pb-2 border-b border-line">
              Riwayat Pendidikan
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="p-5 border border-line bg-paper-pure flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-teal font-semibold">
                      {edu.period}
                    </span>
                    <h4 className="font-display font-semibold text-[18px] text-ink mt-1">
                      {edu.institution}
                    </h4>
                  </div>
                  <p className="text-[13px] text-ink-subtle mt-3 font-medium">
                    {edu.major}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
