import React from 'react';

import Master from './components/master/master';
import Intro from "./components/intro";
import Bash02 from './assets/bash-02.png';

const Slide03 = () => (
    <Master>
        <Intro
            image={Bash02}
            text="It could be so simple...">
        </Intro>
    </Master>
);

export default Slide03;
