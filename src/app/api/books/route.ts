import { prisma } from "@/lib/db"
import { NextResponse } from "next/server"

// GET - Mendapatkan semua buku
export async function GET() {
  try {
    const books = await prisma.book.findMany({
      include: {
        category: true
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
    return NextResponse.json(books)
  } catch (error) {
    console.error('Error fetching books:', error)
    return NextResponse.json(
      { error: 'Gagal mengambil data buku' }, 
      { status: 500 }
    )
  }
}

// POST - Membuat buku baru
export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const book = await prisma.book.create({
      data: {
        title: body.title,
        author: body.author,
        description: body.description,
        categoryId: body.categoryId,
        totalCopies: body.totalCopies || 1,
        availableCopies: body.availableCopies || 1
      }
    })
    
    return NextResponse.json(book)
  } catch (error) {
    console.error('Error creating book:', error)
    return NextResponse.json(
      { error: 'Gagal membuat buku' }, 
      { status: 500 }
    )
  }
}