# Site institucional — JB Serviços

Site público da JB Serviços (jbservicosrn.com.br): serviços de terceirização
para condomínios, apresentação do JB Gestão Condominial e contato.

Usa a mesma base e a mesma identidade visual do painel
[`jb-gestao-painel-web`](https://github.com/jbservicosrn/jb-gestao-painel-web):
Next.js 14 + Tailwind, cores `jb-navy`/`jb-orange`, fontes Manrope e
IBM Plex Sans, logo `public/logo-jb-servicos.jpg`. Se a identidade mudar lá,
atualize `tailwind.config.ts`, `src/app/globals.css` e a logo aqui também.

Todo o site é estático: não tem banco de dados, login nem variáveis de
ambiente.

## Onde mudar cada coisa

| O quê | Arquivo |
|---|---|
| E-mail, CNPJ, link do JB Gestão | `src/lib/empresa.ts` |
| Textos da página inicial (serviços, diferenciais etc.) | `src/app/page.tsx` |
| Menu do topo | `src/components/cabecalho.tsx` |
| Rodapé | `src/components/rodape.tsx` |
| Política de privacidade | `src/app/privacidade/page.tsx` |

## Rodar no computador

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Publicar na Vercel (uma vez só)

1. Entre em https://vercel.com com a mesma conta usada no painel.
2. **Add New… → Project** → importe o repositório `jbservicosrn/jb-servicos-site`.
   Se ele não aparecer na lista, clique em **Adjust GitHub App Permissions**
   e libere o repositório para a Vercel.
3. A Vercel detecta o Next.js sozinha. Não precisa de variáveis de ambiente.
   Clique em **Deploy**.
4. Depois do deploy: **Settings → Domains** → adicione `jbservicosrn.com.br`
   e `www.jbservicosrn.com.br`. A Vercel mostra os registros DNS (tipo `A` e
   `CNAME`) para cadastrar onde o domínio foi registrado (ex.: Registro.br).

A partir daí, cada `git push` na branch `main` publica o site automaticamente,
e cada push em outra branch gera um link de pré-visualização.
