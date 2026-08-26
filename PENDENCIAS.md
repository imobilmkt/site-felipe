# Pendências — site Felipe Ramalho

Dados reais que eu não tinha e por isso deixei entre colchetes no código. Busque por
`[` no projeto para achar todos os pontos rapidamente (`grep -rn "\[" index.html`).

## Contato (usado em vários lugares)

- **`script.js`, linha 8** — `WHATSAPP_NUMBER`: coloque o número real do WhatsApp,
  só dígitos, com DDI+DDD (ex.: `5544999998888"`). Esse é o único lugar que precisa
  mudar — todos os botões "Falar no WhatsApp" do site usam essa constante.
- **`index.html`** — `[TELEFONE]` (link `tel:` e JSON-LD), `[E-MAIL]` (link `mailto:`
  e JSON-LD), `[ENDEREÇO]` (rodapé e JSON-LD).
- **CRECI** — `[Nº]` aparece na seção "Sobre o Felipe", no rodapé e no JSON-LD.

## Instagram

Usei o handle **@feliperamalho.imoveis** porque ele aparece no próprio manual de
marca (prancha 07). Se a conta mudou, atualize o link no rodapé.

## Domínio / SEO técnico

Usei `https://www.feliperamalho.com.br/` como placeholder de domínio no
`<link rel="canonical">`, no Open Graph (`og:url`, `og:image`) e no JSON-LD, porque
o domínio real ainda não foi definido. Assim que o domínio existir, substitua essas
quatro ocorrências em `index.html`.

## Números de prova (seção "Prova")

Quatro números marcados como `[PLACEHOLDER]` em `index.html`:
- Anos de mercado em Maringá
- Imóveis intermediados
- Ticket médio das negociações
- Bairros de atuação

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
