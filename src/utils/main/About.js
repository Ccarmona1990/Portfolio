import { ProfileImg } from '../Masthead'
import { description } from '../projectData'
import flynsheet from '../../Images/flynsheet.jpg'
import React from 'react'

const About =  () =>{
    React.useEffect(()=>{
        const aboutText = document.querySelector('.aboutText');
        const profilePicAbout = document.querySelector('.profilePicAbout');
        const aboutSection1 = document.querySelector('.aboutSection1');
        
        const scrollActive = ()=>{
            const scrollHeight = window.pageYOffset;
            
            if (scrollHeight > 120){
            aboutText?.classList?.add('visible');
            profilePicAbout?.classList?.add('visible');
            aboutSection1?.classList?.add('visible');
            }
        }
        window.addEventListener('scroll', scrollActive);

        return ()=>{
            window.removeEventListener('scroll', scrollActive);}
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