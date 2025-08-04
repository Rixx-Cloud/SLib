'use client'

import { useState } from 'react'
import Link from 'next/link'
import { signOut } from 'next-auth/react'

interface User {
  id?: string
  name?: string | null
  email?: string | null
  role?: string | null
}

export default function UserMenu({ user }: { user: User }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    await signOut({ callbackUrl: '/auth/login' })
  }

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 hover:bg-blue-700 px-3 py-2 rounded-lg transition-colors"
      >
        <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center">
          <span className="text-blue-800 font-semibold text-sm">
            {user?.name?.charAt(0) || 'U'}
          </span>
        </div>
        <span className="hidden md:inline">{user?.name || 'User'}</span>
        <svg 
          className="w-4 h-4 hidden md:inline" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className={`hidden md:block absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 border-b">
          <p className="font-medium text-gray-800 truncate">{user?.name || 'User'}</p>
          <p className="text-sm text-gray-600 truncate">{user?.email || 'email@example.com'}</p>
          <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
            {user?.role === 'student' ? 'Siswa' : user?.role === 'teacher' ? 'Guru' : 'Admin'}
          </span>
        </div>
        <Link 
          href="/profile" 
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Profil Saya
        </Link>
        <Link 
          href="/profile/favorites" 
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Buku Favorit
        </Link>
        <Link 
          href="/profile/borrowed" 
          className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(false)}
        >
          Buku Dipinjam
        </Link>
        <div className="border-t mt-2">
          <button 
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
          >
            Keluar
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Mobile Menu Panel */}
          <div className="absolute right-0 top-0 h-full w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 font-semibold">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{user?.name || 'User'}</p>
                    <p className="text-sm text-gray-600 truncate max-w-[120px]">{user?.email || 'email@example.com'}</p>
                    <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      {user?.role === 'student' ? 'Siswa' : user?.role === 'teacher' ? 'Guru' : 'Admin'}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <nav className="py-2">
              <Link 
                href="/profile" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profil Saya</span>
                </div>
              </Link>
              <Link 
                href="/profile/favorites" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Buku Favorit</span>
                </div>
              </Link>
              <Link 
                href="/profile/borrowed" 
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b"
                onClick={() => setIsOpen(false)}
              >
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>Buku Dipinjam</span>
                </div>
              </Link>
            </nav>
            
            <div className="absolute bottom-0 w-full p-4 border-t">
              <button 
                onClick={handleLogout}
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Keluar</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}