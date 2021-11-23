import { Link } from 'react-router-dom'
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

export const LoginPage = () => {
    const { handleForm, handleInputChange, handleBlur, errors } = useForm(
        {
            user: '',
            password: '',
        },
        validationsLoginForm
    )

    return (
        <>
            <div className={`${mainContainer}`}>
                <div className={loginContainer}>
                    <h2 className={Title}>Inicia Sesión</h2>
                    <form onSubmit={handleForm}>
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
                            // onClick={() => login(useForm, location.state?.from)}
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
