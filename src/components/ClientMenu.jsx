import React from 'react'

import {
    menuContainer,
    clientContainer,
    clientImg,
} from '../styles/components/clientMenu.module.scss'

export const ClientMenu = () => {
    return (
        <div className={menuContainer}>
            <div className={clientContainer}>
                <div className={clientImg}>
                    {' '}
                    <img src="https://via.placeholder.com/80" alt="client" />
                </div>
            </div>
        </div>
    )
}
