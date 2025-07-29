import React from 'react'
import SideOptBar from './main/SideOptBar'
import About from './main/About'
import Skills from './main/Skills'
import Projects from './main/Projects'
import Contact from './main/Contact'

const Main = () => {
    return (
        <div>
            <About/>
            <Skills/>
            <Projects/>
            {/*<Contact/>*/}
            <SideOptBar/>
        </div>
    )
}

export default Main
