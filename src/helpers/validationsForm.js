export const validationsForm = form => {
    let errors = {}
    if (!form.user.trim()) {
        errors.user = "El campo 'nombre' es requerido"
    } else if (!form.password.trim()) {
        errors.password = "El campo 'contraseña' es requerido"
    }
    return errors
}
