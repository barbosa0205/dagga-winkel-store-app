import { useState } from 'react'
import { useAuth } from '../contexts/auth/useAuth'
import { useLocation } from 'react-router'
export const useForm = (initialValues, validationsForm) => {
    const location = useLocation()
    const { login } = useAuth()

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
        let values = Object.values(formValues)
        const valueLength = values.length
        let result
        result = values.filter(value => !!value)
        console.log(result)
        if (result.length !== valueLength) return

        if (Object.keys(errors).length > 0) {
            return
        }

        login(formValues, location.state?.from)
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
        errors,
    }
}
