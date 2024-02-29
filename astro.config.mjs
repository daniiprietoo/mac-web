import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  pages: [
    { src: '/index.astro',  url: '/' },
    { src: '/vinos-y-tapas.astro', url: '/vinos-y-tapas'}
  ]
});
