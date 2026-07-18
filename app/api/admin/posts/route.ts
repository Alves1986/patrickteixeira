import { NextResponse } from 'next/server'
import { getPosts, savePosts } from '@/lib/content'

export async function GET() {
  try {
    const posts = await getPosts()
    return NextResponse.json(posts)
  } catch (error) {
    return NextResponse.json([], { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const newPosts = await request.json()
    await savePosts(newPosts)
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
