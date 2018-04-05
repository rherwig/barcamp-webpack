import React from 'react';

import Webpack01 from './assets/webpack-01.png';

import Master from './components/master/master';
import Title from './components/title';
import List from './components/list';
import ListItem from './components/list/item';
import SplitView from './components/split-view';
import Image from './components/image';

const Slide04 = () => (
    <Master>
        <Title>What is webpack?</Title>
        <SplitView>
            <List>
                <ListItem>Bundles all kinds of assets</ListItem>
                <ListItem>Keeps bundle size minimal</ListItem>
                <ListItem>Dynamically extensible</ListItem>
                <ListItem>New world web app toolbox</ListItem>
                <ListItem>zero config</ListItem>
            </List>
            <div>
                <Image image={Webpack01} caption="World's most simple bundler config"/>
            </div>
        </SplitView>
    </Master>
);

export default Slide04;
