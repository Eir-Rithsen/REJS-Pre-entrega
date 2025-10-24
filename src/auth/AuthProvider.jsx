import React, { createContext, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'


const AuthContext = createContext()


export function useAuth() {
return useContext(AuthContext)
}


export default function AuthProvider({ children }) {
const [user, setUser] = useLocalStorage('preentrega_user', null)


const login = (username) => {
// Simula login; en la vida real pedirías backend/JWT
setUser({ name: username })
}


const logout = () => setUser(null)


return (
<AuthContext.Provider value={{ user, login, logout }}>
{children}
</AuthContext.Provider>
)
}
