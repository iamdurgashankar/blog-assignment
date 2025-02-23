'use client'

import { useEffect, useState } from 'react'
import BlogContainer from '@/components/BlogContainer'
import { PostListSkeleton } from '@/components/LoadingSkeleton'

export default function BlogPosts({ searchQuery }: { searchQuery: string }) {
  const [posts, setPosts] = useState<{ id: number; title: string; body: string }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data)
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.body.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (loading) return <PostListSkeleton />

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <BlogContainer key={post.id} post={post} />
        ))}
      </div>
      {filteredPosts.length === 0 && !loading && (
        <div className="text-center text-gray-500 py-12">
          No posts found matching your search
        </div>
      )}
    </>
  )
}