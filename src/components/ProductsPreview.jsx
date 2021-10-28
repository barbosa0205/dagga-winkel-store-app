import React from 'react'
import PropTypes from 'prop-types'
import {
    mainContainer,
    productsContainer,
} from '../styles/components/productsPreview.module.scss'
import { Product } from './Product'

export const ProductsPreview = props => {
    return (
        <div className={`${mainContainer}`}>
            <h3>{props.title}</h3>
            <div className={`${productsContainer}`}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

ProductsPreview.propTypes = {
    title: PropTypes.string.isRequired,
}
