const ventures = [
  {
    name: "Agatabo",
    description: "Modern finance for savings circles.",
    url: "https://agatabo.com",
    cta: null,
  },
  {
    name: "CityMoshi",
    description: "Find events & people near you.",
    url: "https://citymoshi.com",
    cta: null,
  },
  {
    name: "Imperium",
    description: "Software, built right.",
    url: "https://buildwithimperium.com",
    cta: "Hire us",
  },
]

const socials = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/jshyaka/" },
  { label: "hello@shyaka.dev", url: "mailto:hello@shyaka.dev" },
]

export default function Home() {
  return (
    <main
      className="flex flex-col justify-center items-center px-10 sm:px-20 lg:px-32 text-center"
      style={{ minHeight: "100svh" }}
    >
      <div className="max-w-2xl w-full">

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl font-bold tracking-tight text-[#0a0a0a]"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          Jonathan Shyaka
        </h1>

        {/* Tagline */}
        <p className="mt-3 text-base text-[#666]">Building in Kigali.</p>

        {/* Booking */}
        <a
          href="https://calendar.app.google/pCx9qzYnvrwxgWrq5"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-base font-medium text-[#0a0a0a] hover:text-[#555] transition-colors duration-200"
        >
          Get 30 minutes with me <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="inline w-3.5 h-3.5 mb-0.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>

        {/* Divider */}
        <div className="mt-12 border-t border-[#e5e5e5]" />

        {/* Ventures */}
        <div className="mt-10 flex flex-col gap-7">
          {ventures.map((v) => (
            <a
              key={v.name}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div>
                <span
                  className="text-base font-bold text-[#0a0a0a] group-hover:text-[#555] transition-colors duration-200 underline underline-offset-2 decoration-[#ccc] group-hover:decoration-[#555]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {v.name}
                </span>
                <span className="text-base text-[#999] group-hover:text-[#0a0a0a] transition-colors duration-200 ml-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="inline w-3.5 h-3.5 mb-0.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <p className="mt-0.5 text-base text-[#888]">
                  {v.description}
                  {v.cta && (
                    <span className="ml-2 text-xs font-medium text-[#0a0a0a] border border-[#ddd] rounded px-1.5 py-0.5">
                      {v.cta}
                    </span>
                  )}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-[#e5e5e5]" />

        {/* Upwork — where booking was */}
        <div className="mt-8">
          <a
            href="https://www.upwork.com/freelancers/~0168643fc06b2e6f30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium text-[#0a0a0a] hover:text-[#555] transition-colors duration-200"
          >
            Freelance & Contract Work · Upwork <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="inline w-3.5 h-3.5 mb-0.5"><path d="M3 13L13 3M13 3H6M13 3v7" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
        </div>

        {/* Socials */}
        <div className="mt-8 flex justify-center items-center gap-3">
          {socials.map((s, i) => (
            <>
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#555] hover:text-[#0a0a0a] transition-colors duration-200"
              >
                {s.label}
              </a>
              {i < socials.length - 1 && (
                <span className="text-[#0a0a0a]">·</span>
              )}
            </>
          ))}
        </div>

      </div>
    </main>
  )
}
