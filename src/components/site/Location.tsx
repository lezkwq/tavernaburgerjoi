import {
  enderecoCompleto,
  mapsEmbedUrl,
  taverna,
  whatsappLink,
} from "@/lib/taverna";
import { InstagramIcon, WhatsappIcon } from "./primitives";

export function Location() {
  return (
    <section
      id="onde-estamos"
      className="overflow-hidden bg-cream section-y text-charcoal"
    >
      <div className="page-x mx-auto max-w-[1400px]">
        {/* =====================================================
            CABEÇALHO
        ====================================================== */}
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label-micro text-primary">
              Onde estamos
            </p>

            <h2 className="mt-4 text-display-md">
              No coração do
              <br />
              <span className="accent-word text-primary lowercase">
                Anita Garibaldi
              </span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:col-span-4 lg:justify-self-end lg:text-right">
            Dá para sentar no salão, retirar na porta ou pedir para chegar em
            casa.
          </p>
        </div>

        {/* =====================================================
            CONTEÚDO
        ====================================================== */}
        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-x-12">
          {/* ===================================================
              MAPA
          ==================================================== */}
          <div className="lg:col-span-8">
            <div className="overflow-hidden bg-charcoal">
              <iframe
                title={`Mapa com a localização da Taverna Burguer em ${taverna.cidade}`}
                src={mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[24rem] w-full border-0 grayscale-[0.25] sm:h-[30rem] lg:h-[36rem]"
              />
            </div>

            <div className="mt-4 flex flex-col gap-2 border-t border-charcoal/20 pt-4 sm:flex-row sm:items-start sm:justify-between">
              <p className="label-micro text-charcoal">
                Taverna Burguer
              </p>

              <p className="label-micro max-w-md text-muted-foreground sm:text-right">
                {enderecoCompleto}
              </p>
            </div>
          </div>

          {/* ===================================================
              INFORMAÇÕES
          ==================================================== */}
          <div className="lg:col-span-4 lg:pt-4">
            {/* Endereço */}
            <div className="border-t border-charcoal/20 py-6">
              <p className="label-micro text-primary">
                Endereço
              </p>

              <address className="mt-4 not-italic">
                <p className="font-display text-[clamp(1.8rem,2.7vw,2.8rem)] leading-[1] tracking-tight text-charcoal">
                  {taverna.rua}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {taverna.bairro}
                  <br />
                  {taverna.cidade}, {taverna.estado}
                  <br />
                  {taverna.cep}
                </p>
              </address>
            </div>

            {/* Horário */}
            <div className="border-t border-charcoal/20 py-6">
              <p className="label-micro text-primary">
                Horário
              </p>

              <p className="mt-4 max-w-xs text-base leading-relaxed text-charcoal/75">
                {taverna.horario}
              </p>
            </div>

            {/* Atendimento */}
            <div className="border-t border-charcoal/20 py-6">
              <p className="label-micro text-primary">
                Como comer
              </p>

              <div className="mt-4 space-y-2">
                <p className="font-display text-2xl tracking-tight text-charcoal">
                  Salão
                </p>
                <p className="font-display text-2xl tracking-tight text-charcoal">
                  Retirada
                </p>
                <p className="font-display text-2xl tracking-tight text-charcoal">
                  Entrega
                </p>
              </div>
            </div>

            {/* Links */}
            <div className="border-t border-charcoal/20 pt-7">
              <p className="label-micro mb-5 text-muted-foreground">
                Fale com a Taverna
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={whatsappLink(
                    "Olá! Quero fazer um pedido na Taverna Burguer.",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Chamar a Taverna Burguer no WhatsApp"
                  className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:scale-105"
                >
                  <WhatsappIcon className="size-5" />
                </a>

                <a
                  href={taverna.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Abrir o Instagram da Taverna Burguer"
                  className="grid size-12 place-items-center rounded-full border border-charcoal/25 text-charcoal transition-colors hover:border-primary hover:text-primary"
                >
                  <InstagramIcon className="size-5" />
                </a>

                <a
                  href={taverna.pedidoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label-micro rounded-full border border-charcoal/25 px-5 py-3.5 transition-colors hover:border-primary hover:text-primary"
                >
                  Cardápio online
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            FECHAMENTO
        ====================================================== */}
        <div className="mt-14 border-t border-charcoal/20 pt-5 lg:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="label-micro text-primary">
              Joinville · Santa Catarina
            </p>

            <p className="label-micro text-muted-foreground">
              Fogo aceso de terça a domingo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
