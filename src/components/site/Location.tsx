import { enderecoCompleto, mapsEmbedUrl, taverna, whatsappLink } from "@/lib/taverna";
import { InstagramIcon, WhatsappIcon } from "./primitives";

export function Location() {
  return (
    <section id="onde-estamos" className="bg-cream section-y text-charcoal">
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="label-micro text-primary">Onde estamos</p>
            <h2 className="mt-4 text-display-sm">
              Anita
              <br />
              Garibaldi
            </h2>

            <address className="mt-8 not-italic">
              <p className="text-md leading-relaxed">
                {taverna.rua}
                <br />
                {taverna.bairro}, {taverna.cidade} {taverna.estado}
                <br />
                {taverna.cep}
              </p>
            </address>

            <p className="label-micro mt-8 text-muted-foreground">Horário de funcionamento</p>
            <p className="mt-2 text-md">{taverna.horario}</p>

            <p className="label-micro mt-8 text-muted-foreground">Atendimento</p>
            <p className="mt-2 text-md">Salão, retirada na porta e entrega sem contato</p>

            <div className="mt-10 flex items-center gap-3">
              <a
                href={whatsappLink("Olá! Quero fazer um pedido na Taverna Burguer.")}
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

          <div className="lg:col-span-7">
            <iframe
              title={`Mapa com a localização da Taverna Burguer em ${taverna.cidade}`}
              src={mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[22rem] w-full border-0 grayscale-[0.35] lg:h-[30rem]"
            />
            <p className="label-micro mt-4 text-muted-foreground">{enderecoCompleto}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
