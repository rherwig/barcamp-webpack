import React from 'react';

import Logo from './assets/webpack.png';

import Master from './components/master/master';
import Intro from './components/intro';

const Slide00 = () => (
    <Master>
        <Intro
            title="webpack"
            text="one bundler to rule 'em all"
            image={Logo}>
        </Intro>
    </Master>
);

export default Slide00;
