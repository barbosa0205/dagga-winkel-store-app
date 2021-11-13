import React from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts/auth/useAuth.js'
import { roles } from '../../helpers/roles.js'
import { routes } from '../../helpers/routes'
export const PrivateRoute = ({ hasRole: role, ...rest }) => {
    const location = useLocation()
    const { user, isLogged, hasRole } = useAuth()
    if (!isLogged())
        return (
            <Redirect
                to={{ pathname: routes.login, state: { from: location } }}
            />
        )
    if (user.role === roles.admin) return <Route {...rest} />
    if (!hasRole(role)) return <Redirect to={routes.home} />
    return <Route {...rest} />
}
