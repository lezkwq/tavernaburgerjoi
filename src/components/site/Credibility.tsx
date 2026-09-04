import { taverna } from "@/lib/taverna";

const linhas = [
  {
    valor: taverna.nota.toString().replace(".", ","),
    texto: "Nota no Google",
    detalhe: "Quem já provou deixou registrado",
  },
  {
    valor: `${taverna.avaliacoes}`,
    texto: "Avaliações",
    detalhe: "De quem já sentou à mesa",
  },
  {
    valor: "40–60",
    prefixo: "R$",
    texto: "Por pessoa",
    detalhe: "Valor médio informado no Google",
  },
  {
    valor: "3",
    texto: "Jeitos de pedir",
    detalhe: "Salão, retirada ou entrega",
  },
] as const;

export function Credibility() {
  return (
    <section
      aria-label="Reputação da Taverna Burguer"
      className="overflow-hidden bg-cream text-charcoal"
    >
      <div className="page-x mx-auto max-w-[1400px]">
        {/* Linha superior */}
        <div className="flex items-center justify-between gap-6 border-b border-charcoal/20 py-5">
          <p className="label-micro text-primary">
            Taverna em números
          </p>

          <p className="label-micro hidden text-muted-foreground sm:block">
            Joinville · Anita Garibaldi
          </p>
        </div>

        {/* Números */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-12">
          {linhas.map((linha, index) => (
            <div
              key={linha.texto}
              className={[
                "relative py-9 sm:py-11 lg:col-span-3 lg:min-h-[240px] lg:py-12",
                index % 2 === 0
                  ? "sm:border-r sm:border-charcoal/15"
                  : "",
                index < 2
                  ? "border-b border-charcoal/15 lg:border-b-0"
                  : "",
                index > 0
                  ? "lg:border-l lg:border-charcoal/15 lg:pl-8"
                  : "",
                index < 3 ? "lg:pr-8" : "",
              ].join(" ")}
            >
              {/* Numeração editorial */}
              <p className="label-micro text-charcoal/35">
                0{index + 1}
              </p>

              <div className="mt-8">
                <div className="flex items-start gap-2">
                  {"prefixo" in linha && linha.prefixo ? (
                    <span className="label-micro mt-2 text-primary">
                      {linha.prefixo}
                    </span>
                  ) : null}

                  <p className="font-display text-[clamp(3.6rem,6vw,6.5rem)] leading-[0.76] tracking-tight text-primary">
                    {linha.valor}
                  </p>
                </div>

                <p className="mt-6 font-display text-[1.5rem] leading-none tracking-tight text-charcoal">
                  {linha.texto}
                </p>

                <p className="mt-3 max-w-[13rem] text-sm leading-relaxed text-muted-foreground">
                  {linha.detalhe}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Linha inferior */}
        <div className="flex flex-col gap-2 border-t border-charcoal/20 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-micro text-muted-foreground">
            Sem muito discurso.
          </p>

          <p className="label-micro text-primary">
            Os números já contam uma parte da história.
          </p>
        </div>
      </div>
    </section>
  );
}
