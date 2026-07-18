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
]

// Usando globalThis para manter o estado em memória na Vercel (temporário até o Supabase)
if (!(globalThis as any).cmsMenus) {
  (globalThis as any).cmsMenus = initialMenus
}
if (!(globalThis as any).cmsContent) {
  (globalThis as any).cmsContent = initialContent
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
