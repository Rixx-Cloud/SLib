export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tentang Perpustakaan Digital</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-gray-600 leading-relaxed mb-6">
            Perpustakaan Digital Sekolah adalah platform modern yang menyediakan akses mudah ke 
            ribuan koleksi buku pelajaran, referensi, dan materi pendukung pembelajaran untuk 
            seluruh siswa dan guru di sekolah.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Visi</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Menjadi perpustakaan digital terdepan yang mendukung proses pembelajaran berbasis teknologi 
            dan informasi di lingkungan pendidikan.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Misi</h2>
          <ul className="list-disc list-inside text-gray-600 leading-relaxed space-y-2">
            <li>Menyediakan akses mudah ke koleksi buku digital yang berkualitas</li>
            <li>Mendukung pembelajaran mandiri siswa melalui platform digital</li>
            <li>Memfasilitasi guru dalam pengembangan materi pembelajaran</li>
            <li>Meningkatkan minat baca dan literasi digital siswa</li>
          </ul>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Ribuan Buku</h3>
            <p className="text-gray-600">Akses ke ribuan koleksi buku pelajaran dan referensi</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Cepat & Mudah</h3>
            <p className="text-gray-600">Pencarian dan akses buku yang cepat dan mudah</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">24/7 Akses</h3>
            <p className="text-gray-600">Akses perpustakaan kapan saja dan di mana saja</p>
          </div>
        </div>
      </div>
    </div>
  )
}