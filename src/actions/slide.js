import { push } from 'react-router-redux';

export const NEXT_SLIDE = 'NEXT_SLIDE';
export const PREVIOUS_SLIDE = 'PREVIOUS_SLIDE';
export const SET_SLIDE = 'SET_SLIDE';

export const navigate = slideIndex => push(`/slides/${slideIndex}`);

export const nextSlide = () => (dispatch, getState) => {
    dispatch({ type: NEXT_SLIDE });
    dispatch(navigate(getState().currentSlide));
};

export const previousSlide = () => (dispatch, getState) => {
    dispatch({ type: PREVIOUS_SLIDE });
    dispatch(navigate(getState().currentSlide));
};

export const setSlide = slideIndex => ({
    type: SET_SLIDE,
    payload: {
        slideIndex
    }
});
