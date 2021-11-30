import React, { useEffect, useState } from 'react'
import { generateAvatars } from '../helpers/avatars'

import {
    avatarsContainer,
    isSelected,
} from '../styles/components/avatars.module.scss'

export const Avatars = ({ menu, avatar, setAvatar }) => {
    const [avatars, setAvatars] = useState(null)
    const [selected, setSelected] = useState(false)
    useEffect(() => {
        const avatarArray = generateAvatars(30)
        setAvatars(avatarArray)
    }, [menu])
    return (
        <div className={avatarsContainer}>
            {avatars &&
                avatars.map(url => (
                    <img
                        className={
                            url === avatar && selected ? isSelected : null
                        }
                        key={url}
                        src={url}
                        alt="avatar"
                        onClick={() => {
                            setAvatar(url)
                            setSelected(true)
                        }}
                    />
                ))}
        </div>
    )
}
