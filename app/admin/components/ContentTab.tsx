'use client'

import { useState, useEffect } from 'react'

type PageContent = {
  id: string
  content: string
  description?: string
  updated_at?: string
}

export function ContentTab() {
  const [contents, setContents] = useState<PageContent[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando busca do banco ou fallback
    const fetchContents = async () => {
      try {
        const res = await fetch('/api/admin/content')
        if (res.ok) {
          const data = await res.json()
          setContents(data)
        } else {
          throw new Error('Falha na API')
        }
      } catch {
        // Fallback local
        setContents([
          { id: 'home_hero_title', content: 'Homens Constroem Negócios. Lideres Constroem Legados.', description: 'Título principal da Home' },
          { id: 'home_hero_subtitle', content: 'Liderança não é apenas sobre faturamento. É sobre governar a própria vida, construir negócios sólidos e liderar a família com honra.', description: 'Subtítulo da Home' },
          { id: 'sobre_bio', content: 'Patrick Teixeira é especialista em Liderança Masculina...', description: 'Texto da biografia' },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchContents()
  }, [])

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
        <div className="p-12 text-center animate-pulse">Carregando conteúdos...</div>
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
              <button className="btn-outline text-sm px-4 py-2 shrink-0">
                Editar Texto
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
