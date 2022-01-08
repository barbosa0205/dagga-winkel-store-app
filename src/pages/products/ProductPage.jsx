import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Button } from '../../components/Button'
import { Icon } from '../../components/Icon'
import { Modal } from '../../components/Modal'
import { useAuth } from '../../contexts/auth/useAuth'
import { useCart } from '../../contexts/cart/useCart'
import { getProductById } from '../../firebase/helpers/readData'
import { routes } from '../../helpers/routes'
import { Howl, Howler } from 'howler'
import AudiocartSound from '../../assets/sfx-magic14.mp3'

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
    shipMount,
} from '../../styles/pages/products/productPage.module.scss'

export const ProductPage = () => {
    const cartSound = new Howl({
        src: [AudiocartSound],
    })
    Howler.volume(0.5)
    const { user } = useAuth()
    const { cart, setCart } = useCart()
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

    useEffect(() => {}, [productAdded])

    const showImg = img => {
        setMainImage(img)
    }

    const productAlreadyExist = id => {
        const productExist = cart.filter(p => p.id === id)
        console.log(productExist)
        if (productExist.length >= 1) {
            return true
        } else {
            return false
        }
    }

    const addProductToCart = product => {
        const alreadyExist = productAlreadyExist(product.id)
        setProductAdded(true)
        if (alreadyExist) {
            const cartProduct = cart.find(p => p.id === product.id)
            const newQty = cartProduct.qty + 1
            console.log(product)
            const arrayFilter = cart.filter(({ id }) => id !== product.id)

            const newProductArray = [
                ...arrayFilter,
                { ...product, qty: newQty },
            ]
            setCart(newProductArray)
            cartSound.play()
            setTimeout(() => {
                setProductAdded(false)
            }, 600)
            return
        }
        if (user?.role) {
            setProductAdded(true)
            setCart(c => [
                ...c,
                {
                    ...product,
                    qty: 1,
                },
            ])
            cartSound.play()

            setTimeout(() => {
                setProductAdded(false)
            }, 600)
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
                        <h2 className={price}>{`$${product?.price} MXN`}</h2>
                        {product?.free_shipping === 'true' ? (
                            <p className={freeShip}>Envio gratis</p>
                        ) : (
                            <p className={shipMount}>
                                {`Costo de envio: `}{' '}
                                <span>{`$${product.ship_mount} MXN`}</span>
                            </p>
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
