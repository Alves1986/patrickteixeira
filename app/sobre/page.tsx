import Link from 'next/link'
import Image from 'next/image'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { IconArrowRight, IconAward, IconBookOpen, IconMic } from '@/components/ui/Icons'
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
        className="pt-32 pb-20"
        aria-label="Sobre Patrick Teixeira - Hero"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6 block">A história por trás do método</span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Quem é <span style={{ color: '#C5A059' }}>Patrick Teixeira</span>
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#B8B2AC' }}>
              Mentor de liderança masculina, fundador da Mentoria Kairós, autor de{' '}
              <span style={{ color: '#FAFAFA' }}>&ldquo;A Escada Invisível&rdquo;</span>,
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
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            {/* Foto */}
            <div className="sticky top-32">
              <div
                className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                style={{
                  background: '#161616',
                  border: '1px solid #27272A',
                }}
              >
                <Image
                  src="/images/IMG_2438.PNG"
                  alt="Patrick Teixeira"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Selos */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { Icon: IconBookOpen, text: 'Autor Publicado' },
                  { Icon: IconMic, text: 'Palestrante Nacional' },
                  { Icon: IconAward, text: 'Método Próprio' },
                ].map(({ Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 p-3 rounded-lg"
                    style={{ background: '#161616', border: '1px solid #27272A' }}
                  >
                    <Icon className="w-6 h-6 shrink-0 text-[#C5A059]" />
                    <span className="text-xs font-semibold" style={{ color: '#B8B2AC' }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Texto biográfico */}
            <div>
              <div className="prose-custom space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
                    A Jornada
                  </h2>
                  <p className="leading-relaxed" style={{ color: '#B8B2AC' }}>
                    Patrick Teixeira não chegou onde está apesar das suas responsabilidades —
                    chegou por causa delas. Casado, pai, empresário e mentor, ele entendeu
                    cedo que o verdadeiro teste de um líder não está na sala de reuniões.
                    Está na mesa de jantar.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
                    A Missão
                  </h2>
                  <p className="leading-relaxed" style={{ color: '#B8B2AC' }}>
                    Após anos vivendo o conflito entre crescimento empresarial e presença
                    familiar, Patrick desenvolveu um sistema prático — a Mentoria Kairós —
                    que integra as duas frentes. Não como concessão, mas como estratégia.
                    Hoje sua missão é clara:
                  </p>
                  <blockquote
                    className="my-6 pl-6 text-xl"
                    style={{
                      borderLeft: '3px solid #C5A059',
                      color: '#FAFAFA',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    &ldquo;Formar homens que prosperam nos negócios sem sacrificar a família.&rdquo;
                  </blockquote>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
                    O Método CIS e a Mentoria Kairós
                  </h2>
                  <p className="leading-relaxed mb-4" style={{ color: '#B8B2AC' }}>
                    Certificado pelo Método CIS de Paulo Vieira e com experiência acumulada
                    em mais de uma década de mentoria individual e em grupo, Patrick combina
                    ferramentas de alto desempenho com uma abordagem humanizada — que reconhece
                    que o homem completo não é o que separa carreira de família, mas o que as integra.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
                    &ldquo;A Escada Invisível&rdquo;
                  </h2>
                  <p className="leading-relaxed" style={{ color: '#B8B2AC' }}>
                    Seu livro &ldquo;A Escada Invisível&rdquo; condensa os princípios que ele aplicou
                    pessoalmente e com centenas de mentorados: como construir autoridade,
                    resultado e presença sem sacrificar o que mais importa.
                  </p>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link href="/mentoria" className="btn-primary">
                  <span>Conhecer a Mentoria Kairós</span>
                  <IconArrowRight className="w-5 h-5" />
                </Link>
                <a href="https://form.respondi.app/DQ2AeT6P" target="_blank" rel="noopener noreferrer" className="btn-outline">
                  Fazer meu Diagnóstico
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="section-padding" aria-label="Números e resultados">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            {[
              { value: '1.000+', label: 'Homens Mentorados' },
              { value: '10+', label: 'Anos de Experiência' },
              { value: '50+', label: 'Palestras Realizadas' },
              { value: '1', label: 'Livro Publicado' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-4xl md:text-5xl font-bold mb-2 tabular-nums"
                  style={{
                    fontFamily: 'var(--font-display)',
                    color: '#C5A059',
                  }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-xs font-semibold tracking-widest uppercase"
                  style={{ color: '#B8B2AC' }}
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
