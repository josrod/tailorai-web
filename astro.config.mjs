// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: cambia por tu dominio definitivo antes de publicar.
const SITE = process.env.SITE_URL ?? 'https://www.tailorai.example';

export default defineConfig({
  site: SITE,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en' } },
    }),
  ],
});
