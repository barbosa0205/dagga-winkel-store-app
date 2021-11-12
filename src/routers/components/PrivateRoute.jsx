import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/useAuth.js'
import { routes } from '../../helpers/routes'
export const PrivateRoute = ({ hasRole: role, ...rest }) => {
    const { isLogged, hasRole } = useAuth()
    if (!isLogged()) return <Redirect to={routes.login} />
    if (!hasRole(role)) return <Redirect to={routes.home} />
    return <Route {...rest} />
}
