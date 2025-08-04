'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'

export default function NotificationBell() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  if (!session) return null

  // Mock notifications
  const notifications = [
    {
      id: '1',
      title: 'Buku Jatuh Tempo',
      message: 'Buku "Matematika Dasar" akan jatuh tempo dalam 2 hari',
      isRead: false,
      createdAt: new Date()
    },
    {
      id: '2',
      title: 'Buku Baru',
      message: 'Buku baru "Fisika Modern" telah ditambahkan',
      isRead: true,
      createdAt: new Date(Date.now() - 86400000)
    }
  ]

  const unreadCount = notifications.filter(n => !n.isRead).length

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-white hover:text-blue-200 transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM10.5 3.75a6 6 0 0 1 6 6v2.25l2.25 2.25v2.25H2.25V14.25L4.5 12V9.75a6 6 0 0 1 6-6z" />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4 border-b">
            <h3 className="font-semibold text-gray-800">Notifikasi</h3>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <div 
                  key={notification.id} 
                  className={`p-4 border-b hover:bg-gray-50 ${!notification.isRead ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex justify-between">
                    <h4 className="font-medium text-gray-800">{notification.title}</h4>
                    {!notification.isRead && (
                      <span className="text-xs text-blue-600">Baru</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {new Date(notification.createdAt).toLocaleDateString('id-ID')}
                  </p>
                </div>
              ))
            ) : (
              <div className="p-8 text-center">
                <p className="text-gray-500">Tidak ada notifikasi</p>
              </div>
            )}
          </div>
          
          <div className="p-3 border-t text-center">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              Lihat semua notifikasi
            </button>
          </div>
        </div>
      )}
    </div>
  )
}