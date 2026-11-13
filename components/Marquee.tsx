"use client";

export function Marquee() {
  const items = [
    "FULL-STACK",
    "FLUTTER",
    "LARAVEL",
    "NEXT.JS",
    "CLEAN CODE",
    "SCALABLE SYSTEM",
    "TYPESCRIPT",
    "REST API",
  ];

  return (
    <section
      className="relative w-full overflow-hidden bg-dark border-t border-b border-white/[0.08] py-8 sm:py-12 select-none z-20 group"
      aria-label="Technology Marquee"
    >
      <div className="flex animate-marquee">
        {/* Render twice for seamless infinite looping */}
        {[0, 1].map((setIndex) => (
          <div
            key={setIndex}
            className="flex items-center shrink-0 pr-6"
            aria-hidden={setIndex === 1}
          >
            {items.map((item, index) => (
              <span
                key={`${setIndex}-${index}`}
                className="flex items-center shrink-0"
              >
                <span className="font-display font-black text-[clamp(2.5rem,6.5vw,5.5rem)] uppercase leading-none tracking-tight text-white/20 hover:text-white transition-colors duration-300">
                  {item}
                </span>
                <span
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent-red mx-6 sm:mx-10 inline-block shadow-[0_0_10px_#E11D2E]"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
