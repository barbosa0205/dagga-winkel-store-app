import React from 'react'

import {
    productContainer,
    product,
    infoProductContainer,
} from '../styles/components/product.module.scss'

export const Product = ({ productData }) => {
    const { product_name, price } = productData
    return (
        <div className={`${productContainer}`}>
            <div className={`${product}`}>
                {/* <img src="https://picsum.photos/500" alt="product" /> */}
            </div>
            <div className={`${infoProductContainer}`}>
                <h3>{product_name}</h3>
                <p>{`$${price}`}</p>
            </div>
        </div>
    )
}
