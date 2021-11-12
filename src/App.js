import React from 'react'
import { AuthProvider } from './contexts/auth/AuthProvider'
import { AppRouter } from './routers/AppRouter'

export const StoreApp = () => {
    return (
        <div>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </div>
    )
}
