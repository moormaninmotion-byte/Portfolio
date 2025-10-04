import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = '/portfolio/';


export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    base: process.env.NODE_ENV === 'production' ? repoName : '/',
    build: {
      outDir: 'docs/',
    },
    resolve: {
      alias: {
        '@': path.resolve(repoName, '.'),
      },
    }
  };
});
