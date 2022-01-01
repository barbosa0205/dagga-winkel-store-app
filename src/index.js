import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import { StoreApp } from './App'
import './firebase/credentials'
import 'animate.css'
ReactDOM.render(
    <React.StrictMode>
        <StoreApp />
    </React.StrictMode>,
    document.getElementById('root')
)
