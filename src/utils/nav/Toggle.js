import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'

const Toggle = ()=>{
    const handleToggle = ()=>{
        const nav = document.querySelector('nav');
        nav.classList.toggle('hideBar');
    }
    React.useEffect(() => {
        
        const handleClickOutside = (e)=>{
            const element = e.target;
            const nav = document.querySelector('nav');
            if(!element.classList.contains('nav-btn')){
                nav.classList.remove('hideBar')}};

        document.addEventListener('click',handleClickOutside);
            return () =>{
                document.removeEventListener('click',handleClickOutside);
            }
        })
    return (
        <div id="togglebtn">
            <FontAwesomeIcon icon={faAlignJustify} size='2x'></FontAwesomeIcon>
            <button id="navBtn" onClick={handleToggle} type="button" className="nav-btn">
            </button>
        </div>
    )
}

export default Toggle