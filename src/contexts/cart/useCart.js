import { useContext } from 'react'
import { CartContext } from './CartProvider'
export const useCart = () => {
    const contextValue = useContext(CartContext)
    return contextValue
}
