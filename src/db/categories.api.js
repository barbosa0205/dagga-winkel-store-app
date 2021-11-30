import { nanoid } from 'nanoid'
export const categories = {
    ropa_y_calzado: {
        category_id: nanoid(),
        category_icon: 'ri-t-shirt-line',
        category_name: 'Ropa y Calzado',
    },
    electronicos_y_electronica: {
        category_id: nanoid(),
        category_icon: 'ri-camera-fill',
        category_name: 'Electrodomesticos y Electronica',
    },
    deportes_y_fitness: {
        category_id: nanoid(),
        category_icon: 'ri-restaurant-line',
        category_name: 'Deportes y Fitness',
    },
    vinos_y_licores: {
        category_id: nanoid(),
        category_icon: 'ri-goblet-fill',
        category_name: 'Vinos y Licores',
    },
}
