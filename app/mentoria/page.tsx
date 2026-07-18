import Link from 'next/link'
import { SiteLayout } from '@/components/layout/SiteLayout'
import type { Metadata } from 'next'
import { getSettings, getContent } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Mentoria Kairós | Sistema que Forma Líderes Completos',
  description:
    'A Mentoria Kairós forma líderes que crescem nos negócios preservando a família. Vagas limitadas. Faça seu diagnóstico gratuito com Patrick Teixeira.',
}

export default async function MentoriaPage() {
  const settings = await getSettings()
  const contentArray = await getContent()

  const texts = contentArray.reduce((acc: Record<string, string>, item: any) => {
    acc[item.id] = item.content
    return acc
  }, {})

  const ctaLabel = settings?.ctaLabel || 'Diagnóstico Gratuito'
  const ctaLink = settings?.ctaLink || 'https://form.respondi.app/DQ2AeT6P'

  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)' }}
        aria-label="Mentoria Kairós - Hero"
      >
        {/* Decoração */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] opacity-10 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(197,160,89,1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="eyebrow mb-6 block justify-center">O programa de transformação</span>
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Mentoria{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059 0%, #D4B577 50%, #A8863D 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Kairós
            </span>
          </h1>
          <div className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed whitespace-pre-wrap" style={{ color: '#8A8580' }}>
            {texts.mentoria_text || `O sistema que forma líderes completos — homens que prosperam nos negócios sem sacrificar a família.`}
          </div>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
            <span>Fazer {ctaLabel} →</span>
          </a>
          <p className="text-xs mt-4" style={{ color: '#2A2520' }}>Vagas limitadas · Sem compromisso</p>
        </div>
      </section>

      {/* O que é Kairós */}
      <section className="section-padding" aria-label="O que é Mentoria Kairós">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block justify-center">A origem do nome</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              O que é <span
                style={{
                  background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >Kairós?</span>
            </h2>
          </div>

          <div
            className="p-10 rounded-2xl text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #161616, #111111)',
              border: '1px solid rgba(197,160,89,0.15)',
            }}
          >
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 0%, rgba(197,160,89,1), transparent)' }}
            />
            <p className="text-4xl font-bold mb-4 relative" style={{ color: '#C5A059', fontFamily: "'Playfair Display', Georgia, serif" }}>
              Kairós
            </p>
            <p className="text-sm tracking-widest uppercase mb-6 relative" style={{ color: '#4A4540' }}>
              Palavra grega · &quot;O momento certo&quot;
            </p>
            <p className="text-lg leading-relaxed relative max-w-2xl mx-auto" style={{ color: '#8A8580' }}>
              Kairós é aquele instante raro em que <strong style={{ color: '#C4BFBA' }}>decisão, clareza e ação</strong> se encontram.
              Essa mentoria existe para criar esses momentos na vida dos homens que nela entram —
              e transformá-los em novos padrões permanentes.
            </p>
          </div>
        </div>
      </section>

      {/* Para quem é */}
      <section
        className="section-padding"
        style={{ background: '#111111' }}
        aria-label="Para quem é a Mentoria Kairós"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block justify-center">Critérios de entrada</span>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Esta mentoria é para você?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="p-8 rounded-xl"
              style={{ background: '#161616', border: '1px solid rgba(76, 175, 119, 0.2)' }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#4CAF77', fontFamily: "'Playfair Display', Georgia, serif" }}>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: 'rgba(76,175,119,0.1)', border: '1px solid rgba(76,175,119,0.3)' }}
                >
                  ✓
                </span>
                É para você se:
              </h3>
              <ul className="space-y-4">
                {[
                  'Tem empresa estabelecida e sente crescimento e família em conflito',
                  'Chegou ao topo mas perdeu presença e conexão em casa',
                  'Quer resultado mensurável — não apenas inspiração de palco',
                  'Está disposto a ser honesto consigo mesmo e com o processo',
                  'Pensa em legado, não só em faturamento',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#4CAF77] flex-shrink-0 mt-0.5">●</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#8A8580' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 rounded-xl"
              style={{ background: '#161616', border: '1px solid rgba(224, 82, 82, 0.2)' }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#E05252', fontFamily: "'Playfair Display', Georgia, serif" }}>
                <span
                  className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
                  style={{ background: 'rgba(224,82,82,0.1)', border: '1px solid rgba(224,82,82,0.3)' }}
                >
                  ✗
                </span>
                Não é para você se:
              </h3>
              <ul className="space-y-4">
                {[
                  'Busca motivação de palco que dura uma semana',
                  'Não está disposto a implementar o que aprende',
                  'Quer atalho sem processo',
                  'Não vê problema em crescer no negócio sacrificando a família',
                  'Está procurando um grupo de networking, não transformação',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#E05252] flex-shrink-0 mt-0.5">●</span>
                    <span className="text-sm leading-relaxed" style={{ color: '#8A8580' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O que você vai construir */}
      <section className="section-padding" aria-label="O que você constrói na Mentoria Kairós">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 block justify-center">Resultados concretos</span>
            <h2
              className="text-3xl md:text-5xl font-bold"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              O que você vai{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                construir
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                num: '01',
                title: 'Sistema de Gestão Autônomo',
                desc: 'Um negócio que cresce sem depender da sua presença física 100% do tempo — liberando você para o que realmente importa.',
              },
              {
                num: '02',
                title: 'Autoridade de Liderança Real',
                desc: 'Não o líder que grita mais alto, mas o que é seguido por convicção — na empresa e em casa.',
              },
              {
                num: '03',
                title: 'Rotina de Alta Performance',
                desc: 'Uma agenda construída em torno das suas prioridades reais, não das urgências dos outros.',
              },
              {
                num: '04',
                title: 'Legado Consciente',
                desc: 'Clareza sobre quem você quer ser lembrado — e um plano para viver isso hoje, não amanhã.',
              },
            ].map((item) => (
              <div key={item.num} className="card p-8 flex gap-6">
                <div
                  className="text-4xl font-bold flex-shrink-0"
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.4,
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FAFAFA' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Solicitar Palestra / Eventos */}
      <section className="section-padding relative overflow-hidden" aria-label="Solicitar Patrick para evento">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(197,160,89,1), transparent)' }}
        />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-2xl mx-auto">
          <span className="eyebrow mb-6 block justify-center">Além da Mentoria</span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Leve Patrick Teixeira para{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              o seu Evento
            </span>
          </h2>
          <p className="text-lg mb-8" style={{ color: '#8A8580' }}>
            Quer levar essa mesma visão de liderança, negócios e legado para a sua equipe ou convenção? 
            Entre em contato para contratar palestras e workshops.
          </p>
          <a href="https://wa.me/554298250506?text=Gostaria%20de%20solicitar%20uma%20proposta%20de%20palestra%20com%20o%20Patrick" target="_blank" rel="noopener noreferrer" className="btn-outline text-base px-10 py-4 flex items-center justify-center gap-3 mx-auto w-fit">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
            </svg>
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </section>

    </SiteLayout>
  )
}
