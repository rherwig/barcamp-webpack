import React from 'react';

import Webpack01 from './assets/webpack-01.png';

import Master from './components/master/master';
import Title from './components/title';
import List from './components/list';
import ListItem from './components/list/item';
import SplitView from './components/split-view';
import Image from './components/image';

const Slide06 = () => (
    <Master>
        <Title>Features</Title>
        <SplitView>
            <List>
                <ListItem>Bundling for development and production</ListItem>
                <ListItem>Rich plugin ecosystem</ListItem>
                <ListItem>Watch and hot mode</ListItem>
                <ListItem>In-memory build for insane speed</ListItem>
                <ListItem>For client and server-side</ListItem>
            </List>
            <div>
                <Image image={Webpack01} caption="World's most simple bundler config"/>
            </div>
        </SplitView>
    </Master>
);

export default Slide06;
