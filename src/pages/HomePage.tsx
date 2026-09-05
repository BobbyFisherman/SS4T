import AnimIn from '../components/AnimIn';
import type { PageId } from '../types';

interface Props {
  navigate: (id: PageId) => void;
}

const stats = [
  { val: '10', lbl: 'Braille cells per row' },
  { val: '6', lbl: 'Solenoid pins per cell' },
  { val: '60', lbl: 'Total actuated pins' },
  { val: '<$100', lbl: 'Target build cost' },
];

const steps = [
  {
    n: '01', title: 'Capture',
    body: 'Press a button. The camera photographs whatever text is in front of the device — a textbook, a menu, a sign.',
  },
  {
    n: '02', title: 'Recognize',
    body: 'OCR software identifies every character in the image and outputs a clean text string.',
  },
  {
    n: '03', title: 'Translate',
    body: 'Each character is mapped to its Braille equivalent — a unique pattern of 6 dots.',
  },
  {
    n: '04', title: 'Output',
    body: 'Solenoid pins raise to form Braille cells. Ten characters at a time. Press the button to scroll.',
  },
];

const tickerItems = [
  '253 million visually impaired worldwide',
  'Less than 5% of books in accessible formats',
  'Commercial Braille displays cost $3,000–$15,000',
  'Our target: under $100',
];

export default function HomePage({ navigate }: Props) {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        {/* Purple glow blob */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(109,40,217,0.35) 0%, rgba(59,7,100,0.18) 45%, transparent 70%)',
          }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimIn className="inline-flex items-center gap-2 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-widest text-white/40">
              Samsung Solve for Tomorrow 2025 · Vernon Hills High School
            </span>
          </AnimIn>

          <AnimIn delay={80}>
            <h1
              className="text-[clamp(2.75rem,6.5vw,5.25rem)] font-normal leading-[1.04] tracking-[-0.03em] mb-6 text-white"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              We turn printed words<br />
              into something you<br />
              can <em className="italic" style={{ background: 'linear-gradient(135deg, #a855f7, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>feel.</em>
            </h1>
          </AnimIn>

          <AnimIn delay={160}>
            <p className="text-[17px] text-white/50 max-w-[520px] leading-[1.75] mb-10">
              A camera photographs text. Software reads every letter. Solenoids push pins up through a surface.
              The result is real-time, refreshable Braille — built for under $100.
            </p>
          </AnimIn>

          <AnimIn delay={240} className="flex flex-wrap gap-3">
            <button
              onClick={() => navigate('hardware')}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white overflow-hidden transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6d28d9)' }}
            >
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)' }} />
              <span className="relative">How we're building it</span>
              <span className="relative text-purple-200 group-hover:translate-x-0.5 transition-transform duration-200">→</span>
            </button>
            <button
              onClick={() => navigate('about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-[14px] font-semibold text-white/70 border border-white/[0.12] hover:border-white/25 hover:text-white hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
            >
              About the team
            </button>
          </AnimIn>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div className="border-y border-white/[0.06] overflow-hidden py-3">
        <div className="ticker-track text-[12px] font-medium text-white/30">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="flex items-center gap-6">
              {item}
              <span className="text-white/[0.08]">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimIn>
              <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-purple-400 mb-4">
                How it works
              </span>
              <h2
                className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.025em] text-white"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Four steps from<br />page to fingertip.
              </h2>
            </AnimIn>

            <div className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <AnimIn key={step.n} delay={i * 80}>
                  <div className="group flex gap-5 p-5 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-purple-500/30 hover:bg-purple-500/[0.04] transition-all duration-300 hover:-translate-y-0.5">
                    <span
                      className="text-[11px] font-semibold flex-shrink-0 pt-0.5"
                      style={{ fontFamily: "'IBM Plex Mono', monospace", color: 'rgba(168,85,247,0.5)' }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <h3 className="text-[15px] font-bold text-white mb-1">{step.title}</h3>
                      <p className="text-[13px] text-white/45 leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                </AnimIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className="relative py-16 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0533 50%, #0a0a0a 100%)' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(109,40,217,0.2) 0%, transparent 65%)' }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <AnimIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {stats.map((s) => (
                <div key={s.val}>
                  <span
                    className="block text-[2.5rem] leading-tight tracking-[-0.02em] mb-1"
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      background: 'linear-gradient(135deg, #e9d5ff, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.val}
                  </span>
                  <span className="text-[12px] text-white/30 font-medium">{s.lbl}</span>
                </div>
              ))}
            </div>
          </AnimIn>
        </div>
      </section>

      {/* ── WHY IT MATTERS ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimIn>
              <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-purple-400 mb-4">
                Why it matters
              </span>
              <h2
                className="text-[clamp(1.75rem,3.5vw,2.75rem)] font-normal leading-[1.1] tracking-[-0.025em] text-white mb-6"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                Accessibility is<br />not a luxury.
              </h2>
              <p className="text-[15px] text-white/45 leading-[1.8] mb-4">
                Millions of visually impaired students can't independently read printed classroom materials.
                Existing refreshable Braille displays are priced out of reach for most families and schools.
              </p>
              <p className="text-[15px] text-white/45 leading-[1.8]">
                We're using off-the-shelf microcontrollers and simple solenoids to build a functional
                alternative at a fraction of the cost.
              </p>
            </AnimIn>

            <AnimIn delay={120}>
              <div
                className="relative rounded-2xl p-10 overflow-hidden flex flex-col justify-center min-h-[280px]"
                style={{ background: 'linear-gradient(135deg, #1a0533 0%, #2d1060 50%, #1a0533 100%)', border: '1px solid rgba(168,85,247,0.2)' }}
              >
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(168,85,247,0.15) 0%, transparent 60%)' }}
                />
                <div
                  className="text-[5rem] leading-none font-normal tracking-tight mb-4 relative z-10"
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    background: 'linear-gradient(135deg, #e9d5ff, #a855f7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  &lt;5%
                </div>
                <p className="text-[15px] text-purple-200/60 leading-[1.7] relative z-10">
                  of published books are available in any accessible format for visually impaired readers.
                </p>
              </div>
            </AnimIn>
          </div>
        </div>
      </section>
    </main>
  );
}
