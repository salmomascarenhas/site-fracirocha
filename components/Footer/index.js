import React from 'react';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-fluid mx-auto'
                style={
                    {
                        // backgroundImage: "url('/static/images/footer_background.png')",
                        backgroundColor:'#006633',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }
                }>

                    {/* <img src="" alt="" /> */}

                <span className='mt-4 mb-4'
                    style={{
                        fontFamily: 'Baloo Tamma 2, cursive',
                        fontSize: '10px',
                        lineHeight: '22px',
                        fontWeight: '200',
                        color: '#FFFF',
                        textTransform: 'uppercase',
                        textAlign: 'center'
                    }}>COLIGAÇÃO: PRA FAZER AINDA MAIS
                    <br />MDB - CNPJ DO CANDIDATO: 44.114.664/0001-57
                    <br />ELEICAO SUPLEMENTAR FRANCISCO JOAO CARDOSO FILHO PREFEITO
                    <br /><a href='mailto:faleaqui@francirocha.com' target='_blank' rel='noreferrer'>faleaqui@francirocha.com</a></span>

                    
            </div>
        </footer>
    );
}

export default Footer;