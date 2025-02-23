import { Suspense } from 'react'
import HomeClient from './HomeClient'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<div>Loading...</div>}>
          <HomeClient />
        </Suspense>
      </div>
    </main>
  )
}