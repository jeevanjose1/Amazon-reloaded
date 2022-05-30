import authReducer from '../reducers/authReducer';
import movieReducer from '../reducers/movieReducer';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    movie: movieReducer,
    auth: authReducer
});

export default allReducer;
