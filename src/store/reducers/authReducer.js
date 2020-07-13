import { LOGIN, LOGOUT } from '../actions/actionTypes';

const initialState = JSON.parse(localStorage.getItem('authData'))
    ? { authorized: true, admin: JSON.parse(localStorage.getItem('authData')).admin }
    : { authorized: false };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { authorized: true, admin: action.payload.admin };
        case LOGOUT:
            return { authorized: false };
        default:
            return state;
    }
};

export default authReducer;
