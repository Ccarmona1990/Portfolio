import React from 'react'

import {projects} from '../projectData'
import {myProjects} from '../projectData'

const Projects = () => {
    
    return (
        <section id='Projects' >
            <h1>My Projects</h1>
            <div className='projects'>
                {myProjects.map(({id,name,url,img,description,tools})=>{
                    return (
                        <div key={id} className="projectContainer">
                            
                        <section className="projectNameContainer">
                            <h2 className= "project-name">{name} 
                            </h2>
                        </section> 
                        <section className="projectImgContainer">
                            <img className="project-img" src={img} alt="..." />

                            <a 
                            className="project" 
                            href={url} title={name}
                            target="_blank"
                            rel="noreferrer">
                                <aside className='modal'>
                                </aside>
                            </a>
                        </section>

                        <section className="projectDescContainer">
                            <h4 className="projectDescription">
                                {description}
                            </h4>
                        </section> <br></br>

                        <section className="projectToolsContainer">
                            <h4 className="projectTools">
                                {tools}
                            </h4>
                        </section>
                </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Projects