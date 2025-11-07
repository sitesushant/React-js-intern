import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Payments from './pages/Payments.jsx'
import Students from './pages/Students.jsx'
import FeeStructure from './pages/FeeStructure.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { getCurrentUser } from './services/auth'
import { useI18n } from './i18n.jsx'
import LanguageSwitcher from './components/LanguageSwitcher.jsx'

function App() {
  const [user, setUser] = useState(getCurrentUser())
  const { t } = useI18n()
  useEffect(() => {
    const onAuth = () => setUser(getCurrentUser())
    window.addEventListener('auth_changed', onAuth)
    return () => window.removeEventListener('auth_changed', onAuth)
  }, [])
  return (
    <div className="app-container">
      <div className="nav">
        <div className="nav-inner container">
          <div className="brand">Payment Management System</div>
          <div className="spacer" />
          <Link className="btn ghost" to="/">{t('dashboard')}</Link>
          {user?.role === 'admin' && (
            <>
              <Link className="btn ghost" to="/students">{t('students')}</Link>
              <Link className="btn ghost" to="/payments">{t('payments')}</Link>
              <Link className="btn ghost" to="/fees">{t('feeStructure')}</Link>
            </>
          )}
          {user?.role === 'accountant' && null}
          {!user && (
            <>
              <Link className="btn" to="/login">{t('login')}</Link>
              <Link className="btn primary" to="/register">{t('register')}</Link>
            </>
          )}
          <LanguageSwitcher />
        </div>
      </div>
      <div className="container" style={{ paddingTop: 24 }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payments"
          element={
            <ProtectedRoute roles={['admin']}>
              <Payments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/students"
          element={
            <ProtectedRoute roles={['admin']}>
              <Students />
            </ProtectedRoute>
          }
        />
        <Route
          path="/fees"
          element={
            <ProtectedRoute roles={['admin']}>
              <FeeStructure />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
