import React from 'react'
import NavLinks from './nav/NavLinks'
import NavLogo from './nav/NavLogo'
import Toggle from './nav/Toggle'

const Nav = () => {
    React.useEffect(()=>{
        const top = document.querySelector('#page-top');
        const sideOptBar = document.querySelector('.sideOptBar');
        const backToTop = document.querySelector('.b-Top');
        const navLinks = document.querySelectorAll('.nav-link');
        const socialMediaIcons = document.querySelector('.socialMediaIcons');

        const scrollActive = ()=>{
            const scrollHeight = window.pageYOffset;

            if (scrollHeight > 50){
                top.classList.add('whiteBackground');
                navLinks.forEach((e)=>e.classList.add('blueLetters'));
            }  
            if (scrollHeight > 350) {
                sideOptBar?.classList?.remove('hide');
            } else if (scrollHeight < 50){
                top?.classList?.remove('whiteBackground');
                navLinks.forEach((e)=>e.classList.remove('blueLetters'));
            }
            else if (scrollHeight < 350){
                sideOptBar.classList.add('hide');
            }
        }

        window.addEventListener('scroll', scrollActive)
        return ()=>{
            window.removeEventListener('scroll', scrollActive);
        }
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
