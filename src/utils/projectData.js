import {faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import cocktailAPI from '../Images/Screenshot (498).png'
import infinitetriforce from '../Images/Screenshot (499).png'
import todo from '../Images/Screenshot (500).png';

export const navLinks = [
        {id: 1, title: 'About'},{id: 2, title: 'Skills'},
        {id: 3, title: 'Projects'},{id: 4, title: 'Contact'}
    ] 

export const projects = [
        {
            id: 1, 
            name: 'CocktailAPI', 
            url: "https://cocktailfiesta.netlify.app/", 
            img: cocktailAPI,
            description: 'A website that allows the user to search for its favorite cocktail. It uses an API to get information of cocktails.',
            tools: 'HTML ~ CSS ~ Sass ~ JavaScript'
        },
        {
            id: 2, 
            name: 'To-do', 
            url: "https://todo-miniproject.netlify.app/", img: todo,
            description: 'A webApp where you can list your tasks for the day',
            tools: 'HTML ~ CSS ~ Sass ~ JavaScript ~ React'
        },
        {
            id: 3, 
            name: 'Infinite Triforce', 
            url: "https://infinitetriforce.netlify.app/", img: infinitetriforce,
            description: 'A tribute website to the famous and popular Zelda game franchise.',
            tools: 'HTML ~ CSS ~ JavaScript'
        },
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
