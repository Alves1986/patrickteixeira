'use client'

import { useState, useEffect } from 'react'

type MenuLink = {
  id: string
  label: string
  href: string
  order_index: number
  location: 'header' | 'footer'
}

export function MenusTab() {
  const [menus, setMenus] = useState<MenuLink[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulando busca do banco ou fallback
    const fetchMenus = async () => {
      try {
        const res = await fetch('/api/admin/menus')
        if (res.ok) {
          const data = await res.json()
          setMenus(data)
        } else {
          throw new Error('Falha na API')
        }
      } catch {
        // Fallback local se não tiver banco configurado
        setMenus([
          { id: '1', label: 'Sobre', href: '/sobre', location: 'header', order_index: 1 },
          { id: '2', label: 'Palestras', href: '/palestras', location: 'header', order_index: 2 },
          { id: '3', label: 'Livro', href: '/', location: 'header', order_index: 3 },
          { id: '4', label: 'Mentoria', href: '/mentoria', location: 'header', order_index: 4 },
          { id: '5', label: 'Blog', href: '/blog', location: 'header', order_index: 5 },
        ])
      } finally {
        setLoading(false)
      }
    }
    fetchMenus()
  }, [])

  const headerMenus = menus.filter((m) => m.location === 'header').sort((a, b) => a.order_index - b.order_index)
  const footerMenus = menus.filter((m) => m.location === 'footer').sort((a, b) => a.order_index - b.order_index)

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: '#FAFAFA', fontFamily: "'Playfair Display', serif" }}>
            Gerenciamento de Menus
          </h2>
          <p className="text-sm mt-1" style={{ color: '#8A8580' }}>
            Adicione, edite ou remova links do cabeçalho e rodapé do site.
          </p>
        </div>
        <button className="btn-primary text-sm px-4 py-2">
          <span>+ Adicionar Link</span>
        </button>
      </div>

      {loading ? (
        <div className="p-12 text-center animate-pulse">Carregando menus...</div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Header */}
          <div className="p-6 rounded-xl" style={{ background: '#161616', border: '1px solid #1E1E1E' }}>
            <h3 className="font-bold mb-4 text-lg" style={{ color: '#C5A059' }}>Menu Principal (Header)</h3>
            {headerMenus.length === 0 ? (
              <p className="text-sm" style={{ color: '#8A8580' }}>Nenhum link configurado.</p>
            ) : (
              <div className="space-y-3">
                {headerMenus.map((menu) => (
                  <div key={menu.id} className="flex items-center justify-between p-3 rounded bg-[#111111] border border-[#1E1E1E]">
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>{menu.label}</div>
                      <div className="text-xs mt-1" style={{ color: '#4A7CC7' }}>{menu.href}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-xs px-2 py-1 hover:text-white" style={{ color: '#8A8580' }}>Editar</button>
                      <button className="text-xs px-2 py-1 hover:text-white" style={{ color: '#E05252' }}>Remover</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 rounded-xl" style={{ background: '#161616', border: '1px solid #1E1E1E' }}>
            <h3 className="font-bold mb-4 text-lg" style={{ color: '#C5A059' }}>Rodapé (Footer)</h3>
            {footerMenus.length === 0 ? (
              <p className="text-sm" style={{ color: '#8A8580' }}>Nenhum link configurado.</p>
            ) : (
              <div className="space-y-3">
                {footerMenus.map((menu) => (
                  <div key={menu.id} className="flex items-center justify-between p-3 rounded bg-[#111111] border border-[#1E1E1E]">
                    <div>
                      <div className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>{menu.label}</div>
                      <div className="text-xs mt-1" style={{ color: '#4A7CC7' }}>{menu.href}</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-xs px-2 py-1 hover:text-white" style={{ color: '#8A8580' }}>Editar</button>
                      <button className="text-xs px-2 py-1 hover:text-white" style={{ color: '#E05252' }}>Remover</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
