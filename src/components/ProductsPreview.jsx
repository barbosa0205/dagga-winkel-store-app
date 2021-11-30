import React from 'react'
import PropTypes from 'prop-types'
import {
    mainContainer,
    titleContainer,
    productsContainer,
} from '../styles/components/productsPreview.module.scss'
import { Product } from './Product'
import { Link } from 'react-router-dom'

export const ProductsPreview = props => {
    return (
        <div className={`${mainContainer}`}>
            <div className={`${titleContainer}`}>
                <h3>{props.title}</h3>
                <Link to="/oferts">Ver todos</Link>
            </div>
            <div className={`${productsContainer}`}>
                {props.products &&
                    props.products.map(product => (
                        <Product
                            key={product.product_id}
                            productData={product}
                        />
                    ))}
            </div>
        </div>
    )
}

ProductsPreview.propTypes = {
    title: PropTypes.string.isRequired,
}
