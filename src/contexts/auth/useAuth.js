import { useContext } from 'react'
import { AuthContext } from './AuthProvider'

export const useAuth = () => {
    const contextValue = useContext(AuthContext)
    return contextValue
}
