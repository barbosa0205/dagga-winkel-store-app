import React from 'react'

import {
    searchContainer,
    search,
} from '../styles/components/search.module.scss'
import { Icon } from './Icon'

export const Search = () => {
    return (
        <form
            className={`${searchContainer}`}
            onSubmit={event => {
                event.preventDefault()
            }}
        >
            <input className={`${search}`} type="text" />
            <Icon>
                <i className="ri-search-line icon"></i>
            </Icon>
        </form>
    )
}
