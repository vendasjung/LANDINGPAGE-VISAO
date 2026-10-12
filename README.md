# Ótica Visão — Lages

Landing page de atendimento e orçamento pelo WhatsApp: https://oticavisaolages.com.br/

## Desenvolvimento

```sh
npm ci
npm run dev
```

## Publicação

```sh
npm run build
```

Publique `dist/`. O build gera HTML pré-renderizado para a página inicial e o React mantém os menus e demais interações por hidratação. Use o script completo de build; executar apenas `vite build` não gera o HTML pré-renderizado.

Configure a hospedagem para servir os arquivos existentes e retornar HTTP 404 para URLs desconhecidas. Uma regra que devolve a home com HTTP 200 para qualquer URL pode criar soft 404s. Esta landing page tem somente uma URL indexável.

## SEO

Título, descrição, canonical, Open Graph e dados estruturados de empresa local estão em `index.html`. Sitemap e robots estão em `public/`. Os horários e dados de contato refletem o conteúdo da loja publicado; atualize-os juntos se mudarem.

Cadastre o domínio no Google Search Console, valide sua propriedade pelo provedor DNS e envie `https://oticavisaolages.com.br/sitemap.xml`. A validação do domínio e o Perfil da Empresa dependem de acesso às respectivas contas.

## Contatos e medição

Os cliques no WhatsApp, telefone e Google Maps disparam `otica:contact`. Se houver `gtag`, enviam `contact_click`; caso contrário, uma instalação existente de `dataLayer` recebe esse evento. Os parâmetros são apenas `contact_channel` e `contact_position`; nenhum conteúdo de receita ou dados de saúde é enviado.

Ainda é necessário configurar uma propriedade Analytics/Tag Manager da Ótica Visão para coletar dados. Clique é intenção de contato; conversas, orçamentos e vendas devem ser confirmados no atendimento/CRM. Não marcar um clique como venda.

## Imagens reais

Fotos públicas do perfil `@oticavisaolages`, reutilizadas com autorização do proprietário:
- Fachada: https://www.instagram.com/noticianoato/reel/DeKmnJxBFvz/
- Equipe: https://www.instagram.com/oticavisaolages/reel/Dd7R0N0Oqcp/

As imagens são cópias locais otimizadas, sem depender dos links temporários do Instagram. A imagem do Visioffice 2 é ilustrativa, gerada por IA, e tem legenda própria. Não há depoimentos, notas ou contagem de clientes inventados.
