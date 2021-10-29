import React, { useState } from 'react'

import { navContainer, navGroup } from '../styles/components/navbar.module.scss'
import { Logo } from './Logo'
import { Icon } from './Icon'
import { Search } from './Search'
import { CartShop } from './CartShop'
import { Aside } from './Aside'
import { AsideItem } from './AsideItem'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <>
            <div className={`${navContainer}`}>
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
                <Aside
                    toggleMenu={toggleMenu}
                    setToggleMenu={setToggleMenu}
                    tabletHidden
                >
                    <AsideItem title="Item" />
                </Aside>
            </div>
        </>
    )
}
