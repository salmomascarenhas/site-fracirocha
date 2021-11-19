import React from 'react';


const BioText = () => {
    return (
        <div id='bioText' className='container-fluid d-flex flex-column justify-content-center align-items-center p-0'>
            <section className='pt-5 pb-5 w-100' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#2c8056',
                flexWrap: 'wrap',
            }}>
                <img className='img-fluid mr-5 ml-5' src="/static/images/prefeito.png" width={'128px'} height={'151px'} alt="Biografia Franci Rocha" />
                <div className='mr-5 ml-5'>
                    <h2 className='mb-4'
                        style={{
                            fontFamily: "'Baloo Tamma 2', cursive",
                            fontSize: '38px',
                            textAlign: 'center',
                            lineHeight: '32px',
                            fontWeight: '800',
                            letterSpacing: '-3px',
                            color: '#F3F3F3',
                            wordSpacing: '4px',
                            textTransform: 'uppercase',
                            marginTop: '30px'
                        }}>Conheça <br />Franci Rocha</h2>
                    <p style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontSize: '20px',
                        textAlign: 'center',
                        fontWeight: '400',
                        color: '#F3F3F3',
                        letterSpacing: '-1px',
                        wordSpacing: '3px',
                        maxWidth: '700px',
                    }}>Francisco João Cardoso Filho, conhecido como Franci Rocha, nasceu em 01 de julho de 1968, em Cocal, Piauí. É filho de Francisco João Cardoso, conhecido como Chico Rocha, e de Francisca Aguiar Silva Cardoso, conhecida como Francileide. 

                    Franci Rocha perdeu seu pai aos 16 anos, quando tornou-se muito jovem o responsável pelos seus 3 irmãos e provedor da casa, junto de sua mãe. Franci deu continuidade ao trabalho de seu pai, na agricultura, moagem e criação de animais. 
                    
                    Aos 19 anos, casou-se com Ana Vieira de Araújo, com quem teve 4 filhos: Nayane, Nayara, Marcelo e Marcos Antônio.
                    
                    Em 1996, mudou-se para Viçosa do Ceará para que seus filhos pudessem estudar. Para garantir o sustento da sua família, Franci trabalhou com transporte de passageiros, de mercadorias para a CEASA e posteriormente comprou um ônibus para excursões.
                    
                    Mesmo com os seus outros trabalhos, Franci nunca deixou de trabalhar na agricultura. Até que abriu um comércio de gênero alimentício, onde toda sua família trabalhava. 
                    
                    Franci sempre foi um homem trabalhador e honesto, seguindo o exemplo de seu pai. 
                    Amigo de longas datas e sempre acompanhando o trabalho de Zé Firmino, Franci Rocha decidiu seguir a carreira política, como candidato a prefeito, ao lado de Shill como vice, para dar continuidade ao trabalho que vem sendo realizado em Viçosa do Ceará.</p>
                </div>
            </section>
            <section className='pt-5 pb-5 w-100' style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#7fce3a',
                flexWrap: 'wrap'

            }}>
                <img className='img-fluid mr-5 ml-5' src="/static/images/vice.png" width={'128px'} height={'150px'} alt="Biografia Shill" />
                <div className='mr-5 ml-5'>
                    <h2 className='mb-4'
                        style={{
                            fontFamily: "'Baloo Tamma 2', cursive",
                            fontSize: '38px',
                            textAlign: 'center',
                            lineHeight: '32px',
                            fontWeight: '800',
                            letterSpacing: '-3px',
                            color: '#F3F3F3',
                            wordSpacing: '4px',
                            textTransform: 'uppercase',
                            marginTop: '30px'
                        }}>Conheça<br />Shill</h2>
                    <p style={{
                        fontFamily: "'Baloo Tamma 2', cursive",
                        fontSize: '20px',
                        textAlign: 'center',
                        fontWeight: '400',
                        color: '#F3F3F3',
                        letterSpacing: '-1px',
                        wordSpacing: '3px',
                        maxWidth: '700px',
                    }}>Francisco das Chagas Rodrigues de Carvalho, conhecido como Shill, é filho de Chico Margarida e Dona Vitória, dois agricultores que levaram a vida com muito trabalho e com muita dignidade para criar os 6 filhos. 

                    Shill ajudou seu pai no trabalho desde muito cedo e aos 15 anos ingressou na vida militar, servindo a Marinha do Brasil por 7 anos. 
                    
                    Como sempre foi muito apegado à família, voltou para Viçosa após 7 anos e começou a trabalhar com material de construção, onde continua até hoje, dando emprego para mais de 20 famílias, com muito trabalho, honestidade e dignidade. 
                    
                    Shill sempre foi apaixonado pela sua cidade e ajuda como pode o povo viçosense. Sempre acompanhou de perto a política de Viçosa a fim de ver a sua terra crescer e se desenvolver, com mais oportunidade para todos. 
                    
                    Hoje Shill é candidato a vice-prefeito ao lado de Franci Rocha 15 para darem continuidade ao trabalho em prol de uma cidade cada vez mais livre e justa.</p>
                </div>
            </section>
        </div >
    );
}
export default BioText;