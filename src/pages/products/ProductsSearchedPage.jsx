import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Product } from '../../components/products/Product'
import { searchProducts } from '../../firebase/helpers/readData'
import {
    mainContainer,
    productsContainer,
    productContainer,
    productTitle,
} from '../../styles/pages/products/productsSearchedPage.module.scss'

export const ProductsSearchedPage = () => {
    const location = useLocation()
    const [productName, setproductName] = useState(location.pathname.slice(8))
    const [productSearched, setProductSearched] = useState([])

    useEffect(() => {
        searchProducts(productSearched, setProductSearched, productName)
    }, [productName])

    return (
        <main className={mainContainer}>
            <h2>Resultados de: {productName}</h2>
            <section className={productsContainer}>
                {productSearched.map(product => (
                    <article key={product.id} className={productContainer}>
                        <img
                            src={product.images[0].image}
                            alt={product.product_name}
                        />
                        <p className={productTitle}>{product.product_name}</p>
                    </article>
                ))}
            </section>
        </main>
    )
}
