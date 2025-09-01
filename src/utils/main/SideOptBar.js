import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
import {socialMediaData} from '../projectData'

export const SocialMediaIcons = (props)=>{
    const {className} = props;
    return (
        <div className={className}>
                {socialMediaData.map(({id, logo, url, size})=>{
                    return (
                        <a 
                        key={id} 
                        className='socialMediaIcon' 
                        style={{'--i':id}}
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
            {<SocialMediaIcons className='socialMediaIcons hide' />}
            <a className='b-Top hide' href="#top" style={{'--i':5}}>
                <FontAwesomeIcon icon={faArrowAltCircleUp} size='2x'/>
            </a>
        </section>
    )
}

export default Sideoptbar
