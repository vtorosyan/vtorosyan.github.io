import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  site: 'https://vtorosyan.com',
  integrations: [sitemap()],
  redirects: {
    '/vardan_torosyan_cv': '/cv/',
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true,
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: { className: ['heading-anchor'], 'aria-label': 'Link to this section' },
          content: { type: 'text', value: '#' },
        },
      ],
    ],
  },
  build: {
    format: 'directory',
  },
});
