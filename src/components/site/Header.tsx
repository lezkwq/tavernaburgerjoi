import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { taverna, whatsappLink } from "@/lib/taverna";
import { InstagramIcon, WhatsappIcon } from "./primitives";

const nav = [
  { label: "A Taverna", href: "#a-taverna" },
  { label: "Hambúrgueres", href: "#hamburgueres" },
  { label: "Salão", href: "#salao" },
  { label: "Como pedir", href: "#como-pedir" },
  { label: "Onde estamos", href: "#onde-estamos" },
] as const;

export function Header() {
  const [dense, setDense] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setDense(window.scrollY > 50);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        dense
          ? "border-b border-cream/10 bg-charcoal/95 backdrop-blur-md"
          : "bg-gradient-to-b from-charcoal/70 via-charcoal/20 to-transparent",
      )}
    >
      <div
        className={cn(
          "page-x mx-auto flex max-w-[1400px] items-center justify-between gap-6 transition-all duration-500",
          dense ? "h-16" : "h-20 lg:h-24",
        )}
      >
        {/* =====================================================
            LOGO
        ====================================================== */}
        <a
          href="#topo"
          aria-label="Taverna Burguer — início"
          className="group flex shrink-0 flex-col"
        >
          <span className="font-display text-[1.05rem] leading-none tracking-[0.2em] text-cream uppercase transition-colors group-hover:text-gold">
            Taverna
          </span>

          <span className="accent-word mt-0.5 text-[1.05rem] leading-none text-gold">
            Burguer
          </span>
        </a>

        {/* =====================================================
            NAVEGAÇÃO DESKTOP
        ====================================================== */}
        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative py-2 label-micro text-cream/65 transition-colors duration-300 hover:text-cream"
            >
              {item.label}

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
              />
            </a>
          ))}
        </nav>

        {/* =====================================================
            AÇÕES
        ====================================================== */}
        <div className="flex shrink-0 items-center gap-2">
          {/* Instagram */}
          <a
            href={taverna.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram da Taverna Burguer"
            className="hidden size-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-all duration-300 hover:border-gold hover:text-gold sm:grid"
          >
            <InstagramIcon className="size-4" />
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Falar no WhatsApp com a Taverna Burguer"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2.5 label-micro text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            <WhatsappIcon className="size-4" />

            <span className="hidden sm:inline">
              Pedir agora
            </span>
          </a>
        </div>
      </div>

      {/* Linha inferior só enquanto estiver no topo */}
      <div
        className={cn(
          "mx-auto max-w-[1400px] transition-opacity duration-500",
          dense ? "opacity-0" : "opacity-100",
        )}
      >
        <div className="page-x">
          <div className="h-px bg-cream/10" />
        </div>
      </div>
    </header>
  );
}
