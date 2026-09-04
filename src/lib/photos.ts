/**
 * Fotos reais da Taverna Burguer (Instagram e Google Maps), servidas pelo CDN.
 * width/height guardam a proporção original de cada arquivo para evitar
 * qualquer deformação de enquadramento no layout.
 */
import bandeja from "@/assets/bandeja.jpg.asset.json";
import cebolaCaramelizada from "@/assets/cebola-caramelizada.jpg.asset.json";
import cheddarLuva from "@/assets/cheddar-luva.jpg.asset.json";
import doisBurgers from "@/assets/dois-burgers.jpg.asset.json";
import duploCheddar from "@/assets/duplo-cheddar.jpg.asset.json";
import fachada from "@/assets/fachada.jpg.asset.json";
import mesaCompleta from "@/assets/mesa-completa.jpg.asset.json";
import reiArtur from "@/assets/rei-artur.jpg.asset.json";
import smashDuplo from "@/assets/smash-duplo.jpg.asset.json";

export interface Photo {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export const photos = {
  duploCheddar: {
    src: duploCheddar.url,
    alt: "Hambúrguer duplo da Taverna Burguer com cheddar derretido, cebola roxa e picles",
    width: 1040,
    height: 1550,
  },
  reiArtur: {
    src: reiArtur.url,
    alt: "Hambúrguer duplo grelhado no fogo com cheddar e vinagrete servido em pão brioche",
    width: 1071,
    height: 1500,
  },
  fachada: {
    src: fachada.url,
    alt: "Fachada iluminada da Taverna Burguer em Joinville com placa da marca e salão de madeira",
    width: 1140,
    height: 1350,
  },
  mesaCompleta: {
    src: mesaCompleta.url,
    alt: "Mesa com dois hambúrgueres, batata frita e bebidas sobre toalha quadriculada vermelha",
    width: 985,
    height: 1600,
  },
  bandeja: {
    src: bandeja.url,
    alt: "Bandeja com quatro hambúrgueres diferentes, batata frita e porções empanadas",
    width: 1253,
    height: 1250,
  },
  smashDuplo: {
    src: smashDuplo.url,
    alt: "Smash burger duplo com queijo derretido segurado na mão",
    width: 1285,
    height: 1250,
  },
  cheddarLuva: {
    src: cheddarLuva.url,
    alt: "Hambúrguer com carne grelhada e cheddar derretido embalado, visto de cima",
    width: 1103,
    height: 1450,
  },
  cebolaCaramelizada: {
    src: cebolaCaramelizada.url,
    alt: "Hambúrguer com cebola caramelizada, queijo, alface e tomate na embalagem da casa",
    width: 1103,
    height: 1450,
  },
  doisBurgers: {
    src: doisBurgers.url,
    alt: "Atendente da Taverna Burguer segurando dois hambúrgueres com cheddar",
    width: 1140,
    height: 1350,
  },
} as const satisfies Record<string, Photo>;
