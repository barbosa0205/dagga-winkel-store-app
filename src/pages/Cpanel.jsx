import React from 'react'
import { ProductsPanel } from '../components/cPanel/ProductsPanel'
import { cpanel } from '../styles/pages/cpanel.module.scss'
export const Cpanel = () => {
    return (
        <main className={cpanel}>
            <ProductsPanel />
        </main>
    )
}
