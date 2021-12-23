export const validationsCreateProduct = form => {
    let errors = {}
    if (form.title.length < 10 || form.title.length > 50) {
        errors.title = 'El titulo debe tener de 10 a 50 caracteres'
    }
    if (!form.price) {
        errors.price = 'ingrese un precio'
    }
    if (!/^\d*\.?\d*$/.test(form.price)) {
        errors.price = 'Solo puedes ingresar numeros y contener de 1 a 6 cifras'
    }
    if (form.description.length < 10 || form.description.length > 1000) {
        errors.description =
            'La descripcion debe ser mayor a 10 caracteres y menor a 1000 caracteres'
    }

    if (form.categories === '' || form.categories === '---') {
        errors.categories = 'Seleccione una categoria'
    }
    if (form.freeShip === '' || form.freeShip === '---') {
        errors.freeShip = 'Seleccione el tipo de envio'
    }

    return errors
}
