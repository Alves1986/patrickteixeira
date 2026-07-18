import Link from 'next/link'
import Image from 'next/image'
import { SiteLayout } from '@/components/layout/SiteLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre Patrick Teixeira | Mentor, Autor e Palestrante',
  description:
    'Conheça a história de Patrick Teixeira, fundador da Mentoria Kairós e autor de "A Escada Invisível". Liderança masculina com propósito e legado.',
}

export default function SobrePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        aria-label="Sobre Patrick Teixeira - Hero"
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(197,160,89,1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 block">A história por trás do método</span>
            <h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Quem é{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Patrick Teixeira
              </span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#8A8580' }}>
              Mentor de liderança masculina, fundador da Mentoria Kairós, autor de{' '}
              <em style={{ color: '#C4BFBA' }}>&ldquo;A Escada Invisível&rdquo;</em>,
              palestrante e — acima de tudo — marido, pai e homem de legado.
            </p>
          </div>
        </div>
      </section>

      {/* Biografia */}
      <section
        className="section-padding"
        style={{ background: '#111111' }}
        aria-label="Biografia de Patrick Teixeira"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            {/* Foto placeholder */}
            <div className="sticky top-32">
              <div
                className="rounded-2xl overflow-hidden aspect-[3/4]"
                style={{
                  background: 'linear-gradient(135deg, #161616, #111111)',
                  border: '1px solid rgba(197,160,89,0.15)',
                }}
              >
                {/* Imagem Real */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/IMG_2438.PNG"
                    alt="Patrick Teixeira"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div 
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(17,17,17,0.8) 0%, transparent 40%)'
                    }}
                  />
                </div>
              </div>

              {/* Selos */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  { icon: '✅', text: 'Perfil Verificado' },
                  { icon: '📘', text: 'Autor Publicado' },
                  { icon: '🎤', text: 'Palestrante Nacional' },
                  { icon: '🏆', text: 'Método Próprio' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 p-3 rounded-lg"
                    style={{ background: '#161616', border: '1px solid #1E1E1E' }}
                  >
                    <span>{item.icon}</span>
                    <span className="text-xs font-semibold" style={{ color: '#8A8580' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Texto biográfico */}
            <div>
              <div className="prose-custom space-y-8">
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FAFAFA' }}
                  >
                    A Jornada
                  </h2>
                  <p className="leading-relaxed" style={{ color: '#8A8580' }}>
                    Patrick Teixeira não chegou onde está apesar das suas responsabilidades —
                    chegou por causa delas. Casado, pai, empresário e mentor, ele entendeu
                    cedo que o verdadeiro teste de um líder não está na sala de reuniões.
                    Está na mesa de jantar.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FAFAFA' }}
                  >
                    A Missão
                  </h2>
                  <p className="leading-relaxed" style={{ color: '#8A8580' }}>
                    Após anos vivendo o conflito entre crescimento empresarial e presença
                    familiar, Patrick desenvolveu um sistema prático — a Mentoria Kairós —
                    que integra as duas frentes. Não como concessão, mas como estratégia.
                    Hoje sua missão é clara:
                  </p>
                  <blockquote
                    className="my-6 pl-6 italic text-xl"
                    style={{
                      borderLeft: '3px solid #C5A059',
                      color: '#C4BFBA',
                      fontFamily: "'Playfair Display', Georgia, serif",
                    }}
                  >
                    &ldquo;Formar homens que prosperam nos negócios sem sacrificar a família.&rdquo;
                  </blockquote>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FAFAFA' }}
                  >
                    O Método CIS e a Mentoria Kairós
                  </h2>
                  <p className="leading-relaxed mb-4" style={{ color: '#8A8580' }}>
                    Certificado pelo Método CIS de Paulo Vieira e com experiência acumulada
                    em mais de uma década de mentoria individual e em grupo, Patrick combina
                    ferramentas de alto desempenho com uma abordagem humanizada — que reconhece
                    que o homem completo não é o que separa carreira de família, mas o que as integra.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FAFAFA' }}
                  >
                    &ldquo;A Escada Invisível&rdquo;
                  </h2>
                  <p className="leading-relaxed" style={{ color: '#8A8580' }}>
                    Seu livro &ldquo;A Escada Invisível&rdquo; condensa os princípios que ele aplicou
                    pessoalmente e com centenas de mentorados: como construir autoridade,
                    resultado e presença sem sacrificar o que mais importa.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link href="/mentoria" className="btn-primary">
                  <span>Conhecer a Mentoria Kairós →</span>
                </Link>
                <Link href="/diagnostico" className="btn-outline">
                  Diagnóstico Gratuito
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="section-padding" aria-label="Números e resultados">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: '1.000+', label: 'Homens Mentorados' },
              { value: '10+', label: 'Anos de Experiência' },
              { value: '50+', label: 'Palestras Realizadas' },
              { value: '1', label: 'Livro Publicado' },
            ].map((stat) => (
              <div key={stat.label} className="group">
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#4A4540' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
