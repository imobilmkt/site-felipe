# Pendências — site Felipe Ramalho

Dados reais que eu não tinha e por isso deixei entre colchetes no código. Busque por
`[` no projeto para achar todos os pontos rapidamente (`grep -rn "\[" index.html`).

## Contato (usado em vários lugares)

- **WhatsApp — resolvido.** `script.js` usa `554488281680` (+55 44 8828-1680) em
  todo botão "Falar no WhatsApp" do site, com a mensagem fixa "Olá! Quero mais
  informações sobre um imóvel!" (pedido por você via WhatsApp). Se o número ou a
  mensagem mudarem de novo, é só editar a constante `WHATSAPP_NUMBER` e os textos
  `data-wa-msg` — ambos centralizados, fácil de trocar.
- **E-mail — resolvido.** `corretor.feliperamalho1@gmail.com` no rodapé (link
  `mailto:`) e no JSON-LD, em `index.html` e `imoveis.html`.
- **Telefone — resolvido (com uma suposição sua para confirmar).** O link `tel:`
  do rodapé (nas três páginas) e o campo `telephone` do JSON-LD usam o mesmo
  número do WhatsApp (+55 44 8828-1680), porque é o único contato que tenho.
  Se você tiver um telefone fixo separado, me avise que eu troco.
- **Endereço — resolvido.** `Av. Gastão Vidigal, 851 A, Maringá, 87053-310, PR,
  BR` no rodapé de `index.html`, `imoveis.html` e `trajetoria.html`, e no JSON-LD
  (`streetAddress`/`postalCode`) de `index.html`.
- **CRECI — resolvido.** `CRECI-PR 50321` na seção "Sobre o Felipe", no rodapé
  das três páginas e no `llms.txt`.

## Filtro "Pronto" nos imóveis (feedback do cliente via WhatsApp)

Adicionei abas de filtro na seção de imóveis (home e `imoveis.html`): Condomínio
fechado, Studio, Médio, Alto padrão (100 m²+), Comercial e Pronto. As cinco primeiras
já classificam os 6 imóveis pelos metros quadrados reais de cada catálogo. A aba
"Pronto" eu deixei funcionando, mas **sem nenhum imóvel marcado nela** — nenhum dos
catálogos que recebi confirma explicitamente que a obra está concluída (o Lagoon Home
Club, por exemplo, tem entrega prevista para março/2030). Não quis marcar "pronto"
chutando, porque isso pode configurar propaganda enganosa.

Para ativar: me diga quais dos 6 (La Vie Concept, Quinta dos Plátanos, Floresta 23,
Lagoon Home Club, Lithos, Office Cidade Aruna) já estão prontos, e eu adiciono
`pronto` no atributo `data-category` do card/seção correspondente em `index.html` e
`imoveis.html` (ex.: `data-category="studio pronto"`). Hoje, clicar em "Pronto" mostra
uma mensagem convidando a pessoa a chamar no WhatsApp — não é um beco sem saída, mas
também não é o ideal para sempre.

## Instagram — resolvido

O handle correto é **@ramalhofelipe1** (o manual de marca trazia
@feliperamalho.imoveis, desatualizado). Corrigi nos três rodapés
(`index.html`, `imoveis.html`, `trajetoria.html`), no `sameAs` do JSON-LD e no
`llms.txt`.

## SEO e recomendação por IA (pedido via WhatsApp)

Fiz uma passada de SEO técnico e de "otimização para IA" no site inteiro. O que
mudou:

- **`robots.txt`** (novo, na raiz): libera todos os buscadores, e libera
  explicitamente os rastreadores de IA que hoje alimentam respostas de
  assistentes (GPTBot/ChatGPT-User da OpenAI, ClaudeBot/anthropic-ai da
  Anthropic, PerplexityBot, Google-Extended, Applebot-Extended, entre outros) —
  isso é o que faz um site poder ser citado por essas ferramentas.
- **`sitemap.xml`** (novo, na raiz): lista as duas páginas para os buscadores.
- **`llms.txt`** (novo, na raiz): um resumo direto, em texto simples, de quem é
  o Felipe, o que ele faz, área de atuação e contato — um formato que várias
  ferramentas de IA já procuram para entender um site rapidamente.
- **Título, descrição e redes sociais** (`<title>`, meta description, Open
  Graph, Twitter Card) reescritos nas duas páginas para começar com a palavra-
  chave certa: "Corretor de Imóveis de Alto Padrão em Maringá" na home,
  "Imóveis de Alto Padrão à Venda em Maringá" na página de imóveis.
- **Dados estruturados (JSON-LD)** — o formato que motores de busca e IAs usam
  para entender fatos de um site com precisão, em vez de adivinhar pelo texto:
  - `RealEstateAgent` mais completo: cargo, área de atuação, especialidades
    (`knowsAbout`), e um catálogo (`hasOfferCatalog`) citando os 6
    empreendimentos por nome.
  - `FAQPage` com as 3 perguntas do FAQ que já têm resposta final — o Google
    exige que o texto no schema seja idêntico ao texto visível na página, por
    isso as outras 3 (que ainda têm `[colchete]` pendente) ficaram de fora.
    Assim que você me passar as respostas completas, eu adiciono as 3 que
    faltam.
  - `ItemList` na página de imóveis, com nome, categoria, metragem e foto de
    cada um dos 6 empreendimentos.
  - Corrigi um problema real: o campo `telephone` do schema estava com
    `[TELEFONE]` (texto quebrado) — troquei pelo número de WhatsApp
    (+55 44 8828-1680), já que hoje é o único contato real que tenho. Se
    você tiver um telefone separado (fixo, por exemplo), me avise que eu
    ajusto. Também tirei o campo de endereço que estava com `[ENDEREÇO]`
    quebrado — um endereço inválido em dado estruturado é pior do que não ter
    o campo.
- **Eyebrow do Hero e H1 da página de imóveis** ganharam a palavra "corretor" e
  "Maringá" de forma mais direta, sem mudar o texto principal/persuasivo que já
  existia (evitei "empanturrar" de palavra-chave, o Google penaliza isso).

**Sobre o domínio — resolvido.** Você comprou `feliperamalhocorretor.com.br` e
eu já troquei todas as 41 ocorrências do domínio placeholder nos 6 arquivos que
usavam ele: `index.html`, `imoveis.html`, `trajetoria.html`, `sitemap.xml`,
`robots.txt` e `llms.txt` (canonical, Open Graph, JSON-LD, sitemap, linha
`Sitemap:` do robots.txt). O site inteiro já aponta para
`https://www.feliperamalhocorretor.com.br/`.

Isso é só o código apontando para o domínio certo — falta o próprio domínio
estar de fato apontando (DNS) para onde o site está hospedado, e o site
precisa estar publicado nesse host. Se ainda não configurou isso, me avise
como/onde o site vai ficar hospedado que eu ajudo a verificar.

## Imóveis selecionados — agora com dados e fotos reais dos catálogos

Usei os PDFs da pasta `catálagos/` (7 catálogos de empreendimento) para montar os
6 imóveis que aparecem na home e na página nova `imoveis.html`: La Vie Concept,
Quinta dos Plátanos, Floresta 23, Lagoon Home Club, Lithos e Office Cidade Aruna.
De cada catálogo eu extraí a foto mais bonita (a de maior resolução embutida no PDF,
não uma captura de tela da página) e os números que os próprios materiais informam
— metragens, nº de unidades, suítes, previsão de entrega, incorporadora/construtora.
Nada foi inventado; o que os catálogos não diziam (endereço exato, preço,
disponibilidade atual da unidade) eu simplesmente não coloquei.

**Um catálogo ficou de fora de propósito:** `OG3 - ELEVVO - apresentacao meeting
teaser.pdf` traz, na própria capa, o aviso "ESSE MATERIAL É DESTINADO A APRESENTAÇÕES
PRIVADAS, SENDO VEDADA SUA DIVULGAÇÃO EM MÍDIAS". Por isso não usei nenhuma imagem
nem dado do Elevvo no site. Se esse lançamento já puder ser divulgado publicamente,
me avise que eu monto a página dele do mesmo jeito que as outras seis.

Pontos que valem uma conferência sua antes de publicar:
- **Disponibilidade — confirmada.** Você confirmou que tudo que está no site está
  à venda, então não mudei nada nos cards — só ficou registrado aqui que a
  informação foi checada com você (alguns são de lançamento, ex.: Lagoon Home
  Club entrega em março/2030, mas seguem à venda).
- **Endereço exato**: só tenho endereço fechado para o Lagoon Home Club (Av. Laguna,
  1936) e a região do Lithos (Zona 3, perto do Parque do Ingá). Os demais eu descrevi
  por proximidade (Eurogarden, Av. Gastão Vidigal), como os próprios catálogos fazem.
- **Fotos usadas**: a mesma foto de capa do Quinta dos Plátanos (a piscina ao
  entardecer) virou o fundo do Hero da home — é a mais bonita de todo o material e
  não tem nenhuma marca/logo sobreposta. O card do Quinta dos Plátanos na própria
  seção usa outra foto (a portaria), para não repetir a imagem na mesma página.

## Foto do hero — resolvida

A seção Hero da home agora usa a foto da piscina do Quinta dos Plátanos (extraída
do catálogo, alta resolução) como fundo, com a mesma tarja em gradiente Musgo por
cima para a marca e o texto continuarem legíveis. Se preferir trocar por outra foto
depois, os arquivos são `assets/img/hero-maringa-*` (4 larguras, `.jpg`/`.webp`/`.avif`).

## Depoimentos

**Depoimento 1 — resolvido.** Você mandou o print da conversa de WhatsApp com a
cliente (autorizando a divulgação do nome/handle: "Posso divulgar seu nome, né?"
— "Pode sim"). A pedido seu, o depoimento na home usa o próprio print (não um
texto reescrito), redimensionado em três larguras em `assets/img/depoimento-
print-tamar-*.jpg`, citado como `@tamaarpeschieira · Lagoon Home Club` com link
para o Instagram dela.

**Depoimento 2 — agora é o vídeo.** O segundo card, que estava com
`[DEPOIMENTO PENDENTE — citação real do cliente 2]`, foi substituído pelo
vídeo que você mandou (entrega do Lagoon Home Club) com o texto exatamente
como você pediu, com pequenos ajustes de gramática ("com o cliente", "eles
têm"). Os handles @tamaarpeschieira, @rafaelbaylao e @bionovareodontologia
viram links para o Instagram de cada um — confira se os três perfis estão
corretos.

Você disse que não quer um terceiro depoimento por enquanto — a seção fica só
com esses dois (print + vídeo).

O arquivo de vídeo foi renomeado e movido para `assets/video/depoimento-lagoon-
tamar-rafael.mp4` (estava em `assets/snapinsta-1788448258055.mp4`, nome de
ferramenta de download que não fazia sentido publicar). Gerei também uma
imagem de capa (`assets/img/depoimento-video-poster-720.jpg`) extraída do
próprio vídeo, para não aparecer tela preta antes do play.

## Uma das 5 fotos não foi usada

Das 5 fotos em `imagens/`, a do Felipe no balcão do Café Plaenge (`11.48.57.jpeg`) não
entrou na página. As outras 4 preenchem "Como funciona", "Por que um assessor",
"Sobre" (retrato) e "Sobre" (prêmio, com tratamento duotone para neutralizar o verde
forte da iluminação do evento). Essa quinta não tinha um encaixe natural sem forçar
uma seção — o CTA final ficou como bloco Musgo sólido, conforme pedido ("bloco musgo
cheio"), sem foto por baixo. Se quiser usá-la em algum lugar, ela é um bom material
para um post de Instagram ou uma futura seção de bastidores.

## Prêmio (foto da cerimônia) — resolvido

A legenda da foto de prêmio, na seção "Sobre", agora é "3º lugar em VGV de
vendas, Sílvio Iwata Prime, 2025".

## FAQ

- **"Quanto custa contratar sua assessoria de compra?" — resolvido.** Resposta
  agora é "Não tem cobrança adicional para você — apenas a comissão padrão do
  mercado." Também entrou no `FAQPage` do JSON-LD.
- **"Você atua fora de Maringá?" — resolvido.** Resposta agora cita Porto Rico,
  com os produtos da Aruna. Também entrou no `FAQPage` do JSON-LD e no
  `areaServed` do schema `RealEstateAgent`.
- **"Você também ajuda a vender, ou só compra?" — resolvido.** Você confirmou
  que sim. Usei a descrição que você já tinha me passado sobre o trabalho de
  venda (apresentação, fotos/vídeos, conteúdo, campanhas patrocinadas,
  posicionamento nas plataformas). Também entrou no `FAQPage` do JSON-LD.

Com isso, as 6 perguntas do FAQ estão completas — não sobrou nenhum colchete
`[...]` pendente em nenhuma das três páginas.

## Assets gerados a partir da marca (não precisam de ação sua)

Só para constar o que foi automatizado: favicon (svg + png em vários tamanhos),
ícone de tela inicial (apple-touch-icon, 192/512), e a imagem de Open Graph
(`assets/og/og-image.jpg`, 1200×630) foram gerados programaticamente a partir dos
arquivos SVG originais da marca — nunca redesenhados à mão. Se a marca for
atualizada, regenere esses três a partir dos novos SVGs.
