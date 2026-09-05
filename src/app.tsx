import { useState, useEffect, useRef } from 'react';
import React from 'react';
import type { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import HardwarePage from './pages/HardwarePage';
import SoftwarePage from './pages/SoftwarePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const [current, setCurrent] = useState<PageId>('home');
  const [entering, setEntering] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  const navigate = (id: PageId) => {
    if (id === current) return;
    setEntering(true);
    setCurrent(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setEntering(false), 500);
  };

  // Re-run scroll animations whenever the page changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      const items = document.querySelectorAll('.anim-in:not(.show)');
      if (!items.length) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );
      items.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }, 60);
    return () => clearTimeout(timeout);
  }, [current]);

  const pages: Record<PageId, React.ReactNode> = {
    home: <HomePage navigate={navigate} />,
    hardware: <HardwarePage />,
    software: <SoftwarePage />,
    about: <AboutPage />,
  };

  return (
    <div className="min-h-screen" style={{ background: '#0a0a0a', color: '#ffffff' }}>
      <Navbar current={current} navigate={navigate} />

      <div
        ref={mainRef}
        className={entering ? 'page-entering' : ''}
        key={current}
      >
        {pages[current]}
      </div>

      <Footer navigate={navigate} />
    </div>
  );
}
