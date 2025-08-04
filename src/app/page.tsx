import SearchBar from './components/SearchBar'
import BookCard from './components/BookCard'

export default function Home() {
  const books = [
    { id: 1, title: 'Matematika Dasar', author: 'Budi Santoso', category: 'Matematika' },
    { id: 2, title: 'Fisika untuk SMA', author: 'Ahmad Rahman', category: 'Fisika' },
    { id: 3, title: 'Kimia Organik', author: 'Siti Nurhaliza', category: 'Kimia' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Main Content */}
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Perpustakaan Digital Sekolah
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Temukan ribuan buku pelajaran dan referensi untuk mendukung pembelajaranmu
          </p>
          
          <SearchBar />
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Buku Terbaru</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}