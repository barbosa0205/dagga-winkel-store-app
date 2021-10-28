import React from 'react'

import { navContainer } from '../styles/components/navbar.module.scss'
import { CartShop } from './CartShop'
import { Icon } from './Icon'
import { Search } from './Search'

export const Navbar = () => {
    return (
        <div className={`${navContainer}`}>
            <Icon iconClass="ri-menu-fill" />
            <Search />
            <CartShop>
                <Icon iconClass="ri-shopping-cart-line" redirectTo="/cart" />
            </CartShop>
        </div>
    )
}
