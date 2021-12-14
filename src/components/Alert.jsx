import React from 'react'
import PropTypes from 'prop-types'
import {
    alertContainer,
    borderRed,
    borderGreen,
    colorGreen,
    colorRed,
} from '../styles/components/alert.module.scss'
export const Alert = ({ text, color }) => {
    return (
        <div
            className={`${alertContainer} ${
                color === 'red' ? borderRed : borderGreen
            }`}
        >
            <p className={color === 'red' ? colorRed : colorGreen}>{text}</p>
        </div>
    )
}

Alert.propTypes = {
    text: PropTypes.string.isRequired,
}
