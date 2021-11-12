import React from 'react'

import {
    sliderContainer,
    // shadowImage,
} from '../styles/components/slider.module.scss'

export const Slider = () => {
    return (
        <picture className={`${sliderContainer}`}>
            <source
                media="(min-width: 600px)"
                srcSet="https://picsum.photos/500/300"
            />
            <img src="https://picsum.photos/1000/500" alt="random" />
            {/* <div className={`${shadowImage}`}></div> */}
        </picture>
    )
}
