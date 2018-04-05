import React from 'react';

import Master from './components/master/master';
import Demo from './components/demo';
import Title from "./components/title";

export default () => (
    <Master>
        <Title>Hotreloading Counter</Title>
        <Demo/>
    </Master>
);
