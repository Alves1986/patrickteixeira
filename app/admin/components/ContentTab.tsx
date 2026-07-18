'use client'

import { useState, useEffect } from 'react'

type PageContent = {
  id: string
  content: string
  description?: string
}

export function ContentTab() {
  const [contents, setContents] = useState<PageContent[]>([])
  const [loading, setLoading] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingContent, setEditingContent] = useState<PageContent | null>(null)
  const [textContent, setTextContent] = useState('')

  useEffect(() => {
    fetchContents()
  }, [])

  const fetchContents = async () => {
    try {
      const res = await fetch('/api/admin/content')
      if (res.ok) {
        const data = await res.json()
        setContents(data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!editingContent) return

    setLoading(true)
    const updatedContents = contents.map(c => 
      c.id === editingContent.id ? { ...c, content: textContent } : c
    )

    try {
      await fetch('/api/admin/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedContents)
      })
      setContents(updatedContents)
      closeModal()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const openModal = (item: PageContent) => {
    setEditingContent(item)
    setTextContent(item.content)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingContent(null)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: '#FAFAFA', fontFamily: "'Playfair Display', serif" }}>
            Gerenciamento de Textos (Conteúdo)
          </h2>
          <p className="text-sm mt-1" style={{ color: '#8A8580' }}>
            Altere as chamadas e textos principais das páginas.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="p-12 text-center animate-pulse">Processando...</div>
      ) : (
        <div className="space-y-4">
          {contents.map((item) => (
            <div key={item.id} className="p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-6" style={{ background: '#161616', border: '1px solid #1E1E1E' }}>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold px-2 py-1 rounded bg-[#2A2A2A] text-gray-300 font-mono">
                    {item.id}
                  </span>
                  <span className="text-sm" style={{ color: '#8A8580' }}>{item.description}</span>
                </div>
                <div className="text-base" style={{ color: '#FAFAFA' }}>
                  "{item.content}"
                </div>
              </div>
              <button onClick={() => openModal(item)} className="btn-outline text-sm px-4 py-2 shrink-0">
                Editar Texto
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && editingContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }} onClick={closeModal}>
          <div className="w-full max-w-2xl rounded-2xl p-8" style={{ background: '#161616', border: '1px solid rgba(197,160,89,0.2)' }} onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAFA' }}>
              Editar Conteúdo
            </h3>
            <p className="text-sm mb-6" style={{ color: '#8A8580' }}>{editingContent.description}</p>
            
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="form-label">Texto a ser exibido no site</label>
                <textarea 
                  required 
                  value={textContent} 
                  onChange={e => setTextContent(e.target.value)} 
                  className="form-field min-h-[150px] resize-y leading-relaxed" 
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button type="submit" className="btn-primary text-sm py-3 flex-1 text-center">
                  <span>Salvar Texto</span>
                </button>
                <button type="button" onClick={closeModal} className="btn-outline text-sm py-3 px-6">
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
