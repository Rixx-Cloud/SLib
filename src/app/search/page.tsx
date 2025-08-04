'use client'

import { useSearchParams } from 'next/navigation'
import BookCard from '../components/BookCard'
import { useState, useEffect } from 'react'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const [searchResults, setSearchResults] = useState<any[]>([])

  useEffect(() => {
    // Mock search results - nanti bisa dihubungkan ke API
    if (query) {
      const mockResults = [
        { id: 1, title: `${query} Dasar`, author: 'Penulis A', category: 'Umum' },
        { id: 2, title: `Panduan ${query}`, author: 'Penulis B', category: 'Referensi' },
        { id: 3, title: `${query} untuk Pemula`, author: 'Penulis C', category: 'Tutorial' },
      ]
      setSearchResults(mockResults)
    }
  }, [query])

  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Hasil Pencarian</h1>
          <p className="text-gray-600">
            Menampilkan hasil untuk: <span className="font-semibold">"{query}"</span>
            {query && <span> ({searchResults.length} hasil ditemukan)</span>}
          </p>
        </div>

        {query ? (
          searchResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.467-.881-6.08-2.33" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tidak ada hasil ditemukan</h3>
              <p className="text-gray-600">Coba kata kunci lain atau periksa ejaan Anda.</p>
            </div>
          )
        ) : (
          <div className="text-center py-12">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Masukkan kata kunci pencarian</h3>
            <p className="text-gray-600">Gunakan kotak pencarian di atas untuk mencari buku.</p>
          </div>
        )}
      </div>
    </div>
  )
}