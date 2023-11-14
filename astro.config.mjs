import { defineConfig } from 'astro/config';
import  vue from '@astrojs/vue';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8080
  },
  integrations: [tailwind(), vue()]
});