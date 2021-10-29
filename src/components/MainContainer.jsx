import React from 'react'

import { mainContainer } from '../styles/components/mainContainer.module.scss'

export const MainContainer = props => {
    return (
        <div className={mainContainer && `${mainContainer}`}>
            {props.children}
        </div>
    )
}
