import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './redux/reducer'
import './index.css';
import Chat from './components/Chat';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension() ?
            window.devToolsExtension() : f => f
    )
);

ReactDOM.render(<Provider store={store}><Chat /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// https://github.com/zalmoxisus/redux-devtools-extension -> devTools redux