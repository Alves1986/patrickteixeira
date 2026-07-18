import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const supabaseUrl = process.env.SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceKey) {
      return NextResponse.json([], { status: 200 })
    }

    const res = await fetch(
      `${supabaseUrl}/rest/v1/leads?select=*&order=created_at.desc`,
      {
        headers: {
          'apikey': serviceKey,
          'Authorization': `Bearer ${serviceKey}`,
        },
      }
    )

    if (!res.ok) {
      return NextResponse.json([], { status: 200 })
    }

    const data = await res.json()
    return NextResponse.json(data, { status: 200 })
  } catch {
    return NextResponse.json([], { status: 200 })
  }
}
