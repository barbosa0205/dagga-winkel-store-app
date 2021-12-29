import React, { useEffect, useRef, useState } from 'react'
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
import {
    collection,
    doc,
    onSnapshot,
    query,
    updateDoc,
    where,
} from '@firebase/firestore'
import { db } from '../firebase/credentials'
import { Alert } from './Alert'

export const ChangeProfile = React.memo(({ menu }) => {
    const { user, setUser, avatar, setAvatar } = useAuth()
    const { formValues, preventSubmit, handleInputChange } = useForm({
        name: user.name,
        lastname: user.lastname,
    })
    const fileInput = useRef()

    const [errorAlert, setErrorAlert] = useState(false)
    const [clientId, setClientId] = useState(null)
    const [alertSuccess, setAlertSuccess] = useState(false)

    useEffect(() => {
        if (clientId) updateClientData()
    }, [])

    const updateClientData = async () => {
        try {
            console.log(clientId)
            const clientRef = doc(db, 'users', clientId)
            await updateDoc(clientRef, {
                name: user.name,
                lastname: user.lastname,
                img: user.img,
            })
            setClientId(null)
        } catch (error) {
            console.log(error)
            setErrorAlert(true)
        }
    }
    const getClientId = async () => {
        try {
            const colRef = collection(db, 'users')
            const q = query(colRef, where('email', '==', user.email))

            onSnapshot(q, snapshot => {
                let data = snapshot.docs.find(doc => doc)
                const id = data.id

                setClientId(id)
                setAlertSuccess(true)
            })
        } catch (error) {
            console.log(error)
            setErrorAlert(true)
        }
    }

    const saveChanges = () => {
        try {
            if (
                formValues.name.trim() === user.name &&
                formValues.lastname.trim() === user.lastname &&
                !avatar
            )
                return

            if (
                formValues.name.trim() !== user.name ||
                formValues.lastname.trim() !== user.lastname ||
                user.img !== avatar
            ) {
                setUser({
                    ...user,
                    name: formValues.name.trim(),
                    lastname: formValues.lastname.trim(),
                    img: avatar,
                })
            }

            getClientId()
        } catch (error) {
            console.error(`Error al guardar cambios:  ${error}`)
        }
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
                    {errorAlert && <Alert text="ERROR" />}
                    {alertSuccess && (
                        <Alert text="Cambios Aplicados" color="green" />
                    )}
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
})
