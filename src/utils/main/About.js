import aboutImg from '../../Images/smiling.jpg'

const About = () =>{
    return (
        <section id='About'>
            <h1>About me</h1>
            <section className='aboutContainer'>
                <div><img className='aboutImg' src={aboutImg} alt='aboutImg'></img></div>
                <div>
                    <h2 className='aboutText'>
                        Description  
                    </h2>
                </div>
            </section>
        </section>
    )
}

export default About