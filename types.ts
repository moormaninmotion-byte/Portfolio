// FIX: Import React to provide types for React.FC and React.SVGProps used in the Certification interface.
import type * as React from 'react';

export interface Project {
  id: number;
  title: string;
  thumbnailUrl: string;
  description: string | null;
  longDescription?: string;
  technologies: string[];
  problemSolved?: string;
  learnings?: string;
  htmlUrl: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Certification {
  name: string;
  issuer: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}