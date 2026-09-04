import { photos } from "@/lib/photos";
import { Plate } from "./primitives";

export function About() {
  return (
    <section
      id="a-taverna"
      className="overflow-hidden bg-cream section-y text-charcoal"
    >
      <div className="page-x mx-auto max-w-[1400px]">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
          {/* =====================================================
              TEXTO
          ====================================================== */}
          <div className="lg:col-span-5 lg:pt-12">
            <p className="label-micro text-primary">
              A Taverna
            </p>

            <h2 className="mt-4 text-display-md">
              Mesa posta,
              <br />
              <span className="accent-word text-primary lowercase">
                fogo
              </span>{" "}
              aceso
            </h2>

            <div className="mt-8 max-w-md">
              <p className="text-base leading-relaxed text-muted-foreground">
                A Taverna Burguer é uma casa de hambúrguer grelhado no fogo em
                Joinville. A madeira, a luz baixa e os estandartes na parede dão
                o tom, mas o que manda é a chapa: carne grelhada na hora, ponto
                respeitado e pão que aguenta o recheio até a última mordida.
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                No salão, o atendimento é de casa cheia sem correria. Se
                preferir comer no seu canto, dá para retirar na porta ou receber
                em entrega sem contato.
              </p>
            </div>

            {/* Informação editorial */}
            <div className="mt-10 border-t border-charcoal/20 pt-5">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="label-micro text-primary">
                    Onde
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    Anita Garibaldi
                    <br />
                    Joinville, SC
                  </p>
                </div>

                <div>
                  <p className="label-micro text-primary">
                    Na casa
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                    Salão
                    <br />
                    Retirada e entrega
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              FOTOGRAFIA
          ====================================================== */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-12 lg:gap-6">
              {/* FOTO PRINCIPAL — FACHADA */}
              <figure className="group relative overflow-hidden sm:col-span-12">
                <div className="aspect-[4/4.35] overflow-hidden sm:aspect-[1.38/1] lg:aspect-[1.22/1]">
                  <Plate
                    photo={photos.fachada}
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between gap-6">
                  <p className="label-micro text-charcoal">
                    A casa acesa
                  </p>

                  <p className="label-micro text-muted-foreground">
                    Joinville · SC
                  </p>
                </div>
              </figure>

              {/* BLOCO INFERIOR */}
              <div className="mt-3 grid gap-6 sm:col-span-12 sm:grid-cols-12 lg:mt-6">
                {/* Texto grande editorial */}
                <div className="hidden sm:col-span-5 sm:flex sm:items-end">
                  <p className="max-w-[15rem] font-display text-[clamp(2rem,3.2vw,3.4rem)] leading-[0.95] tracking-tight text-charcoal">
                    Madeira,
                    <br />
                    luz baixa
                    <br />e chapa acesa.
                  </p>
                </div>

                {/* FOTO SECUNDÁRIA */}
                <figure className="group sm:col-span-7">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Plate
                      photo={photos.mesaCompleta}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="label-micro text-charcoal">
                      Mesa cheia
                    </p>

                    <p className="label-micro text-muted-foreground">
                      Taverna Burguer
                    </p>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
