import React from 'react'
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
} from '../styles/pages/register.module.scss'

import { validationsRegisterForm } from '../helpers/validationsRegisterForm'
export const RegisterPage = () => {
    const { handleForm, handleInputChange, handleBlur, errors } = useForm(
        {
            name: '',
            lastname: '',
            email: '',
            password: '',
            re_password: '',
        },
        validationsRegisterForm
    )

    return (
        <>
            <div className={`${mainContainer}`}>
                <div className={registerContainer}>
                    <h2 className={Title}>Registrate</h2>
                    <form onSubmit={handleForm}>
                        <div className={nameContainer}>
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
                        <Button type="submit" size="large" />
                    </form>
                    <p>
                        O en su defecto
                        <Link to={routes.login}> inicia Sesión</Link>
                    </p>
                </div>
                <Logo />
            </div>
        </>
    )
}
