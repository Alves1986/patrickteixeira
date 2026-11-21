import { SiteLayout } from '@/components/layout/SiteLayout'
import type { Metadata } from 'next'
import { getSettings, getContent } from '@/lib/content'
import { IconArrowRight, IconCheck, IconMessageCircle, IconX } from '@/components/ui/Icons'

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
        className="pt-32 pb-20"
        style={{ background: '#0A0A0A' }}
        aria-label="Mentoria Kairós - Hero"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow mb-6 block justify-center">O programa de transformação</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
            Mentoria <span style={{ color: '#C5A059' }}>Kairós</span>
          </h1>
          <div className="text-xl max-w-2xl mx-auto mb-10 leading-relaxed whitespace-pre-wrap" style={{ color: '#B8B2AC' }}>
            {texts.mentoria_text || 'O sistema que forma líderes completos — homens que prosperam nos negócios sem sacrificar a família.'}
          </div>
          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
            <span>Fazer {ctaLabel}</span>
            <IconArrowRight className="w-5 h-5" />
          </a>
          <p className="text-xs mt-4" style={{ color: '#B8B2AC' }}>Vagas limitadas · Sem compromisso</p>
        </div>
      </section>

      {/* O que é Kairós */}
      <section className="section-padding" aria-label="O que é Mentoria Kairós">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="eyebrow mb-4 block justify-center">A origem do nome</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que é <span style={{ color: '#C5A059' }}>Kairós?</span>
            </h2>
          </div>

          <div
            className="p-10 rounded-2xl text-center"
            style={{
              background: '#161616',
              border: '1px solid #27272A',
            }}
          >
            <p className="text-4xl font-bold mb-4" style={{ color: '#C5A059', fontFamily: 'var(--font-display)' }}>
              Kairós
            </p>
            <p className="text-sm tracking-widest uppercase mb-6" style={{ color: '#B8B2AC' }}>
              Palavra grega · &quot;O momento certo&quot;
            </p>
            <p className="text-lg leading-relaxed max-w-2xl mx-auto" style={{ color: '#B8B2AC' }}>
              Kairós é aquele instante raro em que <strong style={{ color: '#FAFAFA' }}>decisão, clareza e ação</strong> se encontram.
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
            <h2 className="text-3xl md:text-4xl font-bold">
              Esta mentoria é para você?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div
              className="p-8 rounded-2xl"
              style={{ background: '#161616', border: '1px solid #27272A' }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#C5A059' }}>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#111111', border: '1px solid #C5A059' }}
                >
                  <IconCheck className="w-4 h-4 text-[#C5A059]" />
                </span>
                É para você se:
              </h3>
              <ul className="space-y-4">
                {[
                  'Para homens entre 25 e 45 anos que ocupam cargos de liderança ou são empresários.',
                  'Para quem conquistou resultados profissionais, mas percebe que está perdendo a paz, o casamento, a presença na vida dos filhos ou o equilíbrio.',
                  'Para quem está preso no operacional e quer desenvolver uma liderança mais estratégica, aprendendo a delegar e formar pessoas.',
                  'Para quem deseja crescer profissionalmente sem abrir mão dos princípios, da fé e da família.',
                  'Para homens que estão dispostos a assumir a responsabilidade pela própria transformação e colocar em prática o que aprenderem.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed" style={{ color: '#B8B2AC' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 rounded-2xl"
              style={{ background: '#161616', border: '1px solid #27272A' }}
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3" style={{ color: '#FAFAFA' }}>
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: '#111111', border: '1px solid #27272A' }}
                >
                  <IconX className="w-4 h-4 text-[#B8B2AC]" />
                </span>
                Não é para você se:
              </h3>
              <ul className="space-y-4">
                {[
                  'Homens que procuram fórmulas rápidas ou atalhos para o sucesso.',
                  'Quem acredita que a culpa da própria situação é sempre da empresa, da esposa, do mercado ou de outras pessoas.',
                  'Quem não está disposto a mudar hábitos, enfrentar seus próprios desafios e viver com disciplina.',
                  'Quem busca apenas técnicas de liderança, sem interesse em desenvolver caráter, inteligência emocional e relacionamentos.',
                  'Quem não valoriza princípios, família e uma transformação integral.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconX className="w-5 h-5 text-[#B8B2AC] shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed" style={{ color: '#B8B2AC' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Posicionamento */}
        <div
          className="mt-12 max-w-4xl mx-auto p-8 rounded-2xl text-center"
          style={{
            background: '#161616',
            border: '1px solid #27272A',
          }}
        >
          <blockquote
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: '#FAFAFA', fontFamily: 'var(--font-display)' }}
          >
            &ldquo;O Método Kairós não foi criado para formar apenas líderes de sucesso. Foi criado para formar homens cujo sucesso profissional fortalece, e não destrói, o legado da própria família.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold tracking-widest uppercase" style={{ color: '#C5A059' }}>— Patrick Teixeira</p>
        </div>
      </section>

      {/* O que você vai construir */}
      <section className="section-padding" aria-label="O que você constrói na Mentoria Kairós">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="eyebrow mb-4 block justify-center">Resultados concretos</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              O que você vai <span style={{ color: '#C5A059' }}>construir</span>
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
                  className="text-4xl font-bold shrink-0 tabular-nums"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#C5A059',
                  }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold mb-2" style={{ color: '#FAFAFA' }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#B8B2AC' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solicitar Palestra / Eventos */}
      <section className="section-padding" aria-label="Solicitar Patrick para evento">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow mb-6 block justify-center">Além da Mentoria</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Leve Patrick Teixeira para <span style={{ color: '#C5A059' }}>o seu Evento</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: '#B8B2AC' }}>
            Quer levar essa mesma visão de liderança, negócios e legado para a sua equipe ou convenção?
            Entre em contato para contratar palestras e workshops.
          </p>
          <a
            href="https://wa.me/554298250506?text=Gostaria%20de%20solicitar%20uma%20proposta%20de%20palestra%20com%20o%20Patrick"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-10 py-4 inline-flex items-center justify-center gap-3"
          >
            <IconMessageCircle className="w-5 h-5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </section>
    </SiteLayout>
  )
}
