import React from 'react';

import Bash01 from './assets/bash-01.png';

import Master from './components/master/master';
import Title from './components/title';
import List from './components/list';
import ListItem from './components/list/item';
import SplitView from './components/split-view';
import Image from './components/image';

const Slide02 = () => (
    <Master>
        <Title>Developer's Problems</Title>
        <SplitView>
            <List>
                <ListItem>Building assets requires many steps</ListItem>
                <ListItem>A multitude of plugins is required to automate building</ListItem>
                <ListItem>No generalised API for managing assets</ListItem>
                <ListItem>File size matters</ListItem>
                <ListItem>Big projects require advanced features, like code splitting</ListItem>
                <ListItem>Developer experience is critical to success</ListItem>
            </List>
            <div>
                <Image image={Bash01} caption="A typical build process (in 1989)"/>
            </div>
        </SplitView>
    </Master>
);

export default Slide02;
