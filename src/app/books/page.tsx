'use client'

import { useState } from 'react'
import BookCard from '../components/BookCard'
import Link from 'next/link'

export default function BooksPage() {
  const [books] = useState([
    { id: 1, title: 'Matematika Dasar', author: 'Budi Santoso', category: 'Matematika', rating: 4.5 },
    { id: 2, title: 'Fisika untuk SMA', author: 'Ahmad Rahman', category: 'Fisika', rating: 4.2 },
    { id: 3, title: 'Kimia Organik', author: 'Siti Nurhaliza', category: 'Kimia', rating: 4.7 },
    { id: 4, title: 'Biologi Sel', author: 'Dewi Kartika', category: 'Biologi', rating: 4.0 },
    { id: 5, title: 'Sejarah Indonesia', author: 'Rudi Hermawan', category: 'Sejarah', rating: 4.3 },
    { id: 6, title: 'Bahasa Inggris', author: 'Maria Susanti', category: 'Bahasa', rating: 4.1 },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Katalog Buku</h1>
              <p className="text-gray-600">Menampilkan {books.length} buku</p>
            </div>
            <Link 
              href="/books/create" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Tambah Buku
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  )
}