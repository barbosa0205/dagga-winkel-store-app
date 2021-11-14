import React from 'react'
import {
    subMenuContainer,
    visible,
    hidden,
} from '../styles/components/subMenu.module.scss'
export const SubMenu = ({ isVisible, children, menuClass }) => {
    return (
        <aside
            className={`${subMenuContainer} ${menuClass} ${
                isVisible ? visible : hidden
            }`}
        >
            {children}
        </aside>
    )
}
