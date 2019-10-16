import counterReducer from './counter';
import loggedReducers from './isLogged';
import { combineReducers } from 'redux';


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducers,
});

export default allReducers;