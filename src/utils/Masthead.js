import { MyComponent } from './typed-funct'
import profilePic from '../Images/smiling2.jpg'
import { SocialMediaIcons } from './main/SideOptBar';
import React from 'react';

export const ProfileImg = (props) =>{
    const {classNameContainer, classNameImg, src} = props;

    return (
        <div className={classNameContainer}>
        <img className= {classNameImg} src={src} alt='Img'></img>
        </div>
    )
};


const Masthead = () => {
    React.useEffect(()=>{
        // Intersection Observer for profile image animation
        const images = document.querySelectorAll('.profilePic');
        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // only trigger once
            }
        });
        });
        images.forEach(img => observer.observe(img));
        return ()=>{
            images.forEach(img => observer.unobserve(img));
        }
    },[]);   
    return (
        <div className='mastheadBlock'>
            <div className='mastheadText'>
                <h3> Yup! That's me</h3> 
                <h1 className='mastheadName'>
                    Christopher Carmona 
                    {/*'Web developer'*/}
                </h1>
                <h3>
                I'm a <MyComponent/>
                </h3>
                <p className='mastheadDescription'>
                    I am a frontend web developer who enjoys building accessible and dynamic websites that provide users with a seamless experience across all devices.
                </p>
                <SocialMediaIcons className='mastheadIcons'/>

            </div>
            <ProfileImg 
            classNameContainer='mastheadImg'
            classNameImg='profilePic' 
            src={profilePic}></ProfileImg>
            
        </div>
    )
}

export default Masthead
