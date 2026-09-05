import type { PageId } from '../types';

interface FooterProps {
  navigate: (id: PageId) => void;
}

const links: { id: PageId; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'hardware', label: 'Hardware' },
  { id: 'software', label: 'Software' },
  { id: 'about', label: 'About' },
];

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="border-t border-white/[0.06] mt-20 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <span className="font-bold text-[14px] text-white">BrailleVision</span>
          <span className="w-px h-4 bg-white/10" />
          <span className="text-[12px] text-white/30">Vernon Hills HS · Samsung SFT 2027</span>
        </div>
        <div className="flex gap-5">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => navigate(l.id)}
              className="text-[12px] text-white/30 font-medium hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
