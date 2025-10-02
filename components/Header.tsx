
import React from 'react';

export const Header: React.FC = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20 border-b border-neutral-800">
          <a href="#" className="font-display text-2xl font-bold tracking-tighter text-brand-light hover:text-brand-accent transition-colors">
            Portfolio
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-brand-gray hover:text-brand-light transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};
