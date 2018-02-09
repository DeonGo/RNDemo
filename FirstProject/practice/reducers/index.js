import {combineReducers} from 'redux';

import loginIn from './LoginReducer';

const rootReducer = combineReducers({
    loginIn: loginIn,
});


export default rootReducer;

