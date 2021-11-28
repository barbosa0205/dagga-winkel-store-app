import React from 'react'
import { useMenu } from '../hooks/useMenu'

import {
    menuContainer,
    clientContainer,
    clientImg,
    settingsContainer,
    itemsContainer,
    subMenu,
} from '../styles/components/clientMenu.module.scss'
import { AsideItem } from './Aside/AsideItem'
import { Icon } from './Icon'
import { SubMenu } from './SubMenu'
import { useAuth } from '../contexts/auth/useAuth'
import { useHistory } from 'react-router'
import { routes } from '../helpers/routes'
import { UserImg } from './UserImg'

export const ClientMenu = () => {
    const { menu, toggleMenu } = useMenu()
    const { user, logout, toggle } = useAuth()

    const history = useHistory()

    return (
        <>
            <div className={menuContainer}>
                <div className={clientContainer}>
                    <div className={clientImg}>
                        <UserImg src={user.img} alt="client" />
                        <i
                            className="ri-arrow-down-s-line"
                            onClick={toggleMenu}
                        ></i>
                    </div>
                </div>
                <SubMenu isVisible={menu} menuClass={subMenu}>
                    <div className={settingsContainer}>
                        <Icon
                            className="ri-settings-4-line"
                            onClick={() => {
                                history.push(routes.settings)
                                toggle()
                            }}
                        />
                    </div>
                    <div className={itemsContainer}>
                        <AsideItem to={routes.profile} text="Mi perfil" />
                        <AsideItem to="/" text="Favoritos" />
                        <AsideItem
                            to={routes.home}
                            text="Cerrar sesión"
                            onClick={logout}
                        />
                    </div>
                </SubMenu>
            </div>
        </>
    )
}
