import { NextResponse } from 'next/server'
import { getPosts } from '@/lib/api'

export async function GET() {
  const posts = await getPosts().catch(() => null)

  if (!posts) {
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }

  return NextResponse.json(posts)
}