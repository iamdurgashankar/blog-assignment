interface Comment {
  id: string
  name: string
  body: string
  email: string
}

export default function CommentList({ comments }: { comments: Comment[] }) {
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