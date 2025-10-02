import React, { ReactNode, useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      {
        threshold: 0.1, // Animate when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      // Check if ref is still valid before trying to unobserve
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`w-full ${isVisible ? 'animate-fade-in-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </section>
  );
};

export const SectionTitle: React.FC<{children: ReactNode}> = ({ children }) => {
    return (
        <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter mb-12 text-center">
            {children}
            <span className="text-brand-accent">.</span>
        </h2>
    );
}