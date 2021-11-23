export const validationsRegisterForm = form => {
    let errors = {}

    if (!form.name.trim()) {
        errors.name = "El campo 'nombre' es requerido"
    }
    if (!form.lastname.trim()) {
        errors.lastname = "El campo 'apellido' es requerido"
    }
    if (!form.email.trim()) {
        errors.email = "El campo 'correo' es requerido"
    }
    if (!form.password.trim()) {
        errors.password = "El campo 'contraseña' es requerido"
    }
    if (!form.re_password.trim()) {
        errors.re_password = "El campo 'repetir contraseña' es requerido"
    }
    return errors
}
