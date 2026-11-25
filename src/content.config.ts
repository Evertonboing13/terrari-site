import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const imagem = (image: any) => z.object({ src: image(), alt: z.string() });

const empreendimentos = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/empreendimentos' }),
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      ordem: z.number(),
      fase: z.enum(['lancamento', 'em-obras', 'entregue']).nullable(),
      local: z.object({
        bairro: z.string().nullable(),
        cidade: z.string().nullable(),
        uf: z.string().nullable(),
        endereco: z.string().nullable(),
        referencias: z.array(z.string()).default([]),
      }),
      ficha: z.object({
        area: z.string().nullable(),
        tipologia: z.string().nullable(),
        unidades: z.string().nullable(),
        entrega: z.string().nullable(),
        registro: z.string().nullable(),
      }),
      conceito: z.string().nullable(),
      apresentacao: z.array(z.string()).default([]),
      diferenciais: z.array(z.string()).default([]),
      capa: imagem(image),
      galeria: z.array(imagem(image)).default([]),
      areasComuns: z.array(z.object({ nome: z.string(), src: image(), alt: z.string() })).default([]),
      plantas: z.array(z.object({ titulo: z.string(), src: image(), alt: z.string() })).default([]),
      /** Percentual concluído da obra (só para fase em-obras). */
      obra: z.number().min(0).max(100).nullable().default(null),
      video: z.string().url().nullable().default(null),
      book: z.string().nullable().default(null),
      mapa: z.string().nullable().default(null),
    }),
});

export const collections = { empreendimentos };
