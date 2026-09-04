import { photos } from "@/lib/photos";
import { taverna } from "@/lib/taverna";
import { ActionLink, Plate } from "./primitives";

const destaques = [
  {
    numero: "01",
    nome: "Rei Artur",
    texto:
      "O nome mais citado nas avaliações da casa, lembrado pelo bacon e pela maionese da Taverna.",
  },
  {
    numero: "02",
    nome: "Smash burger",
    texto:
      "Carne prensada na chapa até formar crostinha. Quem prova volta para falar dela.",
  },
  {
    numero: "03",
    nome: "Burger Junior",
    texto:
      "Pão, carne e queijo. O básico bem feito, um dos destaques do cardápio no Google.",
  },
  {
    numero: "04",
    nome: "Batata frita e geleia de pimenta",
    texto:
      "Os acompanhamentos que aparecem em destaque junto dos hambúrgueres.",
  },
] as const;

export function Signature() {
  return (
    <section
      id="hamburgueres"
      className="grain relative overflow-hidden bg-primary section-y text-cream"
    >
      <div className="page-x relative mx-auto max-w-[1400px]">
        {/* =====================================================
            CABEÇALHO
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label-micro text-cream/70">
              Direto da chapa
            </p>

            <h2 className="mt-4 text-display-md text-cream">
              Os que saem
              <br />
              <span className="accent-word text-charcoal lowercase">
                mais
              </span>{" "}
              rápido
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-cream/70 lg:col-span-4 lg:justify-self-end lg:text-right">
            Tem os clássicos, os pedidos de sempre e aqueles que quase não
            param na cozinha.
          </p>
        </div>

        {/* =====================================================
            CONTEÚDO PRINCIPAL
        ====================================================== */}
        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-12">
          {/* ===================================================
              FOTOGRAFIA
          ==================================================== */}
          <div className="lg:col-span-7">
            {/* FOTO PRINCIPAL */}
            <figure className="group">
              <div className="overflow-hidden bg-charcoal">
                <div className="aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/4.7]">
                  <Plate
                    photo={photos.reiArtur}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
              </div>

              <div className="mt-4 flex items-start justify-between gap-6 border-t border-cream/25 pt-3">
                <div>
                  <p className="label-micro text-cream">
                    Rei Artur
                  </p>

                  <p className="mt-1 text-sm text-cream/60">
                    Um dos mais lembrados da casa
                  </p>
                </div>

                <p className="label-micro text-cream/50">
                  01
                </p>
              </div>
            </figure>

            {/* FOTO SECUNDÁRIA */}
            <div className="mt-8 grid gap-6 sm:grid-cols-12 lg:mt-10">
              <div className="hidden sm:col-span-5 sm:flex sm:items-end">
                <p className="font-display text-[clamp(2rem,3vw,3.5rem)] leading-[0.92] tracking-tight text-charcoal">
                  Carne.
                  <br />
                  Queijo.
                  <br />
                  Fogo.
                </p>
              </div>

              <figure className="group sm:col-span-7">
                <div className="aspect-[4/3] overflow-hidden bg-charcoal">
                  <Plate
                    photo={photos.cheddarLuva}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <p className="label-micro text-cream/80">
                    Saindo da chapa
                  </p>

                  <p className="label-micro text-cream/50">
                    Taverna Burguer
                  </p>
                </div>
              </figure>
            </div>
          </div>

          {/* ===================================================
              LISTA DOS DESTAQUES
          ==================================================== */}
          <div className="lg:col-span-5 lg:pt-4">
            <dl className="border-t border-cream/30">
              {destaques.map((item) => (
                <div
                  key={item.nome}
                  className="grid grid-cols-[auto_1fr] gap-x-5 border-b border-cream/25 py-6 lg:py-7"
                >
                  <span className="label-micro pt-1 text-charcoal/80">
                    {item.numero}
                  </span>

                  <div>
                    <dt className="font-display text-[clamp(1.8rem,2.8vw,3rem)] leading-[0.95] tracking-tight text-cream uppercase">
                      {item.nome}
                    </dt>

                    <dd className="mt-3 max-w-md text-base leading-relaxed text-cream/75">
                      {item.texto}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <ActionLink
                href={taverna.pedidoUrl}
                target="_blank"
                rel="noreferrer noopener"
                variant="light"
              >
                Cardápio completo
              </ActionLink>
            </div>

            <div className="mt-10 border-t border-cream/25 pt-5">
              <p className="label-micro text-cream/60">
                Hambúrguer grelhado no fogo
              </p>

              <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
                Pedido feito, chapa acesa. O resto é carne no ponto, queijo
                derretendo e pão segurando tudo até a última mordida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
