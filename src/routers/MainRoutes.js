import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { MainPage } from '../pages/MainPage'
import { PrivateRoute } from './components/PrivateRoute'
import { CartPage } from '../pages/CartPage'
import { routes } from '../helpers/routes'
import { roles } from '../helpers/roles'
export const MainRoutes = () => {
    return (
        <>
            <Navbar />

            <div>
                <Switch>
                    <PrivateRoute
                        hasRole={roles.client}
                        exact
                        path={routes.cart}
                        component={CartPage}
                    />
                    <Route exact path={routes.home} component={MainPage} />
                </Switch>
            </div>
        </>
    )
}
