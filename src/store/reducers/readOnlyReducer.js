import { CHANGE_MODE } from '../actions/actionTypes';

const initialState = { readOnly: false };

const readOnlyReducer = (state = initialState, action) => {
    if (action.type === CHANGE_MODE) {
        return { ...state, readOnly: !state.readOnly };
    }
    return state;
};

export default readOnlyReducer;
