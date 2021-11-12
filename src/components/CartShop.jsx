import React from 'react'

import { cartContainer } from '../styles/components/cartShow.module.scss'

export const CartShop = props => {
    return <div className={cartContainer}>{props.children}</div>
}
