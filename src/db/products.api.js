import { nanoid } from 'nanoid'
import { categories } from './categories.api'

export const allProducts = [
    {
        product_id: nanoid(8),
        product_name: 'sudadera lisa',
        product_category: categories.ropa_y_calzado.category_name,
        colors: ['azul', 'blanco', 'negro', 'cafe'],
        price: 149.99,
    },
    {
        product_id: nanoid(8),
        product_name: 'camiseta lisa',
        product_category: categories.ropa_y_calzado.category_name,
        colors: ['azul', 'blanco', 'negro', 'cafe'],
        price: 129.99,
    },
    {
        product_id: nanoid(8),
        product_name: 'pantalon vaquero',
        product_category: categories.ropa_y_calzado.category_name,
        colors: ['azul', 'negro', 'cafe'],
        price: 179.99,
    },
    {
        product_id: nanoid(8),
        product_name: 'sudadera con capucha',
        product_category: categories.ropa_y_calzado.category_name,
        colors: ['azul', 'blanco', 'negro', 'cafe'],
        price: 209.99,
    },
]
