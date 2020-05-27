import _ from "lodash"

export const SET_DRAWER_STATE = 'SET_DRAWER_STATE';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DRAWER_STATE:
            return {
                ...state,
                [action.drawerId]: {
                    isOpen: action.isOpen,
                    args: action.args
                }
            };
        default:
            return state
    }
}

export const setDrawerState = (drawerId, isOpen, args) => ({
    type: SET_DRAWER_STATE,
    drawerId,
    isOpen,
    args
})