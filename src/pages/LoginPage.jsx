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
    const [formAlert, setFormAlert] = useState(false)
    let user = true

    const {
        formValues,
        preventSubmit,
        handleForm,
        handleInputChange,
        handleBlur,
        loading,
        setLoading,
        errors,
    } = useForm(
        {
            user: '',
            password: '',
        },
        validationsLoginForm
    )

    const setLogin = () => {
        const allCorrect = handleForm()
        if (allCorrect) {
            setLoading(true)
            user = login(formValues, location.state?.from)
            !user && setFormAlert(true)
            setLoading(false)
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
                        {loading && <p>cargando...</p>}
                        {formAlert && <Alert text="Este usuario no existe" />}
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
