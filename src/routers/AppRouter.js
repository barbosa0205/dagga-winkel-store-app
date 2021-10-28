import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import { CartPage } from '../pages/CartPage'
import { MainPage } from '../pages/MainPage'

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/cart" component={CartPage} />
                    <Route exact path="/" component={MainPage} />
                </Switch>
            </div>
        </Router>
    )
}
