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
import { CategoryPage } from '../pages/CategoryPage'

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
                    exact
                    path={routes.categories}
                    component={CategoriesPage}
                />
                <Route
                    exact
                    path={routes.category(':id')}
                    component={CategoryPage}
                />
                <Route
                    exact
                    path={routes.product(':id')}
                    component={ProductPage}
                />
                <Route
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
