import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore, combineReducers} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import App from './App';
import artistsReducer from "./store/reducers/artistsReducer";
import albumsReducer from "./store/reducers/albumsReducer";
import tracksReducer from "./store/reducers/tracksReducer";
import 'bootstrap/dist/css/bootstrap.min.css';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    artists: artistsReducer,
    albums: albumsReducer,
    tracks: tracksReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));