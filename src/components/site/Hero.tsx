import { photos } from "@/lib/photos";
import { taverna, whatsappLink } from "@/lib/taverna";
import { ActionLink, Plate } from "./primitives";

export function Hero() {
  return (
    <section id="topo" className="grain relative bg-charcoal pt-24 pb-14 text-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center overflow-hidden"
      >
        <span className="outline-word whitespace-nowrap text-[clamp(6rem,20vw,17rem)] leading-none opacity-25">
          Joinville
        </span>
      </div>

      <div className="page-x relative mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-12 lg:items-end">
        <div className="reveal lg:col-span-5">
          <p className="label-micro text-gold">Hamburgueria em Joinville, Anita Garibaldi</p>
          <h1 className="mt-5 text-display-lg text-cream">
            Grelhado
            <br />
            no
            <span className="accent-word ml-3 text-primary lowercase">fogo</span>
            <br />
            vivo
          </h1>
          <p className="mt-6 max-w-sm text-base text-cream/70">
            Carne no ponto que você pediu, pão macio, molho da casa e o salão da Taverna
            aceso de terça a domingo. Sem pressa na chapa, sem enrolação no balcão.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink href={taverna.pedidoUrl} target="_blank" rel="noreferrer noopener">
              Ver cardápio e pedir
            </ActionLink>
            <ActionLink
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer noopener"
              variant="outline"
            >
              Falar no WhatsApp
            </ActionLink>
          </div>
        </div>

        <div className="relative lg:col-span-7">
          <div className="reveal float-soft relative z-10 mx-auto w-[min(100%,34rem)]">
            <Plate photo={photos.duploCheddar} priority className="rotate-[-2deg]" />
          </div>
          <div className="absolute -bottom-6 right-0 z-20 hidden w-40 rotate-[5deg] border-4 border-cream md:block">
            <Plate photo={photos.smashDuplo} />
          </div>
          <p className="label-micro absolute top-6 left-0 hidden text-cream/50 lg:block">
            {taverna.horario}
          </p>
        </div>
      </div>
    </section>
  );
}
