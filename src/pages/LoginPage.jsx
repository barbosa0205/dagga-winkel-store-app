import { Link, useLocation } from 'react-router-dom'
import { Logo } from '../components/Logo'
import { routes } from '../helpers/routes'
import { useForm } from '../hooks/useForm'
import {
    mainContainer,
    loginContainer,
    Title,
    link,
    inputContainer,
    inputError,
} from '../styles/pages/loginPage.module.scss'

import { Button } from '../components/Button'
import { validationsLoginForm } from '../helpers/validationsLoginForm'
import { useAuth } from '../contexts/auth/useAuth'
import { useState } from 'react'
import { Alert } from '../components/Alert'

export const LoginPage = () => {
    const location = useLocation()
    const { login } = useAuth()

    const [loginStatus, setLoginStatus] = useState(null)

    const {
        formValues,
        preventSubmit,
        handleForm,
        handleInputChange,
        handleBlur,
        errors,
    } = useForm(
        {
            email: '',
            password: '',
        },
        validationsLoginForm
    )

    const setLogin = async () => {
        const allCorrect = handleForm()
        if (allCorrect) {
            const status = await login(formValues, location.state?.from)
            setLoginStatus(status)
        }
    }

    return (
        <>
            <div className={`${mainContainer}`}>
                <div className={loginContainer}>
                    <h2 className={Title}>Inicia Sesión</h2>
                    <form onSubmit={preventSubmit}>
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
                        <div className={inputContainer}>
                            <input
                                type="password"
                                name="password"
                                placeholder="Contraseña"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                            />
                            {errors.password && (
                                <p className={inputError}>{errors.password}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            size="large"
                            onClick={() => {
                                setLogin()
                            }}
                        />

                        {(loginStatus?.error === 'auth/wrong-password' ||
                            loginStatus?.error === 'auth/user-not-found') && (
                            <Alert
                                text="Correo o contraseña no coincide"
                                color="red"
                            />
                        )}
                        {loginStatus?.error === 'auth/too-many-requests' && (
                            <Alert
                                text="Demasiados intentos, intente mas tarde"
                                color="red"
                            />
                        )}
                    </form>
                    <p>
                        No tienes una cuenta?
                        <Link to={routes.register}> Registrate</Link>
                    </p>

                    <Link to={routes.forgot_password} className={link}>
                        Olvidaste tu contraseña
                    </Link>
                    {/* <div className={optionalLoginContainer}>
                        <Icon>
                            <i className="ri-google-fill"></i>
                        </Icon>
                        <Icon>
                            <i className="ri-facebook-fill"></i>
                        </Icon>
                    </div> */}
                </div>
                <Logo />
            </div>
        </>
    )
}
