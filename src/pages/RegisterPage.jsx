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
} from '../styles/pages/register.module.scss'
export const RegisterPage = () => {
    const { handleForm, handleInputChange } = useForm({
        name: '',
        lastname: '',
        email: '',
        password: '',
        re_password: '',
    })

    return (
        <>
            <div className={`${mainContainer}`}>
                <div className={registerContainer}>
                    <h2 className={Title}>Registrate</h2>
                    <form onSubmit={handleForm}>
                        <div className={nameContainer}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Nombre"
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Apellido"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={emailContainer}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Correo"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className={passwordContainer}>
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                onChange={handleInputChange}
                            />
                            <input
                                type="password"
                                name="re_password"
                                placeholder="Repetir Contraseña"
                                onChange={handleInputChange}
                            />
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
