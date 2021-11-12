import React, { useState } from 'react'

import { navContainer, navGroup } from '../styles/components/navbar.module.scss'
import { Logo } from './Logo'
import { Icon } from './Icon'
import { Search } from './Search'
import { CartShop } from './CartShop'
import { Aside } from './Aside'
import { AsideItem } from './AsideItem'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/auth/useAuth'
import { roles } from '../helpers/roles'
import { ClientMenu } from './ClientMenu'
import { Menu } from './Menu'
import { GuestMenu } from './GuestMenu'

export const Navbar = () => {
    const { toggleMenu, setToggleMenu, isLogged, hasRole: role } = useAuth()
    return (
        <>
            <nav className={`${navContainer}`}>
                <div className={`${navGroup}`}>
                    <Logo />
                    <Icon>
                        <i
                            className={`ri-menu-fill icon tabletHidden`}
                            onClick={() => setToggleMenu(!toggleMenu)}
                        ></i>
                    </Icon>
                    <Search />
                    <CartShop>
                        <Icon>
                            <Link
                                className="ri-shopping-cart-line icon"
                                to="/cart"
                            ></Link>
                        </Icon>
                    </CartShop>
                </div>
            </nav>
            <Aside
                toggleMenu={toggleMenu}
                setToggleMenu={setToggleMenu}
                tabletHidden
            >
                <Menu />
                {isLogged() ? <ClientMenu /> : <GuestMenu />}
            </Aside>
        </>
    )
}
