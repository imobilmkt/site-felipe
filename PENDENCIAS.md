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
- **`index.html`** — `[TELEFONE]` (link `tel:` e JSON-LD) ainda pendente — não sei
  se é o mesmo número do WhatsApp ou um contato separado (ex.: telefone fixo).
  `[ENDEREÇO]` (rodapé e JSON-LD) também.
- **CRECI** — `[Nº]` aparece na seção "Sobre o Felipe", no rodapé e no JSON-LD.

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

## Instagram

Usei o handle **@feliperamalho.imoveis** porque ele aparece no próprio manual de
marca (prancha 07). Se a conta mudou, atualize o link no rodapé.

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

**Sobre o domínio**: todo esse trabalho aponta para `https://www.feliperamalho.com.br/`
como placeholder — usado no `<link rel="canonical">`, no Open Graph, no JSON-LD
(dois arquivos), no `sitemap.xml`, no `robots.txt` (linha `Sitemap:`) e no
`llms.txt`. Assim que o domínio real existir, é só me falar que eu troco todas
essas ocorrências de uma vez.

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
- **Disponibilidade**: não sei se as unidades desses 6 empreendimentos ainda estão
  à venda com você hoje (alguns materiais são de lançamento, ex.: Lagoon Home Club
  entrega em março/2030). Confirme antes de divulgar.
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

As instruções foram claras: não inventar depoimento com nome de pessoa. Os dois
blocos da seção "Depoimentos" estão com `[DEPOIMENTO PENDENTE — citação real do
cliente]` e `[NOME DO CLIENTE] · [BAIRRO]`. Substitua pelos depoimentos reais (ou
peça autorização por escrito ao cliente antes de publicar nome + bairro).

## Uma das 5 fotos não foi usada

Das 5 fotos em `imagens/`, a do Felipe no balcão do Café Plaenge (`11.48.57.jpeg`) não
entrou na página. As outras 4 preenchem "Como funciona", "Por que um assessor",
"Sobre" (retrato) e "Sobre" (prêmio, com tratamento duotone para neutralizar o verde
forte da iluminação do evento). Essa quinta não tinha um encaixe natural sem forçar
uma seção — o CTA final ficou como bloco Musgo sólido, conforme pedido ("bloco musgo
cheio"), sem foto por baixo. Se quiser usá-la em algum lugar, ela é um bom material
para um post de Instagram ou uma futura seção de bastidores.

## Prêmio (foto da cerimônia)

A legenda da foto de prêmio, na seção "Sobre", está como `[NOME DO PRÊMIO], [ANO]`
— não sei qual prêmio é. Preencha com o nome real do reconhecimento.

## FAQ — dois pontos que dependem do seu modelo de negócio

- "Quanto custa contratar sua assessoria de compra?" — descrevi de forma genérica e
  deixei `[DETALHAR MODELO DE COBRANÇA]` para você especificar (comissão paga pelo
  vendedor, fee fixo pago pelo comprador, etc.).
- "Você também ajuda a vender, ou só compra?" — resposta inteira entre colchetes,
  porque não sei se você atua na ponta de venda/listagem também.
- "Você atua fora de Maringá?" — sugeri exemplos de cidades vizinhas entre colchetes
  (Sarandi, Paiçandu, Marialva); confirme o raio real de atuação.

## Assets gerados a partir da marca (não precisam de ação sua)

Só para constar o que foi automatizado: favicon (svg + png em vários tamanhos),
ícone de tela inicial (apple-touch-icon, 192/512), e a imagem de Open Graph
(`assets/og/og-image.jpg`, 1200×630) foram gerados programaticamente a partir dos
arquivos SVG originais da marca — nunca redesenhados à mão. Se a marca for
atualizada, regenere esses três a partir dos novos SVGs.
