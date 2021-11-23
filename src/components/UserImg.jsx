import React from 'react'
import { userImg } from '../styles/components/userImg.module.scss'
export const UserImg = ({ src, alt, ...rest }) => {
    return <img className={userImg} src={src} alt={alt} {...rest} />
}
