'use client'

import BookCard from '../../components/BookCard'
import Link from 'next/link'
import { useState } from 'react'

export default function FavoritesPage() {
  const [favoriteBooks] = useState([
    { id: 1, title: 'Matematika Dasar', author: 'Budi Santoso', category: 'Matematika' },
    { id: 3, title: 'Kimia Organik', author: 'Siti Nurhaliza', category: 'Kimia' },
    { id: 5, title: 'Sejarah Indonesia', author: 'Rudi Hermawan', category: 'Sejarah' },
    { id: 7, title: 'Filsafat Ilmu', author: 'Prof. Andi', category: 'Filsafat' },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/profile" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← Kembali ke Profil
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Buku Favorit</h1>
          <p className="text-gray-600">Daftar buku yang telah Anda tandai sebagai favorit</p>
        </div>

        {favoriteBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-lg shadow-md">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Belum ada buku favorit</h3>
            <p className="text-gray-600 mb-4">Mulai tambahkan buku ke favorit Anda dengan mengklik ikon hati pada buku.</p>
            <Link 
              href="/books" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-block"
            >
              Jelajahi Buku
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}