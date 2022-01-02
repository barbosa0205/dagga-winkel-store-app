import React, { useEffect, useState } from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { ProductsPreview } from '../components/products/ProductsPreview'
import { Slider } from '../components/Slider'
import { useCart } from '../contexts/cart/useCart'
import { categories } from '../db/categories.api'
import { getProductsByCategory } from '../firebase/helpers/readData'

export const MainPage = () => {
    const { products } = useCart()

    const [lastProductsView, setLastProductsView] = useState(null)
    const [newVideoGames, setNewVideoGames] = useState(null)

    useEffect(() => {
        getProductsByCategory('consolas_videojuegos', setNewVideoGames)
    }, [])

    return (
        <>
            <Slider />

            <CategoriesList />

            {lastProductsView && (
                <ProductsPreview
                    title="Ultimos productos Vistos"
                    products={products}
                />
            )}

            <ProductsPreview
                title="Agregados Recientemente"
                products={products}
            />
            <ProductsPreview
                title="Nuevo en videojuegos"
                products={newVideoGames}
            />
        </>
    )
}
