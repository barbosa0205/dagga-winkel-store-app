import { useState } from 'react'
export const useForm = (initialValues, validationsForm) => {
    const [formValues, setFormValues] = useState(initialValues)
    const [errors, setErrors] = useState({})
    const [loading, setLoading] = useState(false)

    const handleInputChange = ({ target }) => {
        const { name, value } = target
        setFormValues({ ...formValues, [name]: value })
    }

    const preventSubmit = event => {
        event.preventDefault()
    }

    const handleForm = () => {
        let values = Object.values(formValues)
        const valueLength = values.length
        let result
        result = values.filter(value => !!value)

        if (result.length !== valueLength) return false

        if (Object.keys(errors).length > 0) {
            return false
        } else {
            return true
        }
    }

    const handleBlur = event => {
        handleInputChange(event)
        setErrors(validationsForm(formValues))
    }

    return {
        formValues,
        preventSubmit,
        handleForm,
        handleInputChange,
        handleBlur,
        errors,
        loading,
        setLoading,
    }
}
