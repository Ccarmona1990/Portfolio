import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {faHtml5,faCss3,faJsSquare,faReact, faSass,faWordpress, faNpm,faGitSquare, faBootstrap} from '@fortawesome/free-brands-svg-icons'

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
        {id: 2, ability: 'Testing & Debugging'},
    ]
    return (
        <section className="skills-section" id="Skills">
            <h1>My Skills</h1>
            
            <article>
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
            </article>

        </section>
    )
}

export default Skills