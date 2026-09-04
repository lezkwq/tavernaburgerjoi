import { photos } from "@/lib/photos";
import { Plate } from "./primitives";

/**
 * Galeria editorial: colunas de larguras diferentes e rotações leves.
 * Cada foto mantém a proporção original do arquivo, sem recorte forçado.
 */
export function Gallery() {
  return (
    <section id="salao" className="bg-cream section-y text-charcoal">
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-display-sm">
            Dentro da
            <span className="accent-word ml-3 text-primary lowercase">casa</span>
          </h2>
          <p className="label-micro max-w-xs text-muted-foreground">
            Fotos do salão, das bandejas e dos hambúrgueres servidos na Taverna
          </p>
        </div>

        <div className="mt-14 grid items-start gap-6 sm:grid-cols-6 lg:grid-cols-12">
          <figure className="hover-lift sm:col-span-4 lg:col-span-7 lg:rotate-[-1deg]">
            <Plate photo={photos.bandeja} />
          </figure>
          <figure className="hover-lift sm:col-span-2 lg:col-span-4 lg:col-start-9 lg:mt-16 lg:rotate-[2deg]">
            <Plate photo={photos.cebolaCaramelizada} />
          </figure>
          <figure className="hover-lift sm:col-span-3 lg:col-span-3 lg:col-start-2 lg:rotate-[1.5deg]">
            <Plate photo={photos.doisBurgers} />
          </figure>
          <figure className="hover-lift sm:col-span-3 lg:col-span-4 lg:mt-10 lg:rotate-[-2deg]">
            <Plate photo={photos.mesaCompleta} />
          </figure>
          <figure className="hover-lift sm:col-span-6 lg:col-span-4 lg:col-start-10 lg:-mt-6">
            <Plate photo={photos.smashDuplo} />
          </figure>
        </div>
      </div>
    </section>
  );
}
