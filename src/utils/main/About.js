import aboutImg from '../../Images/smiling.jpg'

const About = () =>{
    return (
        <section id='About'>
            {/*<h1>About me</h1>*/}
            <section className='aboutContainer'>
                <div className='aboutSection1'>
                    <img className='aboutImg' src={aboutImg} alt='aboutImg'></img>
                    <h2>
                        Hey there, I'm Christopher Carmona and I like building cool webApps, and websites.
                    </h2>
                </div>

                <div>
                    <h2 className='aboutText'>
                        I really enjoy growing and improving myself. I'm always eager to learn new technologies, features and new things that help me improve as a web developer. Ever since I embark on this journey to become a web developer, I've surpass my own expectations in terms of how fast I've been able to learn. I'm currently learning new things about react, NodeJS, Mysql, data strutures, algorithms and many other things. <br></br><br></br>
    
                        When I'm not coding, I enjoy spending time with my son. I like to talk my friends. I love watching videos related to programming and sometimes to anime. I feel more comfortable having a schedule and daily habits to follow through on. I think a lot about my future and I enjoy planning and organizing things. The more organize, the better. There are a ton of other things I like doing like watching movies and series, playing chess, solving puzzles and problems, playing video games, etc.  
                    </h2>
                </div>
            </section>
        </section>
    )
}

export default About