const depoimentos = [
  {
    nome: "Zaira Assis",
    texto:
      "Queria ter tirado foto antes pois a apresentação estava top, o melhor hambúrguer que comi em Joinville. Ingredientes de qualidade. Não consigo nem descrever a beleza do bacon desse hambúrguer. Pedi o Rei Artur, a maionese é muito boa. Esse ponto da carne na foto é ao ponto",
  },
  {
    nome: "Lucas Diego",
    texto:
      "Qualidade alta em todos os detalhes, hambúrguer, pão e molho. O atendimento que acolhe e te passa confiança! Um dos hambúrgueres mais saborosos que já comi em Joinville.",
  },
  {
    nome: "Tom Duran",
    texto:
      "Experiência excelente na Taverna! Os hambúrgueres são de altíssima qualidade e o smash burger me surpreendeu positivamente, crostinha perfeita e muito saboroso. Vale cada centavo",
  },
] as const;

export function Reviews() {
  return (
    <section aria-label="Avaliações de clientes" className="grain bg-smoke section-y text-cream">
      <div className="page-x mx-auto max-w-[1400px]">
        <p className="label-micro text-gold">O que dizem na porta da Taverna</p>
        <h2 className="mt-4 max-w-3xl text-display-sm">
          Palavra de
          <span className="accent-word mx-3 text-gold lowercase">quem</span>
          já provou
        </h2>

        <div className="mt-14 grid gap-y-12 md:grid-cols-3 md:gap-x-10">
          {depoimentos.map((item, i) => (
            <blockquote
              key={item.nome}
              className={
                i === 1
                  ? "md:mt-16 md:border-l md:border-gold/30 md:pl-8"
                  : i === 2
                    ? "md:mt-6"
                    : ""
              }
            >
              <p className="font-accent text-[1.35rem] leading-snug text-cream/90 italic">
                {item.texto}
              </p>
              <footer className="label-micro mt-5 text-gold">{item.nome}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
