import React from 'react';
import { Section, SectionTitle } from './Section';
import { GitHubIcon, LinkedInIcon } from './Icons';

export const Contact: React.FC = () => {
  return (
    <Section id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <div className="max-w-xl mx-auto text-center">
        <p className="text-brand-gray mb-8">
          I'm always open to discussing new opportunities and challenges. Feel free to reach out.
        </p>
        
        <a 
          href="mailto:contact@moormaninmotion.byte" 
          className="inline-block bg-brand-accent text-brand-light font-bold py-3 px-8 rounded-lg transition-transform hover:scale-105"
        >
          Say Hello
        </a>

        <div className="flex items-center justify-center space-x-6 my-10">
          <a href="https://github.com/moormaninmotion-byte" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-accent transition-colors">
            <GitHubIcon className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com/in/moormaninmotion-byte" target="_blank" rel="noopener noreferrer" className="text-brand-gray hover:text-brand-accent transition-colors">
            <LinkedInIcon className="h-8 w-8" />
          </a>
        </div>

        <a 
          href="/resume.pdf" 
          download 
          className="text-brand-accent border-b border-brand-accent hover:text-brand-light hover:border-brand-light transition-colors"
        >
          Download My Resume
        </a>
      </div>
    </Section>
  );
};