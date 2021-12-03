import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faHtml5,faCss3,faJsSquare,faReact, faSass,faWordpress, faNpm,faGitSquare, faBootstrap} from '@fortawesome/free-brands-svg-icons'
import cocktailAPI from '../Images/Screenshot (498).png'
import infinitetriforce from '../Images/Screenshot (499).png'
import todo from '../Images/Screenshot (500).png'


const About = () =>{
    return (
        <section id='About'>
            <h1>About Me</h1>
        </section>
    )
}

const Skills = () => {
    const skills = [
        {id: 1, skill: faHtml5, color: 'red'}, {id: 2, skill: faCss3, color: 'blue'},
        {id: 3, skill: faJsSquare, color: 'rgb(255, 230, 0)'}, {id: 4, skill: faReact, color: 'rgb(45, 100, 250)'},
        {id: 6, skill: faSass, color: 'pink'}, {id: 7, skill: faWordpress}, 
        {id: 8, skill: faNpm, color: 'red'}, {id: 9, skill: faGitSquare},
        {id: 10, skill: faBootstrap, color: 'blue'},
    ]
    const Workflow = [
        {id: 1, ability: 'Mobile-First, Responsive Design'},
        {id: 2, ability: 'Cross Browser Testing & Debugging'},
    ]
    return (
        <section className="resume-section" id="Skills">
            <h1>My Skills</h1>
            
            <aside className="subheading skills">
                <h4>Programming Languages & Tools</h4>
                <ul className="list-inline dev-icons">
                    {skills.map(({id, skill, color})=>{
                        return (
                            <li key={id} className="list-inline-item">
                                <FontAwesomeIcon icon={skill} size='3x' color={color}></FontAwesomeIcon>
                            </li>
                        )
                    })}
                </ul>

            </aside>

            <aside className="subheading">
                <h4>Workflow</h4>
                <ul className="fa-ul">
                    {Workflow.map(({id, ability})=>{
                        return (
                            <li key={id}>
                        <span className="fa-li">
                            <FontAwesomeIcon icon={faCheck}/>
                        </span> {ability}
                            </li>
                        )
                    })}
                </ul>
            </aside>

        </section>
    )
}

const Projects = () => {
    const projects = [
        {id: 1, name: 'CocktailAPI', url: "https://cocktailfiesta.netlify.app/", img: cocktailAPI},
        {id: 2, name: 'To-do', url: "https://todo-miniproject.netlify.app/", img: todo },
        {id: 3, name: 'Infinite Triforce', url: "https://infinitetriforce.netlify.app/", img: infinitetriforce},
    ]
    return (
        <section id='Projects' >
            <h1>My Projects</h1>
            <div className='projects'>
                {projects.map(({id,name,url,img})=>{
                    return (
                        <div key={id} className="projectContainer">
                    
                        <img className="project-img" src={img} alt="..." />
                        <aside className="project-caption">
                            <h3 className= "project-name">{name} 
                            </h3>
                        </aside>

                        <a className="project" href={url} title={name}>
                            <aside className='modal'>
                            </aside>
                        </a>
                </div>
                    )
                })}
            </div>
        </section>
    )
}

const Label = ({tag, type, name, placeholder, value, onChange, cols, rows})=>{
    const isInput = tag == 'input';
    const isTextarea = tag == 'textarea';
    const className = `${type}ContactForm form-control`;
    if(isInput){
        return (
            <label>
                <input 
                className={className}
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                />
            </label>
        )
    } 
    if(isTextarea){
        return (
            <label>
                <textarea 
                className="messageContactForm form-control"
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                cols={cols}
                rows={rows}
                required
                />
            </label>
        )
    }
}


const Form = ()=>{
    const [inputs,setInputs] = React.useState({});

    const formData = [
        {
            tag: 'input',
            type: "text",
            name: "person",
            placeholder:'Full name',
            value: inputs.person || ""
        },
        {
            tag: 'input',
            type: "email",
            name: "email",
            placeholder:'Email address',
            value: inputs.email || ""
        },
        {
            tag: 'input',
            type: "number",
            name: "phone",
            placeholder:'Phone number',
            value: inputs.phone || ""
        },
        {
            tag: 'textarea',
            type: "textarea",
            name: "message",
            placeholder:'Message..',
            value: inputs.message || ""
        }
    ]

    const handleSubmit = (e)=>{
        e.preventDefault();
    };
    const handleChange = (e)=>{
        const person = e.target.name;
        const value = e.target.value;
        setInputs(inputData => {
            return ({...inputData, [person]:value})})
    };
    const form = (
        <form 
        className='contactForm' 
        onSubmit={handleSubmit}>
            
            {formData.map(({tag,type,name,
            placeholder,value})=>{
                return (
                    <Label
                    tag={tag}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange}
                    cols='30'
                    rows='5'
                    required/> 
                    )
            })}
            <button type='submit' className='btn'>submit</button>
        </form>
    ); 
    return form
}

const Contact = () =>{
    return (
        <section id='Contact'>
            <h1>Let's get in touch</h1>
            
            <div className='formContainer'>
                <Form/>
            </div>
        </section>
    )
}


const Main = () => {
    return (
        <div>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default Main
