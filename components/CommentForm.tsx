// components/CommentForm.tsx
"use client"

import { useState } from 'react'
import { Comment } from '../types'

interface CommentFormProps {
  postId: string
  onCommentAdded: (newComment: Comment) => void
}

export default function CommentForm({
  postId,
  onCommentAdded,
}: CommentFormProps) {
  const [commentText, setCommentText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!commentText.trim()) return

    setIsSubmitting(true)

    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId, body: commentText }),
    })

    if (response.ok) {
      const newComment: Comment = await response.json()
      onCommentAdded(newComment)
      setCommentText('')
    }

    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex flex-col gap-4">
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Write your comment..."
          className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          rows={4}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="self-end px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Posting...' : 'Post Comment'}
        </button>
      </div>
    </form>
  )
}