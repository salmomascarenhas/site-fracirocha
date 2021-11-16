import React from 'react';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Home = () => {
    return (
        <div id='home' className='container-fluid vh-100 position-relative' >
            <img
                src='static/images/home_background.png'
                className='img-fluid'
                style={
                    {
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',

                    }}
                alt="Dra Livia 12" />

            <a className='scroll-button' style={{
                position: 'relative',
                boxSizing: 'border-box',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bottom: '13em',
                left: '50%',
                transform: 'translate(-50%)',
                width: '50px',
                height: '50px',
                border: ' #FF6600 solid 3px',
                borderRadius: '50%',
                opacity: '.6'
            }} href="#intro">
                <ArrowDownwardIcon style={{
                    fontSize: '40px',
                    color: ' #FF6600'
                }} /></a>
        </div>
    );
}

export default Home;