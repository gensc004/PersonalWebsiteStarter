import { createStore, applyMiddleware, compose } from 'redux'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import thunk from 'redux-thunk'
import rootReducer, { history } from './index'


const initialState = {};
const middleware = [thunk, routerMiddleware(history)];

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composer(
    applyMiddleware(...middleware),
);
export default createStore(
    rootReducer,
    initialState,
    composedEnhancers
)
