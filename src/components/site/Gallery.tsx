import { photos } from "@/lib/photos";
import { Plate } from "./primitives";

export function Gallery() {
  return (
    <section id="salao" className="overflow-hidden bg-cream section-y text-charcoal">
      <div className="page-x mx-auto max-w-[1400px]">
        {/* Cabeçalho */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label-micro mb-4 text-primary">
              Taverna Burguer · Joinville
            </p>

            <h2 className="text-display-sm">
              Dentro da
              <span className="accent-word ml-3 text-primary lowercase">
                casa
              </span>
            </h2>
          </div>

          <p className="label-micro max-w-xs text-muted-foreground lg:col-span-4 lg:justify-self-end">
            Da mesa cheia ao hambúrguer saindo da cozinha. Um pouco do que
            acontece por aqui todas as noites.
          </p>
        </div>

        {/* =====================================================
            GALERIA
            Uma imagem protagonista + imagens de apoio.
            Sem sensação de colagem aleatória.
        ====================================================== */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-8">
          {/* FOTO PRINCIPAL */}
          <figure className="group relative overflow-hidden bg-charcoal sm:col-span-2 lg:col-span-7">
            <div className="aspect-[1.15/1] overflow-hidden lg:aspect-[1.28/1]">
              <Plate
                photo={photos.bandeja}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/55 via-black/10 to-transparent px-5 pt-16 pb-4">
              <span className="label-micro text-cream">
                Mesa posta
              </span>

              <span className="label-micro text-cream/60">
                01
              </span>
            </div>
          </figure>

          {/* FOTO VERTICAL DIREITA */}
          <figure className="group relative overflow-hidden bg-charcoal sm:col-span-1 lg:col-span-4 lg:col-start-9 lg:mt-16">
            <div className="aspect-[4/5] overflow-hidden">
              <Plate
                photo={photos.doisBurgers}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/50 via-black/10 to-transparent px-4 pt-14 pb-4">
              <span className="label-micro text-cream">
                Feito na casa
              </span>

              <span className="label-micro text-cream/60">
                02
              </span>
            </div>
          </figure>

          {/* FOTO VERTICAL INFERIOR ESQUERDA */}
          <figure className="group relative overflow-hidden bg-charcoal sm:col-span-1 lg:col-span-4 lg:col-start-2 lg:mt-4">
            <div className="aspect-[4/5] overflow-hidden">
              <Plate
                photo={photos.mesaCompleta}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/50 via-black/10 to-transparent px-4 pt-14 pb-4">
              <span className="label-micro text-cream">
                No salão
              </span>

              <span className="label-micro text-cream/60">
                03
              </span>
            </div>
          </figure>

          {/* FOTO HORIZONTAL / DETALHE */}
          <figure className="group relative overflow-hidden bg-charcoal sm:col-span-2 lg:col-span-6 lg:col-start-7 lg:mt-20">
            <div className="aspect-[1.35/1] overflow-hidden">
              <Plate
                photo={photos.cebolaCaramelizada}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/50 via-black/10 to-transparent px-5 pt-16 pb-4">
              <span className="label-micro text-cream">
                Da chapa para a mesa
              </span>

              <span className="label-micro text-cream/60">
                04
              </span>
            </div>
          </figure>
        </div>

        {/* Fechamento editorial */}
        <div className="mt-14 border-t border-charcoal/20 pt-5 lg:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <p className="label-micro text-primary">
              Fogo aceso de terça a domingo
            </p>

            <p className="max-w-md text-sm leading-relaxed text-muted-foreground sm:text-right">
              Hambúrguer, mesa cheia e aquele cheiro de chapa que começa antes
              mesmo do pedido chegar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
