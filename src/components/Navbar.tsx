import { useState, useEffect } from 'react';
import type { PageId } from '../types';

interface NavbarProps {
  current: PageId;
  navigate: (id: PageId) => void;
}

const links: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'software', label: 'Software' },
  { id: 'about', label: 'About' },
];

export default function Navbar({ current, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (id: PageId) => {
    navigate(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] transition-all duration-300 ${
          scrolled ? 'shadow-[0_2px_24px_rgba(0,0,0,0.4)]' : ''
        }`}
        style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
          {/* Logo */}
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2.5 cursor-pointer"
          >
            <div className="logo-mark">
              {[true, false, true, true, false, true].map((on, i) => (
                <span key={i} className={on ? 'on' : ''} />
              ))}
            </div>
            <span className="font-bold text-[15px] tracking-tight text-white">BrailleVision</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex gap-0.5">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => handleNav(l.id)}
                className={`text-[13px] font-medium px-3 py-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                  current === l.id
                    ? 'text-white bg-white/10'
                    : 'text-white/50 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/[0.06] transition-colors cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <span
              className={`block w-[18px] h-[1.5px] bg-white rounded transition-all duration-300 ${
                menuOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-white rounded transition-all duration-300 ${
                menuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-14 left-0 right-0 z-40 border-b border-white/[0.06] transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
        style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(20px)' }}
      >
        <div className="px-4 pb-4 pt-2 flex flex-col gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNav(l.id)}
              className={`text-left px-3 py-2.5 rounded-lg text-[15px] font-medium transition-all duration-200 cursor-pointer ${
                current === l.id ? 'text-white bg-white/10' : 'text-white/50 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
