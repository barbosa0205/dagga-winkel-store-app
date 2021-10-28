import React from 'react'

import {
    productContainer,
    infoProductContainer,
} from '../styles/components/product.module.scss'

export const Product = () => {
    return (
        <div className={`${productContainer}`}>
            <img src="https://picsum.photos/500" alt="product" />
            <div className={`${infoProductContainer}`}>
                <h3>Producto</h3>
                <p>$123.99</p>
            </div>
        </div>
    )
}
