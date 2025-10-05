import type { Project, SkillCategory, Certification } from './types';
import { GSEC_ICON, GRACT_ICON, APLUS_ICON, GOOGLE_IT_ICON } from './components/Icons';

export const skills: SkillCategory[] = [
  {
    title: "Cloud",
    skills: [
      { name: "AWS" },
      { name: "Google Cloud" },
      { name: "Generative AI" },
      { name: "Network Security" },
      { name: "Serverless" },
      { name: "Infrastructure-as-Code" },
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      { name: "Application Security" },
      { name: "Vulnerability Assessment" },
      { name: "Intrusion Detection" },
      { name: "Network Sniffing" },
      { name: "SIEM & Log Analysis" },
      { name: "Incident Response" },
    ],
  },
  {
    title: "Programming & Scripting",
    skills: [
      { name: "Java" },
      { name: "PowerShell" },
      { name: "Python" },
      { name: "JavaScript / TypeScript" },
      { name: "HTML / CSS" },
      { name: "Bash" },
    ],
  },
];

export const certifications: Certification[] = [
  { name: "GSEC", issuer: "GIAC Security Essentials", icon: GSEC_ICON },
  { name: "GFACT", issuer: "GIAC Foundations", icon: GRACT_ICON },
  { name: "CompTIA A+", issuer: "CompTIA", icon: APLUS_ICON },
  { name: "IT Support Professional", issuer: "Google", icon: GOOGLE_IT_ICON },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Aegis-AI: Conversational Security',
    thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A conversational AI security system designed to simplify security operations.',
    technologies: ['typescript', 'next.js', 'langchain', 'vector db'],
    htmlUrl: 'https://github.com/moormaninmotion-byte/Aegis-AI',
    longDescription: 'Aegis-AI is an innovative security platform that leverages conversational AI to make security monitoring and incident response more accessible. It allows security analysts to interact with the system using natural language to query threats, analyze logs, and initiate response actions.',
    problemSolved: 'Simplifies complex security operations by replacing arcane query languages with natural conversation, enabling faster threat hunting and response for security teams of all skill levels.',
    learnings: 'Mastered state management in complex conversational AI flows and gained expertise in fine-tuning language models to maintain a specific, security-focused operational context.'
  },
 /* {
    id: 2,
    title: 'eyeSOC: Personal AI Security Agent',
    thumbnailUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A personal AI security agent that monitors and analyzes system activity.',
    technologies: ['typescript', 'electron', 'rust', 'machine learning'],
    htmlUrl: 'https://github.com/moormaninmotion-byte/eyeSOC',
    longDescription: 'eyeSOC is an AI-powered agent that acts as a personal Security Operations Center. It continuously monitors system logs and network traffic, using machine learning to detect anomalous behavior and potential threats in real-time. It provides actionable alerts and insights to help users secure their personal devices.',
    problemSolved: 'Brings enterprise-grade security monitoring to individual users, democratizing access to advanced threat detection capabilities for personal cybersecurity.',
    learnings: 'Developed deep experience in cross-platform desktop application development using Electron and Rust, focusing on the creation of efficient, low-overhead background monitoring processes.'
  },*/
  {
    id: 3,
    title: 'Interpretable ML with SHAP',
    thumbnailUrl: 'https://i.ibb.co/BHwmcXwV/Screenshot-2025-10-05-105919.png',
    description: 'Using SHAP to explain a house price prediction machine learning model.',
    technologies: ['python', 'scikit-learn', 'shap', 'jupyter'],
    htmlUrl: 'https://interactive-shap-explainer-89795080659.us-west1.run.app',
    longDescription: 'This project trains a gradient boosting model to predict house prices and then uses SHAP (SHapley Additive exPlanations) to interpret its predictions. It provides visualizations that show which features have the most impact, making the "black box" model transparent.',
    problemSolved: 'Addresses the challenge of model interpretability in machine learning, providing clear, human-understandable explanations for complex model predictions.',
    learnings: 'This project was a deep dive into model interpretability, reinforcing the principle that explaining predictions is as crucial as making them, especially for building trust in AI systems.'
  },
/*  {
    id: 4,
    title: 'Multiple LLM Chaining Strategies',
    thumbnailUrl: 'https://images.unsplash.com/photo-1555949963-ff98c872d240?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'An exploration of advanced chaining strategies for multiple Large Language Models.',
    technologies: ['typescript', 'llm', 'api integration', 'langchain'],
    htmlUrl: 'https://llm-chain-89795080659.us-east5.run.app/',
    longDescription: 'This project implements and compares various strategies for chaining multiple LLMs together to solve complex problems. It explores techniques like sequential processing and tree-of-thought to achieve more accurate and nuanced results than a single model can provide.',
    problemSolved: 'Demonstrates how to overcome the limitations of single LLMs by orchestrating multiple models, enabling the solution of more complex, multi-step reasoning tasks.',
    learnings: 'Gained practical experience in designing and implementing complex LLM orchestration patterns, understanding the trade-offs between different chaining strategies for accuracy and efficiency.'
  },*/
  {
    id: 5,
    title: 'Karen-AI: Manager Chatbot',
    thumbnailUrl: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMGJmaXh0a3B0YnVnZjNqMDljNHdoa3h3djIyMGw2MnFtbzNiZ2FscCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l4pT9M7xTuvBzwtGg/giphy.gif',
    description: 'A satirical "let me speak to your manager" AI chatbot experience.',
    technologies: ['typescript', 'next.js', 'vercel ai sdk', 'openai api'],
    htmlUrl: 'https://the-karenifier-89795080659.us-west1.run.app/',
    longDescription: 'Karen-AI is a humorous chatbot application that simulates a conversation with the archetypal "Karen." It\'s a fun project showcasing chatbot development principles and creative prompt engineering to maintain a consistent, challenging persona.',
    problemSolved: 'Serves as an engaging and memorable demonstration of advanced chatbot personality programming and state management in a conversational AI.',
    learnings: 'Honed skills in prompt engineering and persona creation for conversational AI, learning to guide the model’s behavior to maintain a consistent and challenging character.'
  },
/*  {
    id: 6,
    title: 'AI Prompt Refiner',
    thumbnailUrl: 'https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'An application to help users craft more effective prompts for LLMs.',
    technologies: ['typescript', 'react', 'tailwind css', 'gemini api'],
    htmlUrl: 'https://copy-of-ai-prompt-refiner-89795080659.us-west1.run.app/',
    longDescription: 'A web-based tool that takes a user\'s initial idea for a prompt and iteratively refines it. It suggests additions, clarifies ambiguities, and structures the prompt based on best practices to elicit higher-quality responses from Large Language Models.',
    problemSolved: 'Parameter tuning, MLoPs',
    learnings: 'Learned to build intuitive user interfaces for complex AI interactions and developed a systematic approach to prompt optimization for better model performance.'
  }*/,
  {
    id: 7,
    title: 'Pathfinding Algorithm Visualizer',
    thumbnailUrl: 'https://i.ibb.co/V0LVCfxL/Screenshot-2025-10-02-142712.png',
    description: 'A visualizer for classic pathfinding algorithms like A* and Dijkstra\'s.',
    technologies: ['typescript', 'react', 'data structures', 'algorithms'],
    htmlUrl: 'https://pathfinder-89795080659.us-east5.run.app/',
    longDescription: 'An interactive web application that visualizes how pathfinding algorithms work. Users can create a grid with obstacles, select an algorithm, and watch in real-time as it finds the shortest path between two points.',
    problemSolved: 'Makes complex computer science algorithms tangible and easier to understand through interactive visualization, serving as a powerful educational tool.',
    learnings: 'Reinforced fundamental computer science concepts by translating abstract algorithms into a concrete, interactive visual experience. Improved React state management for real-time UI updates.'
  },/*,
  {
    id: 8,
    title: 'POST-Framework',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A modular framework for building robust and scalable backend services.',
    technologies: ['typescript', 'node.js', 'express', 'dependency injection'],
    htmlUrl: 'https://post-89795080659.us-east5.run.app/',
    longDescription: 'POST-Framework is a TypeScript-based backend framework designed for rapid development of microservices and APIs. It emphasizes a modular architecture and a clear separation of concerns, allowing developers to build complex applications that are easy to maintain and scale.',
    problemSolved: 'Accelerates backend development by providing a structured, opinionated, and scalable foundation for building modern web services and APIs in TypeScript.',
    learnings: 'Gained a deep understanding of software architecture principles, including dependency injection and modular design, and their importance in creating maintainable and scalable backend systems.'
  },*/
  {
    id: 9,
    title: 'Jargonator',
    thumbnailUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'Translates complex technical jargon into plain, simple English.',
    technologies: ['typescript', 'vue.js', 'tailwind css', 'llm api'],
    htmlUrl: 'https://github.com/moormaninmotion-byte/jargonator',
    longDescription: 'The Jargonator is a utility that simplifies technical communication. Users can input a block of text filled with industry-specific jargon, and the tool uses an LLM to translate it into easy-to-understand language, providing explanations for key terms.',
    problemSolved: 'Improves communication between technical and non-technical stakeholders by demystifying complex terminology and making information more accessible.',
    learnings: 'Focused on creating a seamless user experience for a practical AI tool, learning to balance API costs with response quality to deliver a useful and efficient product.'
  },
  {
    id: 10,
    title: 'Vulnerable AI',
    thumbnailUrl: 'https://i.ibb.co/TBgM1JC7/Screenshot-2025-10-02-150828.png',
    description: 'A tool to highlight challenges of GEN AI.',
    technologies: ['typescript', 'Cybersecurity', 'Prompt-Injection', 'Prompt-Poisoning'],
    htmlUrl: 'https://vulnerable-ai-89795080659.us-west1.run.app/',
    longDescription: 'Explores challenges weaknesses and potential vulnerabilities of Gen AI, LLMs',
    problemSolved: 'AI Safety AI Security',
    learnings: 'Bias'
  }
  /*,
/*  {
    id: 11,
    title: 'AI Portfolio Generator',
    thumbnailUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    description: 'A web application that uses Gemini to automatically generate a portfolio from a GitHub profile.',
    technologies: ['react', 'typescript', 'API', 'gemini api'],
    htmlUrl: 'https://github.com/moormaninmotion-byte/AI-Portfolio-Generator',
    longDescription: 'It fetches a public GitHub, sends the data to the Google Gemini API, and dynamically generates detailed, visually appealing project cards, complete with descriptions, problems solved, and key learnings.',
    problemSolved: 'Automates the tedious process of creating and maintaining a developer portfolio, allowing developers to showcase their work with minimal effort.',
    learnings: 'Mastered front-end development with React and TypeScript, and became proficient in prompt engineering and structured data extraction using the Gemini API.'
}, */ 
];
