import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export const AsideItem = ({ title }) => {
    return <Link to="/">{title}</Link>
}
AsideItem.propTypes = {
    title: PropTypes.string.isRequired,
}
