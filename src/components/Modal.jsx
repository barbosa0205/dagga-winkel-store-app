import React from 'react'
import { modal, shadow } from '../styles/components/modal.module.scss'
export const Modal = ({ children, withShadow = true }) => {
    return (
        <div className={`${modal} ${withShadow ? shadow : null}`}>
            {children}
        </div>
    )
}
