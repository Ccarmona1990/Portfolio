import {navLinks} from '../projectData'

const NavLinks = ({sectionClass, containerClass, itemClass})=>{
    return (
    <section className={sectionClass}>
        <ul className={containerClass}>
            {navLinks.map(({title,id})=>{
                const path = `#${title}`
                return (
                    <li key={id} className={itemClass}>
                        <a className="nav-link" href={path}>{title}</a>
                    </li>
                )
            })}
        </ul>
    </section>
    )
}

export default NavLinks