import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages configuration (gh-pages branch)
  site: 'https://badabam.github.io/sparks/',
  base: '/sparks/',

  // Output static files (required for GitHub Pages)
  output: 'static',

  // Enable strict mode for production
  vite: {
    ssr: {
      external: ['@astrojs/prism']
    }
  },

  // Configure markdown
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
