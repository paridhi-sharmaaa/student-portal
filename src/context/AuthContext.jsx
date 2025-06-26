import { createContext, useContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const storedUser = localStorage.getItem('studentUser')
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'

    if (storedUser && isLoggedIn) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      } catch (error) {
        console.error('Failed to parse user data', error)
        logout()
      }
    }
    setLoading(false)
  }, [])

  // Basic client-side password validation
  const validatePassword = (password) => {
    return password.length >= 8
  }

  const login = (email, password) => {
    if (!email || !password) {
      throw new Error('Email and password are required')
    }

    const storedUser = JSON.parse(localStorage.getItem('studentUser'))
    
    // In a real app, you would compare hashed passwords here
    if (storedUser?.email === email && storedUser?.password === password) {
      setUser(storedUser)
      localStorage.setItem('isLoggedIn', 'true')
      return true
    }
    throw new Error('Invalid credentials')
  }

  const signup = (userData) => {
    if (!userData.name || !userData.email || !userData.password) {
      throw new Error('All fields are required')
    }

    if (!validatePassword(userData.password)) {
      throw new Error('Password must be at least 8 characters')
    }

    const newUser = {
      id: uuidv4(),
      ...userData,
      joinDate: new Date().toISOString(),
      // In production: password: hashPassword(userData.password)
    }

    localStorage.setItem('studentUser', JSON.stringify(newUser))
    localStorage.setItem('isLoggedIn', 'true')
    setUser(newUser)
    return true
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('isLoggedIn')
    navigate('/')
  }

  return (
    <AuthContext.Provider value={{ 
      user, 
      loading,
      login, 
      signup, 
      logout 
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}