import React, { useEffect, useState } from 'react'
import { readData } from '../firebase/helpers/readData'

import {
    sliderContainer,
    sliderControls,
} from '../styles/components/slider.module.scss'
import { useSpring, animated } from 'react-spring'
import { Icon } from './Icon'

export const Slider = () => {
    const [images, setImages] = useState([])
    const [imageToShow, setImageToShow] = useState(null)

    useEffect(() => {
        readData(setImages, 'images')
        return () => {
            setImages([])
        }
    }, [])
    useEffect(() => {
        setImageToShow(images[0])
    }, [images])

    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 300,
        onDelayEnd: 100,
    })

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
        <>
            {imageToShow && (
                <animated.section className={sliderContainer} style={props}>
                    <img src={imageToShow?.image} alt={imageToShow?.alt} />
                    <div className={sliderControls}>
                        <Icon
                            className="ri-arrow-left-s-line"
                            onClick={() => {
                                imageToShow && setImageToShow(null)
                                showPreview()
                            }}
                        />
                        <Icon
                            className="ri-arrow-right-s-line"
                            onClick={() => {
                                imageToShow && setImageToShow(null)
                                showNext()
                            }}
                        />
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
                </animated.section>
            )}
        </>
    )
}
