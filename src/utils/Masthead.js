import React from 'react'
import profilePic from '../Images/smiling2.jpg'


const Masthead = () => {
    return (
        <div className='mastheadBlock'>
            <h1 className='mastheadText'>
                Christopher Carmona <br></br>
                Web developer
            </h1>
            <img className='profilePic' src={profilePic} alt='aboutImg'></img>
        </div>
    )
}

export default Masthead
