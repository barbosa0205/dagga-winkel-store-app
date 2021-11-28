import React from 'react'

import {
    changeProfileContainer,
    optionContainer,
    changeName,
} from '../styles/components/changeProfile.module.scss'
import { Avatars } from './Avatars'

import { useAuth } from '../contexts/auth/useAuth'
import { useForm } from '../hooks/useForm'

export const ChangeProfile = ({ menu }) => {
    const { user } = useAuth()
    const { formValues, handleInputChange } = useForm({
        name: user.name,
        lastname: user.lastname,
    })

    return (
        <div className={changeProfileContainer}>
            <div className={optionContainer}>
                <p>Cambiar foto de perfil:</p>
                <input type="file" />
            </div>
            <div className={optionContainer}>
                <p>Cambiar Nombre:</p>
                <input
                    className={changeName}
                    type="text"
                    name="name"
                    onChange={handleInputChange}
                    value={formValues.name}
                />
            </div>
            <div className={optionContainer}>
                <p>Cambiar Apellido:</p>
                <input
                    className={changeName}
                    type="text"
                    name="lastname"
                    onChange={handleInputChange}
                    value={formValues.lastname}
                />
            </div>
            <h3>o puedes escoger un Avatar</h3>
            <Avatars menu={menu} />
        </div>
    )
}
