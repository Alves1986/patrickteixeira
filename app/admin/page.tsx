'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

// Tipos
type Lead = {
  id: string
  name: string
  whatsapp: string
  email?: string
  business: string
  pain_description: string
  source?: string
  status: 'novo' | 'em_contato' | 'qualificado' | 'convertido' | 'perdido'
  notes?: string
  created_at: string
}

const STATUS_LABELS: Record<Lead['status'], string> = {
  novo: 'Novo',
  em_contato: 'Em Contato',
  qualificado: 'Qualificado',
  convertido: 'Convertido ✓',
  perdido: 'Perdido',
}

const STATUS_COLORS: Record<Lead['status'], string> = {
  novo: '#C5A059',
  em_contato: '#4A7CC7',
  qualificado: '#9B59B6',
  convertido: '#4CAF77',
  perdido: '#E05252',
}

function StatusBadge({ status }: { status: Lead['status'] }) {
  return (
    <span
      className="text-xs font-bold px-3 py-1 rounded-full"
      style={{
        background: `${STATUS_COLORS[status]}15`,
        color: STATUS_COLORS[status],
        border: `1px solid ${STATUS_COLORS[status]}40`,
      }}
    >
      {STATUS_LABELS[status]}
    </span>
  )
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('todos')
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState(false)

  // Autenticação simples (senha fixa — substituir por Supabase Auth)
  const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'kairos2024'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true)
      setAuthError(false)
    } else {
      setAuthError(true)
    }
  }

  useEffect(() => {
    if (!authenticated) return

    const fetchLeads = async () => {
      try {
        const res = await fetch('/api/admin/leads')
        if (res.ok) {
          const data = await res.json()
          setLeads(data)
        }
      } catch {
        // fallback: dados de exemplo
        setLeads([
          {
            id: '1',
            name: 'Ricardo Mendes',
            whatsapp: '11999990001',
            business: 'Agência de Marketing',
            pain_description: 'Trabalho 14h por dia e minha esposa está pedindo divórcio.',
            source: 'instagram',
            status: 'novo',
            created_at: new Date().toISOString(),
          },
          {
            id: '2',
            name: 'Carlos Ferreira',
            whatsapp: '21988880002',
            business: 'Construtora',
            pain_description: 'Não consigo delegar — tudo depende de mim.',
            source: 'indicacao',
            status: 'em_contato',
            created_at: new Date(Date.now() - 86400000).toISOString(),
          },
          {
            id: '3',
            name: 'André Pereira',
            whatsapp: '31977770003',
            business: 'Escritório de Advocacia',
            pain_description: 'Quero crescer mas não sei como me organizar.',
            source: 'palestra',
            status: 'qualificado',
            created_at: new Date(Date.now() - 172800000).toISOString(),
          },
        ])
      } finally {
        setLoading(false)
      }
    }

    fetchLeads()
  }, [authenticated])

  const filteredLeads = filterStatus === 'todos'
    ? leads
    : leads.filter(l => l.status === filterStatus)

  const stats = {
    total: leads.length,
    novos: leads.filter(l => l.status === 'novo').length,
    emContato: leads.filter(l => l.status === 'em_contato').length,
    convertidos: leads.filter(l => l.status === 'convertido').length,
  }

  // Tela de login
  if (!authenticated) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: '#0A0A0A' }}
      >
        <div
          className="w-full max-w-sm p-8 rounded-2xl"
          style={{ background: '#161616', border: '1px solid rgba(197,160,89,0.15)' }}
        >
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
    <div className="min-h-screen" style={{ background: '#0A0A0A', fontFamily: "'Raleway', sans-serif" }}>
      {/* Header Admin */}
      <header
        className="border-b px-6 py-4 flex items-center justify-between sticky top-0 z-50"
        style={{
          background: 'rgba(10,10,10,0.95)',
          backdropFilter: 'blur(8px)',
          borderColor: '#1E1E1E',
        }}
      >
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Kairós Leadership"
            width={100}
            height={30}
            className="h-8 w-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 6px rgba(197,160,89,0.25))' }}
          />
          <span
            className="text-xs font-bold tracking-wider uppercase px-2 py-1 rounded"
            style={{ background: 'rgba(197,160,89,0.08)', color: '#C5A059', border: '1px solid rgba(197,160,89,0.2)' }}
          >
            Admin
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="/"
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: '#4A4540' }}
          >
            ← Ver site
          </a>
          <button
            onClick={() => setAuthenticated(false)}
            className="text-xs font-semibold tracking-wide uppercase"
            style={{ color: '#E05252' }}
          >
            Sair
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total de Leads', value: stats.total, color: '#FAFAFA' },
            { label: 'Novos', value: stats.novos, color: '#C5A059' },
            { label: 'Em Contato', value: stats.emContato, color: '#4A7CC7' },
            { label: 'Convertidos', value: stats.convertidos, color: '#4CAF77' },
          ].map(stat => (
            <div
              key={stat.label}
              className="p-6 rounded-xl"
              style={{ background: '#161616', border: '1px solid #1E1E1E' }}
            >
              <div className="text-3xl font-bold mb-1" style={{ color: stat.color, fontFamily: "'Playfair Display', serif" }}>
                {stat.value}
              </div>
              <div className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#4A4540' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Leads table */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ background: '#161616', border: '1px solid #1E1E1E' }}
        >
          {/* Toolbar */}
          <div className="px-6 py-4 border-b flex items-center justify-between gap-4 flex-wrap" style={{ borderColor: '#1E1E1E' }}>
            <h2 className="font-bold" style={{ color: '#FAFAFA', fontFamily: "'Playfair Display', serif" }}>
              Leads Recebidos
            </h2>
            <div className="flex items-center gap-2">
              <select
                className="form-field text-sm py-2 w-auto"
                value={filterStatus}
                onChange={e => setFilterStatus(e.target.value)}
                id="filter-status"
                aria-label="Filtrar por status"
              >
                <option value="todos">Todos os status</option>
                {Object.entries(STATUS_LABELS).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>
          </div>

          {loading ? (
            <div className="p-20 text-center">
              <div className="text-4xl mb-4 animate-pulse">⏳</div>
              <p style={{ color: '#4A4540' }}>Carregando leads...</p>
            </div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-20 text-center">
              <div className="text-4xl mb-4">📭</div>
              <p style={{ color: '#4A4540' }}>Nenhum lead encontrado.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: '1px solid #1E1E1E' }}>
                    {['Nome', 'WhatsApp', 'Negócio', 'Origem', 'Status', 'Data', ''].map(h => (
                      <th
                        key={h}
                        className="text-left px-6 py-3 text-xs font-bold tracking-widest uppercase"
                        style={{ color: '#4A4540' }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredLeads.map((lead, i) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-[#111111] transition-colors cursor-pointer"
                      style={{ borderBottom: i < filteredLeads.length - 1 ? '1px solid #1E1E1E' : 'none' }}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <td className="px-6 py-4">
                        <span className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>{lead.name}</span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`https://wa.me/${lead.whatsapp}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm hover:underline"
                          style={{ color: '#4CAF77' }}
                          onClick={e => e.stopPropagation()}
                        >
                          {lead.whatsapp}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm" style={{ color: '#8A8580' }}>{lead.business}</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs" style={{ color: '#4A4540' }}>{lead.source || '—'}</span>
                      </td>
                      <td className="px-6 py-4">
                        <StatusBadge status={lead.status} />
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs" style={{ color: '#4A4540' }}>
                          {new Date(lead.created_at).toLocaleDateString('pt-BR')}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs" style={{ color: '#C5A059' }}>Ver →</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Modal de Lead */}
      {selectedLead && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(4px)' }}
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl p-8"
            style={{ background: '#161616', border: '1px solid rgba(197,160,89,0.2)' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: '#FAFAFA' }}>
                  {selectedLead.name}
                </h3>
                <p className="text-sm" style={{ color: '#8A8580' }}>{selectedLead.business}</p>
              </div>
              <StatusBadge status={selectedLead.status} />
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="form-label">WhatsApp</p>
                <a
                  href={`https://wa.me/${selectedLead.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold"
                  style={{ color: '#4CAF77' }}
                >
                  {selectedLead.whatsapp} — Abrir conversa →
                </a>
              </div>
              {selectedLead.email && (
                <div>
                  <p className="form-label">E-mail</p>
                  <p className="text-sm" style={{ color: '#8A8580' }}>{selectedLead.email}</p>
                </div>
              )}
              <div>
                <p className="form-label">Principal dor</p>
                <p
                  className="text-sm leading-relaxed p-4 rounded-lg"
                  style={{ background: '#111111', color: '#8A8580', border: '1px solid #1E1E1E' }}
                >
                  {selectedLead.pain_description}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${selectedLead.whatsapp}?text=Olá, ${selectedLead.name.split(' ')[0]}! Aqui é a equipe do Patrick Teixeira. Vi que você se inscreveu para o diagnóstico gratuito. Vamos agendar?`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 flex-1 text-center"
              >
                <span>Iniciar WhatsApp →</span>
              </a>
              <button
                onClick={() => setSelectedLead(null)}
                className="btn-outline text-sm py-3 px-6"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
