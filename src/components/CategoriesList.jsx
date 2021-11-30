import React, { useEffect, useState } from 'react'
import { categories } from '../db/categories.api'
import {
    categoriesContainer,
    categoriesList,
} from '../styles/components/categoriesList.module.scss'
import { Category } from './Category'

export const CategoriesList = () => {
    const [categoriesArray, setCategoriesArray] = useState(null)

    useEffect(() => {
        setCategoriesArray(Object.values(categories))
    }, [])
    return (
        <div className={`${categoriesContainer}`}>
            <h2>Categories</h2>
            {
                <ul className={`${categoriesList}`}>
                    {categoriesArray &&
                        categoriesArray.map(
                            ({ category_id, category_icon, category_name }) => (
                                <Category
                                    key={category_id}
                                    categoryIcon={category_icon}
                                    categoryName={category_name}
                                />
                            )
                        )}
                </ul>
            }
        </div>
    )
}
