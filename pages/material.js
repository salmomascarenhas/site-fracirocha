import React from 'react';


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
                    color: '#339966',
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
                    <a href="https://drive.google.com/uc?id=1_Vu82BlbPKQl4B7NQrFfzyH83AGRXRXP&export=download" target='_blank' rel='noreferrer'>
                        <img src='/static/images/icon_pdf.png' width={'64px'} height={'70px'}  alt='Icone PDF' />
                    </a>
                    <h5 style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontWeight: '600',
                        textAlign: 'center',
                        color: '#33cc66',
                        marginTop: '1rem',
                    }}>Plano de Governo (PDF)</h5>
                    <span style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        maxWidth: '250px',
                        textAlign: 'center',
                        color: '#808080',
                    }}>Baixe o Plano de Governo e conheça todas as nossas propostas pra fazer ainda mais.</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <a href="https://drive.google.com/drive/folders/1HrdqG2hTOGTWbEFMsZx-tlhYNOLo9dxW?usp=sharing" rel="noreferrer" target='_blank'>
                        <img src='/static/images/icon_jingle.png' width={'54px'} height={'74px'}  alt='Icone Jingle' />
                    </a>
                    <h5 style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontWeight: '600',
                        textAlign: 'center',
                        color: '#33cc66',
                        marginTop: '1rem',
                    }}>Jingle e Músicas</h5>
                    <span style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        maxWidth: '250px',
                        textAlign: 'center',
                        color: '#808080',
                    }}>Baixe nossas músicas para todo mundo ouvir.</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <a href="https://drive.google.com/drive/folders/1tOXNsyUjSyjTihl6pGGW_SPYQh_NOFI1?usp=sharing" rel="noreferrer" target='_blank'>
                        <img src='/static/images/icon_material.png' width={'62px'} height={'74px'}  alt='Icone Material' />
                    </a>
                    <h5 style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontWeight: '600',
                        textAlign: 'center',
                        color: '#33cc66',
                        marginTop: '1rem',
                    }}>Material Gráfico</h5>
                    <span style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        maxWidth: '250px',
                        textAlign: 'center',
                        color: '#808080',
                    }}>Baixe todo o material gráfico da campanha.</span>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <a href="https://linktr.ee/francirocha" rel="noreferrer" target='_blank'>
                        <img src='/static/images/icon_stickers.png' width={'74px'} height={'75px'} alt='Icone Stickers' />
                    </a>

                    <h5 style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontWeight: '600',
                        textAlign: 'center',
                        color: '#33cc66',
                        marginTop: '1rem',
                    }}>Stickers e Filtros</h5>
                    <span style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        maxWidth: '250px',
                        textAlign: 'center',
                        color: '#808080',
                    }}>Baixe figurinhas de WhatsApp, filtros do instagram e mostre seu apoio espalhando em todos os grupos e amigos.</span>
                </div>
            </div>
            <a className='download-button' href="https://drive.google.com/drive/folders/1--y697rG1awjSeYVD5WZM667fevfLMNU" rel="noreferrer" target='_blank'
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