import React from 'react'
import { categories } from '../db/categories.api'
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
                {categories.map(({ id, category_icon, category_name }) => (
                    <Category
                        key={id}
                        categoryIcon={category_icon}
                        categoryName={category_name}
                    />
                ))}
            </ul>
        </div>
    )
}
