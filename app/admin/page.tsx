'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  IconArrowLeft,
  IconFileText,
  IconInbox,
  IconLink,
  IconLogOut,
  IconSettings,
  IconType,
} from '@/components/ui/Icons'
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

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0A0A0A' }}>
        <div
          className="w-full max-w-sm p-8 rounded-2xl flutuante"
          style={{ background: '#161616', border: '1px solid #27272A' }}
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Image
                src="/logo.png"
                alt="Kairós Leadership"
                width={120}
                height={36}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-xs tracking-widest uppercase font-semibold mt-2" style={{ color: '#B8B2AC' }}>
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
              <p role="alert" className="text-xs mb-4" style={{ color: '#E05252' }}>
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

  const navItems = [
    { id: 'leads' as const, label: 'Leads & Contatos', Icon: IconInbox },
    { id: 'posts' as const, label: 'Artigos (Blog)', Icon: IconFileText },
    { id: 'menus' as const, label: 'Menus e Links', Icon: IconLink },
    { id: 'content' as const, label: 'Textos do Site', Icon: IconType },
    { id: 'settings' as const, label: 'Configurações', Icon: IconSettings },
  ]

  return (
    <div className="min-h-screen flex" style={{ background: '#0A0A0A' }}>
      {/* Sidebar */}
      <aside className="w-64 border-r flex flex-col" style={{ borderColor: '#27272A', background: '#111111' }}>
        <div className="p-6 border-b" style={{ borderColor: '#27272A' }}>
          <Image
            src="/logo.png"
            alt="Kairós Leadership"
            width={120}
            height={36}
            className="h-8 w-auto object-contain mb-2"
          />
          <span className="text-xs font-bold tracking-wider uppercase" style={{ color: '#C5A059' }}>
            Admin Panel
          </span>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto" aria-label="Navegação do painel">
          {navItems.map(({ id, label, Icon }) => {
            const isActive = activeTab === id
            return (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  isActive ? 'bg-[#161616] text-[#FAFAFA]' : 'text-[#B8B2AC] hover:bg-[#161616] hover:text-[#FAFAFA]'
                }`}
                style={isActive ? { border: '1px solid #C5A059' } : { border: '1px solid transparent' }}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span>{label}</span>
              </button>
            )
          })}
        </nav>

        <div className="p-4 border-t" style={{ borderColor: '#27272A' }}>
          <a
            href="/"
            className="flex items-center justify-center gap-2 w-full text-xs font-semibold tracking-wide uppercase mb-3 hover:text-[#FAFAFA]"
            style={{ color: '#B8B2AC' }}
          >
            <IconArrowLeft className="w-4 h-4" />
            <span>Ver site</span>
          </a>
          <button
            onClick={() => setAuthenticated(false)}
            className="w-full btn-outline text-xs py-2 flex items-center justify-center gap-2"
          >
            <IconLogOut className="w-4 h-4" />
            <span>Sair</span>
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
