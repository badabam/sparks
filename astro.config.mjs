import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Pages configuration
  site: 'https://badabam.github.io',
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
