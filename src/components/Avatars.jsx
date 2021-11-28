import React, { useEffect, useState } from 'react'
import { generateAvatars } from '../helpers/avatars'

import { avatarsContainer } from '../styles/components/avatars.module.scss'

export const Avatars = ({ menu }) => {
    const [avatars, setAvatars] = useState(null)
    useEffect(() => {
        const avatarArray = generateAvatars(30)
        setAvatars(avatarArray)
    }, [menu])
    return (
        <div className={avatarsContainer}>
            {avatars &&
                avatars.map(avatar => (
                    <img key={avatar} src={avatar} alt="avatar" />
                ))}
        </div>
    )
}
