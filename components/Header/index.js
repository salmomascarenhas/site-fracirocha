import React from 'react';
import Head from 'next/head';

const Header = ({ title = 'Dra Livia 12 | Para seguir cuidando bem de Pires Ferreira' }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/static/favicon/icon-32.png" type="image/png" sizes="32x32"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>

                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="og:type" content="website" />
                <meta name="description" content='Conheça um pouco sobre a candidata a prefeita de Pires Ferreira, Dra. Lívia 22, e baixe nosso Plano de Governo, músicas da campanha, material gráfico e stickers.' />
                <meta name="og:title" content={title} />
                <meta name="keywords" content='ceará,eleições 2020, eleições prefeito,eleições no ceará,pires ferreira,pires,ferreira,prefeitura de pires ferreira,dra lívia,fabiana prefeita, dra livia candidata, candidata pires ferreira, pré candidata pires ferreira' />
                <meta name="og:url" content='dralivia12.com.br' />
            </Head>
        </>
    );
}

export default Header;