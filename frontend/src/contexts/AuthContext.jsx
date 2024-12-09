import { createContext, useState } from 'react'

export const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null)
  const userContextLogin = (currentUserData) => setCurrentUser(currentUserData)
  const userContextLogout = () => setCurrentUser(null)
  return (
    <AuthContext.Provider value={{ currentUser, userContextLogin, userContextLogout }}>
      {children}
    </AuthContext.Provider>
  )
}