import React from 'react'
import { alertContainer } from '../styles/components/alert.module.scss'
export const Alert = ({ text }) => {
    return (
        <div className={alertContainer}>
            <p>{text}</p>
        </div>
    )
}
