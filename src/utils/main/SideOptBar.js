import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import {socialMediaData} from '../projectData'

const SocialMediaIcons = ()=>{
    return (
        <div className='socialMediaIcons'>
                {socialMediaData.map(({id, logo, url, size})=>{
                    return (
                        <a 
                        key={id} 
                        className='socialMediaIcon' 
                        href={url}
                        target="_blank"
                        rel="noreferrer">
                            <FontAwesomeIcon icon={logo} size={size}></FontAwesomeIcon>
                        </a>
                    )
                })}
            </div>
    )
}

const Sideoptbar = () => {
    return (

        <section>
            {<SocialMediaIcons/>}
            <a className='b-Top hidden' href="#top">
                <FontAwesomeIcon icon={faArrowAltCircleUp} size='2x'/>
            </a>
        </section>
    )
}

export default Sideoptbar
