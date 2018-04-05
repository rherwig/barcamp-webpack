import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import currentSlide from './current-slide';
import counter from './couter';

export default combineReducers({
    currentSlide,
    counter,
    router: routerReducer
});
