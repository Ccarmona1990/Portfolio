import ccLogo from '../Images/Logo/fccLogo.png'
import React from 'react';

const Footer = ({userId}) => {
    const [data, setData] = React.useState(false);
    React.useEffect(() => {
        let isMounted = true; // track whether component is mounted
        const controller = new AbortController();
        const zeldagamesAPI_url = 'https://zeldagammes-api.onrender.com/zelda_games';
    
    const getZeldaGames = async () => {
        try {
            const response = await fetch(zeldagamesAPI_url, {signal: controller.signal});
            const data = await response.json(); 
            if (isMounted) setData(data);
            //console.log(data);
        } catch (error) {
            console.log(error);
        }
    } 
    getZeldaGames(); 
    return () => {
        isMounted = false;
        controller.abort(); // cleanup on unmount
    };
    }, [userId]);
    //console.log(data);
    //const date = new Date();
    return (
        <div className='footerContent'>
        &copy; <span id="date">
            {//date.getFullYear()
            'Built in 2020'}
            </span>
        {data && <img src={ccLogo} className='logo' alt='logo'></img> }
        <span>Built by Christopher Carmona</span>
        </div>
    )
}

export default Footer
