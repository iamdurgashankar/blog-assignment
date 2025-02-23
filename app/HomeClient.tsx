'use client'

import { useState } from 'react'
import BlogPosts from '@/components/BlogPosts'
import SearchBox from '@/components/SearchBox'

export default function HomeClient() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Logo and Title */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <h1 className="text-2xl my-4 font-bold text-gray-900">Blog Assignment</h1>
        </div>
      </div>

      {/* Search and Posts */}
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogPosts searchQuery={searchQuery} />
    </div>
  )
}