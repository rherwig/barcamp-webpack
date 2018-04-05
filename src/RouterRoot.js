import React, {Component} from 'react';
import {ConnectedRouter} from 'react-router-redux';

import history from './core/history';
import Presentation from "./Presentation";

export default class RouterRoot extends Component {
    render() {
        return (
            <ConnectedRouter history={history}>
                <Presentation/>
            </ConnectedRouter>
        );
    }
}
