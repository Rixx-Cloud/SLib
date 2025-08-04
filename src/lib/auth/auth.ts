// lib/auth/auth.ts
import { getServerSession } from "next-auth"
import { authOptions } from "@/api/auth/[...nextauth]/route"
import { User } from "./types"

/**
 * Mendapatkan user yang sedang login
 * @returns User object atau null jika tidak login
 */
export async function getCurrentUser(): Promise<User | null> {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user) {
      return null
    }

    return {
      id: session.user.id,
      name: session.user.name || '',
      email: session.user.email || '',
      role: session.user.role as 'STUDENT' | 'TEACHER' | 'ADMIN'
    }
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

/**
 * Mengecek apakah user sudah login
 * @returns true jika sudah login, false jika belum
 */
export async function isAuthenticated(): Promise<boolean> {
  const user = await getCurrentUser()
  return !!user
}

/**
 * Mengecek role user
 * @param requiredRole Role yang dibutuhkan
 * @returns true jika user memiliki role yang sesuai
 */
export async function hasRole(requiredRole: 'STUDENT' | 'TEACHER' | 'ADMIN'): Promise<boolean> {
  const user = await getCurrentUser()
  return user?.role === requiredRole
}

/**
 * Mengecek apakah user memiliki salah satu role
 * @param allowedRoles Array role yang diizinkan
 * @returns true jika user memiliki salah satu role yang diizinkan
 */
export async function hasAnyRole(allowedRoles: ('STUDENT' | 'TEACHER' | 'ADMIN')[]): Promise<boolean> {
  const user = await getCurrentUser()
  return user ? allowedRoles.includes(user.role) : false
}

/**
 * Middleware untuk proteksi route berdasarkan role
 * @param allowedRoles Array role yang diizinkan (kosong = semua user login)
 * @returns Object dengan status dan redirect path
 */
export async function requireAuth(allowedRoles?: ('STUDENT' | 'TEACHER' | 'ADMIN')[]) {
  const user = await getCurrentUser()
  
  if (!user) {
    return { 
      authenticated: false, 
      redirect: '/auth/login',
      reason: 'NOT_LOGGED_IN' 
    }
  }
  
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return { 
      authenticated: false, 
      redirect: '/unauthorized',
      reason: 'INSUFFICIENT_PERMISSIONS' 
    }
  }
  
  return { 
    authenticated: true, 
    user,
    reason: 'AUTHORIZED' 
  }
}

/**
 * Mengecek apakah user adalah admin
 * @returns true jika user adalah admin
 */
export async function isAdmin(): Promise<boolean> {
  return hasRole('ADMIN')
}

/**
 * Mengecek apakah user adalah guru
 * @returns true jika user adalah guru
 */
export async function isTeacher(): Promise<boolean> {
  return hasRole('TEACHER')
}

/**
 * Mengecek apakah user adalah siswa
 * @returns true jika user adalah siswa
 */
export async function isStudent(): Promise<boolean> {
  return hasRole('STUDENT')
}

/**
 * Fungsi untuk logout
 * @returns Promise yang resolve setelah logout
 */
export async function logout(): Promise<void> {
  // Ini akan dihandle oleh NextAuth
  // Panggil signOut() dari next-auth/react di client component
}