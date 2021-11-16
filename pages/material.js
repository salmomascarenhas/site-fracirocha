import React from 'react';
import Image from 'next/image'

const Material = () => {

    return (
        <div id='material' className='container-fluid d-flex flex-column justify-content-center align-items-center pt-3 pb-3'
            style={{ background: '#F5F5F5' }}>
            <h1
                style={{
                    fontFamily: "'Baloo Tamma 2', cursive",
                    fontSize: '46px',
                    textAlign: 'center',
                    lineHeight: '40px',
                    fontWeight: '800',
                    letterSpacing: '-3px',
                    color: '#D10155',
                    wordSpacing: '4px',
                    textTransform: 'uppercase',
                    paddingTop: '3rem'
                }}>BAIXE AGORA NOSSOS<br />MATERIAIS DE CAMPANHA</h1>
            <div style={{
                display: "flex",
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                marginTop: '5rem',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <a href="https://drive.google.com/file/d/1fk96KCgTW5pu-RoZM249JnB4Ffpqjj9L/view?usp=sharing" target='_blank' rel='noreferrer'>
                        <Image src='/static/images/icon_pdf.png' alt='Icone PDF' />
                    </a>
                    <h5 style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontWeight: '600',
                        textAlign: 'center',
                        color: '#D10155',
                        marginTop: '1rem',
                    }}>Plano de Governo (PDF)</h5>
                    <span style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        maxWidth: '250px',
                        textAlign: 'center',
                        color: '#FF6600',
                    }}>Baixe o Plano de Governo e conheça todas as nossas propostas para uma Pires Ferreira cada vez melhor.</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <a href="https://drive.google.com/drive/folders/1lG9Hmh_tLN7nn8FW5QO8Kd3V80a5XaSi?usp=sharing" rel="noreferrer" target='_blank'>
                        <Image src='/static/images/icon_jingle.png' alt='Icone Jingle' />
                    </a>
                    <h5 style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontWeight: '600',
                        textAlign: 'center',
                        color: '#D10155',
                        marginTop: '1rem',
                    }}>Jingle e Músicas</h5>
                    <span style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        maxWidth: '250px',
                        textAlign: 'center',
                        color: '#FF6600',
                    }}>Baixe nossas músicas para todo mundo ouvir.</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <a href="https://drive.google.com/drive/folders/173ntA71K4Swbs6GW9pvYStYoKzzIs6Kt?usp=sharing" rel="noreferrer" target='_blank'>
                        <Image src='/static/images/icon_material.png' alt='Icone Material' />
                    </a>
                    <h5 style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontWeight: '600',
                        textAlign: 'center',
                        color: '#D10155',
                        marginTop: '1rem',
                    }}>Material Gráfico</h5>
                    <span style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        maxWidth: '250px',
                        textAlign: 'center',
                        color: '#FF6600',
                    }}>Baixe todo o material gráfico da campanha.</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <a href="https://linktr.ee/dralivia12" rel="noreferrer" target='_blank'>
                        <Image src='/static/images/icon_stickers.png' alt='Icone Stickers' />
                    </a>

                    <h5 style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontWeight: '600',
                        textAlign: 'center',
                        color: '#D10155',
                        marginTop: '1rem',
                    }}>Stickers e Filtros</h5>
                    <span style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        maxWidth: '250px',
                        textAlign: 'center',
                        color: '#FF6600',
                    }}>Baixe figurinhas de WhatsApp, filtros do instagram e mostre seu apoio espalhando em todos os grupos e amigos.</span>
                </div>
            </div>
            <a className='download-button' href="https://drive.google.com/drive/folders/1up_P_JW1B3TTa_sfNqQF0HV0hIMoakeR?usp=sharing" rel="noreferrer" target='_blank'
            ><span
                style={{
                    fontFamily: "'Baloo Tamma 2', cursive",
                    fontWeight: 'bold',
                    fontSize: '18px',
                    fontWeight: '28px',
                    textTransform: 'uppercase'
                }}>Baixar Agora</span></a>
        </div >
    );
}

export default Material;