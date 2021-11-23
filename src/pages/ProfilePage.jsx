import React from 'react'
import { Title } from '../components/Title'
import { UserImg } from '../components/UserImg'

import { container } from '../styles/pages/profile.module.scss'

export const ProfilePage = () => {
    return (
        <div className={container}>
            <UserImg src="https://via.placeholder.com/120" alt="profile" />
            <Title text="Jose Luis Barbosa Cepeda" />
        </div>
    )
}
