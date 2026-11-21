import { notFound } from 'next/navigation'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { getPosts } from '@/lib/content'
import { IconArrowLeft, IconArrowRight } from '@/components/ui/Icons'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params
  const posts = await getPosts()
  const post = posts.find((p: any) => p.slug === resolvedParams.slug)
  if (!post) return { title: 'Artigo não encontrado' }

  return {
    title: `${post.title} | Patrick Teixeira`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const posts = await getPosts()
  const post = posts.find((p: any) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <SiteLayout>
      <article className="pt-32 pb-20">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 mb-8 text-sm hover:text-[#FAFAFA]" style={{ color: '#B8B2AC' }}>
            <IconArrowLeft className="w-4 h-4" />
            <span>Voltar para o Blog</span>
          </Link>

          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span
                className="text-xs font-bold px-3 py-1 rounded uppercase tracking-wider"
                style={{
                  background: '#161616',
                  color: '#C5A059',
                  border: '1px solid #C5A059',
                }}
              >
                Artigo
              </span>
              <span className="text-sm tabular-nums" style={{ color: '#B8B2AC' }}>
                {post.date} · {post.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              {post.title}
            </h1>
          </header>

          <div className="prose prose-invert prose-lg max-w-none" style={{ color: '#FAFAFA' }}>
            <div className="whitespace-pre-wrap leading-relaxed" dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          <div className="mt-16 pt-8 border-t border-[#27272A]">
            <div className="card p-8 text-center" style={{ background: '#161616' }}>
              <h3 className="text-2xl font-bold mb-4">
                Gostou deste artigo?
              </h3>
              <p className="mb-6" style={{ color: '#B8B2AC' }}>
                Siga Patrick Teixeira no Instagram para acompanhar conteúdos diários sobre Liderança, Negócios e Legado.
              </p>
              <a
                href="https://instagram.com/patrickteixeiras"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Acompanhar no Instagram</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  )
}
