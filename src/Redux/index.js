import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { combineReducers } from 'redux';

import StateManagement from './StateManagement'


export const history = createBrowserHistory();

export default combineReducers(
    {
        router: connectRouter(history),
        StateManagement,
    }
)