import Link from 'next/link'
import { SiteLayout } from '@/components/layout/SiteLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Palestras | Patrick Teixeira nos Palcos',
  description:
    'Patrick Teixeira transforma plateias de líderes e empreendedores. Solicite Patrick para seu evento e descubra os temas disponíveis.',
}

const temas = [
  {
    num: '01',
    title: 'A Escala Invisível',
    subtitle: 'Como construir resultado sem destruir o que importa',
    desc: 'Uma palestra que desmonta o mito do "sucesso a qualquer custo" e apresenta um framework prático para crescer no negócio sem perder a família, a saúde e o propósito.',
    duracao: '45–90 min',
    publico: 'Empreendedores, líderes, CEOs',
  },
  {
    num: '02',
    title: 'Liderança Masculina Integral',
    subtitle: 'Negócios, família e legado no mesmo sistema',
    desc: 'O líder que só performa no trabalho está incompleto. Esta palestra apresenta o modelo de liderança que integra os papéis de empresário, marido e pai em um único sistema de alta performance.',
    duracao: '60–90 min',
    publico: 'Empresas, convenções, igrejas, grupos de homens',
  },
  {
    num: '03',
    title: 'O Método Kairós',
    subtitle: 'Decisões que transformam organizações e lares',
    desc: 'Uma visão prática do método que já formou centenas de líderes no Brasil — como criar o "momento certo" em vez de esperar por ele, e tomar as decisões certas no tempo certo.',
    duracao: '45–60 min',
    publico: 'Eventos corporativos, treinamentos de liderança',
  },
]

export default function PalestrasPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        aria-label="Palestras Patrick Teixeira - Hero"
      >
        <div
          className="absolute top-0 left-0 w-[400px] h-[400px] opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(197,160,89,1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="container relative z-10 text-center">
          <span className="eyebrow mb-6 block justify-center">Eventos & Convenções</span>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Patrick Teixeira{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              nos Palcos
            </span>
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#8A8580' }}>
            Uma abordagem que une dados, método e emoção real para transformar
            plateias de líderes e empreendedores.
          </p>
        </div>
      </section>

      {/* Temas de palestra */}
      <section
        className="section-padding"
        style={{ background: '#111111' }}
        aria-label="Temas de palestras"
      >
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 block justify-center">Repertório</span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Temas Disponíveis
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {temas.map((tema) => (
              <div key={tema.num} className="card p-8 md:p-10">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Número */}
                  <div
                    className="text-5xl font-bold flex-shrink-0 self-start"
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      opacity: 0.3,
                    }}
                  >
                    {tema.num}
                  </div>
                  {/* Conteúdo */}
                  <div className="flex-1">
                    <h3
                      className="text-2xl font-bold mb-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FAFAFA' }}
                    >
                      {tema.title}
                    </h3>
                    <p className="text-sm font-semibold mb-4" style={{ color: '#C5A059' }}>
                      {tema.subtitle}
                    </p>
                    <p className="text-base leading-relaxed mb-6" style={{ color: '#8A8580' }}>
                      {tema.desc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"
                        style={{ background: 'rgba(197,160,89,0.08)', border: '1px solid rgba(197,160,89,0.2)', color: '#C5A059' }}
                      >
                        🕐 {tema.duracao}
                      </span>
                      <span
                        className="text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5"
                        style={{ background: '#161616', border: '1px solid #1E1E1E', color: '#8A8580' }}
                      >
                        👥 {tema.publico}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solicitar palestra */}
      <section className="section-padding" aria-label="Solicitar Patrick para evento">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow mb-6 block justify-center">Leve para seu evento</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Solicite Patrick para{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                seu Evento
              </span>
            </h2>
            <p className="text-lg mb-10" style={{ color: '#8A8580' }}>
              Para solicitar Patrick como palestrante ou verificar disponibilidade de agenda,
              entre em contato via formulário de diagnóstico. Nossa equipe retornará com proposta personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/diagnostico" className="btn-primary text-base px-8 py-4">
                <span>Solicitar Palestra →</span>
              </Link>
              <a
                href="https://instagram.com/patrickteixeiras"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-base px-8 py-4"
              >
                Ver no Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
