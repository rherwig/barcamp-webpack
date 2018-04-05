import React from 'react';
import WebFont from 'webfontloader';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import './main.scss';

import configureStore from './core/store';
import RouterRoot from './RouterRoot';

const store = configureStore();

WebFont.load({
    google: {
        families: [
            'Alegreya:300,700',
            'Alegreya+Sans:300,400'
        ]
    }
});

const renderComponent = (Component) => {
    render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        document.querySelector('#react-root')
    );
};

if (module.hot) {
    module.hot.accept('./RouterRoot', () => {
        const NextApp = require('./RouterRoot').default;
        renderComponent(NextApp);
    });
}

renderComponent(RouterRoot);
