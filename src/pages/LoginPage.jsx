import { Link, useLocation } from 'react-router-dom'
import { Icon } from '../components/Icon'
import { Logo } from '../components/Logo'
import { routes } from '../helpers/routes'
import { useForm } from '../hooks/useForm'
import {
    mainContainer,
    loginContainer,
    Title,
    link,
    optionalLoginContainer,
} from '../styles/pages/loginPage.module.scss'

import { Button } from '../components/Button'
import { validationsForm } from '../helpers/validationsForm'
import { useAuth } from '../contexts/auth/useAuth'

export const LoginPage = () => {
    const location = useLocation()

    const userCredentials = {}

    const { login } = useAuth()

    const { handleForm, handleInputChange, handleBlur } = useForm(
        {
            user: '',
            password: '',
        },
        validationsForm
    )

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
                            onBlur={handleBlur}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        <Button
                            type="submit"
                            size="large"
                            onClick={() =>
                                login(userCredentials, location.state?.from)
                            }
                        />
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
