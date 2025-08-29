import { ProfileImg } from '../Masthead'
import { description, descriptionIntro } from '../projectData'
import flynsheet from '../../Images/flynsheet.jpg'

const About = () =>{
    return (
        <section id='About'>
            <section className='aboutContainer'>
                <div className='aboutSection1'>
                    {descriptionIntro}
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