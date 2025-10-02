
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-neutral-800">
      <div className="container mx-auto px-4 md:px-8 py-6">
        <p className="text-center text-sm text-brand-gray">
          &copy; {new Date().getFullYear()}. All rights reserved. Designed & Built with a minimalist focus.
        </p>
      </div>
    </footer>
  );
};
