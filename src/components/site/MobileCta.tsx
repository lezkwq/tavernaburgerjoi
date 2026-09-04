import { taverna, whatsappLink } from "@/lib/taverna";
import { WhatsappIcon } from "./primitives";

/** CTA fixo: barra no mobile e botão flutuante no desktop. */
export function MobileCta() {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-cream/15 bg-charcoal/95 p-3 backdrop-blur-sm md:hidden">
        <a
          href={taverna.pedidoUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="label-micro flex-1 rounded-full border border-gold/70 py-3.5 text-center text-gold"
        >
          Cardápio
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer noopener"
          className="label-micro flex flex-1 items-center justify-center gap-2 rounded-full bg-primary py-3.5 text-primary-foreground"
        >
          <WhatsappIcon className="size-4" />
          Pedir agora
        </a>
      </div>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Chamar a Taverna Burguer no WhatsApp"
        className="fixed right-6 bottom-6 z-50 hidden size-14 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:scale-105 md:grid"
      >
        <WhatsappIcon className="size-6" />
      </a>
    </>
  );
}
