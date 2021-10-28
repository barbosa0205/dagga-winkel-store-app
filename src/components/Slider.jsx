import React from 'react'

import {
    sliderContainer,
    // shadowImage,
} from '../styles/components/slider.module.scss'

export const Slider = () => {
    return (
        <div className={`${sliderContainer}`}>
            <img src="https://picsum.photos/500/300" alt="random" />
            {/* <div className={`${shadowImage}`}></div> */}
        </div>
    )
}
