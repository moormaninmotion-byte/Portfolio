import React from 'react';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="group bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:border-brand-accent hover:-translate-y-2 shadow-md hover:shadow-xl"
      onClick={onClick}
    >
      <img
        src={project.thumbnailUrl}
        alt={project.title}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-brand-gray text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="bg-neutral-800 text-brand-accent text-xs font-mono px-3 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
