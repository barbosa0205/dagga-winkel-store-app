import React, { useEffect, useState } from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { ProductsPreview } from '../components/products/ProductsPreview'
import { Slider } from '../components/Slider'
import { useCart } from '../contexts/cart/useCart'
import { categories } from '../db/categories.api'
import { getProductsByCategory } from '../firebase/helpers/readData'

export const MainPage = () => {
    const { products, lastProductsView } = useCart()

    const [newVideoGames, setNewVideoGames] = useState([])

    useEffect(() => {
        getProductsByCategory('consolas_videojuegos', setNewVideoGames)
        return () => {
            setNewVideoGames([])
        }
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
            {newVideoGames.length ? (
                <ProductsPreview
                    title="Nuevo en videojuegos"
                    products={newVideoGames}
                />
            ) : null}
        </>
    )
}
