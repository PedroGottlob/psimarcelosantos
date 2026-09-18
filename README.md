# Site — Marcelo Santos, Psicólogo Clínico

Site estático (HTML + CSS puro). Sem build, sem dependências, sem backend.

## Estrutura

```
index.html · sobre.html · servicos.html · contato.html · 404.html
robots.txt · sitemap.xml · .htaccess
assets/css/style.css
assets/img/   marcelo.webp, avatar-80.webp, peixe.webp, cerebro.webp,
              og-marcelo.jpg, favicon-32.png, apple-touch-icon.png
```

## Publicar na Hostinger

hPanel → Sites → Faça upload do seu PHP ou HTML. Suba o **conteúdo**
desta pasta (não a pasta em si) para `public_html`, incluindo o
`.htaccess`, que é oculto. Depois ative o SSL grátis.

O `.htaccess` já faz redirect para HTTPS, registra o `404.html` e define
cache das imagens.

## Depois de publicar

1. Enviar o `sitemap.xml` no Google Search Console.
2. Testar o preview do link em https://developers.facebook.com/tools/debug/
   (usar "Scrape Again" se o cache estiver velho).
3. Validar o schema em https://search.google.com/test/rich-results
4. Criar o perfil no Google Meu Negócio com o mesmo endereço — é o que
   mais pesa para busca local.

## Pendências com o cliente

- [ ] **CRP** — obrigatório em divulgação (CFP). Placeholder `CRP 00/00000`
      no rodapé das 5 páginas.
- [ ] **Horários de atendimento** — placeholder em `contato.html`.
- [ ] **Foto em alta** — a atual tem 700px. Para a imagem de
      compartilhamento o ideal seriam 1200px de largura.
- [ ] **Qual é a clínica?** Há evidência das duas: o cartão de visita diz
      "Árvore da Vida"; existe um WhatsApp Business ativo da "Clínica
      Verdadeiramente" (14 99156-6205), que era o nome na LP original.
      O site hoje mostra "Árvore da Vida" — confirmar antes de publicar.
- [ ] **Logo da clínica** — hoje está usando o cérebro dourado (recolorido
      a partir do logo azul da Verdadeiramente). O cartão da Árvore da Vida
      tem outro logo, árvore com raízes de cérebro. Depende do item acima.
- [ ] **Headline** — usei o título novo do documento de revisão. Confirmar.
- [ ] **"Atendimento eficaz e transformador"** em `sobre.html` — promessa
      de resultado, restrita pelo CFP. Vale rever com ele.

## Contato no site

- (14) 99156-6205 — único número. Todos os CTAs de WhatsApp e o schema
  apontam para ele. O número do cartão (98119-4351) foi removido a pedido
  do cliente.

## Endereço

Clínica Árvore da Vida — Av. Salgado Filho, 22, Santa Lourdes,
Marília, SP, 17513-260. Aparece no rodapé das 5 páginas, no bloco de
contato e no schema, com o mesmo formato em todos (o Google compara).

## Decisões tomadas

- Clínica **Árvore da Vida** (cartão). Decisão em revisão, ver pendências.
- Abordagem **Logoterapia** (documento de revisão), não Gestalt (LP antiga).
- Imagens em WebP. Suportado por todos os navegadores desde 2020
  (Chrome, Firefox, Edge, Safari 14+). A `og:image` ficou em JPEG de
  propósito: leitores de preview de link têm suporte irregular a WebP.
