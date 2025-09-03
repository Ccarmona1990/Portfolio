import { MyComponent } from './typed-funct'
import profilePic from '../Images/profilePic1.jpg'
import { SocialMediaIcons } from './main/SideOptBar';
import React from 'react';
import { observer } from './features';

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
        const images = document.querySelectorAll('.profilePic');
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
