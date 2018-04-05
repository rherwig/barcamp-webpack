import {
    NEXT_SLIDE,
    PREVIOUS_SLIDE,
    SET_SLIDE
} from '../actions/slide';

export default (state = 0, action) => {
    switch (action.type) {
        case NEXT_SLIDE:
            return state + 1;
        case PREVIOUS_SLIDE:
            return state - 1;
        case SET_SLIDE:
            return action.payload.slideIndex;
        default:
            return state;
    }
};
