import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Logo } from '../components/Logo'
import { routes } from '../helpers/routes'
import { useForm } from '../hooks/useForm'
import {
    mainContainer,
    backgroundImg,
    loginContainer,
    Title,
    link,
    optionalLoginContainer,
} from '../styles/pages/loginPage.module.scss'
import leafImg from '../assets/leaf.jpg'
import { Button } from '../components/Button'

export const LoginPage = () => {
    const { handleForm, handleInputChange } = useForm({
        user: '',
        password: '',
    })
    return (
        <>
            <div className={`${mainContainer}`}>
                <div className={loginContainer}>
                    <h2 className={Title}>Inicia Sesión</h2>
                    <form onSubmit={handleForm}>
                        <input
                            type="text"
                            name="user"
                            placeholder="Usuario"
                            onChange={handleInputChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={handleInputChange}
                        />
                        <Button type="submit" size="large" />
                    </form>
                    <p>
                        No tienes una cuenta?
                        <Link to={routes.register}> Registrate</Link>
                    </p>

                    <Link to={routes.register} className={link}>
                        Olvidaste tu contraseña
                    </Link>
                    <div className={optionalLoginContainer}>
                        <Icon>
                            <i className="ri-google-fill"></i>
                        </Icon>
                        <Icon>
                            <i className="ri-facebook-fill"></i>
                        </Icon>
                    </div>
                </div>
                <Logo />
            </div>
        </>
    )
}
