# Patrick Teixeira — Site Oficial

Site profissional de alto padrão para **Patrick Teixeira**, mentor de liderança masculina e fundador da **Mentoria Kairós**.

## 🔗 Links

- **Site (produção):** https://patrickteixeira.com.br
- **Instagram:** [@patrickteixeiras](https://instagram.com/patrickteixeiras)
- **Admin:** https://patrickteixeira.com.br/admin

---

## 🚀 Como Rodar Localmente

```bash
# 1. Instalar dependências
npm install

# 2. Criar arquivo de variáveis de ambiente
cp ../.env.example .env.local
# Preencha com suas chaves do Supabase

# 3. Rodar em modo de desenvolvimento
npm run dev

# Site disponível em: http://localhost:3000
```

---

## 🗂️ Estrutura do Projeto

```
patrick-teixeira/
├── app/
│   ├── layout.tsx          # Layout raiz (SEO, fonts, schema.org)
│   ├── page.tsx            # Home page completa
│   ├── sobre/page.tsx      # Página Sobre Patrick
│   ├── mentoria/page.tsx   # Mentoria Kairós
│   ├── palestras/page.tsx  # Palestras & Eventos
│   ├── diagnostico/page.tsx # Formulário de diagnóstico
│   ├── admin/page.tsx      # Painel administrativo (CRM)
│   ├── globals.css         # Design system completo
│   └── api/
│       ├── leads/route.ts         # POST /api/leads (formulário público)
│       └── admin/leads/route.ts   # GET /api/admin/leads (admin)
├── components/
│   └── layout/
│       ├── Header.tsx      # Navegação (scroll-aware, mobile-ready)
│       ├── Footer.tsx      # Rodapé com CTA e links
│       └── SiteLayout.tsx  # Wrapper Header + Footer
├── tailwind.config.ts      # Tokens de design (paleta, fontes, animações)
└── supabase/
    └── migrations/
        └── 0001_init.sql   # Schema completo do banco
```

---

## 🔑 Variáveis de Ambiente

Copie `.env.example` para `.env.local` e preencha:

| Variável | Descrição |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | URL do seu projeto Supabase |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Chave pública do Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Chave privada (server-side apenas) |
| `NEXT_PUBLIC_SITE_URL` | URL de produção do site |

---

## 🗄️ Banco de Dados (Supabase)

### Setup Inicial

1. Crie um projeto em [supabase.com](https://supabase.com)
2. No painel do Supabase, vá em **SQL Editor**
3. Execute o arquivo `../supabase/migrations/0001_init.sql`

### Tabelas

| Tabela | Descrição |
|---|---|
| `leads` | Contatos do formulário de diagnóstico |
| `lead_status_history` | Histórico de mudanças de status |
| `testimonials` | Depoimentos dos alunos |
| `services` | Serviços (Mentoria, Palestras, Livro) |
| `blog_posts` | Artigos do blog |
| `events` | Palestras e eventos |
| `site_config` | Configurações editáveis do site |

---

## 🎨 Design System

| Token | Valor |
|---|---|
| Preto principal | `#0A0A0A` |
| Dourado | `#C5A059` |
| Dourado claro | `#D4B577` |
| Branco | `#FAFAFA` |
| Verde musgo | `#4A5D4E` |
| Font display | Playfair Display (serifada) |
| Font texto | Raleway (sans-serif) |

---

## 🚢 Deploy (Vercel)

1. Faça push para o GitHub
2. Conecte o repositório na [Vercel](https://vercel.com)
3. Configure as variáveis de ambiente no painel da Vercel
4. Deploy automático em cada push para `main`

---

## 📞 Suporte Técnico

Para dúvidas sobre o código ou customizações, abra uma issue no repositório.

---

*Site construído com Next.js 16 + Tailwind CSS v4 + Supabase. Design premium inspirado na identidade visual da Mentoria Kairós.*
