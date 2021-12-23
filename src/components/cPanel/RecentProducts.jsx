import React, { useEffect, useState } from 'react'
import { getRecentProducts } from '../../firebase/helpers/readData'

import {
    recentProductsContainer,
    recentProductItem,
    productDataContainer,
    optionsContainer,
} from '../../styles/components/cPanel/recentProducts.module.scss'
import { Icon } from '../Icon'

export const RecentProducts = () => {
    const [recentProducts, setRecentProducts] = useState([])
    useEffect(() => {
        getRecentProducts(setRecentProducts, 'products')
        return () => {}
    }, [])
    return (
        <ul className={recentProductsContainer}>
            <h3>- Recent products</h3>
            {recentProducts.map(product => (
                <li key={product.id} className={recentProductItem}>
                    <img
                        src={product.images[0].image}
                        alt={product.product_name}
                        title={product.product_name}
                    />
                    <div className={productDataContainer}>
                        <p>{product.product_name}</p>
                        <p>{`$ ${product.price}`}</p>
                    </div>
                    <div className={optionsContainer}>
                        <Icon className="ri-tools-line" />
                    </div>
                </li>
            ))}
        </ul>
    )
}
