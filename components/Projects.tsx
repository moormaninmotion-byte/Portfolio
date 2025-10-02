
import React from 'react';
import { Section, SectionTitle } from './Section';
import { ProjectCard } from './ProjectCard';
import { ShuffleIcon } from './Icons';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
  onShuffle: () => void;
  canShuffle: boolean;
}

export const Projects: React.FC<ProjectsProps> = ({ projects, onProjectClick, onShuffle, canShuffle }) => {
  return (
    <Section id="projects">
      <SectionTitle>Recent Projects</SectionTitle>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => onProjectClick(project)}
          />
        ))}
      </div>
      
      {canShuffle && (
        <div className="text-center mt-12">
          <button
            onClick={onShuffle}
            className="inline-flex items-center gap-2 bg-neutral-800 text-brand-light font-bold py-3 px-8 rounded-lg transition-all hover:bg-brand-accent hover:scale-105"
          >
            <ShuffleIcon className="w-5 h-5" />
            Show Different Projects
          </button>
        </div>
      )}
    </Section>
  );
};
