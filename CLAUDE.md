# Contexto do projeto

Site institucional de **Marcelo Santos, psicólogo clínico** em Marília, SP.
Freela. O cliente é o Marcelo; o desenvolvedor é o Pedro.

HTML e CSS puros. Sem build, sem framework, sem backend. Hospedagem
Hostinger (plano compartilhado, upload via hPanel para `public_html`).

## Estrutura

```
index.html · sobre.html · servicos.html · contato.html · 404.html
robots.txt · sitemap.xml · .htaccess
assets/css/style.css     folha única, todas as páginas
assets/img/              webp para o site, jpg só na imagem de compartilhamento
```

Cabeçalho, bloco de CTA e rodapé são repetidos em cada página (não há
includes). **Alteração em um deles precisa ser replicada nas 5 páginas.**

## Identidade visual

Vem do cartão de visita do cliente, não foi inventada.

```
--bg-deep:#123039   --bg-panel:#193d47   --bg-darker:#0b2027
--text-light:#f2ede1  --text-muted:#95afb1
--gold:#d8b45f      --gold-deep:#a9812f
```

Tipografia: Lora (títulos e citações) e Mulish (corpo), via Google Fonts.
O peixe dourado (`peixe.webp`) é elemento de marca, extraído do PDF do
cartão. Aparece como marca d'água no hero e como favicon.

## Decisões já tomadas

- **Logoterapia**, não Gestalt. A landing page de origem dizia Gestalt; o
  documento de revisão do cliente corrigiu para Logoterapia.
- **"Psicoterapia"** no lugar de "Psicologia" no posicionamento.
- Headline atual veio do documento de revisão. Ainda não confirmada.
- Imagens em WebP. A `og:image` ficou em JPEG de propósito: leitores de
  preview de link têm suporte irregular a WebP.
- Um único telefone: **(14) 99156-6205**. O número do cartão
  (98119-4351) foi removido a pedido do Pedro.

## Pendências com o cliente

1. **CRP** — obrigatório em divulgação (Conselho Federal de Psicologia).
   Hoje está `CRP 00/00000` no rodapé das 5 páginas. Bloqueia publicação.
2. **Qual é a clínica.** Há evidência conflitante: o cartão de visita diz
   "Árvore da Vida" (logo: árvore com raízes de cérebro); existe WhatsApp
   Business ativo da "Clínica Verdadeiramente" (logo: cérebro azul), que
   era o nome na landing page original. O site hoje mostra "Árvore da
   Vida" com o logo do cérebro dourado — que é o cérebro da
   Verdadeiramente recolorido. Está inconsistente de propósito, esperando
   resposta.
3. **Horários de atendimento** — placeholder em `contato.html`.
4. **Logo definitivo da clínica** — depende do item 2.
5. **"atendimento eficaz e transformador"** em `sobre.html` — promessa de
   resultado, restrita pelo CFP. Sugerido rever.

## Armadilhas já encontradas neste código

Todas já corrigidas. Não reintroduzir.

- **`width`/`height` nas imagens exigem `height:auto` no CSS.** Esses
  atributos entram como dica de estilo; sem `height:auto` a altura trava e
  a imagem distorce. Já existe regra genérica `img{max-width:100%;
  height:auto;}`.
- **Foto do hero é quase quadrada (700×742).** O layout foi desenhado em
  volta dessa proporção. Trocar por 4:5 estoura a altura do hero.
- **Grids precisam de breakpoint.** O CSS de origem tinha `.hero .wrap`
  como grid de 2 colunas sem nenhuma media query, e nunca colapsava no
  celular. Todo grid novo precisa do seu `@media`.
- **Morfologia em imagem: preencher a borda antes.** Fechamento
  morfológico erode a borda da imagem porque o lado de fora conta como
  fundo.
- **O PNG do cérebro tinha o xadrez pintado nos pixels**, com canal alpha
  100% opaco. Era print de editor salvo errado. Já foi recortado de
  verdade; o arquivo em alta está fora da pasta do site.
- **Tamanho de elemento repetido precisa ser por contexto.** O logo da
  clínica aparece em dois lugares com tamanhos diferentes; regra global
  quebra um dos dois.

## Ao publicar

Subir o **conteúdo** da pasta (não a pasta) para `public_html`, incluindo
o `.htaccess`, que é oculto. Ativar SSL no painel. Depois: enviar o
`sitemap.xml` no Search Console, testar o preview do link no debugger do
Facebook, e criar o perfil no Google Meu Negócio com o mesmo endereço.

O domínio `psimarcelosantos.com.br` está registrado em outro provedor.
Antes de apontar, levantar com o cliente o que existe hoje nele,
principalmente registros de e-mail.
