import React from 'react';

import Master from './components/master/master';
import Title from './components/title';
import List from "./components/list";
import ListItem from "./components/list/item";

const Slide01 = () => (
    <Master>
        <Title>Contents</Title>
        <List>
            <ListItem>Developer's Problems</ListItem>
            <ListItem>What is webpack?</ListItem>
            <ListItem>Features</ListItem>
            <ListItem>Live Demo</ListItem>
        </List>
    </Master>
);

export default Slide01;
