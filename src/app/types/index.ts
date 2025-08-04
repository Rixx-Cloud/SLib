export interface User {
  id?: string
  name: string
  email: string
  role: string
}

export interface SessionUser {
  id?: string
  name?: string | null
  email?: string | null
  role?: string | null
}

export default SessionUser