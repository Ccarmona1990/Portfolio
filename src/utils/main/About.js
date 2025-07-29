import { description, descriptionIntro } from '../projectData'

const About = () =>{
    return (
        <section id='About'>
            <section className='aboutContainer'>
                <div className='aboutSection1'>
                    {descriptionIntro}
                </div>

                <div className='aboutSection2'>
                    <h2 className='aboutText'>
                        {description}
                    </h2>
                </div>
            </section>
        </section>
    )
}

export default About