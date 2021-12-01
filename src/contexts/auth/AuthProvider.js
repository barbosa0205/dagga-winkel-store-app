import React, { createContext, useState } from 'react'
import { useHistory } from 'react-router'
import { roles } from '../../helpers/roles'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-bottts-sprites'
import md5 from 'md5'

//FIREBASE
import { db, auth } from '../../firebase/credentials'

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import {
    collection,
    addDoc,
    where,
    query,
    onSnapshot,
} from 'firebase/firestore'

//Creamos nuestro contexto
export const AuthContext = createContext()

//Creamos el provider de autenticacion
export const AuthProvider = ({ children }) => {
    const history = useHistory()

    //states
    const [toggleMenu, setToggleMenu] = useState(false)
    const [user, setUser] = useState(null)

    const userAlreadyRegister = async newUser => {
        try {
            createUserWithEmailAndPassword(
                auth,
                newUser.email,
                md5(newUser.password)
            )

            return {
                isRegistrable: true,
            }
        } catch (error) {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(
                `CODIGO DE ERROR: ${errorCode}, MENSAJE DE ERROR: ${errorMessage}`
            )
            return {
                error: error.code,
            }
        }
    }

    const createNewUser = async newUser => {
        try {
            const docUser = await addDoc(collection(db, 'users'), {
                role: roles.client,
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

    const getUserData = async (email, fromLocation) => {
        try {
            console.log(email)
            const colRef = collection(db, 'users')
            const q = query(colRef, where('email', '==', email))
            onSnapshot(q, snapshot => {
                let data = snapshot.docs.find(doc => doc)
                setUser(data.data())
                if (data) {
                    if (fromLocation) {
                        history.push(fromLocation)
                    } else {
                        history.push('/')
                    }
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    const register = async newUser => {
        const clientExist = await userAlreadyRegister(newUser)
        console.log(clientExist)
        if (clientExist.isRegistrable) {
            createNewUser(newUser)
        }
        return clientExist
    }
    const login = async (userCredentials, fromLocation) => {
        try {
            const { email, password } = userCredentials
            const isLogin = await signInWithEmailAndPassword(
                auth,
                email,
                md5(password)
            )
            getUserData(isLogin.user.email, fromLocation)
            return true
        } catch (error) {
            const errorCode = error.code
            const errorMessage = error.message
            console.error(
                `CODIGO DE ERROR: ${errorCode}, MENSAJE DE ERROR: ${errorMessage}`
            )
            return {
                error: error.code,
            }
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
    } //deberia ser memorizado, lo haremos despues cuando veamos la necesidad

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
