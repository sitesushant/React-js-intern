import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { login } from '../services/auth'
import { useI18n } from '../i18n.jsx'

export default function Login() {
  const { t } = useI18n()
  const [email, setEmail] = useState('admin')
  const [password, setPassword] = useState('admin123')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate(from, { replace: true })
    } catch (err) {
      setError(err.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container" style={{ maxWidth: 520 }}>
      <div className="surface card">
        <h2 style={{ marginTop: 0 }}>{t('login')}</h2>
        <form onSubmit={handleSubmit} className="form">
          <label className="field">
            <div>{t('emailOrUsername') || 'Email or Username'}</div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" required />
          </label>
          <label className="field">
            <div>{t('password') || 'Password'}</div>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
          </label>
          {error && <div style={{ color: 'var(--danger)' }}>{error}</div>}
          <button className="btn primary" type="submit" disabled={loading}>{loading ? (t('signingIn') || 'Signing in...') : t('login')}</button>
        </form>
        <p className="section-title">
          {(t('noAccount') || 'No account?')} <Link to="/register">{t('register')}</Link>
        </p>
      </div>
    </div>
  )
}


