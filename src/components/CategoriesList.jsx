import React from 'react'

import {
    categoriesContainer,
    categoriesList,
} from '../styles/components/categoriesList.module.scss'
import { Category } from './Category'

export const CategoriesList = () => {
    return (
        <div className={`${categoriesContainer}`}>
            <h2>Categories</h2>
            <ul className={`${categoriesList}`}>
                <Category
                    categoryIcon="ri-t-shirt-line"
                    categoryName="Ropa y calzado"
                />
                <Category
                    categoryIcon="ri-camera-fill"
                    categoryName="Electronicos y electronica"
                />
                <Category
                    categoryIcon="ri-restaurant-line"
                    categoryName="Deportes y fitness"
                />
                <Category
                    categoryIcon="ri-goblet-fill"
                    categoryName="vinos y licores"
                />
                <Category
                    categoryIcon="ri-t-shirt-line"
                    categoryName="Ropa y calzado"
                />
                <Category
                    categoryIcon="ri-camera-fill"
                    categoryName="Electronicos y electronica"
                />
                <Category
                    categoryIcon="ri-restaurant-line"
                    categoryName="Deportes y fitness"
                />
                <Category
                    categoryIcon="ri-goblet-fill"
                    categoryName="vinos y licores"
                />
            </ul>
        </div>
    )
}
