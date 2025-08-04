'use client'

import Link from 'next/link'
import UserMenu from './UserMenu'
import NotificationBell from './NotificationBell'
import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const {  data:session, status } = useSession()


  return (
    <header className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link 
            href="/" 
            className="text-2xl font-bold hover:text-blue-200 transition-colors"
          >
            Perpustakaan Digital
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="hover:text-blue-200 transition-colors duration-200 py-2 px-1"
            >
              Beranda
            </Link>
            <Link 
              href="/books" 
              className="hover:text-blue-200 transition-colors duration-200 py-2 px-1"
            >
              Katalog Buku
            </Link>
            <Link 
              href="/categories" 
              className="hover:text-blue-200 transition-colors duration-200 py-2 px-1"
            >
              Kategori
            </Link>
            <Link 
              href="/about" 
              className="hover:text-blue-200 transition-colors duration-200 py-2 px-1"
            >
              Tentang
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-blue-200 transition-colors duration-200 py-2 px-1"
            >
              Kontak
            </Link>
          </nav>
          
          {/* Desktop User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <NotificationBell />
            {status === 'loading' ? (
              <div className="w-8 h-8 bg-blue-200 rounded-full animate-pulse"></div>
            ) : session?.user ? (
              <UserMenu user={{
                name: session.user.name || '',
                email: session.user.email || '',
                role: session.user.role || 'student'
              }} />
            ) : (
              <Link 
                href="/auth/login" 
                className="bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium"
              >
                Login
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <NotificationBell />
            {status === 'loading' ? (
              <div className="w-8 h-8 bg-blue-200 rounded-full animate-pulse"></div>
            ) : session?.user ? (
              <UserMenu user={{
                name: session.user.name || '',
                email: session.user.email || '',
                role: session.user.role || 'student'
              }} />
            ) : (
              <Link 
                href="/auth/login" 
                className="bg-white text-blue-600 px-3 py-1 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium"
              >
                Login
              </Link>
            )}
            <button 
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/" 
                className="hover:text-blue-200 transition-colors duration-200 py-2 px-1 border-b border-blue-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Beranda
              </Link>
              <Link 
                href="/books" 
                className="hover:text-blue-200 transition-colors duration-200 py-2 px-1 border-b border-blue-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Katalog Buku
              </Link>
              <Link 
                href="/categories" 
                className="hover:text-blue-200 transition-colors duration-200 py-2 px-1 border-b border-blue-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kategori
              </Link>
              <Link 
                href="/about" 
                className="hover:text-blue-200 transition-colors duration-200 py-2 px-1 border-b border-blue-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                href="/contact" 
                className="hover:text-blue-200 transition-colors duration-200 py-2 px-1 border-b border-blue-500"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontak
              </Link>
              
              {/* Mobile Auth Section */}
              {session?.user ? (
                <div className="pt-3 border-t border-blue-500">
                  <Link 
                    href="/profile" 
                    className="block hover:text-blue-200 transition-colors duration-200 py-2 px-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profil Saya
                  </Link>
                </div>
              ) : (
                <div className="pt-3 border-t border-blue-500">
                  <Link 
                    href="/auth/login" 
                    className="block bg-white text-blue-600 text-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}