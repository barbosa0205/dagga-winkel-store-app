import React, { createContext, useEffect, useState } from 'react'
import { readData } from '../../firebase/helpers/readData'

//Creamos nuestro contexto
export const CartContext = createContext()

//Creamos el provider de el cart
export const CartProvider = ({ children }) => {
    //states
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    //effects
    useEffect(() => {
        readData(setProducts, 'products')
    }, [])

    const contextValue = {
        cart,
        products,
        setProducts,
    } //deberia ser memorizado, lo haremos despues cuando veamos la necesidad

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
