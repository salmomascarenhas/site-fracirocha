import React from 'react';

const BioIframe = () => {
    return (
        <div id='bioIframe' className='container-fluid vh-100 pt-5 pb-5'
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundImage: "url('/static/images/background_3.png')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            <div className='text-center'>
                <span style={{
                    fontFamily: "'Baloo Tamma 2', cursive",
                    fontSize: '40px',
                    textAlign: 'center',
                    lineHeight: '34px',
                    fontWeight: '800',
                    letterSpacing: '-3px',
                    color: '#FFF',
                    wordSpacing: '4px',
                    textTransform: 'uppercase',
                }}>para seguir cuidando<br />bem de </span>

                <span style={{
                    fontFamily: "'Baloo Tamma 2', cursive",
                    fontSize: '40px',
                    textAlign: 'center',
                    lineHeight: '34px',
                    fontWeight: '800',
                    letterSpacing: '-3px',
                    color: '#D10155',
                    wordSpacing: '4px',
                    textTransform: 'uppercase',
                }}>pires ferreira</span>
                <span style={{
                    fontFamily: "'Baloo Tamma 2', cursive",
                    fontSize: '28px',
                    textAlign: 'center',
                    lineHeight: '38px',
                    fontWeight: '400',
                    letterSpacing: '-3px',
                    color: '#FFF',
                    wordSpacing: '4px',
                }}
                ><br />Conheça um pouco da história da Dra. Lívia</span>
            </div>
            <div className='embed-responsive embed-responsive-16by9'
                style={{
                    width: 'min(100%, 1000px)',
                }}>
                <iframe
                    className='embed-responsive-item'
                    src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fwww.facebook.com%2Fdraliviaprefeita%2Fvideos%2F663248364303207%2F&show_text=false&width=560" width="560"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
            </div>
        </div >
    );
}

export default BioIframe;