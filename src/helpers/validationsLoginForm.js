export const validationsLoginForm = form => {
    let errors = {}
    if (form.password.trim().length < 6) {
        errors.password = 'Contraseña debe ser de minimo 6 caracteres'
    }
    if (!form.email.trim()) {
        errors.email = "El campo 'email' es requerido"
    }

    if (!form.password.trim()) {
        errors.password = "El campo 'contraseña' es requerido"
    }
    return errors
}
