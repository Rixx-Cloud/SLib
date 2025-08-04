// app/admin/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { 
  BookOpen, 
  Users, 
  FolderOpen, 
  BarChart3,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalBooks: 0,
    totalUsers: 0,
    totalCategories: 0,
    activeBorrows: 0,
    overdueBooks: 0,
    totalReturns: 0
  })

  const [recentActivities, setRecentActivities] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      // Fetch stats dari API
      const [booksRes, usersRes, categoriesRes, borrowsRes] = await Promise.all([
        fetch('/api/books'),
        fetch('/api/users'),
        fetch('/api/categories'),
        fetch('/api/borrow?userId=admin') // dummy untuk sekarang
      ])

      const books = await booksRes.json()
      const users = await usersRes.json()
      const categories = await categoriesRes.json()

      setStats({
        totalBooks: Array.isArray(books) ? books.length : 0,
        totalUsers: Array.isArray(users) ? users.length : 0,
        totalCategories: Array.isArray(categories) ? categories.length : 0,
        activeBorrows: 12, // dummy data
        overdueBooks: 3,   // dummy data
        totalReturns: 45   // dummy data
      })

      // Dummy recent activities
      setRecentActivities([
        {
          id: 1,
          title: 'Buku baru ditambahkan',
          description: 'Matematika Dasar oleh Budi Santoso',
          time: '2 jam yang lalu',
          type: 'success'
        },
        {
          id: 2,
          title: 'Peminjaman terlambat',
          description: 'Fisika untuk SMA oleh Ahmad Rahman',
          time: '5 jam yang lalu',
          type: 'warning'
        },
        {
          id: 3,
          title: 'Buku dikembalikan',
          description: 'Kimia Organik oleh Siti Nurhaliza',
          time: '1 hari yang lalu',
          type: 'info'
        }
      ])

      setLoading(false)
    } catch (error) {
      console.error('Error fetching dashboard data:', error)
      setLoading(false)
    }
  }

  const StatCard = ({ title, value, icon: Icon, color }: any) => (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="p-5">
        <div className="flex items-center">
          <div className={`flex-shrink-0 rounded-md p-3 ${color}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-gray-900">{value}</div>
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  )

  if (loading) {
    return (
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="py-4">
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Stats */}
        <div className="mt-4">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard 
              title="Total Buku" 
              value={stats.totalBooks} 
              icon={BookOpen} 
              color="bg-blue-500" 
            />
            <StatCard 
              title="Total Users" 
              value={stats.totalUsers} 
              icon={Users} 
              color="bg-green-500" 
            />
            <StatCard 
              title="Total Kategori" 
              value={stats.totalCategories} 
              icon={FolderOpen} 
              color="bg-purple-500" 
            />
            <StatCard 
              title="Buku Dipinjam" 
              value={stats.activeBorrows} 
              icon={Clock} 
              color="bg-yellow-500" 
            />
            <StatCard 
              title="Terlambat" 
              value={stats.overdueBooks} 
              icon={AlertTriangle} 
              color="bg-red-500" 
            />
            <StatCard 
              title="Dikembalikan" 
              value={stats.totalReturns} 
              icon={CheckCircle} 
              color="bg-indigo-500" 
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="mt-8">
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Aktivitas Terbaru
              </h3>
            </div>
            <ul className="divide-y divide-gray-200">
              {recentActivities.map((activity) => (
                <li key={activity.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        {activity.title}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          activity.type === 'success' ? 'bg-green-100 text-green-800' :
                          activity.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {activity.type === 'success' ? 'Berhasil' :
                           activity.type === 'warning' ? 'Peringatan' : 'Info'}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          {activity.description}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <p>{activity.time}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Aksi Cepat
              </h3>
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Tambah Buku
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  Tambah Kategori
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Tambah User
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Lihat Laporan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}