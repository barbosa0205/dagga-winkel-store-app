import React from 'react'
import { CategoriesList } from '../components/CategoriesList'
import { Footer } from '../components/Footer'
import { MainContainer } from '../components/MainContainer'
import { ProductsPreview } from '../components/ProductsPreview'
import { Slider } from '../components/Slider'

export const MainPage = () => {
    return (
        <MainContainer>
            <Slider imagesList={[]} />
            <CategoriesList categories={[]} />
            <ProductsPreview title="Ofertas" />
            <ProductsPreview title="Descubre" />
            <Footer />
        </MainContainer>
    )
}
