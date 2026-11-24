import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://vtorosyan.com',
  integrations: [sitemap()],
  redirects: {
    '/vardan_torosyan_cv': '/cv/',
    '/about': '/about/',
    '/cv': '/cv/',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
  },
  build: {
    format: 'directory',
  },
});
