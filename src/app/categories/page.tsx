'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CategoriesPage() {
  const [categories] = useState([
    { id: 1, name: 'Matematika', count: 25, slug: 'matematika' },
    { id: 2, name: 'Fisika', count: 18, slug: 'fisika' },
    { id: 3, name: 'Kimia', count: 22, slug: 'kimia' },
    { id: 4, name: 'Biologi', count: 20, slug: 'biologi' },
    { id: 5, name: 'Bahasa Indonesia', count: 30, slug: 'bahasa-indonesia' },
    { id: 6, name: 'Bahasa Inggris', count: 28, slug: 'bahasa-inggris' },
    { id: 7, name: 'Sejarah', count: 15, slug: 'sejarah' },
    { id: 8, name: 'Geografi', count: 12, slug: 'geografi' },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Kategori Buku</h1>
          <p className="text-gray-600">Jelajahi buku berdasarkan kategori</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              href={`/categories/${category.slug}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 hover:scale-105 transform"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} buku</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}