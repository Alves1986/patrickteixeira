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

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingMenu, setEditingMenu] = useState<MenuLink | null>(null)
  
  // Form state
  const [label, setLabel] = useState('')
  const [href, setHref] = useState('')
  const [location, setLocation] = useState<'header' | 'footer'>('header')
  const [order, setOrder] = useState(0)

  useEffect(() => {
    fetchMenus()
  }, [])

  const fetchMenus = async () => {
    try {
      const res = await fetch('/api/admin/menus')
      if (res.ok) {
        const data = await res.json()
        setMenus(data)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    let updatedMenus = [...menus]
    
    if (editingMenu) {
      // Edit
      updatedMenus = updatedMenus.map(m => 
        m.id === editingMenu.id 
          ? { ...m, label, href, location, order_index: order } 
          : m
      )
    } else {
      // Create
      updatedMenus.push({
        id: Date.now().toString(),
        label,
        href,
        location,
        order_index: order
      })
    }

    try {
      await fetch('/api/admin/menus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedMenus)
      })
      setMenus(updatedMenus)
      closeModal()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja remover este link?')) return
    
    setLoading(true)
    const updatedMenus = menus.filter(m => m.id !== id)
    
    try {
      await fetch('/api/admin/menus', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedMenus)
      })
      setMenus(updatedMenus)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const openModal = (menu?: MenuLink) => {
    if (menu) {
      setEditingMenu(menu)
      setLabel(menu.label)
      setHref(menu.href)
      setLocation(menu.location)
      setOrder(menu.order_index)
    } else {
      setEditingMenu(null)
      setLabel('')
      setHref('/')
      setLocation('header')
      setOrder(menus.length + 1)
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingMenu(null)
  }

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
        <button onClick={() => openModal()} className="btn-primary text-sm px-4 py-2">
          <span>+ Adicionar Link</span>
        </button>
      </div>

      {loading ? (
        <div className="p-12 text-center animate-pulse">Processando...</div>
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
                      <button onClick={() => openModal(menu)} className="text-xs px-2 py-1 hover:text-white" style={{ color: '#8A8580' }}>Editar</button>
                      <button onClick={() => handleDelete(menu.id)} className="text-xs px-2 py-1 hover:text-white" style={{ color: '#E05252' }}>Remover</button>
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
                      <button onClick={() => openModal(menu)} className="text-xs px-2 py-1 hover:text-white" style={{ color: '#8A8580' }}>Editar</button>
                      <button onClick={() => handleDelete(menu.id)} className="text-xs px-2 py-1 hover:text-white" style={{ color: '#E05252' }}>Remover</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }} onClick={closeModal}>
          <div className="w-full max-w-md rounded-2xl p-8" style={{ background: '#161616', border: '1px solid rgba(197,160,89,0.2)' }} onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAFA' }}>
              {editingMenu ? 'Editar Link' : 'Novo Link'}
            </h3>
            
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="form-label">Nome do Link</label>
                <input required type="text" value={label} onChange={e => setLabel(e.target.value)} className="form-field" placeholder="Ex: Sobre" />
              </div>
              
              <div>
                <label className="form-label">URL de destino (Link)</label>
                <input required type="text" value={href} onChange={e => setHref(e.target.value)} className="form-field" placeholder="Ex: /sobre ou https://..." />
              </div>

              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="form-label">Onde aparecer?</label>
                  <select value={location} onChange={e => setLocation(e.target.value as any)} className="form-field">
                    <option value="header">Cabeçalho (Menu Principal)</option>
                    <option value="footer">Rodapé (Lá embaixo)</option>
                  </select>
                </div>
                <div className="w-24">
                  <label className="form-label">Ordem</label>
                  <input required type="number" value={order} onChange={e => setOrder(Number(e.target.value))} className="form-field" />
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button type="submit" className="btn-primary text-sm py-3 flex-1 text-center">
                  <span>{editingMenu ? 'Salvar Alterações' : 'Adicionar'}</span>
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
