import React from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { ProductsPreview } from '../components/products/ProductsPreview'
import { Slider } from '../components/Slider'
import { useCart } from '../contexts/cart/useCart'

export const MainPage = () => {
    const { products } = useCart()

    return (
        <>
            <Slider imagesList={[]} />
            <CategoriesList />
            <ProductsPreview
                title="Agregados Recientemente"
                products={products}
            />
        </>
    )
}
