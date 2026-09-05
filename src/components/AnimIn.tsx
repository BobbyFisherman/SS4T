import { useEffect, useRef, ReactNode, ElementType } from 'react';

interface AnimInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}

export default function AnimIn({ children, className = '', delay = 0, as: Tag = 'div' }: AnimInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('show');
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`anim-in ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
