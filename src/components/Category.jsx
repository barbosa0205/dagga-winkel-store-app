import React from 'react'

import {
    categoryContainer,
    category,
} from '../styles/components/category.module.scss'

export const Category = ({ categoryIcon, categoryName }) => {
    return (
        <div className={`${categoryContainer}`}>
            <i className={`${categoryIcon} ${category}`}></i>
            <p>{categoryName}</p>
        </div>
    )
}
