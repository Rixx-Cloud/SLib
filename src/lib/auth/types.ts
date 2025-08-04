// lib/auth/types.ts
export interface User {
  id: string
  name: string
  email: string
  role: 'STUDENT' | 'TEACHER' | 'ADMIN'
}

export interface SessionUser {
  id: string
  name: string
  email: string
  role: 'STUDENT' | 'TEACHER' | 'ADMIN'
}

export interface AuthCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
  role?: 'STUDENT' | 'TEACHER' | 'ADMIN'
}

export interface AuthSession {
  user: SessionUser | null
  expires: string
}