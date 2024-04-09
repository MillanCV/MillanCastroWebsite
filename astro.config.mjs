import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://millan-castro.xyz/',
  redirects: {
    '/blog': '/docs'
  },
  integrations: [tailwind()]
});