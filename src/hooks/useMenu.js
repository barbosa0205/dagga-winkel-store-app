import { useState } from 'react'

export const useMenu = initialValue => {
    const [menu, setMenu] = useState(initialValue || false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    return { menu, toggleMenu }
}
