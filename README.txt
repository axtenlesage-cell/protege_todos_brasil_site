# Protege Todos Brasil — Site

## Analytics
- Google Analytics 4: edite `assets/js/analytics.js` e substitua:
  - `window.GA_ID = 'G-XXXXXXXXXX';` pelo seu ID (ex.: `G-ABCD123456`).
- Meta Pixel (opcional): ajuste `window.META_PIXEL_ID` para o seu ID numérico (ex.: `123456789012345`).

## SEO
- Atualize o domínio em:
  - `robots.txt` e `sitemap.xml` → atualmente `{site_url}` = `https://protegertodos.netlify.app`.
- Se publicar no Netlify, o domínio será algo como `https://protegertodos.netlify.app`. No GitHub Pages, será `https://SEU-USUARIO.github.io/SEU-REPO`.

## Publicação rápida (Netlify)
1. Faça login em https://www.netlify.com/.
2. **Add new site → Deploy manually**.
3. Arraste o conteúdo da pasta `protege_todos_site_v7` (não o ZIP).
4. Copie a URL gerada e substitua nos arquivos acima.

## Contato
- Formulário via Netlify Forms (sem backend). A página de sucesso está em `success.html`.
- Botões WhatsApp com mensagem pré-preenchida.
