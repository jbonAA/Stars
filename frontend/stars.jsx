import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {logIn, logOut} from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id, location: window.currentLocation },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
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
