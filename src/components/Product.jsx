import React from 'react'

import {
    productContainer,
    product,
    infoProductContainer,
} from '../styles/components/product.module.scss'

export const Product = () => {
    return (
        <div className={`${productContainer}`}>
            <div className={`${product}`}>
                {/* <img src="https://picsum.photos/500" alt="product" /> */}
            </div>
            <div className={`${infoProductContainer}`}>
                <h3>Producto</h3>
                <p>$123.99</p>
            </div>
        </div>
    )
}
