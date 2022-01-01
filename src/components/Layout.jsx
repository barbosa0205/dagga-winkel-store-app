import React from 'react'
import { MainContainer } from '../components/MainContainer'
import { Navbar } from './Navbar'
import { Footer } from '../components/Footer'
export const Layout = ({ children }) => {
    return <MainContainer>{children}</MainContainer>
}
