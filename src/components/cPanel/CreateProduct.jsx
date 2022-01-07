import React, { useEffect, useState } from 'react'
import { categories } from '../../db/categories.api'
import { useForm } from '../../hooks/useForm'

import {
    createProductContainer,
    closeContainer,
    createProductForm,
    description,
    categoriesStyle,
    price,
    productTitle,
    freeShip,
    inputError,
    labelError,
    errorStyle,
    errorsContainer,
    shipMountContainer,
} from '../../styles/components/cPanel/createProduct.module.scss'

import { Button } from '../Button'
import { Colors } from '../Colors'
import { Icon } from '../Icon'
import { Title } from '../Title'

import { validationsCreateProduct } from '../../helpers/validationsCreateProduct'
import { Images } from '../Images'
import { uploadProduct } from '../../firebase/helpers/uploadData'

export const CreateProduct = ({ setClose }) => {
    const { formValues, errors, handleBlur, preventSubmit, handleInputChange } =
        useForm(
            {
                title: '',
                price: '',
                description: '',
                categories: '',
                freeShip: '',
            },
            validationsCreateProduct
        )

    const [images, setImages] = useState([])
    const [imageErrors, setImageErrors] = useState('')
    const [colorPalette, setColorPalette] = useState([])
    const [failedUpload, setFailedUpload] = useState(false)
    const [shipMount, setShipMount] = useState(0)

    useEffect(() => {
        if (images.length) {
            setImageErrors('')
        }
        return () => {}
    }, [images])

    const validateColor = image =>
        image.image_color
            ? colorPalette.find(color => image.image_color === color.color_name)
            : 'not-color'

    const createProduct = () => {
        if (!images.length) {
            setImageErrors('Coloque almenos una imagen')
            return null
        }
        if (!formValues.title) {
            return
        }

        if (!Object.keys(errors).length) {
            //TODO: SUBIR PRODUCTO A FIREBASE
            const data = {
                product_name: formValues.title,
                desc: formValues.description,
                free_shipping: formValues.freeShip,
                ship_mount:
                    formValues.freeShip === 'true'
                        ? 0
                        : Number(formValues.shipMount),
                category: formValues.categories,
                price: Number(formValues.price),
                images: images,
                colors: colorPalette,
                date: new Date(),
            }
            uploadProduct(data)

            setClose(c => !c)
        } else {
            setFailedUpload(true)
            return null
        }
    }

    return (
        <article className={createProductContainer}>
            <section className={closeContainer}>
                <Icon
                    className="ri-close-line"
                    onClick={() => setClose(c => !c)}
                />
            </section>

            <Title text="Añadir Producto" />
            <form className={createProductForm} onSubmit={preventSubmit}>
                <Images
                    images={images}
                    setImages={setImages}
                    imageErrors={imageErrors}
                />
                <input
                    className={`${productTitle} ${
                        errors.title ? inputError : null
                    }`}
                    type="text"
                    name="title"
                    placeholder="Titulo"
                    autoComplete="off"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                <input
                    className={`${price} ${errors.price ? inputError : null}`}
                    type="text"
                    name="price"
                    placeholder="Precio"
                    autoComplete="off"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                <input
                    className={`${description} ${
                        errors.description && inputError
                    }`}
                    type="text"
                    name="description"
                    placeholder="Descripcion"
                    autoComplete="off"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                />
                <label className={errors.categories && labelError}>
                    Categorias
                    <select
                        className={categoriesStyle}
                        name="categories"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    >
                        <option value="---">---</option>
                        {categories.map(category => (
                            <option
                                key={category.category_id}
                                value={category.category_value}
                            >
                                {category.category_name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className={errors.freeShip && labelError}>
                    Envio gratis
                    <select
                        className={freeShip}
                        name="freeShip"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    >
                        <option value="---">---</option>
                        <option value={false}>No</option>
                        <option value={true}>Si</option>
                    </select>
                </label>
                <div className={shipMountContainer}>
                    <label>
                        <span>Costo de envio:</span>
                        <input
                            type="number"
                            disabled={formValues.freeShip === 'true'}
                            onChange={({ target }) =>
                                setShipMount(target.value)
                            }
                        />
                    </label>
                </div>
                <Colors color={colorPalette} setColor={setColorPalette} />
                <Button
                    type="submit"
                    text="Crear producto"
                    size="medium"
                    onClick={createProduct}
                />
                <div className={errorsContainer}>
                    {failedUpload && (
                        <p className={errorStyle}>Fallo al crear producto</p>
                    )}
                    {imageErrors && <p className={errorStyle}>{imageErrors}</p>}
                    {errors.title && (
                        <p className={errorStyle}>-{errors.title}</p>
                    )}
                    {errors.price && (
                        <p className={errorStyle}>-{errors.price}</p>
                    )}
                    {errors.description && (
                        <p className={errorStyle}>-{errors.description}</p>
                    )}
                    {errors.categories && (
                        <p className={errorStyle}>-{errors.categories}</p>
                    )}
                    {errors.freeShip && (
                        <p className={errorStyle}>-{errors.freeShip}</p>
                    )}
                    {images.map(image => {
                        const color = validateColor(image)
                        if (color === 'not-color' || color) {
                            return null
                        } else {
                            return (
                                <p key={image} className={errorStyle}>
                                    {`-Falta el color ${image.image_color}`}
                                </p>
                            )
                        }
                    })}
                </div>
            </form>
        </article>
    )
}
