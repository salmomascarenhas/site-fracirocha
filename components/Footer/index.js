import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-fluid mx-auto'
                style={
                    {
                        backgroundImage: "url('/static/images/footer_background.png')",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }
                }>

                <span className='mt-4 mb-4'
                    style={{
                        fontFamily: 'Baloo Tamma 2, cursive',
                        fontSize: '10px',
                        lineHeight: '22px',
                        fontWeight: '200',
                        color: '#FFFF',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}>COLIGAÇÃO: PARA SEGUIR CUIDANDO BEM DE PIRES FERREIRA
                    <br />PDT - PSC - PSB - CNPJ DA CANDIDATA: 38.959.242/0001-80 </span>
            </div>
        </footer>
    );
}

export default Footer;