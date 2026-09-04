import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Credibility } from "@/components/site/Credibility";
import { Reviews } from "@/components/site/Reviews";
import { About } from "@/components/site/About";
import { Signature } from "@/components/site/Signature";
import { Gallery } from "@/components/site/Gallery";
import { HowToOrder } from "@/components/site/HowToOrder";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { Marquee } from "@/components/site/primitives";
import { enderecoCompleto, taverna } from "@/lib/taverna";

const title = "Taverna Burguer Joinville | Hambúrguer grelhado no fogo";
const description =
  "Hambúrguer grelhado no fogo em Joinville, no Anita Garibaldi. Nota 4,9 no Google, salão, retirada e entrega. Veja o cardápio e faça seu pedido.";

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: taverna.nome,
  description,
  servesCuisine: "Hamburgueria",
  priceRange: "R$ 40 - R$ 60",
  telephone: taverna.telefoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: taverna.rua,
    addressLocality: taverna.cidade,
    addressRegion: taverna.estado,
    postalCode: taverna.cep,
    addressCountry: "BR",
  },
  sameAs: [taverna.instagramUrl],
  menu: taverna.pedidoUrl,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "18:15",
      closes: "22:55",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: taverna.nota,
    reviewCount: taverna.avaliacoes,
    bestRating: 5,
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(restaurantJsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee
          items={[
            "Grelhado no fogo",
            "Salão, retirada e entrega",
            "Terça a domingo",
            `Nota ${taverna.nota.toString().replace(".", ",")} no Google`,
            enderecoCompleto,
          ]}
        />
        <Credibility />
        <Reviews />
        <About />
        <Signature />
        <Gallery />
        <Marquee
          items={["Cupom PRIMEIRACOMPRA", "Cardápio online", "Joinville, Anita Garibaldi"]}
        />
        <HowToOrder />
        <Location />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
