import { messageApp } from './../redux/reducers/index'
import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from './middleware/logger';
import thunk from 'redux-thunk';

export const store = createStore(
    messageApp,
    compose(
        applyMiddleware(thunk, logger),
        window.devToolsExtension() ?
            window.devToolsExtension() : f => f
    )
);