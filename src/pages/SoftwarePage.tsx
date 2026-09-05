import AnimIn from '../components/AnimIn';

const archNodes = [
  { label: 'Camera', sub: 'capture', hl: false },
  { label: 'OCR', sub: 'Tesseract', hl: true },
  { label: 'Text', sub: 'string', hl: false },
  { label: 'Braille map', sub: 'char → 6-bit', hl: true },
  { label: 'GPIO', sub: 'signals', hl: false },
];

const pipeline = [
  {
    n: 1,
    title: 'Image acquisition',
    body: "Button press triggers the camera. On the Pi 5 we use libcamera over the CSI bus. On the Arduino path the Arducam buffers a JPEG over SPI.",
    tags: ['libcamera', 'CSI / SPI', 'auto-focus'],
  },
  {
    n: 2,
    title: 'Pre-processing',
    body: 'Convert to grayscale, apply adaptive thresholding, correct skew. This dramatically improves OCR accuracy on imperfect captures.',
    tags: ['OpenCV', 'grayscale', 'threshold', 'deskew'],
  },
  {
    n: 3,
    title: 'Character recognition',
    body: 'Tesseract 5 (or EasyOCR) returns recognised characters with confidence scores. Low-confidence results are filtered out.',
    tags: ['Tesseract 5', 'EasyOCR', 'Python', 'filtering'],
  },
  {
    n: 4,
    title: 'Braille translation',
    body: 'Each character maps to a 6-bit Grade 1 Braille pattern via a lookup table covering A–Z, 0–9, and common punctuation.',
    tags: ['Grade 1', '6-bit', 'lookup table'],
  },
  {
    n: 5,
    title: 'Solenoid output',
    body: 'Patterns are serialised to the driver board through shift registers. 10 characters are displayed; the button scrolls to the next group.',
    tags: ['shift registers', 'GPIO', '60 channels'],
  },
  {
    n: 6,
    title: 'Audio feedback',
    body: 'The speaker confirms button presses and can optionally read text aloud through TTS for users who want both tactile and auditory output.',
    tags: ['pyttsx3', 'espeak', 'WAV'],
  },
];

export default function SoftwarePage() {
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
              Software
            </span>
          </AnimIn>
          <AnimIn delay={80}>
            <h1
              className="text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.03em] text-white mb-4"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              From pixels<br />to pins.
            </h1>
          </AnimIn>
          <AnimIn delay={160}>
            <p className="text-[17px] text-white/45 max-w-[500px] leading-[1.65]">
              The full recognition pipeline — image in, Braille signals out.
            </p>
          </AnimIn>
        </div>
      </section>

      {/* ── ARCH DIAGRAM ── */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <AnimIn>
            <div className="rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
              <span
                className="block text-[11px] font-semibold uppercase tracking-[0.1em] text-white/20 mb-6"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                System flow
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {archNodes.map((node, i) => (
                  <div key={node.label} className="flex items-center gap-2">
                    <div
                      className="flex flex-col items-center px-4 py-3 rounded-xl text-center min-w-[90px] transition-transform duration-200 hover:-translate-y-0.5"
                      style={
                        node.hl
                          ? {
                              background: 'linear-gradient(135deg, #4c1d95, #6d28d9)',
                              border: '1px solid rgba(168,85,247,0.4)',
                              boxShadow: '0 4px 16px rgba(109,40,217,0.25)',
                            }
                          : {
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid rgba(255,255,255,0.08)',
                            }
                      }
                    >
                      <span className={`text-[13px] font-semibold ${node.hl ? 'text-white' : 'text-white/70'}`}>
                        {node.label}
                      </span>
                      <span className={`text-[11px] mt-0.5 ${node.hl ? 'text-purple-200/55' : 'text-white/25'}`}>
                        {node.sub}
                      </span>
                    </div>
                    {i < archNodes.length - 1 && (
                      <span className="text-white/[0.15] text-sm font-light hidden sm:block">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimIn>
        </div>
      </section>

      {/* ── PIPELINE ── */}
      <section className="pb-28 pt-4" style={{ background: 'rgba(255,255,255,0.015)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <AnimIn>
            <h2
              className="text-[clamp(1.5rem,2.5vw,2rem)] font-normal leading-[1.15] tracking-[-0.02em] text-white mb-8 pt-12"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Pipeline
            </h2>
          </AnimIn>

          <div className="flex flex-col gap-3">
            {pipeline.map((step, i) => (
              <AnimIn key={step.n} delay={i * 60}>
                <div className="group grid grid-cols-[auto_1fr] gap-5 p-6 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-purple-500/25 hover:bg-purple-500/[0.03] transition-all duration-300 hover:-translate-y-0.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-[15px] text-white"
                    style={{
                      fontFamily: "'IBM Plex Mono', monospace",
                      background: 'linear-gradient(135deg, #4c1d95, #6d28d9)',
                      boxShadow: '0 4px 12px rgba(109,40,217,0.3)',
                    }}
                  >
                    {step.n}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-white mb-1.5">{step.title}</h3>
                    <p className="text-[13px] text-white/40 leading-[1.65] mb-3">{step.body}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {step.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-medium px-2 py-0.5 rounded text-white/30"
                          style={{ fontFamily: "'IBM Plex Mono', monospace", background: 'rgba(255,255,255,0.05)' }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
