import React from 'react'

import {
    asideContainer,
    closeContainer,
    menuItemsContainer,
} from '../styles/components/aside.module.scss'
import { Icon } from './Icon'

export const Aside = ({ children, toggleMenu, setToggleMenu }) => {
    return (
        <>
            <aside
                className={`${asideContainer} ${
                    toggleMenu ? 'visible' : 'hidden'
                }`}
            >
                <div className={`${closeContainer}`}>
                    <Icon>
                        {' '}
                        <i
                            className={`ri-close-circle-line`}
                            onClick={() => setToggleMenu(menu => !menu)}
                        ></i>
                    </Icon>
                </div>
                <ul className={`${menuItemsContainer}`}>{children}</ul>
            </aside>
        </>
    )
}
