// app/posts/[postId]/page.tsx
import { getPost, getComments } from '@/lib/api'
import Image from 'next/image'
import CommentsSection from '@/components/CommentsSection'

interface postPageProps {
  params: {
    postId: string
  }
}

export default async function postPage({ params }: postPageProps) {
  const [post, comments] = await Promise.all([
    getPost(params.postId),
    getComments(params.postId),
  ])

  return (
    <div className="max-w-3xl mx-auto px-4 pt-8 sm:px-0">
       {/* Image Section */}
       <Image
        src={`https://picsum.photos/600/400?random=${post.id}`}
        alt={post.title}
        width={600} 
        height={400} 
        className="w-full h-48 object-cover rounded-t-md"
      />
      <article className="bg-white rounded-b-md shadow-md p-8 mb-12">
        
        {/* Post Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center text-sm text-gray-500">
            <span className="mr-2">📅</span>
            <time>{new Date(post.date || Date.now()).toLocaleDateString()}</time>
            <span className="mx-4">•</span>
            <span>👤 {post.userId}</span>
          </div>
        </header>

        {/* Post Body */}
        <div className="prose max-w-none text-gray-700">
          <p className="text-lg leading-relaxed">{post.body}</p>
        </div>
      </article>

      {/* Updated Comments Section */}
      <CommentsSection initialComments={comments} postId={params.postId} />
    </div>
  )
}