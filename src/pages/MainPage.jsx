import React from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { ProductsPreview } from '../components/products/ProductsPreview'
import { Slider } from '../components/Slider'
import { useCart } from '../contexts/cart/useCart'

export const MainPage = () => {
    const { products } = useCart()

    return (
        <>
            <Slider />
            <CategoriesList />
            <ProductsPreview
                title="Ultimos productos Vistos"
                products={products}
            />
            <ProductsPreview
                title="Agregados Recientemente"
                products={products}
            />
        </>
    )
}
