import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { PrivateRoute } from './components/PrivateRoute'
import { CartPage } from '../pages/CartPage'
import { routes } from '../helpers/routes'
import { roles } from '../helpers/roles'
import { Layout } from '../components/Layout'
import { CategoriesPage } from '../pages/CategoriesPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage'
import { Cpanel } from '../pages/Cpanel'
export const MainRoutes = () => {
    return (
        <>
            <Layout>
                <Switch>
                    <PrivateRoute
                        hasRole={roles.admin}
                        exact
                        path={routes.cPanel}
                        component={Cpanel}
                    />
                    <PrivateRoute
                        hasRole={roles.client}
                        exact
                        path={routes.profile}
                        component={ProfilePage}
                    />
                    <PrivateRoute
                        hasRole={roles.client}
                        exact
                        path={routes.cart}
                        component={CartPage}
                    />
                    <Route
                        exact
                        path={routes.categories}
                        component={CategoriesPage}
                    />
                    <Route exact path={routes.home} component={MainPage} />
                    <Route path="*" component={NotFoundPage} />
                </Switch>
            </Layout>
        </>
    )
}
