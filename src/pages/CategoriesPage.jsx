import React from 'react'
import { Category } from '../components/Category'
import { Title } from '../components/Title'
import { categories } from '../db/categories.api'

import { categoriesContainer } from '../styles/components/categoriesPage.module.scss'

export const CategoriesPage = () => {
    return (
        <>
            <Title text="CATEGORIAS" />
            <div className={categoriesContainer}>
                {categories.map(({ id, category_name, category_icon }) => (
                    <Category
                        key={id}
                        categoryIcon={category_icon}
                        categoryName={category_name}
                    />
                ))}
            </div>
        </>
    )
}
