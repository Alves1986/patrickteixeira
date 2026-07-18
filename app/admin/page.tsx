'use client'

import { useState } from 'react'
import Image from 'next/image'
import { LeadsTab } from './components/LeadsTab'
import { MenusTab } from './components/MenusTab'
import { ContentTab } from './components/ContentTab'
import { PostsTab } from './components/PostsTab'
import { SettingsTab } from './components/SettingsTab'

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState(false)
  const [activeTab, setActiveTab] = useState<'leads' | 'posts' | 'menus' | 'content' | 'settings'>('leads')

  // Autenticação simples (Fallback até integração completa do Supabase Auth)
  const ADMIN_PASSWORD = 'kairos2024'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  // Tela de login
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0A0A0A' }}>
        <div className="w-full max-w-sm p-8 rounded-2xl" style={{ background: '#161616', border: '1px solid rgba(197,160,89,0.15)' }}>
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="Kairós Leadership"
                width={120}
                height={36}
                className="h-9 w-auto object-contain"
                style={{ filter: 'drop-shadow(0 0 8px rgba(197,160,89,0.3))' }}
              />
            </div>
            <p className="text-xs tracking-widest uppercase font-semibold mt-2" style={{ color: '#4A4540' }}>
              Painel Administrativo
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <label htmlFor="admin-password" className="form-label">Senha</label>
            <input
              id="admin-password"
              type="password"
              required
              className="form-field mb-4"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {authError && (
              <p className="text-xs mb-4" style={{ color: '#E05252' }}>
                Senha incorreta. Tente novamente.
              </p>
            )}
            <button type="submit" className="btn-primary w-full">
              <span>Entrar</span>
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#0A0A0A', fontFamily: "'Raleway', sans-serif" }}>
      {/* Sidebar */}
      <aside className="w-64 border-r flex flex-col" style={{ borderColor: '#1E1E1E', background: '#111111' }}>
        <div className="p-6 border-b" style={{ borderColor: '#1E1E1E' }}>
          <Image
            src="/logo.png"
            alt="Kairós Leadership"
            width={120}
            height={36}
            className="h-8 w-auto object-contain mb-2"
            style={{ filter: 'drop-shadow(0 0 6px rgba(197,160,89,0.25))' }}
          />
          <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#C5A059' }}>
            Admin Panel
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          <button
            onClick={() => setActiveTab('leads')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'leads' ? 'bg-[#1E1E1E] text-white' : 'text-[#8A8580] hover:bg-[#161616] hover:text-white'
            }`}
          >
            📋 Leads & Contatos
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'posts' ? 'bg-[#1E1E1E] text-white' : 'text-[#8A8580] hover:bg-[#161616] hover:text-white'
            }`}
          >
            📰 Artigos (Blog)
          </button>
          <button
            onClick={() => setActiveTab('menus')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'menus' ? 'bg-[#1E1E1E] text-white' : 'text-[#8A8580] hover:bg-[#161616] hover:text-white'
            }`}
          >
            🔗 Menus e Links
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'content' ? 'bg-[#1E1E1E] text-white' : 'text-[#8A8580] hover:bg-[#161616] hover:text-white'
            }`}
          >
            📝 Textos do Site
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all ${
              activeTab === 'settings' ? 'bg-[#1E1E1E] text-white' : 'text-[#8A8580] hover:bg-[#161616] hover:text-white'
            }`}
          >
            ⚙️ Configurações
          </button>
        </nav>

        <div className="p-4 border-t" style={{ borderColor: '#1E1E1E' }}>
          <a href="/" className="block w-full text-center text-xs font-semibold tracking-wide uppercase mb-3" style={{ color: '#8A8580' }}>
            ← Ver site
          </a>
          <button
            onClick={() => setAuthenticated(false)}
            className="w-full btn-outline text-xs py-2"
            style={{ color: '#E05252', borderColor: '#E05252' }}
          >
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto p-8">
          {activeTab === 'leads' && <LeadsTab />}
          {activeTab === 'posts' && <PostsTab />}
          {activeTab === 'menus' && <MenusTab />}
          {activeTab === 'content' && <ContentTab />}
          {activeTab === 'settings' && <SettingsTab />}
        </div>
      </main>
    </div>
  )
}
