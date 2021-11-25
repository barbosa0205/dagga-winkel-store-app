import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { Button } from '../components/Button'
import { routes } from '../helpers/routes'
import { useForm } from '../hooks/useForm'
import {
    mainContainer,
    registerContainer,
    Title,
    nameContainer,
    passwordContainer,
    emailContainer,
    inputContainer,
    inputError,
    closeContainer,
    userRegisterAlert,
} from '../styles/pages/register.module.scss'

import { validationsRegisterForm } from '../helpers/validationsRegisterForm'
import { useAuth } from '../contexts/auth/useAuth'
import { Modal } from '../components/Modal'
import { Icon } from '../components/Icon'
import { useMenu } from '../hooks/useMenu'
import { Alert } from '../components/Alert'
export const RegisterPage = () => {
    const [newUser, setNewUser] = useState({})
    const { register } = useAuth()
    const {
        formValues,
        preventSubmit,
        handleForm,
        handleInputChange,
        handleBlur,
        errors,
        setLoading,
    } = useForm(
        {
            user: '',
            name: '',
            lastname: '',
            email: '',
            password: '',
            re_password: '',
        },
        validationsRegisterForm
    )
    const setRegister = () => {
        const allCorrect = handleForm()
        if (allCorrect) {
            setLoading(true)
            setNewUser(register(formValues))

            setLoading(false)
        }
    }

    const { menu, toggleMenu } = useMenu()

    return (
        <>
            <div className={`${mainContainer}`}>
                <div className={registerContainer}>
                    <h2 className={Title}>Registrate</h2>
                    <form onSubmit={preventSubmit}>
                        <div className={nameContainer}>
                            <div className={inputContainer}>
                                <input
                                    type="text"
                                    name="user"
                                    placeholder="Usuario"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                {errors.user && (
                                    <p className={inputError}>{errors.user}</p>
                                )}
                            </div>
                            <div className={inputContainer}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Nombre"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && (
                                    <p className={inputError}>{errors.name}</p>
                                )}
                            </div>
                            <div className={inputContainer}>
                                <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Apellido"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                {errors.lastname && (
                                    <p className={inputError}>
                                        {errors.lastname}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className={emailContainer}>
                            <div className={inputContainer}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Correo"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && (
                                    <p className={inputError}>{errors.email}</p>
                                )}
                            </div>
                        </div>
                        <div className={passwordContainer}>
                            <div className={inputContainer}>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Contraseña"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                {errors.password && (
                                    <p className={inputError}>
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                            <div className={inputContainer}>
                                <input
                                    type="password"
                                    name="re_password"
                                    placeholder="Repetir Contraseña"
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                />
                                {errors.re_password && (
                                    <p className={inputError}>
                                        {errors.re_password}
                                    </p>
                                )}
                            </div>
                        </div>
                        {newUser.userExist === 'exist' && (
                            <Alert text="Este usuario ya ha sido registrado" />
                        )}
                        <Button
                            type="submit"
                            size="large"
                            onClick={setRegister}
                        />
                    </form>
                    <p>
                        O en su defecto
                        <Link to={routes.login}> inicia Sesión</Link>
                    </p>
                </div>
                <Logo />
            </div>
            {newUser?.userExist === 'not exist' && (
                <>
                    {!menu && (
                        <Modal>
                            <div className={userRegisterAlert}>
                                <div className={closeContainer}>
                                    <Icon
                                        className="ri-close-circle-line"
                                        onClick={toggleMenu}
                                    />
                                </div>
                                <Icon className="ri-checkbox-circle-line" />
                                <p>se ha registado correctamente</p>
                                <Link to="/login">
                                    <b>Inicia seción</b>
                                </Link>
                            </div>
                        </Modal>
                    )}
                </>
            )}
        </>
    )
}
