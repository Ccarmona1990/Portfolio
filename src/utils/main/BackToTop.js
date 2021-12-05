import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'

const BackToTop = () => {
    return (
        <a className='b-Top hidden' href="#top">
            <FontAwesomeIcon icon={faArrowAltCircleUp} size='2x'/>
        </a>
    )
}

export default BackToTop
