const depoimentos = [
  {
    numero: "01",
    nome: "Zaira Assis",
    destaque: "O melhor hambúrguer que comi em Joinville.",
    texto:
      "Ingredientes de qualidade. Não consigo nem descrever a beleza do bacon desse hambúrguer. Pedi o Rei Artur, a maionese é muito boa. Esse ponto da carne na foto é ao ponto.",
  },
  {
    numero: "02",
    nome: "Lucas Diego",
    destaque: "Qualidade alta em todos os detalhes.",
    texto:
      "Hambúrguer, pão e molho. O atendimento acolhe e passa confiança. Um dos hambúrgueres mais saborosos que já comi em Joinville.",
  },
  {
    numero: "03",
    nome: "Tom Duran",
    destaque: "Crostinha perfeita e muito sabor.",
    texto:
      "Experiência excelente na Taverna. Os hambúrgueres são de altíssima qualidade e o smash burger me surpreendeu positivamente. Vale cada centavo.",
  },
] as const;

export function Reviews() {
  const principal = depoimentos[0];
  const secundarios = depoimentos.slice(1);

  return (
    <section
      aria-label="Avaliações de clientes"
      className="grain overflow-hidden bg-smoke section-y text-cream"
    >
      <div className="page-x mx-auto max-w-[1400px]">
        {/* =====================================================
            CABEÇALHO
        ====================================================== */}
        <div className="grid gap-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="label-micro text-gold">
              O que dizem na porta da Taverna
            </p>

            <h2 className="mt-4 text-display-sm">
              Palavra de
              <span className="accent-word mx-3 text-gold lowercase">
                quem
              </span>
              já provou
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-relaxed text-cream/55 lg:col-span-4 lg:justify-self-end lg:text-right">
            Não é a gente que precisa dizer que é bom. Quem sentou à mesa já
            fez isso por nós.
          </p>
        </div>

        {/* =====================================================
            AVALIAÇÕES
        ====================================================== */}
        <div className="mt-14 border-t border-cream/20 lg:mt-16">
          <div className="grid lg:grid-cols-12">
            {/* AVALIAÇÃO PRINCIPAL */}
            <blockquote className="relative border-b border-cream/20 py-10 lg:col-span-7 lg:border-r lg:border-b-0 lg:py-14 lg:pr-14">
              <div className="flex items-center justify-between gap-5">
                <p className="label-micro text-gold">
                  Avaliação
                </p>

                <p className="label-micro text-cream/35">
                  {principal.numero}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="mt-8 block font-display text-7xl leading-[0.5] text-gold lg:text-8xl"
              >
                “
              </span>

              <p className="mt-7 max-w-3xl font-display text-[clamp(2.2rem,4.2vw,4.8rem)] leading-[0.94] tracking-tight text-cream">
                {principal.destaque}
              </p>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/65">
                {principal.texto}
              </p>

              <footer className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-gold/60" />
                <span className="label-micro text-gold">
                  {principal.nome}
                </span>
              </footer>
            </blockquote>

            {/* AVALIAÇÕES SECUNDÁRIAS */}
            <div className="lg:col-span-5 lg:pl-14">
              {secundarios.map((item, index) => (
                <blockquote
                  key={item.nome}
                  className={
                    index === 0
                      ? "border-b border-cream/20 py-10 lg:py-14"
                      : "py-10 lg:py-14"
                  }
                >
                  <div className="flex items-center justify-between gap-5">
                    <p className="label-micro text-gold">
                      Avaliação
                    </p>

                    <p className="label-micro text-cream/35">
                      {item.numero}
                    </p>
                  </div>

                  <p className="mt-6 font-display text-[clamp(1.8rem,2.6vw,3rem)] leading-[0.98] tracking-tight text-cream">
                    {item.destaque}
                  </p>

                  <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/60">
                    {item.texto}
                  </p>

                  <footer className="mt-7 flex items-center gap-4">
                    <span className="h-px w-8 bg-gold/50" />
                    <span className="label-micro text-gold">
                      {item.nome}
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            FECHAMENTO
        ====================================================== */}
        <div className="flex flex-col gap-3 border-t border-cream/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-micro text-gold">
            Taverna Burguer · Joinville
          </p>

          <p className="label-micro text-cream/40">
            Hambúrguer grelhado no fogo
          </p>
        </div>
      </div>
    </section>
  );
}
