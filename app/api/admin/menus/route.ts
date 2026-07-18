import { NextResponse } from 'next/server'
import { getMenus, saveMenus } from '@/lib/content'

export async function GET() {
  try {
    const menus = await getMenus()
    return NextResponse.json(menus)
  } catch (error) {
    return NextResponse.json([], { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const newMenus = await request.json()
    await saveMenus(newMenus)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
