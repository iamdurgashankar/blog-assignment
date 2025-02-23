// components/CommentsSection.tsx
"use client"

import { useState } from 'react'
import CommentForm from './CommentForm'
import { Comment } from '../types'

interface CommentsSectionProps {
  initialComments: Comment[]
  postId: string
}

export default function CommentsSection({
  initialComments,
  postId,
}: CommentsSectionProps) {
  const [comments, setComments] = useState(initialComments)

  const handleCommentAdded = (newComment: Comment) => {
    setComments([newComment, ...comments])
  }

  return (
    <section className="bg-white rounded-xl shadow-md p-8">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">
        Comments ({comments.length})
      </h2>
      <CommentForm postId={postId} onCommentAdded={handleCommentAdded} />
      <CommentList comments={comments} />
    </section>
  )
}

function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="p-4 bg-gray-50 rounded-lg shadow-sm border border-gray-100"
        >
          <h3 className="font-semibold text-gray-800 mb-2">{comment.name}</h3>
          <p className="text-gray-600 mb-2">{comment.body}</p>
          <p className="text-sm text-gray-500">{comment.email}</p>
        </div>
      ))}
    </div>
  )
}