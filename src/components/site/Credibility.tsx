import { taverna } from "@/lib/taverna";

const linhas = [
  { valor: `${taverna.nota.toString().replace(".", ",")}`, texto: "Nota no Google" },
  { valor: `${taverna.avaliacoes}`, texto: "Avaliações de quem já sentou à mesa" },
  { valor: "40 a 60", texto: "Reais por pessoa, em média" },
  { valor: "3", texto: "Formas de comer: salão, retirada e entrega" },
] as const;

export function Credibility() {
  return (
    <section aria-label="Reputação da Taverna Burguer" className="bg-cream py-14 text-charcoal">
      <div className="page-x mx-auto grid max-w-[1400px] gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {linhas.map((linha) => (
          <div key={linha.texto} className="pr-6">
            <p className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.8] text-primary">
              {linha.valor}
            </p>
            <p className="label-micro mt-3 max-w-[13rem] text-muted-foreground">{linha.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
