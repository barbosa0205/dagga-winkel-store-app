import React from 'react'
import { useHistory } from 'react-router'
import PropTypes from 'prop-types'
import { icon } from '../styles/components/icon.module.scss'

export const Icon = ({ iconClass, redirectTo }) => {
    const history = useHistory()
    return (
        <i
            className={`${iconClass} ${icon}`}
            onClick={() => {
                /*prevent multiple pages load*/
                if (redirectTo) {
                    if (history.location.pathname !== redirectTo) {
                        history.push(redirectTo)
                    }
                }
            }}
        ></i>
    )
}

Icon.propTypes = {
    redirectTo: PropTypes.string,
}
