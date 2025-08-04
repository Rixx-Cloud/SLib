'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProfilePage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  const user = session.user

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Profil Pengguna</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
              <div className="flex items-center space-x-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-2xl font-bold">
                    {user.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <p className="text-blue-100">{user.email}</p>
                  <span className="inline-block mt-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
                    {user.role === 'student' ? 'Siswa' : user.role === 'teacher' ? 'Guru' : 'Admin'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Informasi Akun</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{user.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Role:</span>
                      <span className="font-medium">
                        {user.role === 'student' ? 'Siswa' : user.role === 'teacher' ? 'Guru' : 'Admin'}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 mb-2">Aktivitas</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Buku Dibaca:</span>
                      <span className="font-medium text-green-600">25</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Buku Dipinjam:</span>
                      <span className="font-medium text-blue-600">3</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-800 mb-4">Aksi Cepat</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="bg-blue-100 text-blue-700 py-3 px-4 rounded-lg hover:bg-blue-200 transition-colors">
                    Buku Dipinjam
                  </button>
                  <button className="bg-green-100 text-green-700 py-3 px-4 rounded-lg hover:bg-green-200 transition-colors">
                    Buku Favorit
                  </button>
                  <button className="bg-yellow-100 text-yellow-700 py-3 px-4 rounded-lg hover:bg-yellow-200 transition-colors">
                    Riwayat Baca
                  </button>
                  <button className="bg-purple-100 text-purple-700 py-3 px-4 rounded-lg hover:bg-purple-200 transition-colors">
                    Pengaturan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}