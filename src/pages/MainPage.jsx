import React from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { ProductsPreview } from '../components/ProductsPreview'
import { Slider } from '../components/Slider'

export const MainPage = () => {
    return (
        <>
            <Slider imagesList={[]} />
            <CategoriesList categories={[]} />
            <ProductsPreview title="Ofertas" />
            <ProductsPreview title="Descubre" />
        </>
    )
}
