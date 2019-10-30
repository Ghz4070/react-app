import { messageApp } from './reducer'
import { createStore, applyMiddleware, compose } from 'redux';
import { logger, crashReporter } from './../middleware/logger';
import thunk from 'redux-thunk';

export const store = createStore(
    messageApp,
    compose(
        applyMiddleware(thunk, logger, crashReporter),
        window.devToolsExtension() ?
            window.devToolsExtension() : f => f
    )
);