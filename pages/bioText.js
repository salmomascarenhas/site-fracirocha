import React from 'react';
import Image from 'next/image'

const BioText = () => {
    return (
        <div id='bioText' className='container-fluid d-flex flex-column justify-content-center align-items-center p-0'>
            <section className='pt-5 pb-5 w-100' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#FFF',
                flexWrap: 'wrap',
            }}>
                <Image className='img-fluid mr-5 ml-5' src="/static/images/prefeita.png" alt="Biografia Dra. Laís" />
                <div className='mr-5 ml-5'>
                    <h2 className='mb-4'
                        style={{
                            fontFamily: "'Baloo Tamma 2', cursive",
                            fontSize: '38px',
                            textAlign: 'center',
                            lineHeight: '32px',
                            fontWeight: '800',
                            letterSpacing: '-3px',
                            color: '#FF6600',
                            wordSpacing: '4px',
                            textTransform: 'uppercase',
                            marginTop: '30px'
                        }}>Conheça mais<br />Dra. Lívia</h2>
                    <p style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontSize: '20px',
                        textAlign: 'center',
                        fontWeight: '400',
                        color: '#FF6600',
                        letterSpacing: '-1px',
                        wordSpacing: '3px',
                        maxWidth: '700px',
                    }}>Lívia Muniz nasceu em 1990, em Ipu. É filha do Dr. Bonfim, 
                    um médico que trabalhou na fundação CESP em Ipu e lá 
                    fez carreira; E de dona Efigênia, enfermeira, empresária 
                    e vereadora por três mandatos. É neta da dona Bebê e do 
                    seu Enoque, um agricultor que morava em Pires Ferreira. 
                    Quando vivo, seu Enoque foi prefeito de Pires Ferreira e
                     ajudou muitas  pessoas, principalmente os que mais precisam. 
                    Aos 17 anos, com o sonho de seguir a carreira de seu pai, Lívia 
                    foi aprovada no vestibular de medicina em Fortaleza. 
                    Se formou em 2013 
                    e logo em seguida foi exercer sua profissão em 
                    Pires Ferreira, de onde surgiu o desejo de cuidar
                     ainda mais das pessoas. Lívia é casada há 
                    quase 6 anos, e tem um bebê de 2 anos. Sua concunhada Marfisa 
                    é a atual prefeita de Pires Ferreira e a convidou para dar 
                    continuidade a esse trabalho do BEM que está sendo 
                    realizado em prol da população de Pires Ferreira. 
                    Lívia, uma mulher, médica, mãe, esposa, de muita 
                    garra e coragem, conta com a população para ser 
                    prefeita Para Seguir Cuidando Bem de Pires Ferreira. Dra. Lívia, 12.</p>
                </div>
            </section>
            <section className='pt-5 pb-5 w-100' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#F4F4F4',
                flexWrap: 'wrap'

            }}>
                <Image className='img-fluid mr-5 ml-5' src="/static/images/vice.png" alt="Biografia Anderson Pedrosa" />
                <div className='mr-5 ml-5'>
                    <h2 className='mb-4'
                        style={{
                            fontFamily: "'Baloo Tamma 2', cursive",
                            fontSize: '38px',
                            textAlign: 'center',
                            lineHeight: '32px',
                            fontWeight: '800',
                            letterSpacing: '-3px',
                            color: '#FF6600',
                            wordSpacing: '4px',
                            textTransform: 'uppercase',
                            marginTop: '30px'
                        }}>Conheça mais<br />Fabiana</h2>
                    <p style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontSize: '20px',
                        textAlign: 'center',
                        fontWeight: '400',
                        color: '#FF6600',
                        letterSpacing: '-1px',
                        wordSpacing: '3px',
                        maxWidth: '700px',
                    }}>Francisca Fabiana Rodrigues de Sousa, nascida em Pires Ferreira, é filha do agricultor Domingos Magalhães de Sousa e da professora Francisca Rodrigues de Sousa. Em 1998, casou-se com Eriberto de Sousa Paiva, onde a partir daí iniciou a sua vida na política por seu esposo ser vereador na cidade. Do casamento, teve três filhos: Caio, Eriberto Filho e Domingos Neto. 

                    Sua vida profissional se deu a partir da realização de um curso de auxiliar de enfermagem, trabalhando no posto de saúde do distrito de Delmiro Gouveia, em Pires Ferreira. 
                    
                    Em 2010, ingressou no curso de História, pelo Instituto de Formação Teológica (IFET), se formando em 2013.
                    
                    Em 2012, Fabiana candidatou-se a vereadora no município de Pires Ferreira, sendo eleita com 706 votos, ficando na história da cidade como a vereadora mais bem votada. 
                    
                    Em 2014, iniciou o curso de Serviço Social, pela Faculdade Kurios, se formando em 2017.
                    
                    Em 2016, Fabiana foi eleita vice-prefeita, e hoje quer dar continuidade a esse trabalho juntamente com a candidata a prefeita Dra. Lívia.</p>
                </div>
            </section>
        </div >
    );
}
export default BioText;