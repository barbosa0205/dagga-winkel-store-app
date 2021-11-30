import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router'
import { roles } from '../../helpers/roles'
import { nanoid } from 'nanoid'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-bottts-sprites'
import md5 from 'md5'
import profileImg from '../../assets/profile.jpg'

//FIREBASE
import { db, auth } from '../../firebase/credentials'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { collection, addDoc, getDoc, get } from 'firebase/firestore'

//Creamos nuestro contexto
export const AuthContext = createContext()

//Creamos el provider de autenticacion
export const AuthProvider = ({ children }) => {
    const history = useHistory()

    //states
    const [toggleMenu, setToggleMenu] = useState(false)
    const [user, setUser] = useState(null)
    const [bd, setBd] = useState([])

    const authUser = newUser => {
        createUserWithEmailAndPassword(
            auth,
            newUser.email,
            md5(newUser.password)
        )
            .then(userCredential => {
                console.log('sign up')
            })
            .catch(error => {
                const errorCode = error.code
                const errorMessage = error.message

                return {
                    errorCode,
                    errorMessage,
                }
            })
    }

    const createNewUser = async newUser => {
        try {
            const docUser = await addDoc(collection(db, 'users'), {
                roles: roles.client,
                user: newUser.user.trim(),
                name: newUser.name.trim(),
                lastname: newUser.lastname.trim(),
                email: newUser.email.trim(),
                password: md5(newUser.password).trim(),
                img: createAvatar(style, {
                    dataUri: true,
                    size: 120,
                    background: '#ececec',
                }),
            })
            console.log('Document written with ID: ', docUser.id)
        } catch (error) {
            console.error('Error adding document: ', error)
        }
    }

    //la funcion register compara el email y usuario de cada cliente y devuelve un objeto con la propiedad userExist 'exist' | 'not exist'
    const register = async newUser => {
        const userExist = authUser(newUser)
        console.log(userExist)
    }
    const login = (userCredentials, fromLocation) => {
        signInWithEmailAndPassword(
            auth,
            userCredentials.email,
            md5(userCredentials.password)
        ).then(userCredential => {
            console.log('sign in')
        })
        // if (correctUser.length) {
        //     console.log(correctUser)
        //     setUser({ role: roles.client, ...correctUser[0] })

        //     if (fromLocation) {
        //         history.push(fromLocation)
        //     } else {
        //         history.push('/')
        //     }
        // } else {
        //     return false
        // }
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
