import React, { useRef, useState } from 'react'

import {
    changeProfileContainer,
    optionContainer,
    changeName,
    buttonContainer,
} from '../styles/components/changeProfile.module.scss'
import { Avatars } from './Avatars'

import { useAuth } from '../contexts/auth/useAuth'
import { useForm } from '../hooks/useForm'
import { Button } from './Button'

export const ChangeProfile = ({ menu, toggleMenu }) => {
    const { user, setUser } = useAuth()
    const { formValues, preventSubmit, handleInputChange } = useForm({
        name: user.name,
        lastname: user.lastname,
    })
    const fileInput = useRef()

    const [avatar, setAvatar] = useState(null)

    const saveChanges = () => {
        if (
            formValues.name.trim() === user.name &&
            formValues.lastname.trim() === user.lastname &&
            user.img === avatar
        )
            return
        if (avatar && user.img !== avatar) {
            setUser({
                ...user,
                img: avatar,
            })
            //TODO:AQUIMEQUEDE
        } else if (fileInput.files[0]) {
            setUser({
                ...user,
                img: avatar,
            })
        }
        if (formValues.name.trim() !== user.name) {
            setUser({
                ...user,
                name: formValues.name.trim(),
            })
        }
        if (formValues.lastname.trim() !== user.lastname) {
            setUser({
                ...user,
                lastname: formValues.lastname.trim(),
            })
        }
        toggleMenu()
    }

    return (
        <div className={changeProfileContainer}>
            <form onSubmit={preventSubmit}>
                <div className={optionContainer}>
                    <p>Cambiar foto de perfil:</p>
                    <input type="file" ref={fileInput} />
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
                <Avatars menu={menu} avatar={avatar} setAvatar={setAvatar} />
                <div className={buttonContainer}>
                    <Button
                        type="submit"
                        size="large"
                        text="Guardar cambios"
                        onClick={saveChanges}
                    />
                </div>
            </form>
        </div>
    )
}
