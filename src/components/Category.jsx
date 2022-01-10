import React from 'react'

import {
    categoryContainer,
    category,
} from '../styles/components/category.module.scss'

import { useHistory } from 'react-router-dom'
import { routes } from '../helpers/routes'

export const Category = ({ categoryIcon, categoryName, To }) => {
    const history = useHistory()

    return (
        <div
            className={`${categoryContainer}`}
            onClick={() => history.push(routes.category(To))}
        >
            <i className={`${categoryIcon} ${category}`}></i>
            <p>{categoryName}</p>
        </div>
    )
}
