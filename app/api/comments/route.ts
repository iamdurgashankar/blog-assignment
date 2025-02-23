import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  
  const newComment = {
    ...body,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    
  }

  return NextResponse.json(newComment, { status: 201 })
}