import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { movieReducer } from '../reducers/movieReducer';

const store = createStore(
    movieReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;
