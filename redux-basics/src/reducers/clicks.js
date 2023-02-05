import {
    RED_CLICKED,
    BLUE_CLICKED,
    GREEN_CLICKED,
    RESET_CLICKED
} from '../actions';

const initialState = {
    red: 0,
    green: 0,
    blue: 0,
}

export const clicks = (state = initialState, action) => {
    const { type } = action;

    switch (type) {
        case RED_CLICKED: {
            return {
                ...state,
                red: state.red + 1,
            }
        }
        case GREEN_CLICKED: {
            return {
                ...state,
                green: state.green + 1,
            }
        }
        case BLUE_CLICKED: {
            return {
                ...state,
                blue: state.blue + 1,
            }
        }
        case RESET_CLICKED: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}