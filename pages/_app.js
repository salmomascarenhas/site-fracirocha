import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;