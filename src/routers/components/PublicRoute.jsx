import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { routes } from '../../helpers/routes'
import { useAuth } from '../../contexts/auth/useAuth.js'
export const PublicRoute = props => {
    const { isLogged } = useAuth()
    if (isLogged()) return <Redirect to={routes.home} />
    return <Route {...props} />
}
