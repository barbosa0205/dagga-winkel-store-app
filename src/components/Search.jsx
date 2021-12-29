import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from '../helpers/routes'
import {
    searchContainer,
    search,
} from '../styles/components/search.module.scss'
import { Icon } from './Icon'

export const Search = () => {
    const history = useHistory()
    const [productSearched, setProductSearched] = useState('')

    const searchProduct = () => {
        if (!productSearched) return
        history.push(routes.search(productSearched))
        window.location.reload(false)
    }

    return (
        <form
            className={`${searchContainer}`}
            onSubmit={event => {
                event.preventDefault()
                searchProduct()
            }}
        >
            <input
                className={`${search}`}
                onChange={({ target }) => {
                    setProductSearched(target.value)
                }}
                type="text"
                placeholder="Busca algun producto"
            />
            <Icon
                className="ri-search-line icon"
                onClick={searchProduct}
            ></Icon>
        </form>
    )
}
