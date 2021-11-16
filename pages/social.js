import React from 'react';
import { Instagram, Facebook, YouTube } from '@material-ui/icons';

const Social = () => {
    return (
        <div className='container-fluid d-flex flex-column justify-content-center align-items-center'
            style={{
                minHeight: '700px',
                backgroundImage: "url('/static/images/background_4.png')",
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            <h1
                style={{
                    fontFamily: "'Baloo Tamma 2', cursive",
                    fontSize: '46px',
                    textAlign: 'center',
                    lineHeight: '40px',
                    fontWeight: '800',
                    letterSpacing: '-3px',
                    color: '#FF6600',
                    wordSpacing: '4px',
                    textTransform: 'uppercase',
                }}>
                acompanhe dra. lívia<br />nas redes sociais
            </h1>
            <p
                style={{
                    margin: '10px',
                    fontFamily: "'Baloo Tamma 2', cursive",
                    fontSize: '32px',
                    textAlign: 'center',
                    lineHeight: '28px',
                    fontWeight: '400',
                    letterSpacing: '-2px',
                    color: '#FFF',
                    wordSpacing: '2px',
                }}>
                Fique por dentro de tudo que<br />vamos fazer por Pires Ferreira.</p>
            <div className='w-20 h-20'
                style={{
                    background: '#FFF',
                    padding: '30px 40px 30px 40px',
                    margin: '20px'
                }}>
                <h3
                    style={{
                        margin: '0px',
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontSize: 'max(2.8vw, 32px)',
                        textAlign: 'center',
                        lineHeight: '28px',
                        fontWeight: '600',
                        letterSpacing: '-2px',
                        color: '#FF6600',
                        wordSpacing: '2px',
                    }}>@draliviamuniz</h3>
            </div>
            <div className='d-flex flex-row'>
                <a href="https://www.facebook.com/draliviaprefeita" className='icon-social' rel='noopener' target='_blank' ><Facebook fontSize='inherit' /></a>
                <a href="https://www.instagram.com/draliviamuniz/" className='icon-social' style={{ margin: '0 30px' }} rel='noopener' target='_blank' ><Instagram fontSize='inherit' /></a>
            </div>
        </div >
    );
}

export default Social;