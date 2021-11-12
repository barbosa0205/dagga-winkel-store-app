import React, { useState } from 'react'
import { useAuth } from '../contexts/auth/useAuth'
import { roles } from '../helpers/roles'

export const useForm = initialValues => {
    const { setUser } = useAuth()

    const [formValues, setFormValues] = useState({ initialValues })

    const handleInputChange = ({ target }) =>
        setFormValues({ ...formValues, [target.name]: target.value })

    const handleForm = event => {
        event.preventDefault()
        setUser({
            ...formValues,
            id: new Date(),
            role: roles.client,
        })
    }

    return {
        formValues,
        handleForm,
        handleInputChange,
    }
}
