import React from 'react'
import { routes } from '../../helpers/routes'

import { adminMenu } from '../../styles/components/adminMenu.module.scss'
import { AsideItem } from '../Aside/AsideItem'

export const AdminMenu = () => {
    return (
        <section className={adminMenu}>
            <AsideItem text="cPanel" to={routes.cPanel} />
        </section>
    )
}
