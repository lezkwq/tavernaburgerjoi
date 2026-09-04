import { taverna, whatsappLink } from "@/lib/taverna";
import { WhatsappIcon } from "./primitives";

/**
 * CTA persistente:
 * - mobile: barra fixa inferior com cardápio + WhatsApp
 * - desktop: botão flutuante discreto de WhatsApp
 */
export function MobileCta() {
  return (
    <>
      {/* =====================================================
          MOBILE
      ====================================================== */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/10 bg-charcoal/95 px-3 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md md:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={taverna.pedidoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="label-micro flex min-h-12 flex-1 items-center justify-center rounded-full border border-gold/60 px-4 text-center text-gold transition-colors active:bg-gold/10"
          >
            Ver cardápio
          </a>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer noopener"
            className="label-micro flex min-h-12 flex-[1.15] items-center justify-center gap-2 rounded-full bg-primary px-4 text-primary-foreground transition-transform active:scale-[0.98]"
          >
            <WhatsappIcon className="size-4" />
            Pedir agora
          </a>
        </div>
      </div>

      {/* =====================================================
          DESKTOP
      ====================================================== */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Falar com a Taverna Burguer pelo WhatsApp"
        className="group fixed right-6 bottom-6 z-50 hidden items-center gap-3 rounded-full border border-cream/10 bg-charcoal/95 py-2.5 pr-5 pl-2.5 text-cream shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 lg:flex"
      >
        <span className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:scale-105">
          <WhatsappIcon className="size-5" />
        </span>

        <span className="flex flex-col">
          <span className="label-micro text-cream">
            Pedir agora
          </span>

          <span className="mt-0.5 text-[0.65rem] leading-none text-cream/45">
            pelo WhatsApp
          </span>
        </span>
      </a>
    </>
  );
}
