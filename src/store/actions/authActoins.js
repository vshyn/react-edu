import { LOGIN, LOGOUT } from './actionTypes';

const adminCredentials = {
    username: 'testAdmin@gmail.com',
    password: '12345yuiopp',
};

export const login = (username, password) => (dispatch) =>
    Promise.resolve({ username, password }).then((response) => {
        const isAdmin =
            JSON.stringify(response) === JSON.stringify(adminCredentials);
        localStorage.setItem(
            'authData',
            JSON.stringify({ ...response, admin: isAdmin })
        );
        dispatch({
            type: LOGIN,
            payload: { admin: isAdmin },
        });
    });

export const logout = () => (dispatch) => {
    localStorage.clear();
    dispatch({ type: LOGOUT });
};
