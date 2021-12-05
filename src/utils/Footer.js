import React from 'react'
import ccLogo from '../Images/Logo/fccLogo.png'

const Footer = () => {
    const date = new Date();
    return (
        <div className='footerContent'>
        &copy; <span id="date">{date.getFullYear()}</span>
        <img src={ccLogo} className='logo' alt='logo'></img> <span>Built by Christopher Carmona</span>
        </div>
    )
}

export default Footer
