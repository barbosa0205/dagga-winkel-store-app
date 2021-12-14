import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { MainContainer } from './components/MainContainer'
import { AuthProvider } from './contexts/auth/AuthProvider'
import { CartProvider } from './contexts/cart/CartProvider'
import { AppRouter } from './routers/AppRouter'

export const StoreApp = () => {
    return (
        <Router>
            <AuthProvider>
                <CartProvider>
                    <MainContainer>
                        <AppRouter />
                    </MainContainer>
                </CartProvider>
            </AuthProvider>
        </Router>
    )
}
