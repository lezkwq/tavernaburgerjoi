import { photos } from "@/lib/photos";
import { taverna, whatsappLink } from "@/lib/taverna";
import { ActionLink, Plate } from "./primitives";

export function Hero() {
  return (
    <section
      id="topo"
      className="grain relative overflow-hidden bg-cream pt-24 pb-14 text-charcoal lg:min-h-[820px] lg:pt-0 lg:pb-0"
    >
      {/* =========================================================
          DESKTOP — FOTO FULL BLEED
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block"
      >
        <img
          src={photos.smashDuplo.src}
          alt=""
          width={photos.smashDuplo.width}
          height={photos.smashDuplo.height}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-[68%_50%]"
        />

        {/* Escurece a foto inteira para manter a identidade */}
        <div className="absolute inset-0 bg-cream/70" />

        {/* Reforço de contraste atrás do texto */}
        <div className="absolute inset-y-0 left-0 w-[58%] bg-cream/55" />
      </div>

      {/* =========================================================
          JOINVILLE — DESKTOP
          Palavra inteira, gigante, sem cortar em JOIN
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[7%] z-10 hidden justify-center lg:flex"
      >
        <span className="outline-word whitespace-nowrap text-center text-[clamp(6rem,11vw,10.5rem)] leading-none opacity-25">
          JOINVILLE
        </span>
      </div>

      {/* =========================================================
          CONTEÚDO — DESKTOP
      ========================================================= */}
      <div className="page-x relative z-20 mx-auto hidden min-h-[820px] max-w-[1400px] grid-cols-12 items-center lg:grid">
        <div className="reveal col-span-6 xl:col-span-5">
          <p className="label-micro text-primary">
            Hamburgueria em Joinville, Anita Garibaldi
          </p>

          <h1 className="mt-5 font-display text-[clamp(4.5rem,7vw,7rem)] leading-[0.84] font-bold tracking-tight uppercase text-primary">
            Grelhado
            <br />
            no
            <span className="accent-word ml-3 text-primary lowercase">
              fogo
            </span>
            <br />
            vivo
          </h1>

          <p className="mt-7 max-w-md text-base leading-relaxed text-charcoal/75">
            Carne no ponto que você pediu, pão macio, molho da casa e o salão
            da Taverna aceso de terça a domingo. Sem pressa na chapa, sem
            enrolação no balcão.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ActionLink
              href={taverna.pedidoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
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

        <p className="label-micro absolute right-0 bottom-10 text-right text-charcoal/60">
          {taverna.horario}
        </p>
      </div>

      {/* =========================================================
          JOINVILLE — MOBILE
          Mantém a lógica visual que já estava funcionando
      ========================================================= */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[18%] flex justify-center overflow-hidden lg:hidden"
      >
        <span className="outline-word whitespace-nowrap text-[clamp(6rem,20vw,17rem)] leading-none opacity-25">
          Joinville
        </span>
      </div>

      {/* =========================================================
          CONTEÚDO — MOBILE
      ========================================================= */}
      <div className="page-x relative mx-auto grid max-w-[1400px] gap-8 lg:hidden">
        <div className="reveal relative z-30">
          <p className="label-micro text-primary">
            Hamburgueria em Joinville, Anita Garibaldi
          </p>

          <h1 className="mt-5 font-display text-[clamp(3rem,6.6vw,6rem)] leading-[0.88] font-bold tracking-tight uppercase text-primary">
            Grelhado
            <br />
            no
            <span className="accent-word ml-3 text-primary lowercase">
              fogo
            </span>
            <br />
            vivo
          </h1>

          <p className="mt-6 max-w-sm text-base text-charcoal/70">
            Carne no ponto que você pediu, pão macio, molho da casa e o salão
            da Taverna aceso de terça a domingo. Sem pressa na chapa, sem
            enrolação no balcão.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ActionLink
              href={taverna.pedidoUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
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

        <div className="relative z-10">
          <div className="reveal float-soft relative z-10 mx-auto w-[min(100%,34rem)]">
            <Plate
              photo={photos.duploCheddar}
              priority
              className="rotate-[-2deg]"
            />
          </div>

          <div className="absolute -bottom-6 right-0 z-20 hidden w-40 rotate-[5deg] border-4 border-primary md:block">
            <Plate photo={photos.smashDuplo} />
          </div>
        </div>
      </div>
    </section>
  );
}
