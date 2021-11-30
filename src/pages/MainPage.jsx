import React, { useEffect, useState } from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { ProductsPreview } from '../components/ProductsPreview'
import { Slider } from '../components/Slider'

import { allProducts } from '../db/products.api'

export const MainPage = () => {
    const [products, setProducts] = useState(null)
    const [cheapProducts, setCheapProducts] = useState(null)
    useEffect(() => {
        setProducts(allProducts)
        setCheapProducts(allProducts.sort((a, b) => a.price - b.price))
    }, [])
    return (
        <>
            <Slider imagesList={[]} />
            <CategoriesList />
            <ProductsPreview
                title="Agregados Recientemente"
                products={products}
            />
            <ProductsPreview title="De Temporada" products={cheapProducts} />
        </>
    )
}
