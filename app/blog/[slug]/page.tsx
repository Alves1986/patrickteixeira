import { notFound } from 'next/navigation'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { getPosts } from '@/lib/content'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const posts = await getPosts()
  const post = posts.find((p: any) => p.slug === resolvedParams.slug)
  if (!post) return { title: 'Artigo não encontrado' }
  
  return {
    title: `${post.title} | Patrick Teixeira`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const posts = await getPosts()
  const post = posts.find((p: any) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <SiteLayout>
      <article className="pt-32 pb-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <Link href="/blog" className="inline-block mb-8 text-sm" style={{ color: '#8A8580' }}>
            ← Voltar para o Blog
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
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
              <span className="text-sm" style={{ color: '#8A8580' }}>
                {post.date} · {post.readTime}
              </span>
            </div>
            <h1
              className="text-3xl md:text-5xl font-bold leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {post.title}
            </h1>
          </header>

          <div className="prose prose-invert prose-lg max-w-none" style={{ color: '#FAFAFA' }}>
            <div className="whitespace-pre-wrap leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-16 pt-8 border-t border-[#1E1E1E]">
            <div className="card p-8 text-center" style={{ background: 'linear-gradient(135deg, #161616, #111111)' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Gostou deste artigo?
              </h3>
              <p className="mb-6" style={{ color: '#8A8580' }}>
                Siga Patrick Teixeira no Instagram para acompanhar conteúdos diários sobre Liderança, Negócios e Legado.
              </p>
              <a
                href="https://instagram.com/patrickteixeiras"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <span>Acompanhar no Instagram →</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  )
}
