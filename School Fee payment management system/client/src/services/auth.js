import { apiClient } from './api'

export async function login(identifier, password) {
  const ident = String(identifier || '').trim()
  const pass = String(password || '').trim()
  // Fetch all users and match locally for maximum compatibility with json-server filters
  const { data } = await apiClient.get('/users')
  const lower = ident.toLowerCase()
  const user = Array.isArray(data) ? data.find(u => (
    (String(u.email || '').toLowerCase() === lower || String(u.name || '').toLowerCase() === lower) && String(u.password || '') === pass
  )) : null
  let resolved = user
  if (!resolved && lower === 'admin' && pass === 'admin123') {
    resolved = { id: 'admin', name: 'Admin', email: 'admin', role: 'admin' }
  }
  if (resolved) {
    localStorage.setItem('auth_user', JSON.stringify(resolved))
    try { window.dispatchEvent(new Event('auth_changed')) } catch (_) {}
    return resolved
  }
  throw new Error('Invalid credentials')
}

export async function registerUser(payload) {
  const { data: existing } = await apiClient.get('/users', { params: { email: payload.email } })
  if (existing.length > 0) {
    throw new Error('Email already registered')
  }
  const { data } = await apiClient.post('/users', payload)
  return data
}

export function logout() {
  localStorage.removeItem('auth_user')
  try { window.dispatchEvent(new Event('auth_changed')) } catch (_) {}
}

export function getCurrentUser() {
  try {
    const raw = localStorage.getItem('auth_user')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}


