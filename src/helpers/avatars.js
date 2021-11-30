import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-bottts-sprites'

export const generateAvatars = qty => {
    let avatars = []
    for (let i = 0; i < qty; i++) {
        const avatar = createAvatar(style, {
            size: 120,
            dataUri: true,
            background: '#ececec',
        })
        avatars.push(avatar)
    }
    return avatars
}
