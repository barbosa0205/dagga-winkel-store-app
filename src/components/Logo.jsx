import React from 'react'

import { logoContainer, logo } from '../styles/components/logo.module.scss'

export const Logo = () => {
    return (
        <div className={`${logoContainer}`}>
            <img
                className={`${logo}`}
                src="https://picsum.photos/150/50"
                alt="logo"
            />
        </div>
    )
}
