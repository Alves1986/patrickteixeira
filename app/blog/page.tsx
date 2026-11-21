import Link from 'next/link'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { IconArrowRight } from '@/components/ui/Icons'
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
      <section className="pt-32 pb-20" aria-label="Blog - Hero">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow mb-6 block justify-center">Conteúdo gratuito</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Liderança, Negócios <span style={{ color: '#C5A059' }}>&amp; Legado</span>
          </h1>
          <p className="text-xl max-w-xl mx-auto" style={{ color: '#B8B2AC' }}>
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
              <p style={{ color: '#B8B2AC' }}>Nenhum artigo publicado ainda.</p>
            </div>
          ) : (
            <>
              {/* Post em destaque */}
              <div className="mb-12">
                <div className="card p-10" style={{ background: '#161616' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded uppercase tracking-wider"
                      style={{
                        background: '#111111',
                        color: '#C5A059',
                        border: '1px solid #C5A059',
                      }}
                    >
                      Artigo
                    </span>
                    <span className="text-xs tabular-nums" style={{ color: '#B8B2AC' }}>
                      {posts[0].date} · {posts[0].readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 max-w-2xl">
                    <Link href={`/blog/${posts[0].slug}`} className="hover:text-[#C5A059]" style={{ color: '#FAFAFA' }}>
                      {posts[0].title}
                    </Link>
                  </h2>
                  <p className="text-base leading-relaxed mb-6 max-w-2xl" style={{ color: '#B8B2AC' }}>
                    {posts[0].excerpt}
                  </p>
                  <Link
                    href={`/blog/${posts[0].slug}`}
                    className="btn-primary text-sm px-6 py-3 inline-flex"
                  >
                    <span>Ler artigo completo</span>
                    <IconArrowRight className="w-4 h-4" />
                  </Link>
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
                          className="text-xs font-bold px-2 py-1 rounded uppercase tracking-widest"
                          style={{
                            color: '#C5A059',
                            background: '#111111',
                            border: '1px solid #27272A',
                          }}
                        >
                          Artigo
                        </span>
                        <span className="text-xs tabular-nums" style={{ color: '#B8B2AC' }}>
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3" style={{ color: '#FAFAFA' }}>
                        <Link href={`/blog/${post.slug}`} className="hover:text-[#C5A059]">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm leading-relaxed mb-6 flex-1 line-clamp-3" style={{ color: '#B8B2AC' }}>
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-[#27272A]">
                        <span className="text-xs font-semibold tabular-nums" style={{ color: '#B8B2AC' }}>
                          {post.date}
                        </span>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1"
                          style={{ color: '#C5A059' }}
                        >
                          <span>Ler mais</span>
                          <IconArrowRight className="w-4 h-4" />
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

      {/* Instagram CTA */}
      <section className="section-padding" aria-label="Seguir conteúdo">
        <div className="w-full max-w-lg mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Mais conteúdo no Instagram
          </h2>
          <p className="mb-8" style={{ color: '#B8B2AC' }}>
            Siga o Patrick para acompanhar conteúdo diário sobre liderança, negócios e família.
          </p>
          <a
            href="https://instagram.com/patrickteixeiras"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-8 py-4 inline-flex items-center gap-2"
          >
            <span>@patrickteixeiras</span>
            <IconArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  )
}
