import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {skills, Workflow} from '../projectData'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
    
    return (
        <section className="skills-section" id="Skills">
            <h1>My Skills</h1>
            
            <article>
                <aside className="sh1 subheading skills">
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

                <aside className="sh2 subheading">
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
            </article>

        </section>
    )
}

export default Skills