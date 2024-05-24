import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [tailwind(), preact(), sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: true
    }
  }
});