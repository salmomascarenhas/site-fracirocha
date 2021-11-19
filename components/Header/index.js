import React from 'react';
import Head from 'next/head';

const Header = ({ title = 'Franci Rocha 15 | Pra fazer ainda mais.' }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/static/favicon/icon-32.png" type="image/png" sizes="32x32"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"></link>

                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="og:type" content="website" />
                <meta name="description" content='Conheça um pouco sobro o candidato a prefeito da cidade de  Viçosa do Ceará, Franci Rocha 15, e baixe nosso Plano de Governo, músicas da campanha, material gráfico e stickers.' />
                <meta name="og:title" content={title} />
                <meta name="keywords" content='ceará,eleições 2021, eleições prefeito,eleições no ceará,viçosa do ceará,franci rocha,franci,prefeitura de viçosa do ceará,shill vice prefeito, candidato franci rocha' />
                <meta name="og:url" content='francirocha.com' />
            </Head>
        </>
    );
}

export default Header;