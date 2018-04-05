import React from 'react';

import Master from './components/master/master';
import Image from './components/image';
import WebpackImage from './assets/what-is-webpack.png';

export default () => (
    <Master>
        <Image image={WebpackImage}/>
    </Master>
);
