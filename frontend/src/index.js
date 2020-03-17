import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import {createBrowserHistory} from "history";
import {ConnectedRouter, connectRouter, routerMiddleware} from "connected-react-router";

import App from './App';
import artistsReducer from "./store/reducers/artistsReducer";
import albumsReducer from "./store/reducers/albumsReducer";
import tracksReducer from "./store/reducers/tracksReducer";
import usersReducer from "./store/reducers/userReducer";
import 'bootstrap/dist/css/bootstrap.min.css';
import trackHistoryReducer from "./store/reducers/trackHsitoryreducer";

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    router: connectRouter(history),
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer,
    users: usersReducer,
    trackHistory: trackHistoryReducer
});

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

const app = (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <App/>
            </ConnectedRouter>
        </Provider>
);

ReactDOM.render(app, document.getElementById('root'));