import { messageApp } from './reducer'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
    messageApp,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension() ?
            window.devToolsExtension() : f => f
    )
);

