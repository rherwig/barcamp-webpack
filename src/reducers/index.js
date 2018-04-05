import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import currentSlide from './current-slide';

export default combineReducers({
    currentSlide,
    router: routerReducer
});
