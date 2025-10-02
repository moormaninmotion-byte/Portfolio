
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { skills, certifications, projects } from './constants';
import type { Project } from './types';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);

  const shuffleAndSelectProjects = () => {
    // Simple shuffle and slice to get 6 random projects
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    setDisplayedProjects(shuffled.slice(0, 6));
  };

  useEffect(() => {
    shuffleAndSelectProjects();
  }, []);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  
  const handleShuffleProjects = () => {
    shuffleAndSelectProjects();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-8 py-16 md:py-24 space-y-24 md:space-y-32">
        <Hero />
        <Projects 
          projects={displayedProjects} 
          onProjectClick={handleOpenModal}
          onShuffle={handleShuffleProjects}
          canShuffle={projects.length > 6}
        />
        <Skills skills={skills} certifications={certifications} />
        <Contact />
      </main>
      <Footer />
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
