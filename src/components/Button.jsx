import React from 'react'
import PropTypes from 'prop-types'

import { button, medium, large } from '../styles/components/button.module.scss'

export const Button = ({ type, size, ...rest }) => {
    return (
        <button
            className={`${button} ${
                (size && size === 'medium' && medium) ||
                (size === 'large' && large)
            }`}
            type={type}
            {...rest}
        >
            Enviar
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    size: PropTypes.string,
}
