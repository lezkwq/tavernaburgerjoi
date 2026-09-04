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
    const onScroll = () => setDense(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        dense ? "bg-charcoal/95 backdrop-blur-sm" : "bg-transparent",
      )}
    >
      <div className="page-x flex h-14 items-center justify-between gap-4">
        <a href="#topo" className="flex items-baseline gap-2">
          <span className="font-display text-lg leading-none tracking-[0.16em] text-cream uppercase">
            Taverna
          </span>
          <span className="accent-word text-base text-gold">Burguer</span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label-micro text-cream/70 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={taverna.instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram da Taverna Burguer"
            className="grid size-9 place-items-center rounded-full border border-cream/25 text-cream transition-colors hover:border-gold hover:text-gold"
          >
            <InstagramIcon className="size-4" />
          </a>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Falar no WhatsApp com a Taverna Burguer"
            className="flex items-center gap-2 rounded-full bg-primary px-4 py-2 label-micro text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
          >
            <WhatsappIcon className="size-4" />
            <span className="hidden sm:inline">Pedir</span>
          </a>
        </div>
      </div>
    </header>
  );
}
