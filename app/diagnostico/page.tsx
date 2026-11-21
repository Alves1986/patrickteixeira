'use client'

import { useState } from 'react'
import { SiteLayout } from '@/components/layout/SiteLayout'
import { IconArrowRight, IconCheckCircle, IconExternalLink } from '@/components/ui/Icons'

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
      window.open('https://form.respondi.app/DQ2AeT6P', '_blank')
    } finally {
      setLoading(false)
    }
  }

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="pt-32 pb-16" aria-label="Diagnóstico Gratuito">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="eyebrow mb-6 block justify-center">Gratuito · Sem compromisso</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">
              Seu <span style={{ color: '#C5A059' }}>Diagnóstico Gratuito</span>
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: '#B8B2AC' }}>
              <span className="tabular-nums">20</span> minutos para entender onde você está travado e qual o caminho mais curto
              para onde quer chegar. Sem pitch de venda agressivo. Sem pressão.
            </p>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section className="section-padding-sm pb-24" aria-label="Formulário de diagnóstico">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mx-auto">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                aria-busy={loading}
                className="space-y-6"
                aria-label="Formulário de diagnóstico gratuito"
              >
                <div
                  className="p-8 rounded-2xl flutuante"
                  style={{
                    background: '#161616',
                    border: '1px solid #27272A',
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
                      <option value="livro">Pelo livro &quot;A Escada Invisível&quot;</option>
                      <option value="busca">Busca no Google</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    id="submit-diagnostico"
                    disabled={loading}
                    className="btn-primary w-full text-base py-4"
                  >
                    <span>{loading ? 'Enviando...' : 'Quero meu Diagnóstico Gratuito'}</span>
                    {!loading && <IconArrowRight className="w-5 h-5" />}
                  </button>

                  <p className="text-center text-xs mt-4" style={{ color: '#B8B2AC' }}>
                    Seus dados são <span className="tabular-nums">100%</span> seguros e não serão compartilhados.
                    Nossa equipe retornará em até <span className="tabular-nums">24h</span> úteis.
                  </p>
                </div>
                <div className="mt-8 pt-8 text-center" style={{ borderTop: '1px solid #27272A' }}>
                  <p className="text-sm mb-4" style={{ color: '#B8B2AC' }}>
                    Se preferir, você também pode preencher pelo nosso formulário interativo original:
                  </p>
                  <a
                    href="https://form.respondi.app/DQ2AeT6P"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline inline-flex"
                  >
                    <span>Abrir Formulário Respondi</span>
                    <IconExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </form>
            ) : (
              /* Sucesso */
              <div
                role="status"
                className="p-12 rounded-2xl text-center transition-opacity duration-200"
                style={{
                  background: '#161616',
                  border: '1px solid #C5A059',
                }}
              >
                <div className="flex justify-center mb-6">
                  <IconCheckCircle className="w-12 h-12 text-[#C5A059]" />
                </div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#FAFAFA' }}>
                  Solicitação Recebida!
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: '#B8B2AC' }}>
                  Nossa equipe entrará em contato pelo WhatsApp que você informou em até{' '}
                  <strong style={{ color: '#FAFAFA' }} className="tabular-nums">24 horas úteis</strong>.
                </p>
                <p className="text-base mt-4" style={{ color: '#B8B2AC' }}>
                  Enquanto isso, siga o Patrick no Instagram para mais conteúdo de liderança:
                </p>
                <a
                  href="https://instagram.com/patrickteixeiras"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline mt-6 inline-flex"
                >
                  <span>@patrickteixeiras</span>
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
