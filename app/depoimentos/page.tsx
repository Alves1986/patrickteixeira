import Link from 'next/link'
import { SiteLayout } from '@/components/layout/SiteLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Depoimentos | Homens que Escolheram Outro Caminho',
  description:
    'Veja os resultados reais de homens que passaram pela Mentoria Kairós com Patrick Teixeira. Transformações reais em negócios e família.',
}

const depoimentos = [
  {
    name: 'Ricardo M.',
    role: 'Empresário · São Paulo, SP',
    text: 'A mentoria do Patrick mudou a forma como eu lidero minha empresa e minha família. Hoje sou presente e lucrativo — coisa que achei impossível por anos. Em 6 meses, meu faturamento cresceu 40% e consegui tirar minhas primeiras férias reais em 8 anos.',
    stars: 5,
    destaque: 'Faturamento +40% · Primeiras férias em 8 anos',
  },
  {
    name: 'Carlos F.',
    role: 'CEO · Belo Horizonte, MG',
    text: 'Não é mais um coach motivacional. É método real. Em 3 meses implementei um sistema de gestão que me liberou 2 horas por dia para estar com meus filhos. Minha esposa percebeu a diferença antes de mim.',
    stars: 5,
    destaque: '2h/dia recuperadas · Sistema de gestão implementado',
  },
  {
    name: 'André P.',
    role: 'Diretor Comercial · Rio de Janeiro, RJ',
    text: 'Cheguei cético. Saí transformado. Patrick tem uma habilidade única de dizer o que você precisa ouvir, não o que quer ouvir. Depois de 4 meses, tomei decisões que eu adiava há anos.',
    stars: 5,
    destaque: 'Decisões difíceis tomadas · Vida com clareza',
  },
  {
    name: 'Fernando S.',
    role: 'Proprietário · Curitiba, PR',
    text: 'Minha empresa cresceu, meu casamento melhorou, minha saúde voltou a ser prioridade. Parece impossível que tudo isso veio do mesmo processo — mas é exatamente o que a Mentoria Kairós entrega.',
    stars: 5,
    destaque: 'Empresa + Casamento + Saúde — tudo junto',
  },
  {
    name: 'Marcos R.',
    role: 'Empreendedor · Porto Alegre, RS',
    text: 'Patrick é daqueles raros mentores que vivem o que ensinam. Não é palco. É verdade. Recomendo a qualquer homem que quer crescer sem perder quem ama.',
    stars: 5,
    destaque: 'Autenticidade · Método + Vivência real',
  },
  {
    name: 'Rodrigo B.',
    role: 'Gerente Geral · Brasília, DF',
    text: 'Entrei achando que meu problema era só o negócio. Descobri que o problema era a liderança — de mim mesmo. A mentoria me devolveu clareza, propósito e coragem para as decisões que eu evitava.',
    stars: 5,
    destaque: 'Clareza e propósito encontrados',
  },
]

export default function DepoimentosPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        aria-label="Depoimentos - Hero"
      >
        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] opacity-5 pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(197,160,89,1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="eyebrow mb-6 block justify-center">Resultados reais</span>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Homens que Escolheram{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Outro Caminho
            </span>
          </h1>
          <p className="text-xl max-w-xl mx-auto" style={{ color: '#8A8580' }}>
            Não depoimentos genéricos. Transformações reais de homens que estavam onde você está.
          </p>
        </div>
      </section>

      {/* Grid de depoimentos */}
      <section
        className="section-padding"
        style={{ background: '#111111' }}
        aria-label="Grid de depoimentos"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((t, i) => (
              <div key={i} className="card p-8 flex flex-col">
                {/* Estrelas */}
                <div className="flex gap-1 mb-5">
                  {Array(t.stars).fill(0).map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#C5A059">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                {/* Destaque */}
                <div
                  className="text-xs font-bold tracking-wider uppercase mb-5 px-3 py-2 rounded-full inline-self-start"
                  style={{
                    background: 'rgba(197,160,89,0.08)',
                    border: '1px solid rgba(197,160,89,0.15)',
                    color: '#C5A059',
                    alignSelf: 'flex-start',
                  }}
                >
                  {t.destaque}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 mb-6">
                  <p className="text-base leading-relaxed italic" style={{ color: '#8A8580' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>

                {/* Autor */}
                <div className="flex items-center gap-3 border-t border-[#1E1E1E] pt-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'rgba(197,160,89,0.08)',
                      border: '1px solid rgba(197,160,89,0.2)',
                    }}
                  >
                    <span className="text-xs font-bold" style={{ color: '#C5A059' }}>
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#FAFAFA' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#4A4540' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" aria-label="Próximo passo">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-2xl mx-auto">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Sua história pode ser{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              a próxima
            </span>
          </h2>
          <p className="text-lg mb-8" style={{ color: '#8A8580' }}>
            Comece com um diagnóstico gratuito. 20 minutos, sem compromisso.
          </p>
          <a href="https://form.respondi.app/DQ2AeT6P" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
            <span>Fazer Diagnóstico Gratuito →</span>
          </a>
        </div>
      </section>
    </SiteLayout>
  )
}
