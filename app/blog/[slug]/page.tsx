import { notFound } from 'next/navigation'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { posts } from '../data'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug)
  if (!post) return { title: 'Artigo não encontrado' }
  
  return {
    title: `${post.title} | Patrick Teixeira`,
    description: post.excerpt,
  }
}

const CATEGORY_COLORS: Record<string, string> = {
  Liderança: '#C5A059',
  Negócios: '#4A7CC7',
  Família: '#4CAF77',
  Método: '#9B59B6',
  Legado: '#D4B577',
  Performance: '#F0A030',
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = posts.find((p) => p.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const categoryColor = CATEGORY_COLORS[post.category] || '#C5A059'

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
                  background: `${categoryColor}15`,
                  color: categoryColor,
                  border: `1px solid ${categoryColor}40`,
                }}
              >
                {post.category}
              </span>
              <span className="text-sm" style={{ color: '#8A8580' }}>
                {new Date(post.date).toLocaleDateString('pt-BR')} · {post.readTime}
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
            <p className="text-xl leading-relaxed mb-8" style={{ color: '#D4B577' }}>
              {post.content.summary}
            </p>
            
            <h3 className="text-2xl font-bold mt-12 mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Pontos-chave a desenvolver:
            </h3>
            <ul className="space-y-4 mb-12">
              {post.content.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0" style={{ color: '#C5A059' }}>◆</span>
                  <span className="text-lg leading-relaxed" style={{ color: '#d1d1d1' }}>{point}</span>
                </li>
              ))}
            </ul>
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
                Seguir @patrickteixeiras
              </a>
            </div>
          </div>
        </div>
      </article>
    </SiteLayout>
  )
}
