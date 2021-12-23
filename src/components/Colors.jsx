import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useMenu } from '../hooks/useMenu'

import {
    colorsContainer,
    addColor,
    colorPickerContainer,
    closeContainer,
    colorPicker,
    colorName,
    colorSquare,
    title,
    errorStyle,
} from '../styles/components/colors.module.scss'
import { Button } from './Button'
import { Icon } from './Icon'
import { Modal } from './Modal'
export const Colors = ({ color, setColor }) => {
    const { menu, toggleMenu } = useMenu()
    const [colorPick, setColorPick] = useState('')
    const [colorText, setColorText] = useState('')
    const [error, setError] = useState('')

    const clean = () => {
        setColorPick('')
        setColorText('')
    }

    const aplyChanges = () => {
        if (colorPick !== '' && colorText !== '') {
            setColor(colors => [
                ...colors,
                {
                    colorId: nanoid(10),
                    color: colorPick,
                    color_name: colorText,
                },
            ])
            clean()
            toggleMenu()
        } else {
            setError('Rellena todos los campos')
        }
    }

    return (
        <>
            <p className={title}>Colores</p>
            <ul className={colorsContainer}>
                <Icon
                    className={`ri-add-fill ${addColor}`}
                    onClick={toggleMenu}
                />
                {color.length
                    ? color.map(c => (
                          <i
                              key={c.colorId}
                              style={{ background: c.color }}
                              className={colorSquare}
                              title={c.color_name}
                          ></i>
                      ))
                    : null}
            </ul>
            {menu && (
                <Modal withShadow={false}>
                    <section className={colorPickerContainer}>
                        <section className={closeContainer}>
                            <Icon
                                className="ri-close-circle-line"
                                onClick={() => {
                                    setColorPick('')
                                    toggleMenu()
                                }}
                            />
                        </section>
                        <article className={colorPicker}>
                            <input
                                type="color"
                                name="color"
                                onChange={({ target }) =>
                                    setColorPick(target.value)
                                }
                            />
                            <input
                                className={colorName}
                                type="text"
                                placeholder="nombre del color"
                                onChange={({ target }) =>
                                    setColorText(target.value)
                                }
                            />
                            {error ? (
                                <p className={errorStyle}>{error}</p>
                            ) : null}
                            {colorPick && (
                                <Button
                                    type="button"
                                    text="Aplicar"
                                    onClick={aplyChanges}
                                />
                            )}
                        </article>
                    </section>
                </Modal>
            )}
        </>
    )
}
