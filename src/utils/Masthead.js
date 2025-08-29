import { MyComponent } from './typed-funct'
import profilePic from '../Images/smiling2.jpg'


export const ProfileImg = (props) =>{
    const {classNameContainer, classNameImg, src} = props;
    return (
        <div className={classNameContainer}>
        <img className= {classNameImg} src={src} alt='Img'></img>
        </div>
    )
}


const Masthead = () => {
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
                    I am a frontend web developer who enjoys building accessible and dynamic websites that provide users with a seamless experience across all devices.</p>

            </div>
            <ProfileImg 
            classNameContainer='mastheadImg'
            classNameImg='profilePic' 
            src={profilePic}></ProfileImg>
            
        </div>
    )
}

export default Masthead
