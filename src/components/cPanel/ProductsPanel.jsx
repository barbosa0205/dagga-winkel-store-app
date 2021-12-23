import React, { useEffect, useState } from 'react'
import { useMenu } from '../../hooks/useMenu'

import {
    productsPanel,
    container,
    optionsContainer,
} from '../../styles/components/cPanel/productsPanel.module.scss'
import { Icon } from '../Icon'
import { Modal } from '../Modal'
import { CreateProduct } from './CreateProduct'
import { RecentProducts } from './RecentProducts'

export const ProductsPanel = () => {
    const [showCreateProduct, setShowCreateProduct] = useState(false)

    useEffect(() => {
        return () => {}
    }, [])

    return (
        <section className={productsPanel}>
            <h2>PRODUCTOS</h2>
            <div className={container}>
                <RecentProducts />
                <ul className={optionsContainer}>
                    <li
                        onClick={() => setShowCreateProduct(!showCreateProduct)}
                    >
                        <Icon className="ri-add-line" />
                    </li>
                    <li>
                        <Icon className="ri-pencil-line" />
                    </li>
                    <li>
                        <Icon className="ri-delete-bin-5-line" />
                    </li>
                </ul>
            </div>
            {showCreateProduct && (
                <Modal>
                    <CreateProduct setClose={setShowCreateProduct} />
                </Modal>
            )}
        </section>
    )
}
