import { content } from "@/data/content";

export function Contact() {
  const { contact } = content;

  return (
    <section
      id="kontak"
      className="pt-14 pb-16 lg:pt-16 lg:pb-20 border-b border-ink"
      aria-labelledby="contact-title"
    >
      {/* Top indicator */}
      <div className="grid grid-cols-[40px_1fr] lg:grid-cols-[13%_1fr] items-start mb-8 lg:mb-12">
        <span className="font-mono text-[11px] font-semibold text-teal">
          04
        </span>
        <p className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">
          LET&apos;S BUILD SOMETHING USEFUL
        </p>
      </div>

      {/* Main CTA */}
      <div className="lg:ml-[13%] flex flex-col lg:flex-row lg:items-end justify-between pb-12 lg:pb-16 gap-8">
        <h2
          id="contact-title"
          className="font-display font-semibold text-[44px] sm:text-[62px] lg:text-[88px] leading-[0.93] tracking-tight text-ink"
        >
          {contact.title}
          <br />
          <em className="italic font-normal text-teal">
            {contact.titleAccent}
          </em>
        </h2>

        <a
          href={`mailto:${contact.email}`}
          className="inline-flex items-center text-[13px] sm:text-[14px] font-bold border-b border-ink pb-2 text-ink hover:text-teal-dark hover:border-teal-dark transition-colors w-max"
          aria-label={`Kirim email ke ${contact.email}`}
        >
          <span>{contact.email}</span>
          <span
            aria-hidden="true"
            className="text-teal ml-3 text-[16px] font-sans"
          >
            ↗
          </span>
        </a>
      </div>

      {/* Links & metadata grid */}
      <div className="lg:ml-[13%] grid grid-cols-1 sm:grid-cols-3 border-t border-ink">
        {/* LinkedIn */}
        <a
          href={contact.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="py-5 sm:py-6 pr-4 border-b sm:border-b-0 sm:border-r border-line flex items-center justify-between text-[12px] group hover:bg-paper-pure px-2 sm:px-4 transition-colors"
        >
          <div className="flex flex-col">
            <span className="font-mono text-[8px] uppercase tracking-wider text-ink-muted">
              {contact.linkedin.label}
            </span>
            <span className="font-semibold text-ink group-hover:text-teal-dark transition-colors mt-0.5">
              {contact.linkedin.display}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="text-teal font-sans group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          >
            ↗
          </span>
        </a>

        {/* GitHub */}
        <a
          href={contact.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="py-5 sm:py-6 pr-4 border-b sm:border-b-0 sm:border-r border-line flex items-center justify-between text-[12px] group hover:bg-paper-pure px-2 sm:px-4 transition-colors"
        >
          <div className="flex flex-col">
            <span className="font-mono text-[8px] uppercase tracking-wider text-ink-muted">
              {contact.github.label}
            </span>
            <span className="font-semibold text-ink group-hover:text-teal-dark transition-colors mt-0.5">
              {contact.github.display}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="text-teal font-sans group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          >
            ↗
          </span>
        </a>

        {/* Location */}
        <div className="py-5 sm:py-6 px-2 sm:px-4 flex flex-col justify-center text-[12px]">
          <span className="font-mono text-[8px] uppercase tracking-wider text-ink-muted">
            Lokasi
          </span>
          <span className="font-semibold text-ink mt-0.5">
            {contact.location}
          </span>
        </div>
      </div>
    </section>
  );
}

