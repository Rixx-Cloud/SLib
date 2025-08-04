'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function BookDetailPage({ params }: { params: { id: string } }) {
  const {  data: session } = useSession()
  const router = useRouter()

  // Mock data
  const book = {
    id: params.id,
    title: 'Matematika Dasar',
    author: 'Budi Santoso',
    description: 'Buku ini membahas konsep dasar matematika yang penting untuk siswa SMA. Dilengkapi dengan contoh soal dan pembahasan yang mudah dipahami.',
    category: 'Matematika',
    publisher: 'Pustaka Edukasi',
    year: '2023',
    pages: '250',
    availableCopies: 3,
    totalCopies: 5
  }

  const handleBorrow = () => {
    if (!session) {
      router.push('/auth/login')
      return
    }
    alert('Fitur peminjaman akan tersedia setelah integrasi database!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <Link href="/books" className="text-blue-600 hover:text-blue-800 mb-6 inline-block">
          ← Kembali ke Katalog
        </Link>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 p-8">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-blue-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span className="text-blue-600 font-medium">Cover Buku</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">{book.title}</h1>
              <p className="text-xl text-gray-600 mb-2">Oleh {book.author}</p>
              
              <div className="flex items-center mb-6">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  book.availableCopies > 0 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-red-100 text-red-800'
                }`}>
                  {book.availableCopies > 0 
                    ? `${book.availableCopies} tersedia` 
                    : 'Tidak tersedia'}
                </span>
                <span className="ml-3 text-gray-600 text-sm">
                  ({book.availableCopies}/{book.totalCopies} tersedia)
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="font-semibold text-gray-700">Kategori:</span>
                  <p className="text-gray-600">{book.category}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Tahun Terbit:</span>
                  <p className="text-gray-600">{book.year}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Penerbit:</span>
                  <p className="text-gray-600">{book.publisher}</p>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Halaman:</span>
                  <p className="text-gray-600">{book.pages}</p>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Deskripsi</h2>
                <p className="text-gray-600 leading-relaxed">{book.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                {book.availableCopies > 0 ? (
                  <>
                    <button 
                      onClick={handleBorrow}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Pinjam Buku
                    </button>
                    <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
                      Simpan ke Favorit
                    </button>
                  </>
                ) : (
                  <button 
                    disabled
                    className="bg-gray-300 text-gray-500 px-6 py-3 rounded-lg cursor-not-allowed"
                  >
                    Tidak Tersedia
                  </button>
                )}
                
                <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Baca Sample
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}