import React from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../helpers/routes'

import { logoContainer, logo } from '../styles/components/logo.module.scss'

export const Logo = () => {
    return (
        <div className={`${logoContainer}`}>
            <Link to={routes.home}>
                <h1 className={logo}>dagga winkel</h1>
            </Link>
        </div>
    )
}
