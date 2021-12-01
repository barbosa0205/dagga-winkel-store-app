export const validationsRegisterForm = form => {
    let errors = {}

    if (form.name.trim().length < 3 || form.name.trim().length > 35) {
        errors.name = "El campo 'nombre' debe contener entre 3 y 35 caracteres"
    }
    if (!form.name.trim()) {
        errors.name = "El campo 'nombre' es requerido"
    }
    if (form.lastname.trim().length < 3 || form.lastname.trim().length > 35) {
        errors.lastname =
            "El campo 'apellido' debe contener entre 3 y 35 caracteres"
    }
    if (!form.lastname.trim()) {
        errors.lastname = "El campo 'apellido' es requerido"
    }
    if (!form.email.trim()) {
        errors.email = "El campo 'correo' es requerido"
    }
    if (!form.password.trim()) {
        errors.password = "El campo 'contraseña' es requerido"
    } else if (form.password.trim().length < 6) {
        errors.password =
            "El campo 'contraseña' debe contener almenos 6 caracteres"
    }
    if (!form.re_password.trim()) {
        errors.re_password = "El campo 'repetir contraseña' es requerido"
    }

    if (form.re_password.trim() !== form.password) {
        errors.re_password =
            "El campo 'contraseña' & 'repetir contraseña' no coinciden"
    }
    return errors
}
