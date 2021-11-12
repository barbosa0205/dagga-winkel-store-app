import React from 'react'
import PropTypes from 'prop-types'

import { button, medium, large } from '../styles/components/button.module.scss'

export const Button = ({ type, size }) => {
    return (
        <button
            className={`${button} ${
                size && size === 'medium' ? medium : large
            }`}
            type={type}
        >
            Enviar
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string,
}
