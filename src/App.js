import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Layout } from './components/Layout'
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
                    <Layout>
                        <AppRouter />
                    </Layout>
                </CartProvider>
            </AuthProvider>
        </Router>
    )
}
