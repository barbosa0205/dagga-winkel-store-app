import { useState } from 'react'
import { useAuth } from '../contexts/auth/useAuth'
import { roles } from '../helpers/roles'

export const useForm = (initialValues, validationsForm) => {
    const { setUser } = useAuth()

    const [formValues, setFormValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [response, setResponse] = useState(null)

    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setFormValues({ ...formValues, [name]: value })
    }

    const handleForm = event => {
        event.preventDefault()
    }

    const handleBlur = event => {
        handleInputChange(event)
        setErrors(validationsForm(formValues))
    }

    return {
        formValues,
        handleForm,
        handleInputChange,
        handleBlur,
    }
}
