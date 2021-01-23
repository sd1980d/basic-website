import React from 'react'
import Logo from './Logo/Logo'
import Navbar from './Navbar/Navbar'
import './Header.scss'

export default function Header() {
    return (
        <div className='header-bar'>
            <Logo/>
            <Navbar/>
        </div>
    )
}

