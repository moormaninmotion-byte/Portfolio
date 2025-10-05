import React from 'react';
import { Section } from './Section';

export const Hero: React.FC = () => {
  return (
    <Section id="about" className="flex items-center min-h-[60vh]">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-2 flex justify-center order-1 md:order-1 hover:border-4">
          <img
            src="https://i.ibb.co/YTpMXx41/RUID55dc386b036248bd9a970957aa215225.jpg"
            alt="Headshot"
            className="object-cover border-4 border-neutral-800 transition-colors duration-300 hover:border-brand-accent shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="md:col-span-3 text-center md:text-left order-2 md:order-2">
          <h1 className="font-display text-5xl md:text-xl font-extrabold tracking-tighter leading-tighter mb-6">
            <span class Name = "hover:text-brand-accent">David</span>
            <br />
            <span className="text-brand-accent"> Moorman.</span>
          </h1>
          <p className="max-w-2xl mx-auto md:mx-0 text-lg md:text-lg text-brand-gray leading-relaxed mb-8">
            I like to make stuff.
          </p>
          <p className="text-lg md:text-sm text-brand-light font-medium">
            I am actively seeking opportunities in <span className="hover:text-brand-accent"> <b>Cloud Engineering</b></span>,  <span className="hover:text-brand-accent"><b>Cybersecurity</b></span> and <span className="hover:text-brand-accent"> <b>Machine Learning</b></span>.
          </p>
        </div>
      </div>
    </Section>
  );
};
