'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'


interface Post {
  id: number
  title: string
  body: string
}


export default function BlogContainer({ post }: { post: Post }) {
  const router = useRouter()

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      {/* Image Section */}
      <Image
  src={`https://picsum.photos/600/400?random=${post.id}`}
  alt={post.title}
  width={600} 
  height={400} 
  className="w-full h-48 object-cover rounded-t-md transition-transform duration-500"
/>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {post.body}
        </p>

        <button
          onClick={() => router.push(`/posts/${post.id}`)}
          className="mt-auto bg-blue-50 text-blue-600 hover:bg-blue-100 px-2.5 py-1 rounded-md flex items-center gap-1 text-sm w-fit transition-colors"
        >
          Read More
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}