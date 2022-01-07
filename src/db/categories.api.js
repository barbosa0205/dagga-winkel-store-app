import { nanoid } from 'nanoid'
export const categories = [
    {
        category_id: nanoid(),
        category_icon: 'ri-smartphone-line',
        category_value: 'celulares',
        category_name: 'Celulares',
    },
    {
        category_id: nanoid(),
        category_icon: 'ri-camera-fill',
        category_value: 'camaras',
        category_name: 'Camaras',
    },
    {
        category_id: nanoid(),
        category_icon: 'ri-game-line',
        category_value: 'consolas_videojuegos',
        category_name: 'Consolas y videojuegos',
    },
    {
        category_id: nanoid(),
        category_icon: 'fas fa-bicycle',
        category_value: 'bicicletas_patines',
        category_name: 'Bicicletas y patines',
    },
    {
        category_id: nanoid(),
        category_icon: 'ri-vip-diamond-line',
        category_value: 'joyeria',
        category_name: 'Joyeria',
    },
]
