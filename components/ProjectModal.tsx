import React, { useEffect } from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './Icons';


interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-neutral-900 border border-neutral-800 rounded-lg max-w-3xl w-11/12 max-h-[90vh] overflow-y-auto p-8 animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-gray hover:text-brand-light text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2 className="font-display text-4xl font-extrabold tracking-tighter mb-4">
          {project.title}
          <span className="text-brand-accent">.</span>
        </h2>
        
        <img 
            src={project.thumbnailUrl.replace('600/400', '800/400')} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-md mb-6"
            loading="lazy"
            decoding="async"
        />

        <div className="space-y-6 text-brand-gray">
          {project.longDescription && (
            <div>
              <h3 className="font-bold text-lg text-brand-light mb-2">About the Project</h3>
              <p>{project.longDescription}</p>
            </div>
          )}
          {project.problemSolved && (
            <div>
              <h3 className="font-bold text-lg text-brand-light mb-2">Purpose</h3>
              <p>{project.problemSolved}</p>
            </div>
          )}
          {project.learnings && (
            <div>
              <h3 className="font-bold text-lg text-brand-light mb-2">Key Takeaways</h3>
              <p>{project.learnings}</p>
            </div>
          )}
          {project.technologies && project.technologies.length > 0 && (
            <div>
              <h3 className="font-bold text-lg text-brand-light mb-3">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-neutral-800 text-brand-accent text-xs font-mono px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          <div className="pt-4 mt-4 border-t border-neutral-800">
             <a
              href={project.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-800 text-brand-light font-bold py-2 px-4 rounded-lg transition-colors hover:bg-brand-accent"
            >
              <GitHubIcon className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
          <div className="pt-4 mt-4 border-t border-neutral-800">
             <a
              href={project.htmlUrlG}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-neutral-800 text-brand-light font-bold py-2 px-4 rounded-lg transition-colors hover:bg-brand-accent"
            >
              <GitHubIcon className="h-5 w-5" />
              Webpage
            </a>
            </div>

        </div>
      </div>
    </div>
  );
};
