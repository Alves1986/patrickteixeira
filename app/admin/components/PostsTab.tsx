'use client'

import { useState, useEffect } from 'react'

type Post = {
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readTime: string
}

export function PostsTab() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  
  // Form State
  const [slug, setSlug] = useState('')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [content, setContent] = useState('')
  const [date, setDate] = useState('')
  const [readTime, setReadTime] = useState('')

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/admin/posts')
      if (res.ok) {
        const data = await res.json()
        setPosts(data)
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

    // Generate a slug if empty
    const finalSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')

    let updatedPosts = [...posts]
    
    if (editingPost) {
      // Edit
      updatedPosts = updatedPosts.map(p => 
        p.slug === editingPost.slug 
          ? { slug: finalSlug, title, excerpt, content, date, readTime } 
          : p
      )
    } else {
      // Create
      const newPost = { slug: finalSlug, title, excerpt, content, date: date || new Date().toLocaleDateString('pt-BR'), readTime: readTime || '5 min' }
      updatedPosts.unshift(newPost)
    }

    try {
      await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPosts)
      })
      setPosts(updatedPosts)
      closeModal()
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (targetSlug: string) => {
    if (!confirm('Tem certeza que deseja apagar este artigo?')) return
    setLoading(true)
    
    const updatedPosts = posts.filter(p => p.slug !== targetSlug)
    try {
      await fetch('/api/admin/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPosts)
      })
      setPosts(updatedPosts)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  const openModal = (post?: Post) => {
    if (post) {
      setEditingPost(post)
      setSlug(post.slug)
      setTitle(post.title)
      setExcerpt(post.excerpt)
      setContent(post.content)
      setDate(post.date)
      setReadTime(post.readTime)
    } else {
      setEditingPost(null)
      setSlug('')
      setTitle('')
      setExcerpt('')
      setContent('')
      setDate(new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }))
      setReadTime('5 min')
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingPost(null)
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ color: '#FAFAFA', fontFamily: "'Playfair Display', serif" }}>
            Artigos do Blog
          </h2>
          <p className="text-sm mt-1" style={{ color: '#8A8580' }}>
            Gerencie os artigos publicados no seu blog.
          </p>
        </div>
        <button onClick={() => openModal()} className="btn-primary text-sm px-4 py-2">
          <span>+ Novo Artigo</span>
        </button>
      </div>

      {loading ? (
        <div className="p-12 text-center animate-pulse">Carregando artigos...</div>
      ) : posts.length === 0 ? (
        <div className="p-12 text-center text-[#8A8580]">Nenhum artigo publicado ainda.</div>
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <div key={post.slug} className="p-6 rounded-xl flex flex-col md:flex-row items-start md:items-center gap-6" style={{ background: '#161616', border: '1px solid #1E1E1E' }}>
              <div className="flex-1">
                <h3 className="font-bold text-lg" style={{ color: '#C5A059' }}>{post.title}</h3>
                <div className="flex items-center gap-4 text-xs mt-2" style={{ color: '#8A8580' }}>
                  <span>📅 {post.date}</span>
                  <span>⏱️ {post.readTime}</span>
                </div>
                <p className="text-sm mt-3 line-clamp-2" style={{ color: '#FAFAFA' }}>
                  {post.excerpt}
                </p>
              </div>
              <div className="flex flex-col gap-2 shrink-0 w-full md:w-auto">
                <button onClick={() => openModal(post)} className="btn-outline text-xs px-4 py-2 text-center">Editar Artigo</button>
                <button onClick={() => handleDelete(post.slug)} className="text-xs px-4 py-2 hover:text-white text-center" style={{ color: '#E05252' }}>Apagar</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }} onClick={closeModal}>
          <div className="w-full max-w-3xl rounded-2xl p-8 max-h-[90vh] overflow-y-auto" style={{ background: '#161616', border: '1px solid rgba(197,160,89,0.2)' }} onClick={e => e.stopPropagation()}>
            <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAFA' }}>
              {editingPost ? 'Editar Artigo' : 'Novo Artigo'}
            </h3>
            
            <form onSubmit={handleSave} className="space-y-6">
              <div>
                <label className="form-label">Título do Artigo</label>
                <input required type="text" value={title} onChange={e => setTitle(e.target.value)} className="form-field text-lg font-bold" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="form-label">Data</label>
                  <input type="text" value={date} onChange={e => setDate(e.target.value)} className="form-field" placeholder="Ex: 16 de Julho de 2026" />
                </div>
                <div>
                  <label className="form-label">Tempo de Leitura</label>
                  <input type="text" value={readTime} onChange={e => setReadTime(e.target.value)} className="form-field" placeholder="Ex: 5 min" />
                </div>
              </div>

              <div>
                <label className="form-label">Resumo (Aparece na lista do blog)</label>
                <textarea required value={excerpt} onChange={e => setExcerpt(e.target.value)} className="form-field h-24 resize-y leading-relaxed" />
              </div>

              <div>
                <label className="form-label">Conteúdo Completo</label>
                <textarea required value={content} onChange={e => setContent(e.target.value)} className="form-field h-64 resize-y leading-relaxed" placeholder="Escreva o texto completo do artigo aqui..." />
              </div>

              <div className="flex gap-4 pt-4 border-t" style={{ borderColor: '#1E1E1E' }}>
                <button type="submit" className="btn-primary text-sm py-4 px-8 flex-1">
                  <span>{editingPost ? 'Salvar Artigo' : 'Publicar Artigo'}</span>
                </button>
                <button type="button" onClick={closeModal} className="btn-outline text-sm py-4 px-8">
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
