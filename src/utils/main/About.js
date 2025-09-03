import { ProfileImg } from '../Masthead'
import { description } from '../projectData'
import flynsheet from '../../Images/smiling2.jpg'
import React from 'react'
import { observer } from '../features'

const About =  () =>{
    React.useEffect(()=>{
        const allAboutElements = document.querySelectorAll('.aboutText, .profilePicAbout , .aboutSection1');
        allAboutElements.forEach(el => observer.observe(el));
        
        return ()=>{
            allAboutElements.forEach(el => observer.unobserve(el));}
    },[]);

    return (
        <section id='About'>
            <section className='aboutContainer'>
                <div className='aboutSection1'>
                    <h1>About Me</h1>
                </div>

                <div className='aboutSection2'>
                    <div>
                    <h2 className='aboutText'>
                        {description}
                    </h2>
                    </div>
                    <ProfileImg
                    classNameContainer=''
                    classNameImg='profilePicAbout' 
                    src={flynsheet} />
                </div>
            </section>
        </section>
    )
}

export default About