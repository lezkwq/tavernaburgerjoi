import { taverna, whatsappLink } from "@/lib/taverna";
import { ActionLink } from "./primitives";

const passos = [
  {
    n: "01",
    titulo: "Escolha o seu",
    texto:
      "Abra o cardápio online e escolha entre hambúrgueres, acompanhamentos e bebidas da casa.",
  },
  {
    n: "02",
    titulo: "Feche o pedido",
    texto:
      "Finalize direto pelo cardápio ou fale com a Taverna pelo WhatsApp se preferir pedir por mensagem.",
  },
  {
    n: "03",
    titulo: "Decida onde comer",
    texto:
      "Receba em casa, retire na porta ou venha comer no salão. A Taverna abre de terça a domingo.",
  },
] as const;

export function HowToOrder() {
  return (
    <section
      id="como-pedir"
      className="grain relative overflow-hidden bg-gold section-y text-charcoal"
    >
      <div className="page-x relative mx-auto max-w-[1400px]">
        {/* =====================================================
            CABEÇALHO
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label-micro text-primary">
              Como pedir
            </p>

            <h2 className="mt-4 text-display-md">
              Da vontade
              <br />
              até a
              <span className="accent-word ml-3 text-primary lowercase">
                mesa
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-charcoal/55 lg:col-span-4 lg:col-start-9 lg:justify-self-end lg:text-right">
            Escolhe, pede e decide onde comer. O resto fica com a chapa.
          </p>
        </div>

        {/* =====================================================
            PASSOS
        ====================================================== */}
        <ol className="mt-14 border-t border-charcoal/20 lg:mt-20">
          {passos.map((passo) => (
            <li
              key={passo.n}
              className="group grid gap-5 border-b border-charcoal/20 py-8 sm:grid-cols-[100px_1fr] lg:grid-cols-12 lg:items-center lg:py-10"
            >
              {/* Número */}
              <div className="lg:col-span-2">
                <span className="font-display text-[clamp(3.5rem,6vw,6rem)] leading-none tracking-tight text-primary transition-transform duration-300 lg:inline-block lg:group-hover:translate-x-2">
                  {passo.n}
                </span>
              </div>

              {/* Título */}
              <div className="lg:col-span-4">
                <h3 className="font-display text-[clamp(2rem,3.2vw,3.5rem)] leading-[0.94] tracking-tight text-charcoal">
                  {passo.titulo}
                </h3>
              </div>

              {/* Texto */}
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="max-w-md text-base leading-relaxed text-charcoal/65">
                  {passo.texto}
                </p>
              </div>
            </li>
          ))}
        </ol>

        {/* =====================================================
            CTA / CUPOM
        ====================================================== */}
        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="label-micro text-primary">
              Primeira compra
            </p>

            <div className="mt-3 flex items-baseline gap-3">
              <span className="font-display text-[clamp(3rem,5vw,5.5rem)] leading-none tracking-tight text-charcoal">
                R$10
              </span>

              <span className="label-micro text-charcoal/45">
                de desconto
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal/60">
              Use o cupom{" "}
              <strong className="font-medium text-primary">
                {taverna.cupom}
              </strong>{" "}
              na primeira compra pelo cardápio online.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ActionLink
                href={taverna.pedidoUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                Fazer meu pedido
              </ActionLink>

              <ActionLink
                href={whatsappLink(
                  "Olá! Quero tirar uma dúvida sobre o pedido na Taverna Burguer.",
                )}
                target="_blank"
                rel="noreferrer noopener"
                variant="outline"
              >
                Tirar dúvida
              </ActionLink>
            </div>
          </div>
        </div>

        {/* =====================================================
            RODAPÉ DA SEÇÃO
        ====================================================== */}
        <div className="mt-14 flex flex-col gap-3 border-t border-charcoal/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-micro text-charcoal/40">
            Salão · retirada · entrega
          </p>

          <p className="label-micro text-primary">
            Terça a domingo
          </p>
        </div>
      </div>
    </section>
  );
}
