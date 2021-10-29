import React from 'react'

import {
    searchContainer,
    search,
} from '../styles/components/search.module.scss'
import { Icon } from './Icon'

export const Search = () => {
    return (
        <div className={`${searchContainer}`}>
            <input className={`${search}`} type="text" />
            <Icon>
                <i className="ri-search-line icon"></i>
            </Icon>
        </div>
    )
}
