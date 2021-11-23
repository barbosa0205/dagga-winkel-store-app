import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router'
import { roles } from '../../helpers/roles'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const history = useHistory()

    const [toggleMenu, setToggleMenu] = useState(false)
    const [user, setUser] = useState(null)

    const login = (userCredentials, fromLocation) => {
        setUser({ id: 1, role: roles.client })
        if (fromLocation) history.push(fromLocation)
    }

    const logout = () => setUser(null)

    const isLogged = () => !!user

    const hasRole = role => {
        return role && user?.role === role
    }

    const toggle = () => setToggleMenu(!toggleMenu)

    const contextValue = {
        user,
        setUser,
        toggleMenu,
        toggle,
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
