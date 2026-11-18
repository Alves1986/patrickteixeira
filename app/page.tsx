'use client'

import Link from 'next/link'
import Image from 'next/image'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { useState, useEffect } from 'react'
import {
  IconActivity,
  IconArrowRight,
  IconAward,
  IconBookOpen,
  IconCheck,
  IconClock,
  IconCompass,
  IconCrown,
  IconHeartHandshake,
  IconMic,
  IconSettings,
  IconShield,
  IconStar,
  IconX,
} from '@/components/ui/Icons'

// -----------------------------------------------
// HERO SECTION
// -----------------------------------------------
function HeroSection({ texts, settings }: { texts: Record<string, string>; settings: any }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A] border-b border-[#27272A]"
      aria-label="Hero Principal"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
        <div className="flex justify-center mb-6">
          <span className="eyebrow">Mentoria Kairós · Liderança &amp; Legado</span>
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl mx-auto leading-tight text-[#FAFAFA]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {texts.home_hero_title || 'Liderança para empresários que querem crescer sem perder a família: 1.000+ homens formados em 10 anos.'}
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed text-[#B8B2AC]">
          {texts.home_hero_subtitle || 'Liderança não é apenas sobre faturamento. É sobre governar a própria vida, construir negócios sólidos e liderar a família com honra.'}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={settings.ctaLink || 'https://form.respondi.app/DQ2AeT6P'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-8 py-4 w-full sm:w-auto"
          >
            <span>{settings.ctaLabel ? `Quero o ${settings.ctaLabel}` : 'Quero o Diagnóstico Gratuito'}</span>
            <IconArrowRight className="w-5 h-5" />
          </a>
          <Link href="/mentoria" className="btn-outline text-base px-8 py-4 w-full sm:w-auto">
            Conheça a Mentoria Kairós
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto pt-8 border-t border-[#27272A]">
          {[
            { value: '1.000+', label: 'Homens Formados' },
            { value: '10+', label: 'Anos de Mentoria' },
            { value: '50+', label: 'Eventos pelo Brasil' },
            { value: '1', label: 'Livro Publicado' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-2 text-[#C5A059] tabular-nums"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {stat.value}
              </div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[#B8B2AC]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------
// PROBLEMA SECTION
// -----------------------------------------------
function ProblemSection() {
  const problems = [
    'Você cresce profissionalmente, mas sente que sua família está pagando o preço.',
    'Você trabalha cada vez mais, mas continua preso no operacional.',
    'Você lidera equipes, mas não consegue liderar suas emoções e sua própria casa.',
    'Você sente que está construindo patrimônio, mas não o legado que gostaria de deixar para seus filhos.',
  ]

  return (
    <section
      id="problema"
      className="section-padding bg-[#111111]"
      aria-label="O problema que a maioria enfrenta"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <span className="eyebrow mb-4 block">O padrão que você não pode continuar</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-12 text-[#FAFAFA]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Você reconhece <span className="text-[#C5A059]">algum desses padrões?</span>
          </h2>

          <div className="space-y-4 mb-12">
            {problems.map((problem, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 rounded-[8px] border border-[#27272A] bg-[#0A0A0A]"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-[4px] border border-[#71717A] flex items-center justify-center text-[#B8B2AC]">
                  <IconX className="w-5 h-5" />
                </div>
                <p className="text-base text-[#B8B2AC]">{problem}</p>
              </div>
            ))}
          </div>

          <div className="p-8 rounded-[16px] text-center bg-[#161616] border border-[#27272A]">
            <p
              className="text-xl md:text-2xl font-semibold text-[#FAFAFA] mb-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Isso não é falha de caráter.
            </p>
            <p
              className="text-xl md:text-2xl text-[#C5A059]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
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
      className="section-padding bg-[#0A0A0A]"
      aria-label="Sobre Patrick Teixeira"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Imagem / Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[16px] overflow-hidden aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-[#161616] border border-[#27272A]">
              <Image
                src="/images/IMG_2435.PNG"
                alt="Patrick Teixeira"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Card flutuante — livro (raio externo 16px - padding 8px = raio interno 8px) */}
            <div className="flutuante absolute -bottom-4 -right-4 lg:right-auto lg:-left-8 flex gap-3 items-center p-2 rounded-[16px] bg-[#161616] border border-[#27272A]">
              <div className="relative w-12 h-16 rounded-[8px] overflow-hidden">
                <Image src="/images/IMG_2634.png" alt="Capa do livro A Escada Invisível" fill className="object-cover" />
              </div>
              <div className="pr-2">
                <p className="text-xs font-bold text-[#FAFAFA]">A Escada Invisível</p>
                <p className="text-xs mt-0.5 text-[#C5A059]">Livro publicado</p>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow mb-4 block">Quem é Patrick</span>
            <h2
              className="text-3xl md:text-5xl font-bold mb-6 text-[#FAFAFA]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              O Método que <span className="text-[#C5A059]">Integra Negócios e Família</span>
            </h2>
            <div className="text-lg leading-relaxed space-y-4 mb-10 whitespace-pre-wrap text-[#B8B2AC]">
              {texts.sobre_text || `Patrick Teixeira não chegou onde está apesar das suas responsabilidades — chegou por causa delas. Casado, pai, empresário e mentor, ele entendeu cedo que o verdadeiro teste de um líder não está na sala de reuniões. Está na mesa de jantar.`}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { Icon: IconBookOpen, text: 'Autor de "A Escada Invisível"' },
                { Icon: IconMic, text: 'Palestrante em eventos nacionais' },
                { Icon: IconAward, text: 'Fundador da Mentoria Kairós' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon className="w-6 h-6 text-[#C5A059] flex-shrink-0" />
                  <span className="text-sm font-medium text-[#FAFAFA]">{text}</span>
                </div>
              ))}
            </div>

            <Link href="/sobre" className="btn-ghost">
              <span>Conheça a história completa</span>
              <IconArrowRight className="w-5 h-5" />
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
  const principalFeature = {
    Icon: IconSettings,
    title: 'Sistema de Gestão',
    desc: 'Estruture processos, delegação e rituais de liderança para a empresa crescer sem depender da sua presença 100% do tempo.',
  }

  const secondaryFeatures = [
    { Icon: IconCrown, title: 'Autoridade Real', desc: 'Liderança genuína — na empresa e em casa, sem máscara.' },
    { Icon: IconClock, title: 'Gestão do Tempo', desc: 'Sistemas para dominar sua agenda e parar de apagar incêndios.' },
    { Icon: IconCompass, title: 'Posicionamento', desc: 'Como se portar como autoridade no seu mercado.' },
    { Icon: IconShield, title: 'Dinâmica Familiar', desc: 'Construa uma família forte enquanto o negócio cresce.' },
    { Icon: IconActivity, title: 'Performance Física', desc: 'Sem energia não há liderança. O corpo do líder sustenta a rotina.' },
    { Icon: IconHeartHandshake, title: 'Vida Espiritual', desc: 'Fé prática como fundação para decisões e liderança integral.' },
  ]

  const PrincipalIcon = principalFeature.Icon

  return (
    <section
      id="mentoria"
      className="section-padding bg-[#111111]"
      aria-label="Mentoria Kairós"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-5 max-w-3xl mx-auto text-[#FAFAFA]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Mentoria <span className="text-[#C5A059]">Kairós</span>
          </h2>
          <p className="text-lg max-w-xl mx-auto whitespace-pre-wrap text-[#B8B2AC]">
            {texts.mentoria_text || 'Um programa de imersão para homens que querem escalar seus negócios com clareza, liderança e família unida.'}
          </p>
        </div>

        {/* Grade assimétrica: recurso principal ocupa 2x mais espaço */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="card p-8 lg:col-span-2 lg:row-span-2 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-[8px] border border-[#27272A] bg-[#111111] flex items-center justify-center text-[#C5A059] mb-6">
                <PrincipalIcon className="w-6 h-6" />
              </div>
              <h3
                className="text-2xl font-bold mb-3 text-[#FAFAFA]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {principalFeature.title}
              </h3>
              <p className="text-base leading-relaxed text-[#B8B2AC]">
                {principalFeature.desc}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#27272A]">
              <Link href="/mentoria" className="btn-ghost">
                <span>Ver estrutura completa do método</span>
                <IconArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {secondaryFeatures.map(({ Icon, title, desc }) => (
            <div key={title} className="card p-6">
              <div className="text-[#C5A059] mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3
                className="text-lg font-bold mb-2 text-[#FAFAFA]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {title}
              </h3>
              <p className="text-sm text-[#B8B2AC]">{desc}</p>
            </div>
          ))}
        </div>

        {/* Para quem é vs Para quem não é */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <div className="p-8 rounded-[16px] bg-[#161616] border border-[#27272A]">
            <h3 className="font-bold mb-5 flex items-center gap-2 text-[#C5A059]">
              <IconCheck className="w-6 h-6 flex-shrink-0" />
              <span>Para quem é a Mentoria Método Kairós</span>
            </h3>
            <ul className="space-y-3">
              {[
                'Para homens entre 25 e 45 anos que ocupam cargos de liderança ou são empresários.',
                'Para quem conquistou resultados profissionais, mas percebe que está perdendo a paz, o casamento, a presença na vida dos filhos ou o equilíbrio.',
                'Para quem está preso no operacional e quer desenvolver uma liderança mais estratégica, aprendendo a delegar e formar pessoas.',
                'Para quem deseja crescer profissionalmente sem abrir mão dos princípios, da fé e da família.',
                'Para homens que estão dispostos a assumir a responsabilidade pela própria transformação e colocar em prática o que aprenderem.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconCheck className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#B8B2AC]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-[16px] bg-[#161616] border border-[#27272A]">
            <h3 className="font-bold mb-5 flex items-center gap-2 text-[#FAFAFA]">
              <IconX className="w-6 h-6 flex-shrink-0 text-[#B8B2AC]" />
              <span>Para quem NÃO é</span>
            </h3>
            <ul className="space-y-3">
              {[
                'Homens que procuram fórmulas rápidas ou atalhos para o sucesso.',
                'Quem acredita que a culpa da própria situação é sempre da empresa, da esposa, do mercado ou de outras pessoas.',
                'Quem não está disposto a mudar hábitos, enfrentar seus próprios desafios e viver com disciplina.',
                'Quem busca apenas técnicas de liderança, sem interesse em desenvolver caráter, inteligência emocional e relacionamentos.',
                'Quem não valoriza princípios, família e uma transformação integral.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <IconX className="w-5 h-5 text-[#B8B2AC] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-[#B8B2AC]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-8 rounded-[16px] text-center bg-[#161616] border border-[#27272A]">
          <blockquote
            className="text-lg md:text-xl leading-relaxed text-[#FAFAFA]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            &ldquo;O Método Kairós não foi criado para formar apenas líderes de sucesso. Foi criado para formar homens cujo sucesso profissional fortalece, e não destrói, o legado da própria família.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-semibold tracking-widest uppercase text-[#C5A059]">
            — Patrick Teixeira
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
      className="section-padding bg-[#0A0A0A]"
      aria-label="Depoimentos de alunos"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold text-[#FAFAFA]"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Homens que Escolheram <span className="text-[#C5A059]">Outro Caminho</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="card p-8 flex flex-col">
              <div className="flex gap-1 mb-6 text-[#C5A059]" aria-label={`${t.stars} de 5 estrelas`}>
                {Array(t.stars)
                  .fill(0)
                  .map((_, j) => (
                    <IconStar key={j} className="w-5 h-5" />
                  ))}
              </div>

              <blockquote className="flex-1 mb-6">
                <p className="text-base leading-relaxed text-[#B8B2AC]">
                  &ldquo;{t.text}&rdquo;
                </p>
              </blockquote>

              <div className="flex items-center gap-3 border-t border-[#27272A] pt-4">
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0 bg-[#111111] border border-[#27272A]">
                  <span className="text-xs font-bold text-[#C5A059]">{t.name[0]}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#FAFAFA]">{t.name}</p>
                  <p className="text-xs text-[#B8B2AC]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/depoimentos" className="btn-ghost">
            <span>Ver todos os depoimentos</span>
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// -----------------------------------------------
// LIVRO FORM MODAL
// -----------------------------------------------
function LivroFormModal({ onClose, bookLink }: { onClose: () => void; bookLink?: string }) {
  const [form, setForm] = useState({ nome: '', whatsapp: '', email: '' })
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.nome,
          whatsapp: form.whatsapp,
          email: form.email,
          business: 'Solicitação do Livro',
          pain_description: 'Solicitou o livro A Escada Invisível pelo site.',
          source: 'livro',
        }),
      })
      if (res.ok || res.status === 201) {
        setSent(true)
      } else {
        setError('Ocorreu um erro. Tente novamente.')
      }
    } catch {
      setError('Ocorreu um erro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0A0A0A]/85"
      onClick={onClose}
    >
      <div
        className="flutuante w-full max-w-md rounded-[16px] p-8 relative bg-[#161616] border border-[#27272A]"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-livro-titulo"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-[8px] border border-[#71717A] text-[#B8B2AC] hover:text-[#FAFAFA] transition-colors duration-200"
          aria-label="Fechar modal"
        >
          <IconX className="w-5 h-5" />
        </button>

        {!sent ? (
          <>
            <h3
              id="modal-livro-titulo"
              className="text-2xl font-bold mb-2 text-[#FAFAFA]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              A Escada Invisível
            </h3>
            <p className="text-sm mb-6 text-[#B8B2AC]">
              Preencha seus dados para solicitar seu exemplar e receber o link de compra.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4" aria-busy={loading}>
              <div>
                <label className="form-label" htmlFor="livro-nome">Nome completo *</label>
                <input
                  id="livro-nome"
                  type="text"
                  required
                  className="form-field"
                  placeholder="Seu nome"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="livro-whatsapp">WhatsApp *</label>
                <input
                  id="livro-whatsapp"
                  type="tel"
                  required
                  className="form-field"
                  placeholder="(00) 00000-0000"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                />
              </div>
              <div>
                <label className="form-label" htmlFor="livro-email">E-mail *</label>
                <input
                  id="livro-email"
                  type="email"
                  required
                  className="form-field"
                  placeholder="seu@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              {error && (
                <p className="text-xs text-[#FAFAFA]" role="status">
                  {error}
                </p>
              )}
              <button type="submit" disabled={loading} className="btn-primary w-full py-3.5 text-sm">
                <span>{loading ? 'Enviando...' : 'Quero meu exemplar'}</span>
                {!loading && <IconArrowRight className="w-5 h-5" />}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-6" role="status">
            <div className="w-12 h-12 rounded-[8px] border border-[#C5A059] flex items-center justify-center mx-auto mb-4 text-[#C5A059]">
              <IconCheck className="w-6 h-6" />
            </div>
            <h3
              className="text-xl font-bold mb-2 text-[#FAFAFA]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Solicitação Recebida!
            </h3>
            <p className="text-sm mb-6 text-[#B8B2AC]">
              Seus dados foram salvos. Em breve nossa equipe entrará em contato.
            </p>
            {bookLink && (
              <div className="mb-4">
                <a
                  href={bookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-6 inline-flex"
                  id="link-compra-livro"
                >
                  <span>Comprar o Livro</span>
                  <IconArrowRight className="w-5 h-5" />
                </a>
              </div>
            )}
            <button onClick={onClose} className="btn-ghost text-sm">
              Fechar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// -----------------------------------------------
// LIVRO SECTION
// -----------------------------------------------
function LivroSection({ texts, bookLink }: { texts: Record<string, string>; bookLink?: string }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {modalOpen && <LivroFormModal onClose={() => setModalOpen(false)} bookLink={bookLink} />}
      <section
        id="livro"
        className="section-padding bg-[#111111]"
        aria-label="Livro A Escada Invisível"
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div className="flex justify-center">
              <div className="relative w-full max-w-[320px] aspect-[4/5] rounded-[16px] overflow-hidden border border-[#27272A]">
                <Image
                  src="/images/IMG_2635.png"
                  alt="Patrick Teixeira com o livro A Escada Invisível"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div>
              <h2
                className="text-3xl md:text-4xl font-bold mb-5 text-[#FAFAFA]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                O Livro que Torna o <span className="text-[#C5A059]">Invisível Visível</span>
              </h2>
              <div className="text-base mb-6 leading-relaxed whitespace-pre-wrap text-[#B8B2AC]">
                {texts.livro_text || `"A Escada Invisível" revela os princípios que Patrick aplicou para construir autoridade, resultado e presença — sem sacrificar o que mais importa. Um guia prático para líderes que querem deixar um legado real.`}
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Princípios práticos de liderança aplicáveis imediatamente',
                  'Método do que acontece nos bastidores corporativos e que faz você alavancar a carreira',
                  'Casos reais de transformação de líderes brasileiros',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <IconCheck className="w-5 h-5 text-[#C5A059] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#B8B2AC]">{item}</span>
                  </li>
                ))}
              </ul>
              <button
                id="btn-quero-exemplar"
                onClick={() => setModalOpen(true)}
                className="btn-outline"
              >
                <span>Quero meu exemplar</span>
                <IconArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// -----------------------------------------------
// HOME PAGE
// -----------------------------------------------
export default function HomePage() {
  const [bookLink, setBookLink] = useState('')
  const texts: Record<string, string> = {}
  const settings = { ctaLabel: 'Diagnóstico Gratuito', ctaLink: 'https://form.respondi.app/DQ2AeT6P' }

  useEffect(() => {
    fetch('/api/admin/settings')
      .then((r) => r.json())
      .then((d) => {
        if (d?.bookLink) setBookLink(d.bookLink)
      })
      .catch(() => {})
  }, [])

  return (
    <SiteLayout>
      <HeroSection texts={texts} settings={settings} />
      <ProblemSection />
      <SobreSection texts={texts} />
      <MentoriaSection texts={texts} />
      <TestimonialsSection />
      <LivroSection texts={texts} bookLink={bookLink} />
    </SiteLayout>
  )
}
