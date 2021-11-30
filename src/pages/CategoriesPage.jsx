import React, { useEffect, useState } from 'react'
import { Category } from '../components/Category'
import { Title } from '../components/Title'
import { categories } from '../db/categories.api'

import { categoriesContainer } from '../styles/components/categoriesPage.module.scss'

export const CategoriesPage = () => {
    const [categoriesArray, setCategoriesArray] = useState([])

    useEffect(() => {
        setCategoriesArray(Object.values(categories))
    }, [])

    return (
        <>
            <Title text="CATEGORIAS" />
            <div className={categoriesContainer}>
                {categoriesArray.map(
                    ({ category_id, category_name, category_icon }) => (
                        <div key={category_id}>
                            <Category
                                categoryIcon={category_icon}
                                categoryName={category_name}
                            />
                        </div>
                    )
                )}
            </div>
        </>
    )
}
