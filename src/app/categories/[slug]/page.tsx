'use client'

import BookCard from '../../components/BookCard'
import Link from 'next/link'
import { useState } from 'react'

export default function CategoryBooksPage({ params }: { params: { slug: string } }) {
  const [categoryBooks] = useState([
    { id: 1, title: 'Aljabar Linear', author: 'Prof. Budi', category: 'Matematika' },
    { id: 2, title: 'Geometri Analitik', author: 'Dr. Andi', category: 'Matematika' },
    { id: 3, title: 'Kalkulus Dasar', author: 'Prof. Siti', category: 'Matematika' },
    { id: 4, title: 'Statistika Terapan', author: 'Dr. Rudi', category: 'Matematika' },
  ])

  const categoryName = params.slug.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/categories" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← Kembali ke Kategori
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Buku {categoryName}</h1>
          <p className="text-gray-600">Ditemukan {categoryBooks.length} buku dalam kategori ini</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}