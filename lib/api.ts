// lib/api.ts
import { Post, Comment } from '@/types'

// Essential for blog listing page
export const getPosts = async (): Promise<Post[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  if (!response.ok) {
    throw new Error('Failed to fetch posts')
  }
  return response.json()
}

// For individual post page
export async function getPost(postId: string): Promise<Post> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  if (!response.ok) {
    throw new Error('Failed to fetch post')
  }
  return response.json()
}

// For comments section
export async function getComments(postId: string): Promise<Comment[]> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
  if (!response.ok) {
    throw new Error('Failed to fetch comments')
  }
  return response.json()
}