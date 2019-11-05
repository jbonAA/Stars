import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {logIn, logOut} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();

    //Testing Start
    window.store = store;
    window.store.logIn = logIn;
    window.store.logOut = logOut;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    

    //Testing End

    const root = document.getElementById("root")
    ReactDOM.render(<Root store={store} />, root)
})
