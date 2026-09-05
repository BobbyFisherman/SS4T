import AnimIn from '../components/AnimIn';

const sideCards = [
  { title: 'School', content: 'Vernon Hills High School\nVernon Hills, Illinois' },
  { title: 'Competition', content: 'Samsung Solve for Tomorrow 2025' },
  { title: 'Focus', content: 'Assistive technology for visually impaired individuals' },
  { title: 'Target cost', content: 'Under $100 per device' },
];

const timeline = [
  {
    phase: 'Phase 1 — Research',
    desc: 'Problem identification, literature review, hardware shortlisting.',
  },
  {
    phase: 'Phase 2 — Proof of concept',
    desc: 'Single cell with 6 solenoids. OCR pipeline validated on Pi.',
  },
  {
    phase: 'Phase 3 — Full prototype',
    desc: '10-cell row, custom driver board, enclosure, integrated controls.',
  },
  {
    phase: 'Phase 4 — Testing & submission',
    desc: 'User testing, refinement, documentation, Samsung SFT submission.',
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* ── PAGE HERO ── */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(109,40,217,0.3) 0%, rgba(59,7,100,0.14) 45%, transparent 70%)' }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimIn>
            <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-purple-400 mb-5">
              About
            </span>
          </AnimIn>
          <AnimIn delay={80}>
            <h1
              className="text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.03em] text-white mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Built by students,<br />for everyone.
            </h1>
          </AnimIn>
          <AnimIn delay={160}>
            <p className="text-[17px] text-white/45 max-w-[500px] leading-[1.65]">
              Vernon Hills High School · Samsung Solve for Tomorrow 2027
            </p>
          </AnimIn>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section className="pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[5fr_2fr] gap-14">
            {/* Main */}
            <AnimIn>
              <div>
                <h2
                  className="text-[1.75rem] font-normal tracking-[-0.02em] text-white mb-5"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  The mission
                </h2>
                <p className="text-[15px] text-white/45 leading-[1.8] mb-4">
                  BrailleVision started with a simple question:{' '}
                  <em className="italic text-purple-300/70">
                    why can't a visually impaired student just point a camera at a page and read it by touch?
                  </em>
                </p>
                <p className="text-[15px] text-white/45 leading-[1.8] mb-4">
                  Commercial Braille displays exist, but they cost thousands. We're building a device that
                  does the same core job for under $100 using commodity hardware: a single-board computer,
                  a camera, and 60 solenoids arranged in 10 Braille cells.
                </p>
                <p className="text-[15px] text-white/45 leading-[1.8] mb-14">
                  The device is portable, battery-powered, and operated with a single button. Photograph
                  any printed text, and the solenoid pins rise to form Braille characters you can read
                  with your fingertips.
                </p>

                <h2
                  className="text-[1.75rem] font-normal tracking-[-0.02em] text-white mb-7"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  Timeline
                </h2>

                {/* Timeline */}
                <div className="relative pl-5 border-l-2 border-white/[0.08]">
                  {timeline.map((item, i) => (
                    <div key={i} className={`relative ${i < timeline.length - 1 ? 'pb-8' : ''}`}>
                      {/* dot */}
                      <span
                        className="absolute -left-[22px] top-1 w-2.5 h-2.5 rounded-full"
                        style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', boxShadow: '0 0 8px rgba(168,85,247,0.4)' }}
                      />
                      <strong className="block text-[14px] font-semibold text-white mb-1">{item.phase}</strong>
                      <p className="text-[13px] text-white/35 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimIn>

            {/* Sidebar */}
            <AnimIn delay={120}>
              <div className="flex flex-col gap-3">
                {sideCards.map((card) => (
                  <div
                    key={card.title}
                    className="p-5 rounded-xl border border-white/[0.07] bg-white/[0.02]"
                  >
                    <h4
                      className="text-[10px] font-bold uppercase tracking-[0.12em] text-white/20 mb-2.5"
                      style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                    >
                      {card.title}
                    </h4>
                    <p className="text-[13px] text-white/60 leading-relaxed whitespace-pre-line">
                      {card.content}
                    </p>
                  </div>
                ))}

                {/* Link card */}
                <a
                  href="https://www.samsung.com/us/solvefortomorrow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-5 rounded-xl border border-purple-500/20 bg-purple-500/[0.05] hover:border-purple-500/40 hover:bg-purple-500/[0.09] transition-all duration-200 block"
                >
                  <h4
                    className="text-[10px] font-bold uppercase tracking-[0.12em] text-purple-400/50 mb-2.5"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    Link
                  </h4>
                  <p className="text-[13px] text-purple-300/70 font-medium group-hover:text-purple-300 transition-colors duration-200">
                    Samsung Solve for Tomorrow ↗
                  </p>
                </a>
              </div>
            </AnimIn>
          </div>
        </div>
      </section>
    </main>
  );
}
