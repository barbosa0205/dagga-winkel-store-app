import React, { createContext, useEffect, useState } from 'react'
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
    doc,
    getDoc,
} from 'firebase/firestore'
import { nanoid } from 'nanoid'

//Creamos nuestro contexto
export const AuthContext = createContext()

//Creamos el provider de autenticacion
export const AuthProvider = ({ token, setToken, children }) => {
    const history = useHistory()

    //states
    const [toggleMenu, setToggleMenu] = useState(false)
    const [user, setUser] = useState(null)
    const [avatar, setAvatar] = useState(null)

    useEffect(() => {
        if (localStorage.getItem('user-dagga-winkel') && !user) {
            ;(async () => {
                try {
                    const uid = localStorage.getItem('user-dagga-winkel')
                    const docRef = doc(db, 'users', uid)
                    const data = await getDoc(docRef)
                    setUser({
                        ...data.data(),
                        id: data.id,
                    })
                } catch (error) {
                    console.error('ERROR AL AÑADIR USUARIO A SETUSER', error)
                }
            })()
        }
    }, [])

    const userAlreadyRegister = async newUser => {
        try {
            const data = await createUserWithEmailAndPassword(
                auth,
                newUser.email,
                md5(newUser.password)
            )
            console.log(data)
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
                clientID: nanoid(),
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
            // console.log(email)
            const colRef = collection(db, 'users')
            const q = query(colRef, where('email', '==', email))
            onSnapshot(q, snapshot => {
                let data = snapshot.docs.find(doc => doc)
                setUser({
                    ...data.data(),
                    id: data.id,
                })
                if (!localStorage.getItem('user-dagga-winkel')) {
                    localStorage.setItem('user-dagga-winkel', data.id)
                }
                setToken(data.id)

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

            await getUserData(isLogin.user.email, fromLocation)
            console.log(isLogin)

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

    const logout = () => {
        setUser(null)
        setToken('')
        localStorage.removeItem('user-dagga-winkel')
    }

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
        avatar,
        setAvatar,
    } //deberia ser memorizado, lo haremos despues cuando veamos la necesidad

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
