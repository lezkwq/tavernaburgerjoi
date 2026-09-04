import { taverna, whatsappLink } from "@/lib/taverna";
import { InstagramIcon, WhatsappIcon } from "./primitives";

const links = [
  { label: "A Taverna", href: "#a-taverna" },
  { label: "Hambúrgueres", href: "#hamburgueres" },
  { label: "Dentro da casa", href: "#salao" },
  { label: "Como pedir", href: "#como-pedir" },
  { label: "Onde estamos", href: "#onde-estamos" },
] as const;

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-charcoal text-cream">
      {/* =====================================================
          BLOCO PRINCIPAL
      ====================================================== */}
      <div className="page-x mx-auto max-w-[1400px] pt-16 pb-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* MARCA / FRASE */}
          <div className="lg:col-span-6">
            <a
              href="#topo"
              aria-label="Voltar ao início"
              className="inline-block"
            >
              <p className="font-display text-[clamp(3.5rem,7vw,7rem)] leading-[0.78] tracking-[-0.03em] uppercase text-cream">
                Taverna
              </p>

              <p className="accent-word mt-2 text-[clamp(2.7rem,5vw,5rem)] leading-none text-gold">
                Burguer
              </p>
            </a>

            <p className="mt-8 max-w-md font-display text-[clamp(1.7rem,2.5vw,2.8rem)] leading-[1] tracking-tight text-cream/90">
              Hambúrguer,
              <br />
              fogo aceso
              <br />e mesa cheia.
            </p>

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/50">
              Hambúrguer grelhado no fogo em {taverna.cidade},{" "}
              {taverna.estado}. Salão, retirada e entrega de terça a domingo.
            </p>
          </div>

          {/* NAVEGAÇÃO */}
          <div className="lg:col-span-3 lg:col-start-8">
            <p className="label-micro text-gold">
              Navegue
            </p>

            <nav
              aria-label="Navegação do rodapé"
              className="mt-6 border-t border-cream/15"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between border-b border-cream/15 py-4 transition-colors hover:text-gold"
                >
                  <span className="text-sm text-cream/75 transition-colors group-hover:text-gold">
                    {link.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-sm text-cream/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gold"
                  >
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>

          {/* CONTATO */}
          <div className="lg:col-span-2 lg:col-start-11">
            <p className="label-micro text-gold">
              Fale com a casa
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="WhatsApp da Taverna Burguer"
                className="grid size-12 place-items-center rounded-full border border-cream/25 text-cream transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <WhatsappIcon className="size-5" />
              </a>

              <a
                href={taverna.instagramUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram da Taverna Burguer"
                className="grid size-12 place-items-center rounded-full border border-cream/25 text-cream transition-all duration-300 hover:border-gold hover:text-gold"
              >
                <InstagramIcon className="size-5" />
              </a>
            </div>

            <a
              href={taverna.pedidoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="label-micro mt-6 inline-block border-b border-gold/50 pb-1 text-gold transition-colors hover:border-gold"
            >
              Abrir cardápio
            </a>
          </div>
        </div>

        {/* =====================================================
            PALAVRA GIGANTE
        ====================================================== */}
        <div
          aria-hidden="true"
          className="mt-16 overflow-hidden border-t border-cream/15 pt-8 lg:mt-24"
        >
          <p className="whitespace-nowrap font-display text-[clamp(4.8rem,14vw,13rem)] leading-[0.72] tracking-[-0.055em] uppercase text-cream/[0.06]">
            Fogo vivo
          </p>
        </div>

        {/* =====================================================
            LINHA FINAL
        ====================================================== */}
        <div className="mt-8 flex flex-col gap-4 border-t border-cream/15 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-micro text-cream/35">
            © {new Date().getFullYear()} Taverna Burguer
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <p className="label-micro text-cream/35">
              {taverna.cidade} · {taverna.estado}
            </p>

            <a
              href="#topo"
              className="label-micro text-gold transition-opacity hover:opacity-70"
            >
              Voltar ao topo ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
