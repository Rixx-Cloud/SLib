import Link from 'next/link'

interface Book {
  id: number | string
  title: string
  author: string
  category: string
  rating?: number
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg mb-4 flex items-center justify-center">
          <div className="text-center">
            <svg className="w-12 h-12 text-blue-400 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-blue-600 font-medium">Cover Buku</span>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">{book.title}</h3>
        <p className="text-gray-600 mb-2 text-sm">Penulis: {book.author}</p>
        
        {book.rating && (
          <div className="mb-3">
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={star <= Math.floor(book.rating || 0) ? '' : 'text-gray-300'}>
                    ★
                  </span>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {book.rating.toFixed(1)}
              </span>
            </div>
          </div>
        )}
        
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mb-4">
          {book.category}
        </span>
        
        <div className="flex justify-between items-center">
          <Link 
            href={`/books/${book.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            Lihat Detail
          </Link>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}