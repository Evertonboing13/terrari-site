// Configurações gerais do site. Valores null aparecem como pendência
// (marcador tracejado) até a Terrari enviar o dado.

/** Prefixa caminhos internos com o base do site (ex.: /terrari-site no GitHub Pages, vazio em domínio próprio). */
export const u = (caminho: string) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return caminho.startsWith('/') ? `${base}${caminho}` : caminho;
};

export const SITE = {
  nome: 'Terrari Empreendimentos',
  url: 'https://evertonboing13.github.io/terrari-site', // trocar pelo domínio definitivo quando houver
  descricao:
    'Empreendimentos modernos, espaços bem planejados e oportunidades para viver e investir.',
};

/** Link da área do corretor. Usado no header, home, listagem, página do empreendimento e footer. */
export const TABELA_PRO_URL: string | null = null;

export const CONTATO = {
  whatsapp: null as string | null, // só dígitos com DDI, ex.: '5547999999999'
  telefone: null as string | null,
  email: null as string | null,
  endereco: null as string | null,
  cnpj: null as string | null,
  instagram: null as string | null,
  facebook: null as string | null,
  youtube: null as string | null,
};

export const NUMEROS = {
  anoFundacao: null as string | null,
  m2Construidos: null as string | null,
  cidadeM2: 'Joinville' as string | null,
  unidadesEntregues: null as string | null,
};

/**
 * Destino do formulário de interesse. Se houver endpoint (Formspree, RD Station,
 * webhook do CRM etc.), os dados são enviados por POST em JSON. Sem endpoint,
 * o formulário abre o WhatsApp com a mensagem preenchida.
 */
export const FORM_ENDPOINT: string | null = null;

export const FASES = {
  lancamento: 'Lançamento',
  'em-obras': 'Em obras',
  entregue: 'Entregue',
} as const;
export type Fase = keyof typeof FASES;

export function whatsappLink(mensagem?: string) {
  if (!CONTATO.whatsapp) return u('/#contato');
  const q = mensagem ? `?text=${encodeURIComponent(mensagem)}` : '';
  return `https://wa.me/${CONTATO.whatsapp}${q}`;
}
