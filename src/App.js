import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainContainer } from './components/MainContainer'
import { AuthProvider } from './contexts/auth/AuthProvider'
import { CartProvider } from './contexts/cart/CartProvider'
import { AppRouter } from './routers/AppRouter'

export const StoreApp = () => {
    const [token, setToken] = useState('')

    useEffect(() => {
        localStorage.getItem('user-dagga-winkel') &&
            setToken(localStorage.getItem('user-dagga-winkel'))
    }, [])

    return (
        <Router>
            <AuthProvider token={token} setToken={setToken}>
                <CartProvider>
                    <MainContainer>
                        <AppRouter />
                    </MainContainer>
                </CartProvider>
            </AuthProvider>
        </Router>
    )
}
