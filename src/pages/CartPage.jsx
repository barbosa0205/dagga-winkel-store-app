import React from 'react'
import { Button } from '../components/Button'
import { MainContainer } from '../components/MainContainer'
import { useCart } from '../contexts/cart/useCart'
import {
    cartContainer,
    buttonContainer,
    noProducts,
} from '../styles/pages/cartPage.module.scss'
export const CartPage = () => {
    const { cart } = useCart()
    return (
        <MainContainer>
            {!cart.length ? (
                <main className={cartContainer}>
                    <p className={noProducts}>
                        Aun no cuenta con productos en el carrito
                    </p>
                </main>
            ) : (
                <main>
                    <p>HOLA</p>
                    <div className={buttonContainer}>
                        <Button
                            type="button"
                            size="large"
                            text="Proceder con la compra"
                        />
                    </div>
                </main>
            )}
        </MainContainer>
    )
}
