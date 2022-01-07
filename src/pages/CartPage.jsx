import React, { useEffect, useState } from 'react'
import { Button } from '../components/Button'
import { Icon } from '../components/Icon'
import { MainContainer } from '../components/MainContainer'
import { useCart } from '../contexts/cart/useCart'
import {
    cartContainer,
    productsContainer,
    productContainer,
    closeContainer,
    buttonContainer,
    noProducts,
    productImg,
    productTitle,
    productPrice,
    productShip,
    totalContainer,
    shipMountContainer,
} from '../styles/pages/cartPage.module.scss'
export const CartPage = () => {
    const { cart, setCart } = useCart()
    const [prices, setPrices] = useState([])
    const [totalMount, setTotalMount] = useState(0)
    useEffect(() => {
        const array = []
        cart.map(({ price }) => {
            array.push(price)
        })
        setPrices(array)
    }, [cart])

    useEffect(() => {
        prices.length && setTotalMount(prices.reduce((prev, acc) => prev + acc))
    }, [prices])

    const removeProduct = id => {
        setCart(cart.filter(p => p.id !== id))
    }

    return (
        <MainContainer>
            {!cart.length ? (
                <main className={cartContainer}>
                    <p className={noProducts}>
                        Aun no cuenta con productos en el carrito
                    </p>
                </main>
            ) : (
                <main className={cartContainer}>
                    <h3>Total productos: {cart.length}</h3>
                    <section className={productsContainer}>
                        {cart.map(product => {
                            return (
                                <article
                                    key={product.id}
                                    className={productContainer}
                                >
                                    <div className={closeContainer}>
                                        <Icon
                                            className="ri-close-fill"
                                            onClick={() =>
                                                removeProduct(product.id)
                                            }
                                        />
                                    </div>
                                    <h3 className={productTitle}>
                                        {product.product_name}
                                    </h3>
                                    <img
                                        className={productImg}
                                        src={product.images[0].image}
                                        alt={product.product_name}
                                    />
                                    <p
                                        className={productPrice}
                                    >{`Costo del producto: $${product.price} MXN`}</p>
                                    {product.free_shipping === 'true' ? (
                                        <p className={productShip}>
                                            Envio gratis
                                        </p>
                                    ) : (
                                        <div className={shipMountContainer}>
                                            <h3>Costo de envio</h3>
                                            <p>
                                                {`$${product.ship_mount} MXN`}
                                            </p>
                                        </div>
                                    )}
                                </article>
                            )
                        })}
                    </section>
                    <section className={totalContainer}>
                        <h3> {`TOTAL: $${totalMount} MXN`}</h3>
                    </section>
                    <section className={buttonContainer}>
                        <Button
                            type="button"
                            size="large"
                            text="Proceder con la compra"
                        />
                    </section>
                </main>
            )}
        </MainContainer>
    )
}
