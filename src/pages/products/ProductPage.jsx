import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Icon } from '../../components/Icon'
import { Modal } from '../../components/Modal'
import { useAuth } from '../../contexts/auth/useAuth'
import { useCart } from '../../contexts/cart/useCart'
import { getProductById } from '../../firebase/helpers/readData'
import { routes } from '../../helpers/routes'

import {
    imageList,
    mainImageClass,
    infoContainer,
    price,
    freeShip,
    descContainer,
    buttonContainer,
    cartButton,
    added,
    productAddedContainer,
} from '../../styles/pages/products/productPage.module.scss'

export const ProductPage = () => {
    const { user } = useAuth()
    const { setCart } = useCart()
    const history = useHistory()
    const location = useLocation()
    const [productId, setProductId] = useState(location.pathname.slice(10))
    const [product, setProduct] = useState(null)
    const [mainImage, setMainImage] = useState('')
    const [productAdded, setProductAdded] = useState(false)
    useEffect(() => {
        getProductById(productId, setProduct)
    }, [productId])

    useEffect(() => {
        setMainImage(product?.images[0].image)
        return () => {
            setProductAdded(false)
        }
    }, [product])

    const showImg = img => {
        setMainImage(img)
    }

    const addProductToCart = product => {
        if (user?.role) {
            setCart(c => [...c, product])
            setProductAdded(true)
            setTimeout(() => {
                setProductAdded(false)
            }, 1500)
        } else {
            history.push(routes.login)
        }
    }

    return (
        <main>
            {product ? (
                <>
                    <h1>{product?.product_name}</h1>
                    <img
                        className={mainImageClass}
                        src={mainImage}
                        alt={product?.product_name}
                    />
                    <section className={infoContainer}>
                        <h2 className={price}>${product?.price} MXN</h2>
                        {product?.free_shipping === 'true' && (
                            <p className={freeShip}>Envio gratis</p>
                        )}
                    </section>
                    <ul className={imageList}>
                        {product?.images.map(({ image }) => (
                            <li key={image} onClick={() => showImg(image)}>
                                <img src={image} alt={product?.product_name} />
                            </li>
                        ))}
                    </ul>
                    <section className={buttonContainer}>
                        <Button
                            type={'button'}
                            size={'large'}
                            text={'COMPRAR'}
                        />
                        <Icon
                            className={
                                productAdded
                                    ? `ri-luggage-cart-fill ${cartButton} ${added}`
                                    : `ri-shopping-cart-line ${cartButton} `
                            }
                            onClick={() => addProductToCart(product)}
                        />
                    </section>
                    <section className={descContainer}>
                        <h3>Descripción</h3>
                        <p>{product?.desc}</p>
                    </section>
                </>
            ) : (
                <h1>Loading</h1>
            )}
        </main>
    )
}
