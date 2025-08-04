// scripts/test-auth.ts
import { prisma } from "@/lib/db"
import bcrypt from "bcryptjs"

async function testAuth() {
  try {
    console.log('🔍 Testing auth system...')
    
    // Test koneksi database
    await prisma.$connect()
    console.log('✅ Database connected')
    
    // Test mencari user
    const user = await prisma.user.findUnique({
      where: { email: 'admin@perpustakaan.sch.id' }
    })
    
    console.log('👤 User:', user ? 'Found' : 'Not found')
    
    if (user) {
      // Test password verification
      const isValid = await bcrypt.compare('admin123', user.password)
      console.log('🔑 Password valid:', isValid)
    }
    
    console.log('🎉 Auth test completed!')
    
  } catch (error) {
    console.error('❌ Auth test failed:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testAuth()