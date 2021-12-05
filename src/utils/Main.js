import React from 'react'
import BackToTop from './main/BackToTop'
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
            <Contact/>
            <BackToTop/>
        </div>
    )
}

export default Main
