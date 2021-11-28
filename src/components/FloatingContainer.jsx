import React from 'react'
import PropTypes from 'prop-types'
import {
    avatarsContainer,
    closeContainer,
} from '../styles/components/floatingContainer.module.scss'
import { Icon } from './Icon'
export const FloatingContainer = ({ children, toggleMenu }) => {
    return (
        <div className={avatarsContainer}>
            <div className={closeContainer}>
                <Icon className="ri-close-line" onClick={toggleMenu} />
            </div>
            {children}
        </div>
    )
}

FloatingContainer.propTypes = {
    toggleMenu: PropTypes.func.isRequired,
}
