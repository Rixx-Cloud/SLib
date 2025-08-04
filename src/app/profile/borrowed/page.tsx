'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function BorrowedBooksPage() {
  const [borrowedBooks] = useState([
    {
      id: 1,
      title: 'Fisika untuk SMA',
      author: 'Ahmad Rahman',
      borrowDate: '2024-01-15',
      dueDate: '2024-02-15',
      daysLeft: 15,
      status: 'active'
    },
    {
      id: 2,
      title: 'Biologi Sel',
      author: 'Dewi Kartika',
      borrowDate: '2024-01-10',
      dueDate: '2024-02-10',
      daysLeft: 10,
      status: 'active'
    }
  ])

  const [historyBooks] = useState([
    {
      id: 3,
      title: 'Matematika Dasar',
      author: 'Budi Santoso',
      borrowDate: '2023-12-01',
      returnDate: '2023-12-31',
      status: 'returned'
    }
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/profile" className="text-blue-600 hover:text-blue-800 mb-2 inline-block">
            ← Kembali ke Profil
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Buku Dipinjam</h1>
          <p className="text-gray-600">Kelola buku yang sedang Anda pinjam</p>
        </div>

        {/* Buku Aktif Dipinjam */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Buku Aktif ({borrowedBooks.length})</h2>
          
          {borrowedBooks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {borrowedBooks.map((book) => (
                <div key={book.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{book.title}</h3>
                      <p className="text-gray-600 mb-2">Oleh {book.author}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Aktif
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Tanggal Pinjam</p>
                      <p className="font-medium">{new Date(book.borrowDate).toLocaleDateString('id-ID')}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Batas Waktu</p>
                      <p className="font-medium">{new Date(book.dueDate).toLocaleDateString('id-ID')}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Sisa waktu:</span>
                      <span className={`font-medium ${book.daysLeft > 7 ? 'text-green-600' : book.daysLeft > 3 ? 'text-yellow-600' : 'text-red-600'}`}>
                        {book.daysLeft} hari
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${book.daysLeft > 7 ? 'bg-green-600' : book.daysLeft > 3 ? 'bg-yellow-600' : 'bg-red-600'}`}
                        style={{ width: `${Math.min(100, (book.daysLeft / 30) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
                      Perpanjang
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                      Kembalikan
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg shadow-md">
              <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <p className="text-gray-600">Tidak ada buku yang sedang dipinjam</p>
            </div>
          )}
        </div>

        {/* Riwayat Peminjaman */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Riwayat Peminjaman</h2>
          
          {historyBooks.length > 0 ? (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Buku</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Tanggal Pinjam</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Tanggal Kembali</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {historyBooks.map((book) => (
                    <tr key={book.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium text-gray-800">{book.title}</p>
                          <p className="text-sm text-gray-600">Oleh {book.author}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(book.borrowDate).toLocaleDateString('id-ID')}
                      </td>
                      <td className="py-3 px-4 text-gray-600">
                        {new Date(book.returnDate).toLocaleDateString('id-ID')}
                      </td>
                      <td className="py-3 px-4">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          Dikembalikan
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 bg-white rounded-lg shadow-md">
              <p className="text-gray-600">Belum ada riwayat peminjaman</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}