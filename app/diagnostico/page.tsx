'use client'

import { useState } from 'react'
import { SiteLayout } from '@/components/layout/SiteLayout'

export default function DiagnosticoPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    business: '',
    pain: '',
    source: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Salva no Supabase via API route
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          email: formData.email,
          business: formData.business,
          pain_description: formData.pain,
          source: formData.source,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      }
    } catch {
      // Fallback: redireciona para o formulário original do Respondi
      window.open('https://form.respondi.app/DQ2AeT6P', '_blank')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section
        className="relative pt-32 pb-16 overflow-hidden"
        aria-label="Diagnóstico Gratuito"
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] opacity-8 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse, rgba(197,160,89,0.8) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow mb-6 block justify-center">Gratuito · Sem compromisso</span>
            <h1
              className="text-4xl md:text-5xl font-bold mb-5"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Seu{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #C5A059, #D4B577)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Diagnóstico Gratuito
              </span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#8A8580' }}>
              20 minutos para entender onde você está travado e qual o caminho mais curto
              para onde quer chegar. Sem pitch de venda agressivo. Sem pressão.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="section-padding-sm pb-24" aria-label="Formulário de diagnóstico">
        <div className="container">
          <div className="max-w-xl mx-auto">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
                aria-label="Formulário de diagnóstico gratuito"
              >
                <div
                  className="p-8 rounded-2xl"
                  style={{
                    background: '#161616',
                    border: '1px solid rgba(197,160,89,0.12)',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
                  }}
                >
                  {/* Nome */}
                  <div className="mb-5">
                    <label htmlFor="diag-name" className="form-label">
                      Nome Completo <span style={{ color: '#C5A059' }}>*</span>
                    </label>
                    <input
                      id="diag-name"
                      name="name"
                      type="text"
                      required
                      className="form-field"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="mb-5">
                    <label htmlFor="diag-whatsapp" className="form-label">
                      WhatsApp <span style={{ color: '#C5A059' }}>*</span>
                    </label>
                    <input
                      id="diag-whatsapp"
                      name="whatsapp"
                      type="tel"
                      required
                      className="form-field"
                      placeholder="(11) 99999-9999"
                      value={formData.whatsapp}
                      onChange={handleChange}
                    />
                  </div>

                  {/* E-mail */}
                  <div className="mb-5">
                    <label htmlFor="diag-email" className="form-label">
                      E-mail
                    </label>
                    <input
                      id="diag-email"
                      name="email"
                      type="email"
                      className="form-field"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Negócio */}
                  <div className="mb-5">
                    <label htmlFor="diag-business" className="form-label">
                      Seu Negócio / Área de Atuação <span style={{ color: '#C5A059' }}>*</span>
                    </label>
                    <input
                      id="diag-business"
                      name="business"
                      type="text"
                      required
                      className="form-field"
                      placeholder="Ex: agência de marketing, construtora, atacado..."
                      value={formData.business}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Dor principal */}
                  <div className="mb-5">
                    <label htmlFor="diag-pain" className="form-label">
                      Qual é sua principal dor hoje? <span style={{ color: '#C5A059' }}>*</span>
                    </label>
                    <textarea
                      id="diag-pain"
                      name="pain"
                      required
                      rows={4}
                      className="form-field resize-none"
                      placeholder="Descreva brevemente o que está te impedindo de chegar onde quer..."
                      value={formData.pain}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Como conheceu */}
                  <div className="mb-8">
                    <label htmlFor="diag-source" className="form-label">
                      Como conheceu o Patrick?
                    </label>
                    <select
                      id="diag-source"
                      name="source"
                      className="form-field"
                      value={formData.source}
                      onChange={handleChange}
                    >
                      <option value="">Selecione...</option>
                      <option value="instagram">Instagram (@patrickteixeiras)</option>
                      <option value="indicacao">Indicação de alguém</option>
                      <option value="palestra">Assisti a uma palestra</option>
                      <option value="livro">Pelo livro &quot;A Escala Invisível&quot;</option>
                      <option value="busca">Busca no Google</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="submit-diagnostico"
                    disabled={loading}
                    className="btn-primary w-full text-base py-4"
                    style={{ opacity: loading ? 0.7 : 1 }}
                  >
                    <span>{loading ? 'Enviando...' : 'Quero meu Diagnóstico Gratuito →'}</span>
                  </button>

                  <p className="text-center text-xs mt-4" style={{ color: '#2A2520' }}>
                    Seus dados são 100% seguros e não serão compartilhados.
                    Nossa equipe retornará em até 24h úteis.
                  </p>
                </div>
                <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid rgba(197,160,89,0.1)' }}>
                  <p className="text-sm mb-4" style={{ color: '#8A8580' }}>
                    Se preferir, você também pode preencher pelo nosso formulário interativo original:
                  </p>
                  <a
                    href="https://form.respondi.app/DQ2AeT6P"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex"
                  >
                    Abrir Formulário Respondi ↗
                  </a>
                </div>
              </form>
            ) : (
              /* Sucesso */
              <div
                className="p-12 rounded-2xl text-center"
                style={{
                  background: '#161616',
                  border: '1px solid rgba(76, 175, 119, 0.3)',
                }}
              >
                <div className="text-6xl mb-6">✅</div>
                <h2
                  className="text-3xl font-bold mb-4"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: '#4CAF77' }}
                >
                  Solicitação Recebida!
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: '#8A8580' }}>
                  Nossa equipe entrará em contato pelo WhatsApp que você informou em até{' '}
                  <strong style={{ color: '#C4BFBA' }}>24 horas úteis</strong>.
                </p>
                <p className="text-base mt-4" style={{ color: '#4A4540' }}>
                  Enquanto isso, siga o Patrick no Instagram para mais conteúdo de liderança:
                </p>
                <a
                  href="https://instagram.com/patrickteixeiras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-6 inline-flex"
                >
                  @patrickteixeiras →
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
