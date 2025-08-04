'use client'

import { useState } from 'react'

interface BookFiltersProps {
  onFilterChange: (filters: {
    category: string
    sortBy: string
    search: string
  }) => void
}

export default function BookFilters({ onFilterChange }: BookFiltersProps) {
  const [category, setCategory] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [search, setSearch] = useState('')

  const categories = [
    'Semua Kategori',
    'Matematika',
    'Fisika',
    'Kimia',
    'Biologi',
    'Bahasa Indonesia',
    'Bahasa Inggris',
    'Sejarah',
    'Geografi'
  ]

  const sortOptions = [
    { value: 'newest', label: 'Terbaru' },
    { value: 'oldest', label: 'Terlama' },
    { value: 'title', label: 'Judul A-Z' },
    { value: 'rating', label: 'Rating Tertinggi' }
  ]

  const handleFilterChange = () => {
    onFilterChange({
      category: category === 'Semua Kategori' ? '' : category,
      sortBy,
      search
    })
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cari Buku</label>
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              handleFilterChange()
            }}
            placeholder="Judul, penulis..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
          <select
            value={category}
            onChange={(e) => {
              setCategory(e.target.value)
              handleFilterChange()
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat === 'Semua Kategori' ? '' : cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Urutkan</label>
          <select
            value={sortBy}
            onChange={(e) => {
              setSortBy(e.target.value)
              handleFilterChange()
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-end">
          <button
            onClick={() => {
              setCategory('')
              setSortBy('newest')
              setSearch('')
              onFilterChange({ category: '', sortBy: 'newest', search: '' })
            }}
            className="w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Reset Filter
          </button>
        </div>
      </div>
    </div>
  )
}