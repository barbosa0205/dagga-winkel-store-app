import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from '../../helpers/routes'
import { useSpring, animated } from 'react-spring'
import {
    productContainer,
    product,
    infoProductContainer,
    priceText,
    freeShipping,
    freeShippingInvisible,
    nameProduct,
    colorsSection,
} from '../../styles/components/product.module.scss'

export const Product = ({ productData }) => {
    const history = useHistory()

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 300,
        onDelayEnd: 100,
    })

    const { product_name, price, free_shipping, colors, images } = productData
    const [colorImage, setColorImage] = useState(null)

    const changeImageColor = colorName => {
        const image = images.find(image => image.image_color === colorName)
        setColorImage(image)
    }

    return (
        <animated.article
            style={props}
            className={`${productContainer}`}
            onClick={() => history.push(routes.product(productData.id))}
        >
            <picture className={`${product}`}>
                {!colorImage ? (
                    <img src={images[0].image} alt={images[0].image_color} />
                ) : (
                    <img src={colorImage.image} alt={colorImage.image_color} />
                )}
            </picture>
            <footer className={`${infoProductContainer}`}>
                <h3 className={priceText}>{`$${price}`}</h3>
                {free_shipping ? (
                    <p className={freeShipping}>Envio Gratis</p>
                ) : (
                    <p className={`${freeShipping} ${freeShippingInvisible}`}>
                        Envio Gratis
                    </p>
                )}
                <p
                    className={nameProduct}
                    onClick={() => history.push(routes.product(productData.id))}
                >
                    {product_name}
                </p>
                <ul className={colorsSection}>
                    {colors.length > 1 &&
                        colors.map(color => (
                            <li
                                key={color.color_name}
                                style={{
                                    background: color.color,
                                }}
                                onClick={() =>
                                    changeImageColor(color.color_name)
                                }
                            ></li>
                        ))}
                </ul>
            </footer>
        </animated.article>
    )
}
