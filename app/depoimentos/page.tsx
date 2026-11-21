import { SiteLayout } from '@/components/layout/SiteLayout'
import { IconArrowRight, IconStar } from '@/components/ui/Icons'
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
      <section className="pt-32 pb-20" aria-label="Depoimentos - Hero">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="eyebrow mb-6 block justify-center">Resultados reais</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Homens que Escolheram{' '}
            <span style={{ color: '#C5A059' }}>Outro Caminho</span>
          </h1>
          <p className="text-xl max-w-xl mx-auto" style={{ color: '#B8B2AC' }}>
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
                <div className="flex gap-1 mb-5" aria-label={`${t.stars} de 5 estrelas`}>
                  {Array(t.stars).fill(0).map((_, j) => (
                    <IconStar key={j} className="w-4 h-4 text-[#C5A059]" />
                  ))}
                </div>

                {/* Destaque */}
                <div
                  className="text-xs font-bold tracking-wider uppercase mb-5 px-3 py-2 rounded self-start"
                  style={{
                    background: '#111111',
                    border: '1px solid #27272A',
                    color: '#C5A059',
                  }}
                >
                  {t.destaque}
                </div>

                {/* Quote */}
                <blockquote className="flex-1 mb-6">
                  <p className="text-base leading-relaxed" style={{ color: '#B8B2AC' }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </blockquote>

                {/* Autor */}
                <div className="flex items-center gap-3 border-t border-[#27272A] pt-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: '#111111',
                      border: '1px solid #27272A',
                    }}
                  >
                    <span className="text-xs font-bold" style={{ color: '#C5A059' }}>
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: '#FAFAFA' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#B8B2AC' }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding" aria-label="Próximo passo">
        <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Sua história pode ser <span style={{ color: '#C5A059' }}>a próxima</span>
          </h2>
          <p className="text-lg mb-8" style={{ color: '#B8B2AC' }}>
            Comece com um diagnóstico gratuito. <span className="tabular-nums">20</span> minutos, sem compromisso.
          </p>
          <a href="https://form.respondi.app/DQ2AeT6P" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
            <span>Fazer Diagnóstico Gratuito</span>
            <IconArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </SiteLayout>
  )
}
