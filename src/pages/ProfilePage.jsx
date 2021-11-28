import React from 'react'
import { FloatingContainer } from '../components/FloatingContainer'
import { Modal } from '../components/Modal'
import { Title } from '../components/Title'
import { UserImg } from '../components/UserImg'
import { useAuth } from '../contexts/auth/useAuth'
import { useMenu } from '../hooks/useMenu'

import {
    container,
    editProfileContainer,
    userContainer,
} from '../styles/pages/profile.module.scss'
import { ChangeProfile } from '../components/ChangeProfile'

export const ProfilePage = () => {
    const { menu, toggleMenu } = useMenu()
    const { user } = useAuth()

    return (
        <>
            <div className={container}>
                <div className={editProfileContainer}>
                    <p onClick={toggleMenu}>Editar Perfil</p>
                </div>
                <div className={userContainer}>
                    <UserImg src={user.img} />
                    <Title text={`${user.name} ${user.lastname}`} />
                </div>
            </div>
            {menu && (
                <Modal>
                    <FloatingContainer toggleMenu={toggleMenu}>
                        <ChangeProfile menu={menu} />
                    </FloatingContainer>
                </Modal>
            )}
        </>
    )
}
