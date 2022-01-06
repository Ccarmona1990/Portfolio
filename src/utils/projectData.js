import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import {faDatabase} from '@fortawesome/free-solid-svg-icons'
import {faInstagram, faGithub, faLinkedin,faHtml5,faCss3,faJsSquare,faReact, faSass,faWordpress, faNpm,faGitSquare, faNodeJs,faBootstrap} from '@fortawesome/free-brands-svg-icons'
import cocktailAPI from '../Images/Screenshot (498).png'
import infinitetriforce from '../Images/Screenshot (499).png'
import tennisGame from '../Images/Screenshot (508).png'
import todo from '../Images/Screenshot (500).png';

export const navLinks = [
        {id: 1, title: 'About'},
        {id: 2, title: 'Skills'},
        {id: 3, title: 'Projects'},
        {id: 4, title: 'Contact'}
    ] 

export const projects = [
    {
        id: 1, 
        name: 'Task Manager', 
        url: "https://tm24h.netlify.app/", 
        img: todo,
        description: 'An amazing WebApp to keep track of your tasks. Both the front-end and the back-end of the webApp were self-developed.',
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

export const descriptionIntro = (
    <h1>
        Hey there, I'm Christopher Carmona and I enjoy building cool websites and webApps.
    </h1>
)

export const description = (
    <p>
    I really enjoy learning, growing, improving and challenging myself. I'm always eager to learn new technologies, features and new things that will help me improve my game as a web developer. Ever since I embarked on this journey to become a web developer, I've surpassed my own expectations in terms of how fast I've been able to learn new things. I'm currently using technologies such ReactJS, redux, storybook, NodeJS, Express, databases, data strutures, algorithms and many other things. 
    <br></br>
    <br></br>
    When I'm not coding, I like talking to my friends, watching funny videos, and . Some other things I like doing in my free time are watching movies and series, playing chess, solving puzzles, and playing video games.
    <br></br>
    <br></br>
    I like having fun and I love music. I'm positive, friendly, hardworking, reliable and communicative. I feel more comfortable having a schedule and daily habits to follow on. I like it when things are organized. The more organize, the better. 
    </p>
    )