import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/auth/useAuth'
import PropTypes from 'prop-types'

import { asideItem } from '../styles/components/asideItem.module.scss'

export const AsideItem = ({ text, to: link }) => {
    const { toggle } = useAuth()
    return (
        <Link className={asideItem} to={link} onClick={toggle}>
            {text}
        </Link>
    )
}
AsideItem.propTypes = {
    text: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
}
