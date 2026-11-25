# Site Terrari Empreendimentos

Site estático em [Astro 5](https://astro.build), feito a partir de `../terrari-site-handoff/terrari-site` (briefing e mockups).

## Rodar

```bash
npm install
npm run dev       # desenvolvimento em http://localhost:4321
npm run build     # gera o site em dist/
npm run preview   # serve o dist/
```

Requer Node 22.

## Publicar

Site no ar: https://evertonboing13.github.io/terrari-site/

```bash
npm run deploy    # compila e envia o dist/ para a branch gh-pages (GitHub Pages)
```

Depois de editar, faça commit/push do código na `main` e rode `npm run deploy`. O GitHub leva cerca de 1 minuto para atualizar.

Para publicar automaticamente a cada push (GitHub Actions), o workflow está pronto em `../_bkp/deploy.yml`: rode `gh auth refresh -h github.com -s workflow`, copie o arquivo para `.github/workflows/deploy.yml`, faça push e em Settings > Pages troque a fonte para "GitHub Actions".

Domínio próprio: em `astro.config.mjs` troque `site` pelo domínio e remova `base`; atualize `SITE.url` em `src/config.ts` e `public/robots.txt`; crie `public/CNAME` com o domínio e aponte o DNS para o GitHub Pages.

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

Paleta oficial Terrari: Azul Terrari `#102D38`, Areia Mineral `#E9E5DC`, Concreto `#A9B1B0` e Grafite `#252A2B`, com Space Grotesk e Inter. Os tokens ficam em `src/styles/global.css`. O logo oficial (do arquivo Logo.cdr) está em `public/logo/`, em branco e em azul, com fundo transparente.

## Formulário

Com `FORM_ENDPOINT` preenchido, envia JSON (`nome`, `whatsapp`, `email`, `objetivo`, `empreendimento`, `consentimento`) por POST. Sem endpoint, abre o WhatsApp da Terrari com a mensagem pronta (requer `CONTATO.whatsapp`).

## Origem dos dados do Terrari One

Extraídos do book (`Terrari One.pdf`): Rua Avaí, Bom Retiro, Joinville/SC; 18 studios de 30 m² (6 garden no térreo com 10 a 16 m² de área externa + 12 tipo); sacada com churrasqueira, vaga individual; diferenciais e áreas comuns. As plantas foram recortadas das páginas 8 a 12 do book, e o PDF foi comprimido de 56 MB para 5,4 MB (`public/books/terrari-one-book.pdf`).
