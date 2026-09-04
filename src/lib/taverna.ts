/**
 * Dados reais e confirmados do negócio. Fonte única de verdade da página.
 * Nada aqui deve ser inventado: apenas informação pública verificada.
 */
export const taverna = {
  nome: "Taverna Burguer",
  cidade: "Joinville",
  estado: "SC",
  bairro: "Anita Garibaldi",
  rua: "R. Dr. Plácido Olímpio de Oliveira, 1461",
  cep: "89202-165",
  telefoneE164: "+5547992926929",
  instagramUrl: "https://www.instagram.com/tavernaburguerjoi/",
  pedidoUrl: "https://tavernaburgerjoi.mandarpedido.com",
  contatoUrl: "https://contate.me/taverna-hamburgueria",
  nota: 4.9,
  avaliacoes: 231,
  faixaPreco: "R$ 40 a R$ 60 por pessoa",
  horario: "Terça a domingo, das 18:15 às 22:55",
  cupom: "PRIMEIRACOMPRA",
} as const;

/** Link de WhatsApp com mensagem pré definida, sem expor o número na interface. */
export function whatsappLink(
  mensagem = "Olá! Vim pelo site da Taverna Burguer e quero fazer um pedido.",
): string {
  return `https://wa.me/${taverna.telefoneE164.replace("+", "")}?text=${encodeURIComponent(mensagem)}`;
}

export const enderecoCompleto = `${taverna.rua}, ${taverna.bairro}, ${taverna.cidade}, ${taverna.estado}, ${taverna.cep}`;

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `Taverna Burguer, ${enderecoCompleto}`,
)}&output=embed`;
