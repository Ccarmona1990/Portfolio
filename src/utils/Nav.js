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
    const navLinks = [
        {id: 1, title: 'About'},{id: 2, title: 'Skills'},
        {id: 3, title: 'Projects'},{id: 4, title: 'Contact'}
    ] 
    return (
    <section>
        <ul className="navbar-nav">
            {navLinks.map(({title,id})=>{
                const path = `#${title}`
                return (
                    <li key={id} className="nav-item"><a className="nav-link" href={path}>{title}</a></li>
                )
            })}
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
    let [isToggleSize, setToggleSize] = React.useState(false);
    React.useEffect(()=>{
        const top = document.querySelector('#page-top');
        window.addEventListener('resize',(e)=>{
            if(e.target.innerWidth < 680){
                setToggleSize(true);
            } else {
                setToggleSize(false);
            };
        })
        window.addEventListener('scroll', ()=>{
            const scrollHeight = window.pageYOffset;
            //console.log(scrollHeight);
            if (scrollHeight > 100){
                top.classList.add('whiteBackground');
            } else if (scrollHeight < 100){
                top?.classList?.remove('whiteBackground');
            }
        })
    },[])
    
    return (
        <nav className="navBar">
            <NavLogo/>
            {isToggleSize ? <Toggle/> : <NavLinks/>}
        </nav>
    )
}

export default Nav
