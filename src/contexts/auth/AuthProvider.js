import React, { createContext, useState } from 'react'
import { roles } from '../../helpers/roles'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [user, setUser] = useState(null)

    const login = () => setUser({ id: 1, role: roles.client })
    const logout = () => setUser(null)

    const isLogged = () => !!user
    const hasRole = role => role && user?.role === role

    const contextValue = {
        user,
        toggleMenu,
        setToggleMenu,
        setUser,
        isLogged,
        hasRole,
        login,
        logout,
    } //deberia ser memorizado, lo haremos despues cuando veamos la necesidad

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
