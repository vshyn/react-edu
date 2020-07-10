import { combineReducers } from 'redux';
import authReducer from './authReducer';
import cardReducer from './cardReducer';
import readOnlyReducer from './readOnlyReducer';

const rootReducer = combineReducers({
    authReducer,
    cardReducer,
    readOnlyReducer,
});

export default rootReducer;
