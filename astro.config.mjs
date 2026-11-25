// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://evertonboing13.github.io/terrari-site
// Ao migrar para domínio próprio (ex.: www.terrari.com.br), trocar `site` e remover `base`
// (e atualizar SITE.url em src/config.ts e public/robots.txt).
export default defineConfig({
  site: 'https://evertonboing13.github.io',
  base: '/terrari-site',
  trailingSlash: 'ignore',
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
});
