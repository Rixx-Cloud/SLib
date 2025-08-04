import AuthCard from '@/app/components/auth/AuthCard'
import LoginForm from '@/app/components/auth/LoginForm'

export default function LoginPage() {
  return (
    <AuthCard
      title="Login"
      subtitle="Masuk ke Perpustakaan Digital"
      footer="Akun Demo"
    >
      <LoginForm />
      
      <div className="mt-4 grid grid-cols-1 gap-3">
        <div className="text-sm text-gray-600">
          <p><strong>Siswa:</strong> ahmad@siswa.sch.id / siswa123</p>
          <p><strong>Guru:</strong> guru@sekolah.sch.id / guru123</p>
          <p><strong>Admin:</strong> admin@perpustakaan.sch.id / admin123</p>
        </div>
      </div>
    </AuthCard>
  )
}