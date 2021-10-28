import React from 'react'

import {
    categoryContainer,
    category,
} from '../styles/components/category.module.scss'

export const Category = props => {
    return (
        <div className={`${categoryContainer}`}>
            <i className={`${props.categoryIcon} ${category}`}></i>
            <p>{props.categoryName}</p>
        </div>
    )
}
