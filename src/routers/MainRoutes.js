import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { PrivateRoute } from './components/PrivateRoute'
import { CartPage } from '../pages/CartPage'
import { routes } from '../helpers/routes'
import { roles } from '../helpers/roles'
import { Layout } from '../components/Layout'
export const MainRoutes = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <PrivateRoute
                        hasRole={roles.client}
                        exact
                        path={routes.cart}
                        component={CartPage}
                    />
                    <Route exact path={routes.home} component={MainPage} />
                </Switch>
            </Layout>
        </>
    )
}
