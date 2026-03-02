import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable strict mode for production
  vite: {
    ssr: {
      external: ['@astrojs/prism']
    }
  },

  // Site URL for sitemaps and canonical URLs
  site: 'https://sparks-microblog.dev',

  // Configure markdown
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
