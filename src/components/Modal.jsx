import React from 'react'
import { modal } from '../styles/components/modal.module.scss'
export const Modal = ({ children }) => {
    return <div className={modal}>{children}</div>
}
