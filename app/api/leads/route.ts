import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, whatsapp, email, business, pain_description, source } = body

    if (!name || !whatsapp || !business || !pain_description) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos.' },
        { status: 400 }
      )
    }

    // Se Supabase estiver configurado, salva no banco
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && serviceKey) {
      const supabaseRes = await fetch(`${supabaseUrl}/rest/v1/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify({
          name,
          whatsapp,
          email: email || null,
          business,
          pain_description,
          source: source || null,
          status: 'novo',
        }),
      })

      if (!supabaseRes.ok) {
        const err = await supabaseRes.text()
        console.error('Supabase error:', err)
        return NextResponse.json({ error: 'Erro ao salvar lead.' }, { status: 500 })
      }
    }

    // TODO Fase 2: disparar mensagem WhatsApp via Evolution API

    return NextResponse.json({ success: true }, { status: 201 })
  } catch (error) {
    console.error('API /leads error:', error)
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}
