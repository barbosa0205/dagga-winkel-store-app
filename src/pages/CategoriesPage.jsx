import React, { useState } from 'react'
import { Title } from '../components/Title'

import {
    categoriesContainer,
    mainContainer,
} from '../styles/pages/categoriesPage.module.scss'

import { categories } from '../db/categories.api'
import { Category } from '../components/Category'

export const CategoriesPage = () => {
    const [arrayCategories, setArrayCategories] = useState(categories)
    return (
        <main className={mainContainer}>
            <Title text="CATEGORIAS" />
            <div className={categoriesContainer}>
                {arrayCategories &&
                    arrayCategories.map(c => (
                        <Category
                            key={c.category_name}
                            categoryIcon={c.category_icon}
                            categoryName={c.category_name}
                            To={c.category_value}
                        />
                    ))}
            </div>
        </main>
    )
}
