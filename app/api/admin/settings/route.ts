import { NextResponse } from 'next/server'
import { getSettings, saveSettings } from '@/lib/content'

export async function GET() {
  try {
    const settings = await getSettings()
    return NextResponse.json(settings)
  } catch (error) {
    return NextResponse.json({}, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const newSettings = await request.json()
    await saveSettings(newSettings)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
