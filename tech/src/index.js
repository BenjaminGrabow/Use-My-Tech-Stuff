import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './store/reducer';

function saveToLocalStorage(state) {
        try {
                const serializedState = JSON.stringify(state);
                localStorage.setItem('state', serializedState);
        } catch (e) {
                console.log(e)
        }
}

function loadFromLocalStorage() {
        try {
                const serializedState = localStorage.getItem('state');
                if (serializedState === null) return undefined
                return JSON.parse(serializedState)
        } catch (e) {
                console.log(e)
                return undefined
        }
}

const persistedState = loadFromLocalStorage();

const store = createStore(reducer,
        persistedState,
        applyMiddleware(thunk, logger));

store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(<Router>
        <Provider store={store}>
                <App />
        </Provider>
</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
