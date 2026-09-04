import { taverna, whatsappLink } from "@/lib/taverna";
import { ActionLink } from "./primitives";

const passos = [
  {
    n: "01",
    titulo: "Escolha pelo cardápio online",
    texto: "O cardápio com os hambúrgueres, acompanhamentos e bebidas está sempre atualizado.",
  },
  {
    n: "02",
    titulo: "Feche o pedido",
    texto:
      "Conclua pelo cardápio online ou chame no WhatsApp se preferir combinar tudo por mensagem.",
  },
  {
    n: "03",
    titulo: "Escolha como receber",
    texto: "Entrega sem contato, retirada na porta ou mesa no salão, de terça a domingo.",
  },
] as const;

export function HowToOrder() {
  return (
    <section id="como-pedir" className="grain bg-charcoal section-y text-cream">
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-micro text-gold">Como pedir</p>
            <h2 className="mt-4 text-display-sm">
              Três
              <br />
              <span className="accent-word text-gold lowercase">passos</span>
            </h2>
            <p className="mt-6 max-w-sm text-base text-cream/70">
              Na primeira compra pelo cardápio online, o cupom {taverna.cupom} dá dez reais de
              desconto.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={taverna.pedidoUrl} target="_blank" rel="noreferrer noopener">
                Fazer meu pedido
              </ActionLink>
              <ActionLink
                href={whatsappLink("Olá! Quero tirar uma dúvida sobre o pedido na Taverna Burguer.")}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
              >
                Tirar dúvida
              </ActionLink>
            </div>
          </div>

          <ol className="lg:col-span-7 lg:col-start-6">
            {passos.map((passo) => (
              <li
                key={passo.n}
                className="dotted-rule flex gap-8 py-8 first:border-t-0 first:pt-0"
              >
                <span className="font-display text-5xl leading-none text-primary">{passo.n}</span>
                <div>
                  <h3 className="text-2xl tracking-tight text-cream">{passo.titulo}</h3>
                  <p className="mt-2 max-w-md text-base text-cream/70">{passo.texto}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
