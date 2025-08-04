// lib/db.ts
import { PrismaClient } from '@prisma/client'

// Untuk development dengan hot reloading, kita perlu menyimpan prisma client di global
// agar tidak membuat instance baru setiap hot reload
const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

// Buat instance Prisma Client
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
})

// Di development, simpan prisma client di global untuk hot reloading
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}

// Export default juga untuk kompatibilitas
export default prisma