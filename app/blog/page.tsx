import Link from 'next/link'
import { SiteLayout } from '@/components/layout/SiteLayout'
import type { Metadata } from 'next'
import { getPosts } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog | Liderança, Negócios e Legado — Patrick Teixeira',
  description:
    'Artigos de Patrick Teixeira sobre liderança masculina, negócios, família e legado. Conteúdo prático para homens que querem crescer em todas as frentes.',
}

export default async function BlogPage() {
  const posts = await getPosts()

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
          {posts.length === 0 ? (
             <div className="text-center py-20">
               <p className="text-[#8A8580]">Nenhum artigo publicado ainda.</p>
             </div>
          ) : (
            <>
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
                          background: `rgba(197,160,89,0.15)`,
                          color: '#C5A059',
                          border: `1px solid rgba(197,160,89,0.4)`,
                        }}
                      >
                        Artigo
                      </span>
                      <span className="text-xs" style={{ color: '#4A4540' }}>
                        {posts[0].date} · {posts[0].readTime}
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
                    <Link
                      href={`/blog/${posts[0].slug}`}
                      className="btn-primary text-sm px-6 py-3 inline-flex"
                    >
                      <span>Ler artigo completo →</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Demais posts */}
              {posts.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.slice(1).map((post: any) => (
                    <article
                      key={post.slug}
                      className="card p-6 flex flex-col group h-full"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className="text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-widest"
                          style={{
                            color: '#C5A059',
                            background: 'rgba(197, 160, 89, 0.1)',
                          }}
                        >
                          Artigo
                        </span>
                        <span className="text-xs" style={{ color: '#4A4540' }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h3
                        className="text-xl font-bold mb-3 group-hover:text-gold transition-colors"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FAFAFA' }}
                      >
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm leading-relaxed mb-6 flex-1 line-clamp-3" style={{ color: '#8A8580' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#1E1E1E]">
                        <span className="text-xs font-semibold" style={{ color: '#4A4540' }}>
                          {post.date}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-xs font-bold uppercase tracking-widest group-hover:text-gold transition-colors"
                          style={{ color: '#C5A059' }}
                        >
                          Ler mais →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </>
          )}
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
