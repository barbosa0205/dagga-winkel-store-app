import React from 'react'

import { mainContainer } from '../styles/components/mainContainer.scss'

export const MainContainer = props => {
    return <div className={`${mainContainer}`}>{props.children}</div>
}
