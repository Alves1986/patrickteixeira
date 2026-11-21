'use client'

import { useState, useEffect } from 'react'
import { IconArrowRight } from '@/components/ui/Icons'

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
  convertido: 'Convertido',
  perdido: 'Perdido',
}

function StatusBadge({ status }: { status: Lead['status'] }) {
  const isAccent = status === 'novo' || status === 'convertido'
  return (
    <span
      className="text-xs font-bold px-3 py-1 rounded inline-block"
      style={{
        background: '#111111',
        color: isAccent ? '#C5A059' : '#B8B2AC',
        border: `1px solid ${isAccent ? '#C5A059' : '#27272A'}`,
      }}
    >
      {STATUS_LABELS[status]}
    </span>
  )
}

export function LeadsTab() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null)
  const [filterStatus, setFilterStatus] = useState<string>('todos')

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch('/api/admin/leads')
        if (res.ok) {
          const data = await res.json()
          setLeads(data)
        } else {
          throw new Error('Falha na API')
        }
      } catch {
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
  }, [])

  const filteredLeads = filterStatus === 'todos'
    ? leads
    : leads.filter(l => l.status === filterStatus)

  const stats = {
    total: leads.length,
    novos: leads.filter(l => l.status === 'novo').length,
    emContato: leads.filter(l => l.status === 'em_contato').length,
    convertidos: leads.filter(l => l.status === 'convertido').length,
  }

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total de Leads', value: stats.total, accent: false },
          { label: 'Novos', value: stats.novos, accent: true },
          { label: 'Em Contato', value: stats.emContato, accent: false },
          { label: 'Convertidos', value: stats.convertidos, accent: true },
        ].map(stat => (
          <div
            key={stat.label}
            className="p-6 rounded-2xl"
            style={{ background: '#161616', border: '1px solid #27272A' }}
          >
            <div
              className="text-3xl font-bold mb-1 tabular-nums"
              style={{ color: stat.accent ? '#C5A059' : '#FAFAFA', fontFamily: 'var(--font-display)' }}
            >
              {stat.value}
            </div>
            <div className="text-xs font-semibold tracking-wider uppercase" style={{ color: '#B8B2AC' }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Leads table */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: '#161616', border: '1px solid #27272A' }}
      >
        <div className="px-6 py-4 border-b flex items-center justify-between gap-4 flex-wrap" style={{ borderColor: '#27272A' }}>
          <h2 className="font-bold text-lg" style={{ color: '#FAFAFA' }}>
            Leads Recebidos
          </h2>
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

        {loading ? (
          <div aria-busy="true" aria-label="Carregando leads" className="p-6 space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="esqueleto h-12 w-full" />
            ))}
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-20 text-center" style={{ color: '#B8B2AC' }}>Nenhum lead encontrado.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr style={{ borderBottom: '1px solid #27272A' }}>
                  {['Nome', 'WhatsApp', 'Negócio', 'Origem', 'Status', 'Data', ''].map(h => (
                    <th key={h} className="px-6 py-3 text-xs font-bold tracking-widest uppercase" style={{ color: '#B8B2AC' }}>
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
                    style={{ borderBottom: i < filteredLeads.length - 1 ? '1px solid #27272A' : 'none' }}
                    onClick={() => setSelectedLead(lead)}
                  >
                    <td className="px-6 py-4"><span className="font-semibold text-sm" style={{ color: '#FAFAFA' }}>{lead.name}</span></td>
                    <td className="px-6 py-4">
                      <a
                        href={`https://wa.me/${lead.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:underline tabular-nums"
                        style={{ color: '#C5A059' }}
                        onClick={e => e.stopPropagation()}
                      >
                        {lead.whatsapp}
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm" style={{ color: '#B8B2AC' }}>{lead.business}</td>
                    <td className="px-6 py-4 text-xs" style={{ color: '#B8B2AC' }}>{lead.source || '—'}</td>
                    <td className="px-6 py-4"><StatusBadge status={lead.status} /></td>
                    <td className="px-6 py-4 text-xs tabular-nums" style={{ color: '#B8B2AC' }}>
                      {new Date(lead.created_at).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="px-6 py-4 text-xs" style={{ color: '#C5A059' }}>
                      <span className="inline-flex items-center gap-1">
                        <span>Ver</span>
                        <IconArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal de Lead */}
      {selectedLead && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelectedLead(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl p-8 flutuante"
            style={{ background: '#161616', border: '1px solid #27272A' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold" style={{ color: '#FAFAFA' }}>{selectedLead.name}</h3>
                <p className="text-sm" style={{ color: '#B8B2AC' }}>{selectedLead.business}</p>
              </div>
              <StatusBadge status={selectedLead.status} />
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#B8B2AC' }}>WhatsApp</p>
                <a
                  href={`https://wa.me/${selectedLead.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold inline-flex items-center gap-1 tabular-nums"
                  style={{ color: '#C5A059' }}
                >
                  <span>{selectedLead.whatsapp} — Abrir conversa</span>
                  <IconArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider mb-1" style={{ color: '#B8B2AC' }}>Principal dor</p>
                <p className="text-sm leading-relaxed p-4 rounded-lg" style={{ background: '#111111', color: '#FAFAFA', border: '1px solid #27272A' }}>
                  {selectedLead.pain_description}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`https://wa.me/${selectedLead.whatsapp}?text=Olá, ${selectedLead.name.split(' ')[0]}!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-3 flex-1 text-center"
              >
                <span>Iniciar WhatsApp</span>
                <IconArrowRight className="w-4 h-4" />
              </a>
              <button onClick={() => setSelectedLead(null)} className="btn-outline text-sm py-3 px-6">Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
