import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from './history';

import rootReducer from '../reducers';

export default () => {
    const middleware = applyMiddleware(
        thunk,
        routerMiddleware(history)
    );
    const store = createStore(rootReducer, middleware);

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers').default)
        );
    }

    return store;
};
