import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { searchProducts } from '../../firebase/helpers/readData'
import {
    mainContainer,
    productsContainer,
    productContainer,
    productTitle,
    noMatchProducts,
} from '../../styles/pages/products/productsSearchedPage.module.scss'

export const ProductsSearchedPage = () => {
    const location = useLocation()
    const [productName, setproductName] = useState(location.pathname.slice(8))
    const [productSearched, setProductSearched] = useState([])

    useEffect(() => {
        searchProducts(setProductSearched, productName)
    }, [productName])

    return (
        <main className={mainContainer}>
            <h2>
                Resultados de:<span> {productName}</span>
            </h2>
            <section className={productsContainer}>
                {productSearched.length ? (
                    productSearched.map(product => (
                        <article key={product.id} className={productContainer}>
                            <img
                                src={product.images[0].image}
                                alt={product.product_name}
                            />
                            <p className={productTitle}>
                                {product.product_name}
                            </p>
                        </article>
                    ))
                ) : (
                    <>
                        <h3 className={noMatchProducts}>
                            No se encontraron Productos con la frase:{' '}
                            {productName}
                        </h3>
                    </>
                )}
            </section>
        </main>
    )
}
