import React, { useState } from 'react'
import { useMenu } from '../hooks/useMenu'
import {
    imageContainer,
    productImageContainer,
    removeImage,
    addImageContainer,
    addImage,
    closeContainer,
    title,
    errorImage,
    errorTitle,
    errorText,
} from '../styles/components/images.module.scss'
import { Button } from './Button'
import { Icon } from './Icon'
import { Modal } from './Modal'
export const Images = ({ images, setImages, imageErrors }) => {
    const { menu, toggleMenu } = useMenu()

    const [url, setUrl] = useState('')
    const [colorImg, setColorImg] = useState('')

    const [urlErrors, setUrlErrors] = useState('')

    const saveImage = () => {
        if (url && colorImg) {
            setImages([
                ...images,
                {
                    image: url,
                    image_color: colorImg,
                },
            ])
            toggleMenu()
        } else if (url) {
            setImages([
                ...images,
                {
                    image: url,
                },
            ])
            toggleMenu()
        } else {
            setUrlErrors('Ingrese almenos una una url valida')
        }
    }

    const removeProductImage = img => {
        const newArray = images.filter(({ image }) => image !== img)
        setImages(newArray)
    }

    return (
        <>
            <p className={`${title} ${imageErrors && errorTitle}`}>Imagenes</p>
            <ul className={`${imageContainer} ${imageErrors && errorImage}`}>
                <Icon className="ri-add-line" onClick={toggleMenu} />
                {images.map(({ image }) => (
                    <div className={productImageContainer}>
                        <Icon
                            className={`ri-close-fill ${removeImage}`}
                            onClick={() => removeProductImage(image)}
                        />
                        <img key={image} src={image} alt="product" />
                    </div>
                ))}
            </ul>
            {menu && (
                <Modal withShadow={false}>
                    <section className={addImageContainer}>
                        <section className={closeContainer}>
                            <Icon
                                className="ri-close-circle-line"
                                onClick={() => {
                                    toggleMenu()
                                }}
                            />
                        </section>
                        <div className={addImage}>
                            <input
                                placeholder="Url"
                                onChange={e => setUrl(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="color (opcional)"
                                onChange={e => setColorImg(e.target.value)}
                            />
                            <Button
                                type="button"
                                text="Añadir imagen"
                                size="medium"
                                onClick={saveImage}
                            />
                            {urlErrors && (
                                <p className={errorText}>{urlErrors}</p>
                            )}
                        </div>
                    </section>
                </Modal>
            )}
        </>
    )
}
