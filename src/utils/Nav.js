import React from 'react'
import ccLogo from '../Images/Logo/fccLogo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'

const NavLogo = () =>{
    return (
        <section>
            <img src={ccLogo} alt="logo"></img>
        </section>
    )
}

const NavLinks = ()=>{
    return (
    <section>
        <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
        </ul>
    </section>
    )
}

const Toggle = ()=>{
    return (
        <div id="togglebtn">
            <button id="navBtn" type="button" className="nav-btn">
                <FontAwesomeIcon icon={faAlignJustify} size='2x'></FontAwesomeIcon>
            </button>
        </div>
    )
}

const Nav = () => {
    return (
        <nav className="navBar">
            <NavLogo/>
            <Toggle/>
            <NavLinks/>
        </nav>
    )
}

export default Nav
