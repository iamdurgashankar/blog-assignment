// types.ts
// Removed duplicate Post interface

export interface Comment {
  id: number
  postId: number
  name: string
  email: string
  body: string
}
export type Post = {
  id: string
  title: string
  body: string
  userId: string
  date?: string
}