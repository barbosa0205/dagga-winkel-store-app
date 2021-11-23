import React from 'react'
import { menuContainer } from '../styles/components/menu.module.scss'
import { AsideItem } from './Aside/AsideItem'
export const Menu = () => {
    return (
        <div className={menuContainer}>
            <AsideItem to="/" text="Inicio" />
            <AsideItem to="/categories" text="Todas las categorias" />
            <AsideItem to="/offers" text="Ofertas" />
        </div>
    )
}
