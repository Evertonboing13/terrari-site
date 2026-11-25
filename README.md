# Site Terrari Empreendimentos

Site estático em [Astro 5](https://astro.build), feito a partir de `../terrari-site-handoff/terrari-site` (briefing e mockups).

## Rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:4321
npm run build     # gera o site em dist/
npm run preview   # serve o dist/
```

Requer Node 22. Hospedagem: qualquer serviço de site estático (Netlify, Vercel, Cloudflare Pages, S3) servindo a pasta `dist/`.

## Onde editar

| O quê | Arquivo |
|---|---|
| Link do Tabela Pro, WhatsApp, e-mail, endereço, CNPJ, redes, números da empresa, destino do formulário | `src/config.ts` |
| Dados de cada empreendimento (fase, local, ficha, textos, galeria, áreas comuns, plantas, vídeo, book, mapa) | `src/content/empreendimentos/<slug>.json` |
| Imagens dos empreendimentos | `src/assets/empreendimentos/<slug>/` (o build gera WebP responsivo) |
| Books em PDF | `public/books/` |
| Domínio | `astro.config.mjs` (`site`) e `src/config.ts` (`SITE.url`) |

- Campo `null` = dado pendente. Aparece no site como marcador tracejado `[ASSIM]`.
- `fase`: `"lancamento"`, `"em-obras"` ou `"entregue"`. Alimenta o selo, o filtro e a contagem na listagem. Em entregues, o registro de incorporação deixa de aparecer.
- `obra`: percentual concluído (0 a 100), usado quando a fase é `em-obras`. Mostra a barra de andamento no card, na página e na linha do tempo da página A Terrari.
- `ficha.entrega`: no formato `Nov/2030`. Também ordena a linha do tempo.
- `video`: URL do YouTube ou Vimeo. A seção de vídeo só aparece quando preenchida e o player só carrega ao clicar.
- Galeria, áreas comuns, vídeo e plantas somem quando estão vazios.
- Novo empreendimento: criar o JSON (o nome do arquivo vira o slug) e a pasta de imagens.

## Identidade visual

Segue o mockup: verde `#0F2A22`, dourado `#D9B45B`, Space Grotesk e Inter. Os tokens ficam em `src/styles/global.css`. O logo real, extraído do book, está em `public/logo/` caso a Terrari queira usá-lo no lugar do logo em texto.

## Formulário

Com `FORM_ENDPOINT` preenchido, envia JSON (`nome`, `whatsapp`, `email`, `objetivo`, `empreendimento`, `consentimento`) por POST. Sem endpoint, abre o WhatsApp da Terrari com a mensagem pronta (requer `CONTATO.whatsapp`).

## Origem dos dados do Terrari One

Extraídos do book (`Terrari One.pdf`): Rua Avaí, Bom Retiro, Joinville/SC; 18 studios de 30 m² (6 garden no térreo com 10 a 16 m² de área externa + 12 tipo); sacada com churrasqueira, vaga individual; diferenciais e áreas comuns. As plantas foram recortadas das páginas 8 a 12 do book, e o PDF foi comprimido de 56 MB para 5,4 MB (`public/books/terrari-one-book.pdf`).
