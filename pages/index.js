import React from 'react';

import Home from './home';
import Intro from './intro';
import BioIframe from './bioIframe';
import BioText from './bioText';
import Social from './social';
import Material from './material';


const Index = () => {
    return (
        <main>
            <Home />
            {/* <Intro /> */}
            <BioIframe />
            <BioText />
            <Social />
            {/* <Material /> */}
        </main>
    );
}

export default Index;