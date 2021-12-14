import React, { useEffect, useState } from 'react'
import { readData } from '../firebase/helpers/readData'

import {
    sliderContainer,
    sliderControls,
} from '../styles/components/slider.module.scss'
import { Icon } from './Icon'

export const Slider = () => {
    const [images, setImages] = useState([])
    const [imageToShow, setImageToShow] = useState({
        id: '',
    })
    const [nextImage, setNextImage] = useState(false)

    useEffect(() => {
        readData(setImages, 'images')
    }, [])
    useEffect(() => {
        setImageToShow(images[0])
    }, [images])

    const showNext = () => {
        const arrayLength = images.length
        const imageIndex = images.findIndex(
            image => image.id === imageToShow.id
        )
        if (imageIndex + 1 === arrayLength) {
            const image = images[0]
            setImageToShow(image)
        } else {
            const image = images[imageIndex + 1]
            setImageToShow(image)
        }
    }

    const showPreview = () => {
        const ArrayLength = images.length
        const imageIndex = images.findIndex(
            image => image.id === imageToShow.id
        )
        if (imageIndex === 0) {
            const image = images[ArrayLength - 1]
            setImageToShow(image)
        } else {
            const image = images[imageIndex - 1]
            setImageToShow(image)
        }
    }

    return (
        <section className={sliderContainer}>
            <img src={imageToShow?.image} alt={imageToShow?.alt} />
            <div className={sliderControls}>
                <Icon className="ri-arrow-left-s-line" onClick={showPreview} />
                <Icon className="ri-arrow-right-s-line" onClick={showNext} />
                <footer>
                    {images.map(({ name, id }) =>
                        imageToShow?.id === id ? (
                            <Icon
                                key={name}
                                className="ri-checkbox-blank-circle-fill"
                            />
                        ) : (
                            <Icon
                                key={name}
                                className="ri-checkbox-blank-circle-line"
                            />
                        )
                    )}
                </footer>
            </div>
        </section>
    )
}
