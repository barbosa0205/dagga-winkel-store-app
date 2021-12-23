import React from 'react'
import PropTypes from 'prop-types'

import { button, medium, large } from '../styles/components/button.module.scss'

export const Button = ({ type, size, text, ...rest }) => {
    return (
        <button
            className={`${button} ${
                (size && size === 'medium' && medium) ||
                (size === 'large' && large)
            }`}
            type={type}
            {...rest}
        >
            {text || 'Enviar'}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    size: PropTypes.string,
}
