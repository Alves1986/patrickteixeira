import Link from 'next/link'
import { SiteLayout } from '@/components/layout/SiteLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Liderança, Negócios e Legado — Patrick Teixeira',
  description:
    'Artigos de Patrick Teixeira sobre liderança masculina, negócios, família e legado. Conteúdo prático para homens que querem crescer em todas as frentes.',
}

import { posts } from './data'

const CATEGORY_COLORS: Record<string, string> = {
  Liderança: '#C5A059',
  Negócios: '#4A7CC7',
  Família: '#4CAF77',
  Método: '#9B59B6',
  Legado: '#D4B577',
  Performance: '#F0A030',
}

export default function BlogPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        aria-label="Blog - Hero"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="eyebrow mb-6 block justify-center">Conteúdo gratuito</span>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Liderança, Negócios{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              & Legado
            </span>
          </h1>
          <p className="text-xl max-w-xl mx-auto" style={{ color: '#8A8580' }}>
            Artigos práticos para homens que querem crescer no negócio sem sacrificar a família.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section
        className="section-padding"
        style={{ background: '#111111' }}
        aria-label="Artigos do blog"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Post em destaque */}
          <div className="mb-12">
            <div
              className="card p-10 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #161616, #111111)' }}
            >
              <div
                className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(197,160,89,1), transparent)',
                  filter: 'blur(40px)',
                }}
              />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      background: `${CATEGORY_COLORS[posts[0].category]}15`,
                      color: CATEGORY_COLORS[posts[0].category],
                      border: `1px solid ${CATEGORY_COLORS[posts[0].category]}40`,
                    }}
                  >
                    {posts[0].category}
                  </span>
                  <span className="text-xs" style={{ color: '#4A4540' }}>
                    {new Date(posts[0].date).toLocaleDateString('pt-BR')} · {posts[0].readTime}
                  </span>
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl hover:text-gold transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <Link href={`/blog/${posts[0].slug}`} style={{ color: '#FAFAFA' }}>
                    {posts[0].title}
                  </Link>
                </h2>
                <p className="text-base leading-relaxed mb-6 max-w-2xl" style={{ color: '#8A8580' }}>
                  {posts[0].excerpt}
                </p>
                <Link href={`/blog/${posts[0].slug}`} className="btn-ghost">
                  Ler artigo completo →
                </Link>
              </div>
            </div>
          </div>

          {/* Grid de posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="card p-7 flex flex-col group">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      background: `${CATEGORY_COLORS[post.category]}15`,
                      color: CATEGORY_COLORS[post.category],
                      border: `1px solid ${CATEGORY_COLORS[post.category]}40`,
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <h3
                  className="text-lg font-bold mb-3 flex-1 leading-snug group-hover:text-gold transition-colors"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  <Link href={`/blog/${post.slug}`} style={{ color: '#FAFAFA' }}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-sm leading-relaxed mb-5" style={{ color: '#4A4540' }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between border-t border-[#1E1E1E] pt-4 mt-auto">
                  <span className="text-xs" style={{ color: '#4A4540' }}>
                    {new Date(post.date).toLocaleDateString('pt-BR')} · {post.readTime}
                  </span>
                  <Link href={`/blog/${post.slug}`} className="btn-ghost text-xs">
                    Ler →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Instagram CTA */}
      <section className="section-padding" aria-label="Seguir conteúdo">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-lg mx-auto">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Mais conteúdo no Instagram
          </h2>
          <p className="mb-8" style={{ color: '#8A8580' }}>
            Siga o Patrick para acompanhar conteúdo diário sobre liderança, negócios e família.
          </p>
          <a
            href="https://instagram.com/patrickteixeiras"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-8 py-4"
          >
            @patrickteixeiras →
          </a>
        </div>
      </section>
    </SiteLayout>
  )
}
