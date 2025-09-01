import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faGithub, faLinkedin,faHtml5,faCss3,faJsSquare,faReact, faSass,faWordpress, faNpm,faGitSquare, faNodeJs,faBootstrap} from '@fortawesome/free-brands-svg-icons'
import cocktailAPI from '../Images/Screenshot (498).png'
import infinitetriforce from '../Images/Screenshot (499).png'
import ikitoursviajes from '../Images/ikitoursviajes.png'
import tennisGame from '../Images/Screenshot (508).png'
import todo from '../Images/Screenshot (500).png';
import jspic from '../Images/0_5Q_7VXyQ8xo4Dgpp.webp'

export const navLinks = [
        {id: 1, title: 'About'},
        {id: 2, title: 'Skills'},
        {id: 3, title: 'Projects'}
        //,{id: 4, title: 'Contact'}
    ] 

    // v1. This was the prevous set of projects used to showcase my experience. It was replace in the v2 by the var myProjects
export const projects = [
    {
        id: 1, 
        name: 'Task Manager', 
        url: "https://tm24h.netlify.app/", 
        img: todo,
        description: 'An WebApp to keep track of daily tasks. It includes a login page making it which is connected to a database to store usernames and passwords and daily tasks stablished on the webapp once logged in.',
        tools: 'HTML ~ CSS ~ Sass ~ JavaScript ~ React ~ MongoDB ~ Nodejs ~ Express ~ Bootstrap'
    },
    {
        id: 2, 
        name: 'Infinite Triforce', 
        url: "https://infinitetriforce.netlify.app/", 
        img: infinitetriforce,
        description: 'Tribute website to the famous and popular Zelda game franchise. It consumes its data from a self-made API.',
        tools: 'HTML ~ CSS ~ JavaScript ~ nodejs ~ Express'
    },
    {
        id: 3, 
        name: 'Cocktail Fiesta', 
        url: "https://cocktailfiesta.netlify.app/", 
        img: cocktailAPI,
        description: 'Website hooked to a cocktail API that allows the user to search for speficic and delicious cocktails.',
        tools: 'HTML ~ CSS ~ Sass ~ JavaScript'
    },
    {
        id: 4,
        name: 'Ping Pong Game',
        url: 'https://2dtennisgame.netlify.app/',
        img: tennisGame,
        description: '2D ping pong game built using HTML5 canvas.',
        tools: 'HTML ~ CSS ~ SASS ~ JavaScript'
    }
    ]
    // New set of projects being used on v2
export const myProjects = [
    {
        id: 1, 
        name: 'Ikitours - Travel Agency', 
        url: "https://ikitoursviajes.com/", 
        img: ikitoursviajes,
        description: 'A well designed and responsive travel website for Ikitours travel agency using WordPress. The site showcases company services and contact options in a clear and visually appealing way.',
        tools: 'HTML ~ CSS ~ Wordpress'
    },
    {
        id: 2, 
        name: 'My Learning Projects', 
        url:"https://mylearningprojects.netlify.app/", 
        img: jspic,
        description: 'A personal website to display a collection of small projects created while learning front-end technologies such as HTML, CSS, JavaScript, Sass, Bootstrap and others.',
        tools: 'HTML ~ CSS ~ Sass ~ JavaScript ~ MongoDB ~ Nodejs ~ Express ~ Bootstrap'
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
        {id: 7, skill: faWordpress, color: 'blue'}, 
        {id: 8, skill: faNpm, color: 'red'}, 
        {id: 9, skill: faGitSquare},
        {id: 10, skill: faNodeJs, color: 'lightgreen'},
        {id: 11, skill: faDatabase, color: 'lightblue'},
        {id: 12, skill: faBootstrap, color: 'blue'}
    ]

export const Workflow = [
        {id: 1, ability: 'Mobile-First, Responsive Design'},
        {id: 2, ability: 'Testing & Debugging'},
    ]

export const description = (
    <p>
        You are probably wondering, how did I get here? Well, Back during the pandemic I realized that I needed a career change. I have always been passionate about technology and computers, so I decided to take the plunge and learn web development.
        <br></br>
        <br></br>
        It was an uphill battle and there were a lot of sleepless nights at the beginning, but I was determined to succeed. I started with the basics of HTML, CSS, and JavaScript, and then moved on to more advanced topics like ReactJS and NodeJS. I learned these things on my own using online resources and watching lots of videos and courses. 
        <br></br>
        <br></br>
        When I'm not coding, I am an English teacher. I like watching movies and series, playing chess, solving puzzles, playing video games and spending time with my family.
    </p>
    )