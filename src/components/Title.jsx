import React from 'react'
import PropTypes from 'prop-types'

import { title } from '../styles/components/title.module.scss'

export const Title = ({ text }) => {
    return <h2 className={title}>{text}</h2>
}
Title.propTypes = {
    text: PropTypes.string.isRequired,
}
