
import React from 'react';
import { Section, SectionTitle } from './Section';
import type { SkillCategory, Certification } from '../types';

interface SkillsProps {
  skills: SkillCategory[];
  certifications: Certification[];
}

export const Skills: React.FC<SkillsProps> = ({ skills, certifications }) => {
  return (
    <Section id="skills">
      <SectionTitle>Skills & Certifications</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {skills.map((category) => (
          <div key={category.title} className="bg-neutral-900 border border-neutral-800 p-6 rounded-lg">
            <h3 className="font-display text-2xl font-bold mb-4 text-brand-accent">{category.title}</h3>
            <ul className="space-y-2">
              {category.skills.map((skill) => (
                <li key={skill.name} className="text-brand-gray">{skill.name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {certifications.map((cert) => (
          <div key={cert.name} className="flex flex-col items-center justify-start p-4 bg-neutral-900 border border-neutral-800 rounded-lg">
            <cert.icon className="h-16 w-16 mb-4 text-brand-accent"/>
            <h4 className="font-bold text-lg text-brand-light">{cert.name}</h4>
            <p className="text-sm text-brand-gray">{cert.issuer}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};
