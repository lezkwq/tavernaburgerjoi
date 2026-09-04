# tavernaburgerjoi

Contexto do projeto
A Taverna Burguer é uma hamburgueria de Joinville, em Santa Catarina, com posicionamento visual e verbal inspirado em uma taverna medieval. A proposta central da marca é hambúrguer grelhado no fogo, com forte apelo para qualidade dos ingredientes, ponto da carne, sabor, atendimento e experiência no salão.
A operação possui presença local consolidada. No Google Maps, aparece com nota 4,9 e 231 avaliações. No Instagram, o perfil @tavernaburguerjoi apresenta 307 publicações e cerca de 11,4 mil seguidores no material pesquisado. As avaliações destacam com frequência a qualidade do hambúrguer, pão, molho, bacon, ponto da carne, smash, atendimento e rapidez.
O atendimento acontece no salão, por retirada e por entrega. O negócio também direciona pedidos para uma plataforma externa de cardápio e pedidos, além de usar WhatsApp e um link de contato. Não foi identificado um site institucional próprio vinculado aos canais oficiais analisados. No Google Maps e no Instagram, os links destacados levam principalmente para contate.me e mandarpedido.com, ou seja, páginas utilitárias de contato e pedido, não uma apresentação institucional completa da hamburgueria.
Para esse público, o site não deve tentar substituir o Instagram nem o sistema de pedidos. A função principal é capturar quem pesquisa por hamburgueria, melhor hambúrguer, smash ou onde comer em Joinville, apresentar rapidamente a experiência da Taverna, transformar a reputação já existente em prova social e conduzir a pessoa para pedir, chamar no WhatsApp ou chegar ao salão. Como a decisão de compra é relativamente rápida, o site precisa ser visual, direto e orientado à conversão, sem estrutura corporativa longa.
System design
1. Direção visual

A estética pode ser resumida como:

Retro American Diner + Fast Food Packaging + Pop Editorial + Y2K/90s Commercial

A sensação deve ser:

 divertida;

 exagerada;

 jovem;

 energética;

 artesanal sem parecer rústica;

 visualmente “barulhenta”, mas com hierarquia muito controlada;

 inspirada em embalagem de hambúrguer, cardápio antigo, pôster promocional e merchandising.

Não é uma interface minimalista. Aqui, a identidade visual é o próprio layout.

O site trabalha com:

tipografia como imagem + fotografia como recorte + ilustração como adesivo + fundos gráficos + sobreposição.

2. Paleta de cores

Pela imagem, a paleta principal gira aproximadamente em torno disso:

FunçãoCor aproximadaCreme principal#F6E4CECreme claro#FAF3E7Vermelho principal#F91814Amarelo#FFD84FLaranja#F28A18 aproximadamentePreto#111111Branco quente#FFF9EFAzul secundárioazul médio / ciano retrôCinza de texto#6F6F68

Hierarquia de cores

O creme é a base neutra.

O vermelho é a cor dominante de marca.

O amarelo funciona como terceira grande massa de cor.

Laranja e azul são cores de apoio, normalmente usadas em:

 lettering;

 pequenos cards;

 ilustrações;

 objetos;

 detalhes;

 fundos secundários.

Uma proporção razoável seria:

45% creme
25% vermelho
15% amarelo
10% fotografia
5% cores secundárias

O importante é não distribuir todas as cores igualmente.

3. Regra mais importante da paleta

Cada seção deve ter uma cor dominante muito clara.

Por exemplo:

 hero → creme;

 apresentação → creme;

 produtos → vermelho;

 catering → fotografia escura/azulada;

 merchandising → amarelo.

Isso cria aquela sensação de rolar por diferentes pôsteres de uma campanha.

Não faça um fundo bege e coloque pequenos cards vermelhos e amarelos.

Faça blocos inteiros de cor.

4. Tipografia

Esse é provavelmente o elemento mais importante do projeto.

O site usa pelo menos quatro linguagens tipográficas diferentes.

A. Display condensada

É a fonte principal.

Características:

 extremamente condensada;

 caixa alta;

 pesada;

 alta;

 pouco espaço lateral;

 impacto de cartaz.

Usada em:

BURGERS
SIGNATURE DELIGHTS
LEVEL UP YOUR EVENT
STOCK UP ON ESSENTIALS

Referências de fontes nessa família:

 Anton

 League Gothic

 Bebas Neue

 Oswald

 Archivo Narrow Black

 Druk Condensed

 Tungsten

 Compacta

 Trade Gothic Condensed

Para chegar realmente perto da estética, Anton/Bebas sozinhas podem parecer digitais demais. Uma condensada editorial mais pesada funciona melhor.

Escala desktop sugerida

Display XL: 130–180px
Display L: 90–130px
Display M: 60–90px

Com:

line-height: .82–.92;
letter-spacing: -0.02em;
text-transform: uppercase;

Os títulos devem parecer grandes demais para a seção.

5. Outline typography

No topo existe uma segunda aplicação importante:

letras gigantes apenas com contorno vermelho.

É quase uma camada gráfica de fundo.

Exemplo visual:

S I M P L Y

Configuração:

color: transparent;
-webkit-text-stroke: 2px #F91814;

Fonte:

 condensada;

 alta;

 leve ou medium.

Pode ter aproximadamente:

100–150px desktop
60–85px mobile

E pode ficar parcialmente atrás das fotografias.

6. Script / lettering

Existe também uma tipografia manuscrita bastante expressiva.

Exemplo:

Frank's
best
meets

Ela serve para quebrar a rigidez da fonte condensada.

Características:

 brush script;

 inclinada;

 espontânea;

 arredondada;

 geralmente vermelha, laranja ou branca;

 pode receber contorno.

A regra é:

não usar script para textos normais.

Apenas palavras estratégicas.

Algo como:

ORGANIC
meets
INDULGENCE

Isso cria contraste.

7. Microtipografia

Existe ainda uma família usada para:

 descrições;

 labels;

 navegação;

 botões;

 pequenos textos;

 informações de apoio.

Ela é extremamente pequena.

Pode ser uma sans condensada como:

 Roboto Condensed;

 Inter Tight;

 Archivo Narrow;

 Helvetica Condensed.

Configuração:

10–13px
uppercase quando for label
line-height 1.25–1.45

A diferença de escala é proposital.

Você pode ter:

título de 150px ao lado de texto de 11px.

Esse contraste é uma parte enorme da identidade.

8. Escala tipográfica

Eu montaria os tokens assim:

--text-xs: 10px;
--text-sm: 12px;
--text-base: 15px;
--text-md: 18px;

--display-sm: clamp(48px, 7vw, 82px);
--display-md: clamp(72px, 10vw, 130px);
--display-lg: clamp(90px, 13vw, 180px);

E evitaria praticamente qualquer título entre 30 e 45 px no desktop.

Esse projeto gosta de extremos:

ou pequeno, ou gigantesco.

9. Grid

Apesar de parecer caótico, o site é bastante controlado.

Use algo próximo de:

Desktop:
12 colunas
max-width: 1280–1400px
padding lateral: 48–72px
gap: 20–28px

Mas muitas coisas devem escapar desse grid.

Por exemplo:

 hambúrguer invade o título;

 fotografia fica sobre a tipografia;

 ilustração atravessa duas regiões;

 card gira alguns graus;

 imagens cruzam limites de seção.

Portanto:

grid para alinhamento; composição livre para decoração.

10. Espaçamento

Não é um layout baseado em cards.

As seções são grandes telas.

Valores aproximados:

Section padding vertical:
120–180px desktop
70–100px tablet
55–80px mobile

Entretanto, dentro das composições há elementos extremamente próximos e sobrepostos.

Isso cria:

muito espaço macro + muita densidade micro.

11. Hero

O hero da referência pode ser entendido em camadas.

Camada 1 — fundo

Creme sólido.

Camada 2 — header

Logo vermelho à esquerda.

Controles pequenos à direita.

Camada 3 — palavra gigante

Texto outline vermelho:

SIMPLY

ocupando praticamente toda a largura.

Camada 4 — pequenos recortes fotográficos

Várias imagens horizontais aparecem atravessando ou preenchendo visualmente a palavra.

Não estão simplesmente em uma galeria.

São elementos de composição.

Camada 5 — produto central

Hambúrguer recortado sem fundo.

Grande.

Central.

Camada 6 — lettering

Palavra manuscrita sobre o produto.

Camada 7 — headline

BURGERS

gigantesco e vermelho.

Camada 8 — informações periféricas

Microtextos nos lados.

Mascote.

Pequenos grafismos.

CTA.

Essa lógica de 8 camadas é fundamental.

12. Fotografias

As imagens não são tratadas como fotografias tradicionais dentro de cards.

Existem três tipos principais.

Produto recortado

PNG sem fundo.

Muito grande.

Pode ultrapassar os limites de outros elementos.

Exemplo:

hambúrguer central.

Fotografias editoriais

Imagens retangulares com pessoas/comida.

Normalmente:

 cores saturadas;

 luz forte;

 flash;

 contraste;

 sensação espontânea;

 close;

 ângulos imperfeitos.

Não devem parecer fotografia gastronômica sofisticada de restaurante Michelin.

São mais:

campanha lifestyle de fast-food.

Fotografias como colagem

Podem aparecer:

 inclinadas;

 sobre fundos estampados;

 parcialmente cobertas;

 com elementos por cima;

 como polaroids/cards.

13. Tratamento fotográfico

Use:

 saturação relativamente alta;

 temperatura quente;

 vermelho forte;

 amarelo forte;

 contraste médio/alto;

 flash direto em algumas imagens;

 textura de impressão opcional.

Evite:

 HDR;

 fotografia excessivamente limpa;

 sombras cinematográficas sofisticadas;

 tons pastel;

 imagens corporativas.

14. Recortes

Produto e personagens devem frequentemente ser apresentados como:

cutout / sticker.

Exemplo:

imagem sem fundo
+
stroke branco de 5–12px
+
às vezes stroke colorido externo

Esse tratamento aparece muito nos mascotes.

15. Ilustrações

A identidade usa personagens/cartoon como elementos importantes.

Estilo:

 desenho de mascote vintage;

 linhas grossas;

 poucas cores;

 vermelho + branco;

 aparência de embalagem dos anos 60/70;

 personagens antropomórficos.

Não são ilustrações sofisticadas.

Devem parecer mascotes de uma rede de lanchonetes antiga.

16. Stickers

Outra peça essencial.

Use elementos que pareçam adesivos:

 mascotes;

 frases;

 logotipos;

 selos;

 mãos;

 setas;

 ícones;

 pequenas chamas.

Características:

outline branco grosso
contorno irregular
rotação -8° a +8°
sobreposição

17. Formas orgânicas

Atrás do hambúrguer da seção vermelha existe uma espécie de moldura orgânica.

Não é círculo nem card.

É uma forma irregular semelhante a:

 nuvem;

 splash;

 flor;

 selo.

Ela é usada para separar o produto do fundo.

Isso é muito melhor para essa estética do que colocar o produto em um card arredondado.

18. Padrões

O site usa padrões gráficos explicitamente.

Checkerboard

Quadriculado vermelho e branco.

Muito associado a:

 diner;

 toalha de mesa;

 embalagem;

 fast-food americano.

Pode ser uma faixa de apenas 30–50px.

Grid

Na seção amarela existe uma malha fina praticamente monocromática.

Algo como:

background-image:
 linear-gradient(rgba(...) 1px, transparent 1px),
 linear-gradient(90deg, rgba(...) 1px, transparent 1px);
background-size: 40px 40px;

Muito sutil.

Gingham

Na composição de fotos aparece uma estampa quadriculada vermelha.

Outra referência direta a piquenique/diner.

19. Divisores

Evite <hr> tradicional.

Use:

 linha pontilhada;

 checkerboard;

 marquee;

 mudança abrupta de cor;

 pattern.

Por exemplo:

· · · · · · · · · · · · · · ·

em vermelho claro.

20. Marquee

A faixa preta entre seções é extremamente importante.

Ela possui conteúdo repetitivo:

LOGO • EXPLORE SHOP • LOGO • BUY NOW •

Visual:

fundo preto
texto branco muito pequeno
altura 28–40px
overflow hidden

Pode ter animação horizontal contínua.

Essa barra cria uma ruptura visual e deixa a página parecer mais “marca” e menos “template”.

21. Botões

Os CTAs são pequenos em comparação aos títulos.

Isso é proposital.

Existem principalmente botões do tipo:

Oval

fundo vermelho
texto branco
border-radius: 999px
padding: 10px 26px

Ou:

fundo creme
outline amarelo/vermelho

Alguns têm uma pequena mão/seta ilustrada ao lado.

Isso deixa o CTA integrado à direção de arte.

22. Header

O header é extremamente discreto.

Estrutura:

logo -------------------------------- controles

Logo script vermelho.

À direita:

 search;

 conta;

 sacola;

 menu.

Cada um dentro de círculos pequenos e claros.

Menu dentro de cápsula maior.

Algo próximo a:

32–38px de altura
fundo #FFF9EF
border-radius 999px

O header não compete com o hero.

23. Bordas

Quase nenhuma borda convencional.

Quando aparecem:

 outline colorido;

 linha fina;

 pattern;

 stroke de adesivo.

Evite:

border: 1px solid #ddd

em cards comuns.

24. Border radius

Aqui existe uma distinção importante.

UI

Botões e controles:

999px

Fotografias

Normalmente:

0–4px

Blocos

Retos.

Shapes decorativos

Totalmente orgânicos.

Ou seja:

não use 16px de border-radius em tudo.

25. Sombras

Praticamente inexistentes.

Se precisar:

box-shadow: 3px 5px 0 rgba(0,0,0,.08);

Mas prefira:

 sobreposição;

 contorno;

 contraste de fundo.

Não use sombra difusa estilo SaaS.

26. Composição assimétrica

Uma característica recorrente:

Texto ocupa um lado enquanto uma composição invade o outro.

Exemplo:

ORGANIC
meets                 [ FOTO ROTACIONADA ]
INDULGENCE      [ MASCOTE ]
                   [ FOTO MENOR ]

O layout não deve parecer:

50% texto | 50% imagem

perfeito.

Faça algo como:

35% texto | 65% colagem

e deixe objetos cruzarem a divisão.

27. Rotação

Pequenas rotações ajudam bastante.

Sugestão:

transform: rotate(-3deg);
transform: rotate(4deg);

Use em:

 fotos;

 cards;

 adesivos;

 badges.

Não em tudo.

28. Hierarquia

Cada seção tem aproximadamente:

1 elemento gigantesco

Título ou produto.

1 elemento secundário

Fotografia ou composição.

2–4 elementos decorativos

Sticker, mascot, seta, padrão.

1 bloco de microcopy

1 CTA

Essa fórmula aparece repetidamente.

29. Sistema de seção

Eu criaria cinco tipos reutilizáveis.

TYPE A — Poster Hero

Creme + headline gigante + produto recortado.

TYPE B — Editorial Collage

Creme + texto + colagem assimétrica.

TYPE C — Product Spotlight

Cor sólida intensa + título enorme + produto recortado.

TYPE D — Lifestyle Banner

Foto full bleed + texto branco + stickers.

TYPE E — Merch Poster

Cor sólida + grid + objetos flutuantes + título gigante.

Isso permite manter consistência sem repetir o mesmo layout.

30. A seção vermelha

É um ótimo exemplo do sistema.

FUNDO: vermelho puro

Topo:
micro-label

Título:
SIGNATURE DELIGHTS
branco
gigantesco

Centro:
produto recortado
+
shape creme
+
outline amarelo

Laterais:
microcopy

Extremos:
setas minimalistas

Rodapé:
marquee preto

Observe como quase tudo é 2D, chapado e gráfico.

31. Seção lifestyle / catering

Aqui o comportamento muda.

Fundo de fotografia full bleed.

Imagem tem:

 movimento;

 azul;

 vermelho;

 blur;

 sensação de festa/evento.

Por cima:

headline branca gigantesca.

Uma palavra manuscrita é inserida dentro da headline.

Exemplo:

LEVEL UP YOUR
EVENT WITH Frank's CATERING

Isso quebra a monotonia.

32. Seção amarela

Funciona quase como anúncio impresso.

Elementos:

 fundo amarelo;

 grid fino;

 microtexto vermelho;

 headline branca enorme;

 objetos soltos;

 CTA vermelho;

 bastante espaço negativo.

Essa seção mostra outra regra:

Você não precisa encher todas as áreas.

Mesmo sendo maximalista, existem áreas vazias.

33. Movimento

Eu não colocaria animação em tudo.

As animações certas seriam:

Marquee

movimento horizontal contínuo.

Stickers

pequeno floating:

translateY 0 → -8px → 0

Produto

entrada com:

scale .9 → 1
rotate -2° → 0

Fotos

parallax leve.

Títulos

reveal vertical.

Hover

botão:

scale 1 → 1.05

foto:

rotate 2° → 0°

Mascote:

pequena rotação.

34. Sensação de impressão

Existe uma clara influência de impressão física.

Você pode adicionar uma textura global extremamente suave:

 noise;

 paper grain;

 halftone;

 impressão offset.

Algo como opacidade de 2–4%.

Não deve parecer filtro vintage pesado.

É apenas para remover a perfeição excessivamente digital.

35. Elementos gráficos que valem criar

Para reproduzir a linguagem, eu teria uma biblioteca de assets contendo:

 3–5 mascotes;

 5–10 doodles;

 setas;

 mãos;

 estrelas;

 chamas;

 smiley;

 labels;

 badges;

 checkerboard;

 gingham;

 grid;

 shapes orgânicos;

 lettering;

 produtos recortados.

Esses assets são tão importantes quanto as fotografias.

36. Responsive mobile

No mobile, não transforme tudo em uma coluna genérica.

Mantenha a direção de arte.

Por exemplo:

Desktop:

texto          colagem
                imagem

Mobile:

TÍTULO GIGANTE

        sticker
  FOTO
             mascot

texto

Continue permitindo sobreposição.

37. Tipografia mobile

Não diminua demais.

Exemplo:

font-size: clamp(55px, 18vw, 90px);

O título ainda deve dominar a tela.

É melhor quebrar:

SIGNATURE
DELIGHTS

do que transformar em uma pequena headline de 32px.

38. Overflow

Para esse tipo de site:

body {
  overflow-x: clip;
}

porque haverá elementos saindo do viewport.

Mas o conteúdo principal deve respeitar aproximadamente:

padding-inline: 20px;

no mobile.

39. Tokens básicos

Eu começaria o projeto mais ou menos assim:

:root {
  --cream: #F6E4CE;
  --cream-light: #FAF3E7;

  --red: #F91814;
  --yellow: #FFD84F;
  --orange: #F28A18;

  --black: #111111;
  --white: #FFF9EF;
  --gray: #6F6F68;

  --page-padding: clamp(20px, 5vw, 72px);

  --section-space:
    clamp(72px, 11vw, 170px);

  --radius-pill: 999px;

  --display-xl:
    clamp(76px, 13vw, 180px);

  --display-lg:
    clamp(60px, 10vw, 135px);

  --display-md:
    clamp(48px, 8vw, 100px);
}

40. O que NÃO fazer

Para replicar essa referência, eu evitaria completamente:

 cards SaaS;

 glassmorphism;

 gradientes modernos;

 fundo branco puro;

 cinza corporativo;

 sombras suaves;

 border radius de 20px em tudo;

 ícones Lucide enormes;

 grids perfeitos de 3 cards;

 headline + subtítulo + botão centralizados em todas as seções;

 imagens todas com o mesmo tamanho;

 fonte Inter para tudo;

 animações tecnológicas;

 estética premium/minimalista;

 excesso de alinhamento.

Isso mataria completamente essa identidade.

41. A fórmula visual central

Se eu tivesse que condensar o design system inteiro da referência em uma fórmula, seria:

Base creme + vermelho agressivo + amarelo + tipografia condensada gigantesca + script artesanal + microtexto + fotografia recortada + mascotes vintage + padrões diner + colagens sobrepostas + seções tratadas como pôsteres.

E o princípio mais importante:

Não pense em “componentes de site”. Pense em uma sequência de peças publicitárias que foram conectadas verticalmente.

É justamente isso que faz essa página parecer uma marca de verdade, e não simplesmente um template de restaurante.


Curadoria visual: priorizar atmosfera escura, madeira, luz quente, preto, dourado envelhecido, fotografia de hambúrguer com contraste forte e referências medievais discretas. Evitar estética de parque temático, pergaminho falso, excesso de brasões, texturas pesadas, ícones medievais em toda parte ou qualquer solução que deixe a marca caricata. A identidade precisa parecer premium, gastronômica e contemporânea antes de parecer temática.
Dados reais do negócio (pesquisados)
Nome comercial: Taverna Burguer
Descrição pública: Taverna Burguer, Hamburgueria
Responsável: não identificado nas fontes consultadas
Instagram: @tavernaburguerjoi
Publicações no Instagram: 307
Seguidores no Instagram: aproximadamente 11,4 mil
Seguindo no Instagram: 134
Bio real do Instagram:
• HAMBÚRGUER GRELHADO NO FOGO 🔥🍔
• TER À DOM DAS 18:15H ÀS 22:55H
• CUPOM: "PRIMEIRACOMPRA" R$ 10
(47) 99292-6929 (whats)
Destaques visíveis no Instagram: HORÁRIO e WHATSAPP
Endereço: R. Dr. Plácido Olímpio de Oliveira, 1461, Anita Garibaldi, Joinville, SC, 89202-165
WhatsApp e telefone: (47) 99292-6929
Avaliação no Google Maps: 4,9
Quantidade de avaliações no Google Maps: 231
Categoria: Hamburgueria
Faixa de preço informada no Google Maps: R$ 40 a R$ 60 por pessoa
Horário exibido no Google Maps: terça a domingo, das 18:10 às 22:55
Horário exibido no Instagram: terça a domingo, das 18:15 às 22:55
Formas de atendimento informadas: refeição no local, retirada na porta e entrega sem contato
Pedido online: tavernaburgerjoi.mandarpedido.com
Link de contato e mesa encontrado no Google Maps: contate.me/taverna-hamburgueria
Destaques do cardápio exibidos no Google Maps: Burger Junior Pão Carne E Queijo, Batata Frita e Geléia de Pimenta
Outros produtos citados diretamente em avaliações: Rei Artur e smash burger
Presença institucional própria: não foi encontrado site institucional confirmado nos canais oficiais pesquisados. Os links oficiais apresentados direcionam para plataformas de pedido e contato
Avaliações reais para usar como depoimento (texto exato, não reescrever, so resumi)
Zaira Assis
Queria ter tirado foto antes pois a apresentação estava top 🤌🏻o melhor hambúrguer que comi em Joinville. Ingredientes de qualidade. Não consigo nem descrever a beleza do bacon desse hambúrguer. Pedi o Rei Artur, a maionese é muito boa. Esse ponto da carne na foto é ao ponto …
Lucas Diego
Qualidade alta em todos os detalhes, hambúrguer, pão e molho. O atendimento que acolhe e te passa confiança! Um dos hambúrgueres mais saborosos que já comi em Joinville.
Tom Duran
​Experiência excelente na Taverna! Os hambúrgueres são de altíssima qualidade e o smash burger me surpreendeu positivamente, crostinha perfeita e muito saboroso. Vale cada centavo
Pendente de pesquisa antes de fechar o prompt (não inventar)
Nome do proprietário ou responsável pelo negócio
Cardápio completo e preços individuais dos hambúrgueres, acompanhamentos e bebidas
Confirmar se o cupom PRIMEIRACOMPRA de R$ 10 continua ativo no momento da publicação
Resolver a divergência de horário entre Google Maps, que informa abertura às 18:10, e Instagram, que informa 18:15
Confirmar o horário de segunda feira, embora as fontes consultadas indiquem operação de terça a domingo
Ano de fundação da hamburgueria
Confirmar se existe algum número de atendimento adicional além de (47) 99292-6929
Confirmar se o domínio tavernaburguer.com.br, encontrado em busca aberta na web, possui qualquer relação com esta Taverna Burguer de Joinville, já que ele não aparece vinculado aos canais oficiais analisados
Confirmar quais itens do cardápio devem receber maior destaque comercial além dos produtos já citados publicamente
Confirmar se reservas de mesa pelo link contate.me continuam sendo utilizadas
Fotos
[Anexar as fotos reais do Google Maps e do Instagram, numeradas em sequência. Não descrever em texto, anexar os arquivos.]
Usar apenas as fotos anexadas, não é obrigatório usar todas, escolher as que melhor servem para a estrutura do site a partir do que for anexado. Não gerar imagem e não usar banco de imagem. Se o material anexado não cobrir alguma seção, avisar em vez de preencher com foto genérica.
Regras obrigatórias
Copy na linguagem real da marca, usando a personalidade de taverna medieval de maneira controlada e contemporânea, sem cara de IA e sem frase genérica de hamburgueria
Proibido: travessão, hífen no meio de frase, gradiente, emoji. Usar ícone real de Instagram e WhatsApp no lugar
Não mostrar @ nem número por extenso, só ícone com link. WhatsApp abre com mensagem pré definida
CTA claro e fixo no mobile
Sem selo, etiqueta ou chip decorativo
Alternar tom claro e escuro entre as seções ao longo da página, nunca repetir a mesma cor de fundo em mais de duas seções seguidas
Na galeria, não usar grade fixa de células idênticas se as fotos tiverem proporções diferentes entre si. Montar layout com tamanhos variados que respeite o enquadramento original de cada imagem
Corte de foto respeitando a proporção original, nunca espremer vertical em horizontal
Responsivo, com tela travada no mobile contra arrasto lateral
Efeito do 21st.dev principalmente na versão desktop
SEO básico: title e meta description únicos, H1 e headings corretos, alt text nas imagens, JSON-LD do tipo Restaurant com endereço, telefone, horário e aggregateRating, sem keyword stuffing
React, não HTML puro
Estrutura de seções
Header fixo e compacto com a marca Taverna Burguer, navegação curta e ícone de WhatsApp levando direto para atendimento ou pedido, mantendo a navegação visível sem ocupar espaço excessivo.
Hero de forte impacto gastronômico com uma foto real de hambúrguer como protagonista, headline curta baseada na ideia real de hambúrguer grelhado no fogo, apoio de localização em Joinville e CTA principal para pedir ou falar no WhatsApp.
Faixa de credibilidade imediatamente abaixo do hero mostrando de forma tipográfica a nota 4,9 no Google, as 231 avaliações, a faixa de preço e a informação de atendimento no salão, retirada e entrega, sem transformar esses dados em chips.
Prova social ainda no início da página com duas ou três avaliações reais em destaque, usando o texto exatamente como fornecido e aproveitando frases que reforçam qualidade dos ingredientes, sabor, atendimento e experiência.
Seção sobre a Taverna apresentando a identidade medieval da marca, o conceito de hambúrguer grelhado no fogo e a experiência de comer no salão, com linguagem própria da marca sem exagerar na fantasia ou criar história de origem não confirmada.
Seção de destaque do produto principal centrada nos hambúrgueres artesanais e no preparo no fogo, podendo citar o smash, o Rei Artur e os itens publicamente encontrados, mas sem inventar ingredientes, preços ou características de produtos que não estejam confirmados.
Galeria editorial com fotos reais do ambiente, hambúrgueres, acompanhamentos e experiência da casa, variando tamanhos e proporções conforme o material anexado em vez de transformar tudo em uma grade uniforme.
Seção explicando como pedir em poucos passos: escolher pelo cardápio online, concluir o pedido pelo canal disponível e optar por entrega, retirada ou consumo no local, mantendo o fluxo simples e com CTA direto.
Seção de localização e contato com endereço completo em Anita Garibaldi, referência a Joinville, mapa incorporado, horário confirmado, acesso ao cardápio e ícones clicáveis de WhatsApp e Instagram.
Botão flutuante de WhatsApp fixo durante a navegação, principalmente no mobile, com mensagem pré definida relacionada a pedido ou atendimento e sem exibir o número na interface.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/cdcaa6e9-20c7-4a5c-87e4-9ed89437fb12).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
