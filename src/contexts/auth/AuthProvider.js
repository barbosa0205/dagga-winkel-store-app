import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router'
import { roles } from '../../helpers/roles'
import { nanoid } from 'nanoid'
//Creamos nuestro contexto
export const AuthContext = createContext()

//Creamos el provider de autenticacion
export const AuthProvider = ({ children }) => {
    const history = useHistory()

    //states
    const [toggleMenu, setToggleMenu] = useState(false)
    const [user, setUser] = useState(null)
    const [bd, setBd] = useState([])

    //la funcion register compara el email y usuario de cada cliente y devuelve un objeto con la propiedad userExist 'exist' | 'not exist'
    const register = newUser => {
        if (bd) {
            let clients = []
            if (clients.length) {
                setBd([
                    ...bd,
                    {
                        id: nanoid(),
                        roles: roles.client,
                        user: newUser.user,
                        name: newUser.name,
                        lastname: newUser.lastname,
                        email: newUser.email,
                        password: newUser.password,
                    },
                ])
                return {
                    userExist: 'not exist',
                }
            }
            //Asignamos el email y usuario de cada cliente al arreglo clients
            clients = bd.map(({ email, user }) => {
                return {
                    ...bd,
                    user,
                    email,
                }
            })
            //asignamos a la variable userAlreadyExist un valor booleano, si el email y usuario es igual a los datos que ingresa el usuario este regresa {userExist: 'exist} de lo contrario regresa {userExist: 'no exist} el cual se usa para condicionar dos alertas  en la pagina de registro

            const userAlredyExist = clients.some(({ email, user }) => {
                console.log(email, user)
                return email === newUser.email || user === newUser.user
                    ? true
                    : false
            })
            console.log(userAlredyExist)

            if (userAlredyExist) {
                console.log('ya existe este usuario')
                return {
                    userExist: 'exist',
                }
            } else {
                setBd([
                    ...bd,
                    {
                        id: nanoid(),
                        roles: roles.client,
                        user: newUser.user,
                        name: newUser.name,
                        lastname: newUser.lastname,
                        email: newUser.email,
                        password: newUser.password,
                    },
                ])
                return {
                    userExist: 'not exist',
                }
            }
        }
    }
    const login = (userCredentials, fromLocation) => {
        console.log(userCredentials, bd)

        const correctUser = bd.some(
            ({ user, password }) =>
                userCredentials.user === user &&
                userCredentials.password === password
        )
        if (correctUser) {
            setUser({ id: 1, role: roles.client, ...userCredentials })

            if (fromLocation) {
                history.push(fromLocation)
            } else {
                history.push('/')
            }
        } else {
            return false
        }
    }

    const logout = () => setUser(null)

    const isLogged = () => !!user

    const hasRole = role => {
        return role && user?.role === role
    }

    const handleLogin = formValues => {}

    const toggle = () => setToggleMenu(!toggleMenu)

    const contextValue = {
        user,
        setUser,
        toggleMenu,
        toggle,
        isLogged,
        hasRole,
        handleLogin,
        login,
        logout,
        register,
        bd,
        setBd,
    } //deberia ser memorizado, lo haremos despues cuando veamos la necesidad

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
