import { photos } from "@/lib/photos";
import { taverna } from "@/lib/taverna";
import { ActionLink, Plate } from "./primitives";

const destaques = [
  {
    nome: "Rei Artur",
    texto:
      "O nome mais citado nas avaliações da casa, lembrado pelo bacon e pela maionese da Taverna.",
  },
  {
    nome: "Smash burger",
    texto: "Carne prensada na chapa até formar crostinha. Quem prova volta para falar dela.",
  },
  {
    nome: "Burger Junior",
    texto: "Pão, carne e queijo. O básico bem feito, um dos destaques do cardápio no Google.",
  },
  {
    nome: "Batata frita e geleia de pimenta",
    texto: "Os acompanhamentos que aparecem em destaque junto dos hambúrgueres.",
  },
] as const;

export function Signature() {
  return (
    <section id="hamburgueres" className="grain relative bg-primary section-y text-cream">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="label-micro text-cream/70">Direto da chapa</p>
        <h2 className="mt-4 text-display-md text-cream">
          Os que saem
          <br />
          <span className="accent-word text-charcoal lowercase">mais</span> rápido
        </h2>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-6">
            <div className="hover-lift relative z-10 mx-auto w-[min(100%,30rem)] rotate-[2deg]">
              <Plate photo={photos.reiArtur} />
            </div>
            <div className="hover-lift absolute -bottom-8 -left-2 hidden w-40 rotate-[-6deg] border-[6px] border-cream sm:block">
              <Plate photo={photos.cheddarLuva} />
            </div>
          </div>

          <dl className="lg:col-span-6">
            {destaques.map((item) => (
              <div key={item.nome} className="dotted-rule py-6 first:border-t-0 first:pt-0">
                <dt className="font-display text-3xl tracking-tight text-cream uppercase">
                  {item.nome}
                </dt>
                <dd className="mt-2 max-w-md text-base text-cream/80">{item.texto}</dd>
              </div>
            ))}
            <ActionLink
              href={taverna.pedidoUrl}
              target="_blank"
              rel="noreferrer noopener"
              variant="light"
              className="mt-8"
            >
              Cardápio completo
            </ActionLink>
          </dl>
        </div>
      </div>
    </section>
  );
}
