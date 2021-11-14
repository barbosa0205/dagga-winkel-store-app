import React from 'react'
import { useMenu } from '../hooks/useMenu'

import {
    menuContainer,
    clientContainer,
    clientImg,
    itemsContainer,
    subMenu,
} from '../styles/components/clientMenu.module.scss'
import { AsideItem } from './AsideItem'
import { SubMenu } from './SubMenu'

export const ClientMenu = () => {
    const { menu, toggleMenu } = useMenu()
    return (
        <>
            <div className={menuContainer}>
                <div className={clientContainer}>
                    <div className={clientImg}>
                        <img
                            src="https://via.placeholder.com/80"
                            alt="client"
                        />
                        <i
                            className="ri-arrow-down-s-line"
                            onClick={toggleMenu}
                        ></i>
                    </div>
                </div>
                <SubMenu isVisible={menu} menuClass={subMenu}>
                    <div className={itemsContainer}>
                        <AsideItem to="/" text="Favoritos" />
                    </div>
                </SubMenu>
            </div>
        </>
    )
}
