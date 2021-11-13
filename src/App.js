import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/auth/AuthProvider'
import { AppRouter } from './routers/AppRouter'

export const StoreApp = () => {
    return (
        <Router>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </Router>
    )
}
