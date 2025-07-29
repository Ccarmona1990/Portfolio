import React from 'react'
import SideOptBar from './main/SideOptBar'
import About from './main/About'
import Skills from './main/Skills'
import Projects from './main/Projects'

//import Contact from './main/Contact'
/* In this version, the contact form was eliminated due to it having an outdated feeling to it.*/

const Main = () => {
    return (
        <div>
            <About/>
            <Skills/>
            <Projects/>
            <SideOptBar/>
        </div>
    )
}

export default Main
