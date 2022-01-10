import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { categories } from '../db/categories.api'
import { routes } from '../helpers/routes'
import {
    categoriesContainer,
    categoriesList,
} from '../styles/components/categoriesList.module.scss'
import { Category } from './Category'

export const CategoriesList = () => {
    const history = useHistory()
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
                            ({
                                category_id,
                                category_icon,
                                category_name,
                                category_value,
                            }) => (
                                <Category
                                    key={category_id}
                                    categoryIcon={category_icon}
                                    categoryName={category_name}
                                    To={category_value}
                                />
                            )
                        )}
                </ul>
            }
        </div>
    )
}
