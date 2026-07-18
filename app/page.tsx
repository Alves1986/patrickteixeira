import Link from 'next/link'
import Image from 'next/image'
import { SiteLayout } from '@/components/layout/SiteLayout'
import type { Metadata } from 'next'
import { getContent, getSettings } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Patrick Teixeira | Liderança Masculina, Negócios e Legado',
  description:
    'Mentoria Kairós: Formando homens que prosperam nos negócios sem sacrificar a família. Diagnóstico gratuito disponível.',
}

// -----------------------------------------------
// HERO SECTION
// -----------------------------------------------
function HeroSection({ texts, settings }: { texts: Record<string, string>, settings: any }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero Principal"
    >
      {/* Background — gradiente escuro premium */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(197,160,89,0.08) 0%, transparent 60%), #0A0A0A',
          }}
        />
        {/* Linha decorativa horizontal */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(197,160,89,0.3), transparent)' }}
        />
      </div>

      {/* Orbs de luz dourados */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(197,160,89,0.5) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'glow-pulse 5s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full pointer-events-none opacity-10"
        style={{
          background: 'radial-gradient(circle, rgba(197,160,89,0.6) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'glow-pulse 7s ease-in-out infinite 2s',
        }}
      />

      {/* Conteúdo */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20 text-center">
        {/* Eyebrow */}
        <div className="flex justify-center mb-6">
          <span className="eyebrow">Mentoria Kairós · Liderança & Legado</span>
        </div>

        {/* Headline principal */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {texts.home_hero_title || 'Homens Constroem Negócios. Lideres Constroem Legados.'}
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#8A8580' }}>
          {texts.home_hero_subtitle || 'Liderança não é apenas sobre faturamento. É sobre governar a própria vida, construir negócios sólidos e liderar a família com honra.'}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href={settings.ctaLink || 'https://form.respondi.app/DQ2AeT6P'} target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-8 py-4 w-full sm:w-auto">
            <span>{settings.ctaLabel ? `Quero o ${settings.ctaLabel} →` : 'Quero o Diagnóstico Gratuito →'}</span>
          </a>
          <Link href="/mentoria" className="btn-outline text-base px-8 py-4 w-full sm:w-auto">
            Conheça a Mentoria Kairós
          </Link>
        </div>

        {/* Credenciais rápidas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: '1.000+', label: 'Homens Formados' },
            { value: '10+', label: 'Anos de Mentoria' },
            { value: '50+', label: 'Eventos pelo Brasil' },
            { value: '1', label: 'Livro Publicado' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
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
              <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#4A4540' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#C5A059' }}>
          Role para baixo
        </span>
        <div
          className="w-px h-10"
          style={{
            background: 'linear-gradient(180deg, #C5A059, transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}

// -----------------------------------------------
// PROBLEMA SECTION
// -----------------------------------------------
function ProblemSection() {
  const problems = [
    'Trabalha 12h por dia mas sente que não avança onde realmente importa',
    'Chegou em casa tarde demais para ver seus filhos acordados — de novo',
    'Já leu dezenas de livros de liderança e ainda não sabe como aplicar em casa',
    'Sente que para crescer no negócio, precisa abrir mão da família',
  ]

  return (
    <section
      id="problema"
      className="section-padding"
      style={{ background: '#111111' }}
      aria-label="O problema que a maioria enfrenta"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="eyebrow mb-4 block">O padrão que você não pode continuar</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Você reconhece{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              algum desses padrões?
            </span>
          </h2>

          <div className="space-y-4 mb-12">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-lg border border-[#1E1E1E] bg-[#0A0A0A] hover:border-[rgba(197,160,89,0.15)] transition-all duration-300"
              >
                <div
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: 'rgba(224, 82, 82, 0.1)', border: '1px solid rgba(224,82,82,0.3)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 2L8 8M8 2L2 8" stroke="#E05252" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-base" style={{ color: '#8A8580' }}>
                  {problem}
                </p>
              </div>
            ))}
          </div>

          {/* Virada */}
          <div
            className="p-8 rounded-xl text-center"
            style={{
              background: 'linear-gradient(135deg, rgba(197,160,89,0.08) 0%, rgba(197,160,89,0.03) 100%)',
              border: '1px solid rgba(197,160,89,0.2)',
            }}
          >
            <p className="text-xl md:text-2xl font-semibold" style={{ color: '#FAFAFA', fontFamily: "'Playfair Display', Georgia, serif" }}>
              Isso não é falha de caráter.
            </p>
            <p className="text-xl md:text-2xl" style={{ color: '#C5A059', fontFamily: "'Playfair Display', Georgia, serif" }}>
              É falta de sistema.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------
// SOBRE PATRICK SECTION
// -----------------------------------------------
function SobreSection({ texts }: { texts: Record<string, string> }) {
  return (
    <section
      id="sobre"
      className="section-padding"
      aria-label="Sobre Patrick Teixeira"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem / Visual */}
          <div className="relative order-2 lg:order-1">
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0"
              style={{
                background: 'linear-gradient(135deg, #161616, #111111)',
                border: '1px solid rgba(197,160,89,0.15)',
              }}
            >
              {/* Imagem do Patrick */}
              <div className="absolute inset-0">
                <Image
                  src="/images/IMG_2435.PNG"
                  alt="Patrick Teixeira"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Gradiente sutil por cima para melhor contraste com os elementos do design */}
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(17,17,17,0.8) 0%, transparent 40%)'
                  }}
                />
              </div>
            </div>

            {/* Card flutuante — livro */}
            <div
              className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-8 flex gap-3 items-center p-3 rounded-xl"
              style={{
                background: '#161616',
                border: '1px solid rgba(197,160,89,0.2)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.8)',
              }}
            >
              <div className="relative w-12 h-16 rounded overflow-hidden shadow-md">
                <Image src="/images/IMG_2634.png" alt="Capa do livro A Escada Invisível" fill className="object-cover" />
              </div>
              <div>
                <p className="text-xs font-bold" style={{ color: '#FAFAFA' }}>A Escada Invisível</p>
                <p className="text-[10px] mt-0.5" style={{ color: '#C5A059' }}>Livro publicado</p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-4 block">Quem é Patrick</span>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              O Método que{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Integra Negócios e Família
              </span>
            </h2>
            <div className="text-lg leading-relaxed space-y-4 mb-10 whitespace-pre-wrap" style={{ color: '#8A8580' }}>
              {texts.sobre_text || `Patrick Teixeira não chegou onde está apesar das suas responsabilidades — chegou por causa delas. Casado, pai, empresário e mentor, ele entendeu cedo que o verdadeiro teste de um líder não está na sala de reuniões. Está na mesa de jantar.`}
            </div>

            {/* Credenciais */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: '📘', text: 'Autor de "A Escada Invisível"' },
                { icon: '🎤', text: 'Palestrante em eventos nacionais' },
                { icon: '🏆', text: 'Fundador da Mentoria Kairós' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium" style={{ color: '#C4BFBA' }}>{item.text}</span>
                </div>
              ))}
            </div>

            <Link href="/sobre" className="btn-ghost">
              Conheça a história completa →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------
// MENTORIA KAIRÓS SECTION
// -----------------------------------------------
function MentoriaSection({ texts }: { texts: Record<string, string> }) {
  const features = [
    {
      icon: '⚙️',
      title: 'Sistema de Gestão',
      desc: 'Que não depende de você estar presente 100% do tempo',
    },
    {
      icon: '👑',
      title: 'Autoridade Real',
      desc: 'Liderança genuína — na empresa e em casa, sem máscara',
    },

    { title: 'Gestão do Tempo', desc: 'Sistemas para dominar sua agenda e parar de apagar incêndios.', icon: '⌛' },
    { title: 'Posicionamento', desc: 'Como se portar como autoridade inquestionável no seu mercado.', icon: '♟️' },
    { title: 'Dinâmica Familiar', desc: 'Como construir uma família inabalável enquanto o negócio cresce.', icon: '🛡️' },
    { title: 'Performance Física', desc: 'Sem energia não há liderança. O corpo do líder molda seu império.', icon: '⚡' },
  ]

  return (
    <section
      id="mentoria"
      className="relative section-padding overflow-hidden"
      style={{ background: '#111111' }}
      aria-label="Mentoria Kairós"
    >
      {/* Glow de fundo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(197,160,89,0.8) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block justify-center">O programa</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto"
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
          </h2>
          <div className="text-lg max-w-xl mx-auto whitespace-pre-wrap" style={{ color: '#8A8580' }}>
            {texts.mentoria_text || `Um programa de imersão para homens que querem escalar seus negócios com clareza, liderança e família unida.`}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="card p-6 text-center group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {f.icon}
              </div>
              <h3
                className="text-lg font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#FAFAFA' }}
              >
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A4540' }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Para quem é / não é */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          <div
            className="p-8 rounded-xl"
            style={{ background: '#161616', border: '1px solid rgba(76, 175, 119, 0.2)' }}
          >
            <h3 className="font-bold mb-5 flex items-center gap-2" style={{ color: '#4CAF77' }}>
              <span>✓</span> Para quem é
            </h3>
            <ul className="space-y-3">
              {[
                'Empreendedores com empresa estabelecida',
                'Executivos que chegaram ao topo mas perderam presença em casa',
                'Homens que querem deixar um legado real — não só dinheiro',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#4CAF77] mt-0.5 flex-shrink-0">•</span>
                  <span className="text-sm" style={{ color: '#8A8580' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-8 rounded-xl"
            style={{ background: '#161616', border: '1px solid rgba(224, 82, 82, 0.2)' }}
          >
            <h3 className="font-bold mb-5 flex items-center gap-2" style={{ color: '#E05252' }}>
              <span>✗</span> Para quem NÃO é
            </h3>
            <ul className="space-y-3">
              {[
                'Quem busca motivação de palco sem aplicação prática',
                'Quem não está disposto a ser honesto consigo mesmo',
                'Quem quer resultado sem processo e sem compromisso',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#E05252] mt-0.5 flex-shrink-0">•</span>
                  <span className="text-sm" style={{ color: '#8A8580' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-sm mb-6 font-semibold tracking-wider uppercase" style={{ color: '#4A4540' }}>
            Vagas limitadas por turma
          </p>
          <a href="https://form.respondi.app/DQ2AeT6P" target="_blank" rel="noopener noreferrer" className="btn-primary text-base px-10 py-4">
            <span>Fazer Diagnóstico Gratuito →</span>
          </a>
          <p className="text-xs mt-4" style={{ color: '#2A2520' }}>
            Sem compromisso · Sem pressão de venda · 20 minutos
          </p>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------
// DEPOIMENTOS SECTION
// -----------------------------------------------
function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ricardo M.',
      role: 'Empresário · São Paulo',
      text: 'A mentoria do Patrick mudou a forma como eu lidero minha empresa e minha família. Hoje sou presente e lucrativo — coisa que achei impossível por anos.',
      stars: 5,
    },
    {
      name: 'Carlos F.',
      role: 'CEO · Minas Gerais',
      text: 'Não é mais um coach motivacional. É método real. Em 3 meses implementei um sistema de gestão que me liberou 2 horas por dia pra estar com meus filhos.',
      stars: 5,
    },
    {
      name: 'André P.',
      role: 'Diretor Comercial · Rio de Janeiro',
      text: 'Cheguei cético. Saí transformado. Patrick tem uma habilidade única de dizer o que você precisa ouvir, não o que quer ouvir.',
      stars: 5,
    },
  ]

  return (
    <section
      id="depoimentos"
      className="section-padding"
      aria-label="Depoimentos de alunos"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="eyebrow mb-4 block justify-center">Prova social</span>
          <h2
            className="text-3xl md:text-5xl font-bold"
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
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-8 flex flex-col">
              {/* Estrelas */}
              <div className="flex gap-1 mb-6">
                {Array(t.stars).fill(0).map((_, j) => (
                  <svg key={j} width="16" height="16" viewBox="0 0 24 24" fill="#C5A059">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
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
                    background: 'rgba(197,160,89,0.1)',
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

        <div className="text-center mt-10">
          <Link href="/depoimentos" className="btn-ghost">
            Ver todos os depoimentos →
          </Link>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------
// LIVRO SECTION
// -----------------------------------------------
function LivroSection({ texts }: { texts: Record<string, string> }) {
  return (
    <section
      id="livro"
      className="section-padding"
      style={{ background: '#111111' }}
      aria-label="Livro A Escada Invisível"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
          {/* Capa do livro visual */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px rgba(197,160,89,0.1)' }}>
              <Image
                src="/images/IMG_2635.png"
                alt="Patrick Teixeira com o livro A Escada Invisível"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>

          {/* Texto */}
          <div>
            <span className="eyebrow mb-4 block">O livro</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              O Livro que Torna o{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Invisível Visível
              </span>
            </h2>
            <div className="text-base mb-6 leading-relaxed whitespace-pre-wrap" style={{ color: '#8A8580' }}>
              {texts.livro_text || `“A Escada Invisível” revela os princípios que Patrick aplicou para construir autoridade, resultado e presença — sem sacrificar o que mais importa. Um guia prático para líderes que querem deixar um legado real.`}
            </div>
            <ul className="space-y-3 mb-8">
              {[
                'Princípios práticos de liderança aplicáveis imediatamente',
                'Método para integrar negócios e família no mesmo sistema',
                'Casos reais de transformação de líderes brasileiros',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0" style={{ color: '#C5A059' }}>◆</span>
                  <span className="text-sm" style={{ color: '#8A8580' }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href="https://wa.me/554298250506?text=GOSTARIA%20DE%20ADQUIRIR%20O%20LIVRO%20%22A%20ESCADA%20INVISIVEL%22" target="_blank" rel="noopener noreferrer" className="btn-outline">
              Quero meu exemplar →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------
// CTA DIAGNÓSTICO SECTION
// -----------------------------------------------
function DiagnosticoSection({ settings }: { settings: any }) {
  const ctaLabel = settings?.ctaLabel || 'Diagnóstico Gratuito'
  const ctaLink = settings?.ctaLink || 'https://form.respondi.app/DQ2AeT6P'

  return (
    <section
      id="diagnostico-cta"
      className="section-padding relative overflow-hidden"
      aria-label="CTA Diagnóstico Gratuito"
    >
      {/* Fundo com glow */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(197,160,89,1) 0%, transparent 70%)',
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow mb-6 block justify-center">O primeiro passo custa zero</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Pronto para Descobrir Seu{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Próximo Passo?
            </span>
          </h2>
          <p className="text-lg mb-4 leading-relaxed" style={{ color: '#8A8580' }}>
            Um diagnóstico gratuito de 20 minutos para entender onde você está travado
            e qual o caminho mais curto para onde quer chegar.
          </p>
          <p className="text-base mb-10 font-medium" style={{ color: '#C4BFBA' }}>
            Sem compromisso. Sem pressão de venda.
          </p>

          <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg px-12 py-5">
            <span>Fazer meu {ctaLabel} →</span>
          </a>

          <p className="text-xs mt-6" style={{ color: '#2A2520' }}>
            Vagas limitadas por semana · Preenchimento online · Retorno em até 24h
          </p>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------
// HOME PAGE
// -----------------------------------------------
export default async function HomePage() {
  const contentArray = await getContent()
  const settings = await getSettings()
  
  // Converter array para objeto { [id]: content } para facilitar uso
  const texts = contentArray.reduce((acc: Record<string, string>, item: any) => {
    acc[item.id] = item.content
    return acc
  }, {})

  return (
    <SiteLayout>
      <HeroSection texts={texts} settings={settings} />
      <ProblemSection />
      <SobreSection texts={texts} />
      <MentoriaSection texts={texts} />
      <TestimonialsSection />
      <LivroSection texts={texts} />
      <DiagnosticoSection settings={settings} />
    </SiteLayout>
  )
}

