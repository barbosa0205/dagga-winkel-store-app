import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainPage } from '../pages/MainPage'
import { PrivateRoute } from './components/PrivateRoute'
import { CartPage } from '../pages/CartPage'
import { routes } from '../helpers/routes'
import { roles } from '../helpers/roles'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ProfilePage } from '../pages/ProfilePage'
import { Cpanel } from '../pages/Cpanel'
import { ProductPage } from '../pages/products/ProductPage'
import { ProductsSearchedPage } from '../pages/products/ProductsSearchedPage'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { CategoriesPage } from '../pages/CategoriesPage'

export const MainRoutes = () => {
    return (
        <>
            <Navbar />
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
                    hasRole={roles.client}
                    exact
                    path={routes.categories}
                    component={CategoriesPage}
                />
                <Route
                    hasRole={roles.client}
                    exact
                    path={routes.product(':id')}
                    component={ProductPage}
                />
                <Route
                    hasRole={roles.client}
                    exact
                    path={routes.search(':id')}
                    component={ProductsSearchedPage}
                />

                <Route exact path={routes.home} component={MainPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
            <Footer />
        </>
    )
}
