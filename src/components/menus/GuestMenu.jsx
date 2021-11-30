import React from 'react'

import { guestMenu } from '../../styles/components/guestMenu.module.scss'
import { AsideItem } from '../Aside/AsideItem'
import { Title } from '../Title'

export const GuestMenu = () => {
    return (
        <div className={` ${guestMenu}`}>
            <Title text="IDENTIFICATE" />
            <AsideItem to="/login" text="Inicia Sesión" />
            <AsideItem to="/register" text="Registrate" />
        </div>
    )
}
