import React from 'react'
import { AsideItem } from './AsideItem'

import { guestMenu } from '../styles/components/guestMenu.module.scss'
import { Title } from './Title'

export const GuestMenu = () => {
    return (
        <div className={` ${guestMenu}`}>
            <Title text="IDENTIFICATE" />
            <AsideItem to="/login" text="Inicia Sesión" />
            <AsideItem to="/register" text="Registrate" />
        </div>
    )
}
