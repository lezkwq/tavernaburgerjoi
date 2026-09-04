import { photos } from "@/lib/photos";
import { Plate } from "./primitives";

export function About() {
  return (
    <section id="a-taverna" className="bg-cream section-y text-charcoal">
      <div className="page-x mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5">
          <p className="label-micro text-primary">A Taverna</p>
          <h2 className="mt-4 text-display-md">
            Mesa posta,
            <br />
            <span className="accent-word text-primary lowercase">fogo</span> aceso
          </h2>
          <p className="mt-7 max-w-md text-base text-muted-foreground">
            A Taverna Burguer é uma casa de hambúrguer grelhado no fogo em Joinville. A
            madeira, a luz baixa e os estandartes na parede dão o tom, mas o que manda é a
            chapa: carne grelhada na hora, ponto respeitado e pão que aguenta o recheio até
            a última mordida.
          </p>
          <p className="mt-5 max-w-md text-base text-muted-foreground">
            No salão, o atendimento é de casa cheia sem correria. Se preferir comer no seu
            canto, dá para retirar na porta ou receber em entrega sem contato.
          </p>
        </div>

        <div className="relative lg:col-span-7">
          <div className="hover-lift w-[min(100%,32rem)] rotate-[-1.5deg] border-[6px] border-cream shadow-none">
            <Plate photo={photos.fachada} />
          </div>
          <div className="hover-lift absolute -bottom-10 right-2 hidden w-52 rotate-[4deg] border-[6px] border-cream md:block">
            <Plate photo={photos.mesaCompleta} />
          </div>
        </div>
      </div>
    </section>
  );
}
