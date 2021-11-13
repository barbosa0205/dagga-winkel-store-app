import React from 'react'
import { Switch } from 'react-router-dom'

import { routes } from '../helpers/routes'
import { LoginPage } from '../pages/LoginPage'
import { RegisterPage } from '../pages/RegisterPage'
import { PublicRoute } from './components/PublicRoute'
import { MainRoutes } from './MainRoutes'

export const AppRouter = () => {
    return (
        <Switch>
            <PublicRoute
                exact
                path={routes.register}
                component={RegisterPage}
            />
            <PublicRoute exact path={routes.login} component={LoginPage} />
            <MainRoutes />
        </Switch>
    )
}
