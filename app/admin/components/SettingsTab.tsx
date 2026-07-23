'use client'

import { useState, useEffect } from 'react'

type Settings = {
  ctaLabel: string
  ctaLink: string
  bookLink?: string
}

export function SettingsTab() {
  const [settings, setSettings] = useState<Settings>({ ctaLabel: '', ctaLink: '', bookLink: '' })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  useEffect(() => {
    fetchSettings()
  }, [])

  const fetchSettings = async () => {
    try {
      const res = await fetch('/api/admin/settings')
      if (res.ok) {
        const data = await res.json()
        setSettings(data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setSuccessMsg('')

    try {
      await fetch('/api/admin/settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(settings)
      })
      setSuccessMsg('Configurações salvas com sucesso! O site já foi atualizado.')
      setTimeout(() => setSuccessMsg(''), 4000)
    } catch (e) {
      console.error(e)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-8 max-w-3xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: '#FAFAFA', fontFamily: "'Playfair Display', serif" }}>
            Configurações Globais
          </h2>
          <p className="text-sm mt-1" style={{ color: '#8A8580' }}>
            Gerencie o botão de chamada para ação principal de todo o site.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center animate-pulse">Carregando configurações...</div>
      ) : (
        <form onSubmit={handleSave} className="p-8 rounded-xl space-y-6" style={{ background: '#161616', border: '1px solid #1E1E1E' }}>
          
          <div>
            <h3 className="font-bold text-lg mb-4" style={{ color: '#C5A059' }}>Botão Principal (Formulário / WhatsApp)</h3>
            <p className="text-sm mb-6" style={{ color: '#8A8580' }}>
              Ao alterar estas informações, todos os botões "Diagnóstico Gratuito" ou "Falar no WhatsApp" do Cabeçalho, Rodapé e Página Inicial serão atualizados instantaneamente.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="form-label">Texto do Botão</label>
              <input 
                required 
                type="text" 
                value={settings.ctaLabel} 
                onChange={e => setSettings({ ...settings, ctaLabel: e.target.value })} 
                className="form-field" 
                placeholder="Ex: Diagnóstico Gratuito" 
              />
            </div>

            <div>
              <label className="form-label">Link de Destino</label>
              <input 
                required 
                type="text" 
                value={settings.ctaLink} 
                onChange={e => setSettings({ ...settings, ctaLink: e.target.value })} 
                className="form-field" 
                placeholder="Ex: https://form.respondi.app/..." 
              />
            </div>

            <div>
              <label className="form-label">Link de Compra do Livro</label>
              <input 
                type="url" 
                value={settings.bookLink || ''} 
                onChange={e => setSettings({ ...settings, bookLink: e.target.value })} 
                className="form-field" 
                placeholder="Ex: https://loja.amazon.com.br/..." 
              />
              <p className="text-xs mt-1" style={{ color: '#4A4540' }}>
                Quando preenchido, após o formulário de solicitação do livro o usuário verá o botão de compra direto. Deixe em branco para não exibir.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t flex items-center gap-4" style={{ borderColor: '#1E1E1E' }}>
            <button type="submit" disabled={saving} className="btn-primary text-sm py-3 px-8">
              <span>{saving ? 'Salvando...' : 'Salvar Configurações'}</span>
            </button>
            {successMsg && <span className="text-sm font-semibold" style={{ color: '#4CAF77' }}>✓ {successMsg}</span>}
          </div>
        </form>
      )}
    </div>
  )
}
