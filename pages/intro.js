import React from 'react';

const Intro = () => {
    return (
        <div id='intro' className='container-fluid vh-100 position-relative'
            style={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '700px',
                    backgroundImage: "url('/static/images/intro-background.png')",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }
            }>

            {/* <img
                className='img-fluid position-absolute fixed-bottom mh-100'
                style={{
                    left: '50%',
                    transform: 'translate(-50%)',
                }}
                src="static/images/prefeita-vice.png"
                alt="Dra Lívia com a vice" /> */}
        </div>
    );
}

export default Intro;