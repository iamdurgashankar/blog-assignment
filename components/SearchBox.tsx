'use client'

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export default function SearchBox({ 
  searchQuery,
  setSearchQuery
}: { 
  searchQuery: string
  setSearchQuery: (query: string) => void 
}) {
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search posts..."
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
        />
        <MagnifyingGlassIcon className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
      </div>
    </div>
  )
}