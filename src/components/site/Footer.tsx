import { taverna, whatsappLink } from "@/lib/taverna";
import { InstagramIcon, WhatsappIcon } from "./primitives";

export function Footer() {
  return (
    <footer className="bg-charcoal py-12 text-cream">
      <div className="page-x mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl tracking-[0.14em] uppercase">Taverna</p>
          <p className="accent-word text-lg text-gold">Burguer</p>
        </div>
        <p className="label-micro max-w-xs text-cream/50">
          Hambúrguer grelhado no fogo em {taverna.cidade}, {taverna.estado}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp da Taverna Burguer"
            className="grid size-10 place-items-center rounded-full border border-cream/25 transition-colors hover:border-gold hover:text-gold"
          >
            <WhatsappIcon className="size-4" />
          </a>
          <a
            href={taverna.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram da Taverna Burguer"
            className="grid size-10 place-items-center rounded-full border border-cream/25 transition-colors hover:border-gold hover:text-gold"
          >
            <InstagramIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
