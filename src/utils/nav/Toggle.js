import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons'

const Toggle = ()=>{
    const handleToggle = ()=>{
        const nav = document.querySelector('nav')
        nav.classList.toggle('hideBar');
    }
    React.useEffect(() => {
        document.addEventListener('click',(e)=>{
            const element = e.target;
            const nav = document.querySelector('nav')
            if(!element.classList.contains('nav-btn')){
                nav.classList.remove('hideBar')}
        })})
    return (
        <div id="togglebtn">
            <FontAwesomeIcon icon={faAlignJustify} size='2x'></FontAwesomeIcon>
            <button id="navBtn" onClick={handleToggle} type="button" className="nav-btn">
            </button>
        </div>
    )
}

export default Toggle