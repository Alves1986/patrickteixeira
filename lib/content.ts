// Mock inicial de dados
const initialMenus = [
  { id: '1', label: 'Sobre', href: '/sobre', location: 'header', order_index: 1 },
  { id: '2', label: 'Palestras', href: '/palestras', location: 'header', order_index: 2 },
  { id: '3', label: 'Livro', href: '/', location: 'header', order_index: 3 },
  { id: '4', label: 'Mentoria', href: '/mentoria', location: 'header', order_index: 4 },
  { id: '5', label: 'Blog', href: '/blog', location: 'header', order_index: 5 },
  { id: '6', label: 'Termos de Uso', href: '/termos', location: 'footer', order_index: 1 },
  { id: '7', label: 'Política de Privacidade', href: '/privacidade', location: 'footer', order_index: 2 }
]

const initialContent = [
  { id: 'home_hero_title', content: 'Homens Constroem Negócios. Lideres Constroem Legados.', description: 'Título principal da Home' },
  { id: 'home_hero_subtitle', content: 'Liderança não é apenas sobre faturamento. É sobre governar a própria vida, construir negócios sólidos e liderar a família com honra.', description: 'Subtítulo da Home' },
  { id: 'sobre_text', content: 'Patrick Teixeira é especialista em Liderança Masculina...', description: 'Texto da biografia na página Sobre' },
  { id: 'mentoria_text', content: 'A Mentoria Kairós foi desenhada para líderes que querem mais...', description: 'Texto sobre a Mentoria' },
  { id: 'livro_text', content: 'O livro A Escada Invisível revela os segredos...', description: 'Texto sobre o Livro' },
]

const initialPosts = [
  {
    slug: 'o-malabarismo-de-brian-dyson',
    title: 'O Malabarismo de Brian Dyson: as 5 Bolas que Todo Líder Precisa Aprender a Não Deixar Cair',
    excerpt: 'Brian Dyson, ex-vice-presidente da Coca-Cola, comparou a vida a um malabarismo com cinco bolas: trabalho, família, saúde, amigos e vida espiritual.',
    content: 'A diferença entre a bola de borracha (trabalho) e as bolas de vidro (família, saúde, amigos, vida espiritual). Por que o sucesso profissional, sozinho, não...',
    date: '16 de Julho de 2026',
    readTime: '7 min'
  }
]

const initialSettings = {
  ctaLabel: 'Diagnóstico Gratuito',
  ctaLink: 'https://form.respondi.app/DQ2AeT6P',
  bookLink: '',
}

// Usando globalThis para manter o estado em memória na Vercel (temporário até o Supabase)
if (!(globalThis as any).cmsMenus) {
  (globalThis as any).cmsMenus = initialMenus
}
if (!(globalThis as any).cmsContent) {
  (globalThis as any).cmsContent = initialContent
}
if (!(globalThis as any).cmsPosts) {
  (globalThis as any).cmsPosts = initialPosts
}
if (!(globalThis as any).cmsSettings) {
  (globalThis as any).cmsSettings = initialSettings
}

export async function getMenus() {
  return (globalThis as any).cmsMenus || initialMenus
}

export async function saveMenus(menus: any) {
  (globalThis as any).cmsMenus = menus
  return true
}

export async function getContent() {
  return (globalThis as any).cmsContent || initialContent
}

export async function saveContent(content: any) {
  (globalThis as any).cmsContent = content
  return true
}

export async function getPosts() {
  return (globalThis as any).cmsPosts || initialPosts
}

export async function savePosts(posts: any) {
  (globalThis as any).cmsPosts = posts
  return true
}

export async function getSettings() {
  return (globalThis as any).cmsSettings || initialSettings
}

export async function saveSettings(settings: any) {
  (globalThis as any).cmsSettings = settings
  return true
}
