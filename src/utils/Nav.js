import React from 'react'
import NavLinks from './nav/NavLinks'
import NavLogo from './nav/NavLogo'
import Toggle from './nav/Toggle'

const Nav = () => {
    React.useEffect(()=>{
        const top = document.querySelector('#page-top');
        const backToTop = document.querySelector('.b-Top');
        const navLinks = document.querySelectorAll('.nav-link');

        console.log(navLinks);
        

        window.addEventListener('scroll', ()=>{
            const scrollHeight = window.pageYOffset;
            if (scrollHeight > 100){
                top.classList.add('whiteBackground');
                backToTop?.classList?.remove('hide');
                navLinks.forEach((e)=>e.classList.add('blueLetters')) ;
                
            } else if (scrollHeight < 100){
                top?.classList?.remove('whiteBackground');
                backToTop.classList.add('hide');
                navLinks.forEach((e)=>e.classList.remove('blueLetters')) ;
            }
        })
    },[]);

    
    return (
        <nav>
            <section className="navBar">
                <NavLogo/>
                <Toggle/>
                <NavLinks 
                sectionClass='hideNavbar-nav'
                containerClass="navbar-nav" itemClass="nav-item"/>
                
            </section>
            <section className=''>
                {<NavLinks 
                containerClass="toggleBar" itemClass="toggleItem" />}
            </section>
        </nav>
    )
}

export default Nav
