import {faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import {faHtml5,faCss3,faJsSquare,faReact, faSass,faWordpress, faNpm,faGitSquare, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import cocktailAPI from '../Images/Screenshot (498).png'
import infinitetriforce from '../Images/Screenshot (499).png'
import tennisGame from '../Images/Screenshot (508).png'
import todo from '../Images/Screenshot (500).png';

export const navLinks = [
        {id: 1, title: 'About'},{id: 2, title: 'Skills'},
        {id: 3, title: 'Projects'},{id: 4, title: 'Contact'}
    ] 

export const projects = [
        {
            id: 1, 
            name: 'Cocktail Fiesta', 
            url: "https://cocktailfiesta.netlify.app/", 
            img: cocktailAPI,
            description: 'Website hooked to a cocktail API that allows the user to search for speficic and delicious cocktails.',
            tools: 'HTML ~ CSS ~ Sass ~ JavaScript'
        },
        {
            id: 2, 
            name: 'To-do', 
            url: "https://todo-miniproject.netlify.app/", 
            img: todo,
            description: 'WebApp for listing tasks',
            tools: 'HTML ~ CSS ~ Sass ~ JavaScript ~ React'
        },
        {
            id: 3, 
            name: 'Infinite Triforce', 
            url: "https://infinitetriforce.netlify.app/", 
            img: infinitetriforce,
            description: 'Tribute website to the famous and popular Zelda game franchise.',
            tools: 'HTML ~ CSS ~ JavaScript'
        },
        {
            id: 4,
            name: 'Tennis Game',
            url: 'https://2dtennisgame.netlify.app/',
            img: tennisGame,
            description: 'WebApp 2D tennis game built using HTML5 canvas',
            tools: 'HTML ~ CSS ~ SASS ~ JavaScript'
        }
    ]

export const socialMediaData = [
        {
            id: 1,
            logo: faInstagram, 
            url: 'https://www.instagram.com/heychris02/',
            size: '2x'
        },
        {
            id: 2,
            logo: faGithub, 
            url: 'https://github.com/Ccarmona1990',
            size: '2x'
        },
        {
            id: 3,
            logo: faLinkedin, 
            url: 'https://www.linkedin.com/in/christopher-carmona-c1990',
            size: '2x'
        },
        {
            id: 4,
            logo: faEnvelope,
            url: 'mailto:c.carmona0990@gmail.com',
            size: '2x'
        }
    ]

export const skills = [
        {id: 1, skill: faHtml5, color: 'red'}, 
        {id: 2, skill: faCss3, color: 'blue'},
        {id: 3, skill: faJsSquare, color: 'rgb(255, 230, 0)'}, 
        {id: 4, skill: faReact, color: 'rgb(45, 100, 250)'},
        {id: 6, skill: faSass, color: 'pink'}, 
        {id: 7, skill: faWordpress}, 
        {id: 8, skill: faNpm, color: 'red'}, 
        {id: 9, skill: faGitSquare},
        {id: 10, skill: faNodeJs, color: 'lightgreen'},
        {id: 11, skill: faDatabase, color: 'lightblue'},
    ]

export const Workflow = [
        {id: 1, ability: 'Mobile-First, Responsive Design'},
        {id: 2, ability: 'Testing & Debugging'},
    ]

export const descriptionIntro = (
    <h1>
        Hey there, I'm Christopher Carmona and I enjoy building cool websites.
    </h1>
)

export const description = (
    <p>
    I really enjoy learning, growing, improving and challenging myself. I'm always eager to learn new technologies, features and new things that will help me improve my game as a web developer. Ever since I embarked on this journey to become a web developer, I've surpassed my own expectations in terms of how fast I've been able to learn. I'm currently learning new things about react, NodeJS, Mysql, data strutures, algorithms and many other things. 
    <br></br>
    <br></br>
    When I'm not coding, I enjoy spending time with my son. I like to talk to my friends. I love watching videos related to programming and anime. I feel more comfortable having a schedule and daily habits to follow on. I think a lot about my future and I enjoy planning and organizing things. The more organize, the better. There are a ton of other things I like doing like watching movies and series, playing chess, solving puzzles and problems, playing video games, etc. However most of the time, I don't have time for many of these things. It's all about priorities.
    </p>
    )