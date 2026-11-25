import { getCollection, type CollectionEntry } from 'astro:content';
import { FASES, u } from '../config';

export type Emp = CollectionEntry<'empreendimentos'>;

export async function listarEmpreendimentos() {
  const itens = await getCollection('empreendimentos');
  return itens.sort((a, b) => a.data.ordem - b.data.ordem);
}

export const faseLabel = (e: Emp) => (e.data.fase ? FASES[e.data.fase] : null);

/** "Bairro · Cidade/UF", ou null se faltar algum dado. */
export function localTexto(e: Emp) {
  const { bairro, cidade, uf } = e.data.local;
  const cid = cidade && uf ? `${cidade}/${uf}` : cidade;
  return { bairro, cidade: cid ?? null };
}

export const urlEmp = (e: Emp) => u(`/empreendimentos/${e.id}`);

/** Rótulo da data conforme a fase: "Entregue em" ou "Previsão de entrega". */
export const rotuloEntrega = (e: Emp) => (e.data.fase === 'entregue' ? 'Entregue em' : 'Previsão de entrega');
