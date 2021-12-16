import aboutImg from '../../Images/smiling.jpg'
import { description, descriptionIntro } from '../projectData'

const About = () =>{
    return (
        <section id='About'>
            <section className='aboutContainer'>
                <div className='aboutSection1'>
                    <img className='aboutImg' src={aboutImg} alt='aboutImg'></img>
                    {descriptionIntro}
                </div>

                <div>
                    <h2 className='aboutText'>
                        {description}
                    </h2>
                </div>
            </section>
        </section>
    )
}

export default About