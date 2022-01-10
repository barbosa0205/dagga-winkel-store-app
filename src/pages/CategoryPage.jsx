import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Product } from '../components/products/Product'
import { Title } from '../components/Title'
import { getProductsByCategory } from '../firebase/helpers/readData'

import {
    categoryContainer,
    loading,
    categoryName,
} from '../styles/pages/categoryPage.module.scss'

export const CategoryPage = () => {
    const location = useLocation()
    const category = location.pathname.slice(12)
    const [categoryValue, setCategoryValue] = useState('')
    const [products, setProducts] = useState(null)

    useEffect(() => {
        setCategoryValue(category)
    }, [category])

    useEffect(() => {
        getProductsByCategory(categoryValue, setProducts)
    }, [categoryValue])

    return (
        <>
            <h2 className={categoryName}>
                {`Categoria:`}
                <span>{`${categoryValue.replace('_', ' y ')}`}</span>
            </h2>
            <div className={categoryContainer}>
                {products ? (
                    products.map(product => (
                        <Product productData={product} key={product.id} />
                    ))
                ) : (
                    <h2 className={loading}>LOADING</h2>
                )}
            </div>
        </>
    )
}
