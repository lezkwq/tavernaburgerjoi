import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Photo } from "@/lib/photos";

/** Botão pílula da marca, em duas intensidades. */
export interface ActionLinkProps extends ComponentProps<"a"> {
  readonly variant?: "solid" | "outline" | "light";
  readonly children: ReactNode;
}

export function ActionLink({
  variant = "solid",
  className,
  children,
  ...rest
}: ActionLinkProps) {
  return (
    <a
      {...rest}
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-6 py-3 label-micro transition-transform duration-300 hover:scale-[1.04]",
        variant === "solid" && "bg-primary text-primary-foreground",
        variant === "outline" && "border-2 border-current text-current",
        variant === "light" && "bg-cream text-charcoal",
        className,
      )}
    >
      {children}
    </a>
  );
}

/** Faixa preta em movimento contínuo entre seções. */
export function Marquee({ items }: { readonly items: readonly string[] }) {
  const line = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-ash/40 bg-charcoal py-2.5">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0">
            {line.map((item, i) => (
              <span
                key={`${copy}-${item}-${i}`}
                className="label-micro flex items-center gap-6 px-6 text-cream/70"
              >
                {item}
                <span className="text-gold">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Foto que respeita sempre a proporção original do arquivo. */
export interface PlateProps {
  readonly photo: Photo;
  readonly className?: string;
  readonly priority?: boolean;
}

export function Plate({ photo, className, priority = false }: PlateProps) {
  return (
    <img
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      className={cn("h-auto w-full object-contain", className)}
    />
  );
}

export function InstagramIcon({ className }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.23 1 .5 1.5 1 .4.4.7.9.9 1.5.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-.9-1.5-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.8.07-1 0-1.5.2-1.9.3-.4.2-.7.4-1 .7-.3.3-.5.6-.7 1-.1.4-.3.9-.3 1.9C3.2 9.3 3.2 9.7 3.2 12s0 2.7.1 4c0 1 .2 1.5.3 1.9.2.4.4.7.7 1 .3.3.6.5 1 .7.4.1.9.3 1.9.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1 0 1.5-.2 1.9-.3.4-.2.7-.4 1-.7.3-.3.5-.6.7-1 .1-.4.3-.9.3-1.9.1-1.3.1-1.7.1-4s0-2.7-.1-4c0-1-.2-1.5-.3-1.9a2.7 2.7 0 0 0-.7-1 2.7 2.7 0 0 0-1-.7c-.4-.1-.9-.3-1.9-.3-1.3-.07-1.7-.07-4.8-.07Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.2-2.2a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
    </svg>
  );
}

export function WhatsappIcon({ className }: { readonly className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.53 3.68 1.46 5.2L2 22l5.1-1.6a9.86 9.86 0 0 0 4.94 1.3c5.44 0 9.84-4.4 9.84-9.84C21.88 6.4 17.48 2 12.04 2Zm0 17.7c-1.6 0-3.1-.46-4.36-1.28l-.31-.2-3.02.95.96-2.95-.2-.32a7.85 7.85 0 0 1-1.2-4.16 7.9 7.9 0 1 1 8.13 7.96Zm4.5-5.86c-.24-.12-1.45-.72-1.68-.8-.22-.08-.38-.12-.55.12-.16.25-.63.8-.77.97-.14.16-.28.18-.52.06a6.4 6.4 0 0 1-1.9-1.17 7.14 7.14 0 0 1-1.3-1.63c-.14-.25-.02-.38.1-.5.12-.13.25-.3.37-.45.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.75-1.82-.2-.47-.4-.4-.55-.41h-.47c-.16 0-.42.06-.64.3-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.6 4.12 3.64.58.25 1.02.4 1.37.51.58.19 1.1.16 1.52.1.46-.07 1.42-.58 1.62-1.15.2-.56.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}
